// ─── Nexasteck Contact Form Server ────────────────────────
// Express + Nodemailer backend.
// Sends:  1. Confirmation email to the user
//         2. Notification email to you (admin)
// ──────────────────────────────────────────────────────────
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const { userConfirmationTemplate, adminNotificationTemplate } = require("./emailTemplates");
const connectDB = require("./db");
const Contact = require("./models/Contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Database ──────────────────────────────────────────────
connectDB();

// ─── Middleware ────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS — only allow requests from your frontend origin
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
  })
);

// Rate limiting — 10 contact form submissions per IP per 15 minutes
// Prevents spam / abuse without blocking normal users
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    success: false,
    error: "Too many requests. Please wait 15 minutes and try again.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── Nodemailer Transporter ────────────────────────────────
// Created once on startup (not per-request) for connection reuse.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === "true", // true = SSL, false = TLS/STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Graceful TLS handling for self-signed certs on shared hosting
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === "production",
  },
});

// Verify SMTP connection on startup
transporter.verify((err) => {
  if (err) {
    console.error("❌ SMTP connection failed:", err.message);
    console.error("   Check your .env SMTP_* values.");
  } else {
    console.log("✅ SMTP connected — email service ready.");
  }
});

// ─── Validation Rules ──────────────────────────────────────
const contactValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required.")
    .isLength({ min: 2, max: 100 }).withMessage("Name must be 2–100 characters."),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Please enter a valid email address.")
    .normalizeEmail(),

  body("service")
    .trim()
    .notEmpty().withMessage("Please select a service."),

  body("message")
    .trim()
    .notEmpty().withMessage("Message is required.")
    .isLength({ min: 10, max: 3000 }).withMessage("Message must be 10–3000 characters."),

  body("phone")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isMobilePhone("any", { strictMode: false })
    .withMessage("Please enter a valid phone number."),

  body("budget")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isLength({ max: 100 }).withMessage("Budget field too long."),
];

// ─── Routes ────────────────────────────────────────────────

// Health check — GET /api/health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Nexasteck Email Server", timestamp: new Date().toISOString() });
});

// Contact form — POST /api/contact
app.post("/api/contact", contactLimiter, contactValidation, async (req, res) => {
  // 1. Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      error: errors.array()[0].msg, // send first error to frontend
      errors: errors.array(),
    });
  }

  const { name, email, phone, service, budget, message } = req.body;

  // 2. Save to MongoDB first — so the lead is never lost even if
  //    the SMTP provider is down or emails fail.
  let savedContact;
  try {
    savedContact = await Contact.create({
      name,
      email,
      phone,
      service,
      budget,
      message,
      ip: req.ip,
    });
  } catch (err) {
    console.error("❌ MongoDB save failed:", err.message);
    return res.status(500).json({
      success: false,
      error: "Failed to save your message. Please try again or contact us directly at hello@Nexasteck.com",
    });
  }

  try {
    // 3. Send CONFIRMATION email to user ────────────────────
    const userMail = await transporter.sendMail({
      from: `"${process.env.FROM_NAME || "Nexasteck"}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: `We received your message, ${name.split(" ")[0]}! — Nexasteck`,
      html: userConfirmationTemplate({ name, service, message }),
      // Plain-text fallback for email clients that can't render HTML
      text: `Hi ${name},\n\nThank you for contacting Nexasteck! We received your enquiry about "${service}" and will respond within 24 hours.\n\nBest regards,\nThe Nexasteck Team\nhello@Nexasteck.com`,
    });

    // 4. Send NOTIFICATION email to admin (you) ──────────────
    const adminMail = await transporter.sendMail({
      from: `"Nexasteck Contact Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email, // clicking Reply in your inbox replies directly to the user
      subject: `New Lead: ${name} — ${service}`,
      html: adminNotificationTemplate({ name, email, phone, service, budget, message }),
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${service}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message}`,
    });

    console.log(`📧 Emails sent | User: ${userMail.messageId} | Admin: ${adminMail.messageId}`);

    // 5. Mark the saved lead as emailed (best-effort — doesn't block the response)
    Contact.findByIdAndUpdate(savedContact._id, {
      userEmailSent: true,
      adminEmailSent: true,
    }).catch((err) => console.error("⚠️ Could not update email flags:", err.message));

    return res.status(200).json({
      success: true,
      message: "Your message has been sent! We'll be in touch within 24 hours.",
    });
  } catch (err) {
    console.error("❌ Email send failed:", err.message);

    // The lead is already saved in MongoDB at this point, so it's not lost —
    // just let the client know the email side had an issue.
    return res.status(500).json({
      success: false,
      error: "Your message was saved, but we couldn't send the confirmation email. We'll still get back to you — or contact us directly at hello@Nexasteck.com",
    });
  }
});

// ─── 404 handler ──────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found." });
});

// ─── Global error handler ─────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ success: false, error: "Internal server error." });
});

// ─── Start ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Nexasteck server running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
  console.log(`   Contact API:  POST http://localhost:${PORT}/api/contact\n`);
});
