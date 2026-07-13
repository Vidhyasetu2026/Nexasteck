import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiInstagram, FiLinkedin, FiGithub, FiTwitter,
  FiCheckCircle, FiAlertCircle, FiLoader,
} from "react-icons/fi";
import PageHero from "../components/shared/PageHero";
import SEO from "../components/shared/SEO";
import Reveal from "../components/ui/Reveal";
import { SITE, CONTACT_SERVICES } from "../data/siteData";
import { submitContactForm } from "../utils/api";

// ── Shared input style ─────────────────────────────────────
const inputBase =
  "w-full px-4 py-3.5 rounded-xl text-sm outline-none border bg-transparent transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 placeholder:text-[var(--text-dim)]";

function Field({ label, error, children }) {
  return (
    <div>
      <label
        className="block text-xs font-semibold uppercase tracking-wider mb-2"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <FiAlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

// ── Initial form state ─────────────────────────────────────
const INITIAL = {
  name: "", email: "", phone: "",
  service: "", budget: "", message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState("");

  // ── Client-side validation ────────────────────────────────
  function validate() {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Please enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.service)
      e.service = "Please select a service.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Client-side validation first
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerMsg("");

    const result = await submitContactForm(form);

    if (result.success) {
      setStatus("success");
      setServerMsg(result.message);
      setForm(INITIAL);
      setErrors({});
    } else {
      setStatus("error");
      setServerMsg(result.error);
    }
  }

  const inputStyle = {
    borderColor: "var(--border)",
    color: "var(--text)",
    background: "var(--surface)",
  };

  return (
    <>
      <SEO
        title="Contact — Nexasteck"
        description="Get in touch with Nexasteck for your next web, mobile, or SaaS project."
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's build something"
        highlight="great together"
        subtitle="Free consultation — we respond within 24 hours."
      />

      <section className="relative z-10 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-12">

          {/* ── Left: Contact info ──────────────────────── */}
          <Reveal direction="left">
            <div className="space-y-8">
              {/* Info items */}
              {[
                { icon: FiMail,   label: "Email",   value: SITE.email,   href: `mailto:${SITE.email}` },
                { icon: FiPhone,  label: "Phone",   value: SITE.phone,   href: `tel:${SITE.phone}` },
                { icon: FiMapPin, label: "Office",  value: SITE.address },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-wider font-semibold mb-1"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-brand-blue transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-sm leading-relaxed">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Social icons */}
              <div className="flex gap-3 pt-2">
                {[
                  { icon: FiInstagram, url: SITE.social.instagram, label: "Instagram" },
                  { icon: FiLinkedin,  url: SITE.social.linkedin,  label: "LinkedIn" },
                  { icon: FiGithub,    url: SITE.social.github,    label: "GitHub" },
                  { icon: FiTwitter,   url: SITE.social.twitter,   label: "Twitter" },
                ].map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue hover:border-brand-blue/40 transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* Google Map embed */}
              <div
                className="rounded-2xl overflow-hidden border h-56"
                style={{ borderColor: "var(--border)" }}
              >
                <iframe
                  title="Nexasteck office location"
                  src={SITE.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.2) invert(0.85) contrast(0.92)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* ── Right: Contact form ─────────────────────── */}
          <Reveal direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-2xl p-8 space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your Name *" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    className={`${inputBase} ${errors.name ? "border-red-500/50" : ""}`}
                    style={inputStyle}
                    autoComplete="name"
                  />
                </Field>

                <Field label="Email Address *" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className={`${inputBase} ${errors.email ? "border-red-500/50" : ""}`}
                    style={inputStyle}
                    autoComplete="email"
                  />
                </Field>
              </div>

              {/* Phone */}
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputBase}
                  style={inputStyle}
                  autoComplete="tel"
                />
              </Field>

              {/* Service */}
              <Field label="Service Needed *" error={errors.service}>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputBase} cursor-pointer ${errors.service ? "border-red-500/50" : ""}`}
                  style={inputStyle}
                >
                  <option value="">Select a service...</option>
                  {CONTACT_SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              {/* Budget */}
              <Field label="Budget Range (optional)">
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputBase} cursor-pointer`}
                  style={inputStyle}
                >
                  <option value="">Select budget range...</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>₹3,00,000 – ₹10,00,000</option>
                  <option>₹10,00,000+</option>
                </select>
              </Field>

              {/* Message */}
              <Field label="Project Details *" error={errors.message}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your idea, goals, timeline, or specific features you need..."
                  className={`${inputBase} resize-none ${errors.message ? "border-red-500/50" : ""}`}
                  style={inputStyle}
                />
                <p className="mt-1 text-xs" style={{ color: "var(--text-dim)" }}>
                  {form.message.length}/3000 characters
                </p>
              </Field>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { y: -2 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background:
                    status === "success"
                      ? "linear-gradient(135deg,#10B981,#06B6D4)"
                      : "linear-gradient(135deg,#3B82F6,#06B6D4)",
                  boxShadow:
                    status === "success"
                      ? "0 0 28px rgba(16,185,129,0.35)"
                      : "0 0 28px rgba(59,130,246,0.3)",
                }}
              >
                {status === "loading" && (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    >
                      <FiLoader size={18} />
                    </motion.span>
                    Sending...
                  </>
                )}
                {status === "success" && <><FiCheckCircle size={18} /> Message Sent!</>}
                {(status === "idle" || status === "error") && (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>

              {/* Server response message */}
              <AnimatePresence>
                {serverMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 p-4 rounded-xl text-sm"
                    style={{
                      background:
                        status === "success"
                          ? "rgba(16,185,129,0.1)"
                          : "rgba(239,68,68,0.1)",
                      border: `1px solid ${status === "success" ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
                      color: status === "success" ? "#10B981" : "#EF4444",
                    }}
                  >
                    {status === "success"
                      ? <FiCheckCircle size={16} className="mt-0.5 shrink-0" />
                      : <FiAlertCircle size={16} className="mt-0.5 shrink-0" />}
                    <span>{serverMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Privacy note */}
              <p className="text-xs text-center" style={{ color: "var(--text-dim)" }}>
                🔒 Your information is safe with us and never shared with third parties.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
