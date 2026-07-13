// ─── Beautiful HTML Email Templates ───────────────────────

/**
 * Email sent to the USER confirming we received their message.
 */
function userConfirmationTemplate({ name, service, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>We received your message — Nexasteck</title>
</head>
<body style="margin:0;padding:0;background:#05070D;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070D;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;background:#0B0F1A;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3B82F6,#06B6D4);padding:40px 48px;text-align:center;">
              <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:14px;padding:12px 20px;margin-bottom:16px;">
                <span style="color:#fff;font-weight:800;font-size:22px;letter-spacing:-0.5px;">Nexasteck</span>
              </div>
              <h1 style="color:#fff;font-size:26px;font-weight:700;margin:0;letter-spacing:-0.5px;line-height:1.3;">
                We've received your message! 🎉
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;">
              <p style="color:#94A3B8;font-size:16px;line-height:1.7;margin:0 0 24px;">
                Hi <strong style="color:#F1F5F9;">${name}</strong>,
              </p>
              <p style="color:#94A3B8;font-size:16px;line-height:1.7;margin:0 0 24px;">
                Thank you for reaching out to <strong style="color:#F1F5F9;">Nexasteck</strong>! 
                We've received your inquiry about <strong style="color:#06B6D4;">${service}</strong> 
                and our team will review it shortly.
              </p>
              <p style="color:#94A3B8;font-size:16px;line-height:1.7;margin:0 0 32px;">
                We typically respond within <strong style="color:#F1F5F9;">24 hours</strong> — 
                usually much sooner. We're looking forward to hearing more about your project!
              </p>

              <!-- Summary box -->
              <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:14px;padding:24px;margin-bottom:32px;">
                <p style="color:#8B96A8;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 16px;">
                  Your Message Summary
                </p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;color:#8B96A8;font-size:14px;width:40%;">Service:</td>
                    <td style="padding:6px 0;color:#F1F5F9;font-size:14px;font-weight:600;">${service}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#8B96A8;font-size:14px;vertical-align:top;">Message:</td>
                    <td style="padding:6px 0;color:#F1F5F9;font-size:14px;">
                      ${message.length > 120 ? message.substring(0, 120) + "..." : message}
                    </td>
                  </tr>
                </table>
              </div>

              <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 8px;">
                In the meantime, feel free to explore our work:
              </p>
              <a href="https://Nexasteck.com/portfolio"
                style="display:inline-block;background:linear-gradient(135deg,#3B82F6,#06B6D4);color:#fff;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:600;font-size:15px;margin-top:8px;">
                View Our Portfolio →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.06);padding:28px 48px;text-align:center;">
              <p style="color:#5B6577;font-size:13px;margin:0 0 8px;">
                Nexasteck · {{}}
              </p>
              <p style="color:#5B6577;font-size:13px;margin:0;">
                <a href="mailto:hello@Nexasteck.com" style="color:#3B82F6;text-decoration:none;">hello@Nexasteck.com</a>
                &nbsp;·&nbsp;
                <a href="https://Nexasteck.com" style="color:#3B82F6;text-decoration:none;">Nexasteck.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

/**
 * Email sent to the ADMIN (you) with full form details.
 */
function adminNotificationTemplate({ name, email, phone, service, budget, message }) {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Lead — Nexasteck</title>
</head>
<body style="margin:0;padding:0;background:#05070D;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070D;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;background:#0B0F1A;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8B5CF6,#3B82F6);padding:36px 48px;">
              <p style="color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">
                🔔 New Contact Form Submission
              </p>
              <h1 style="color:#fff;font-size:24px;font-weight:700;margin:0;letter-spacing:-0.5px;">
                New Lead from ${name}
              </h1>
              <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:8px 0 0;">${now}</p>
            </td>
          </tr>

          <!-- Lead details -->
          <tr>
            <td style="padding:36px 48px;">
              <p style="color:#8B96A8;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 20px;">
                Contact Details
              </p>

              <!-- Info grid -->
              ${[
                ["Name", name],
                ["Email", `<a href="mailto:${email}" style="color:#3B82F6;text-decoration:none;">${email}</a>`],
                ["Phone", phone || "Not provided"],
                ["Service", service],
                ["Budget", budget || "Not specified"],
              ]
                .map(
                  ([label, val]) => `
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                  <tr>
                    <td style="color:#5B6577;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;width:90px;vertical-align:top;padding-top:2px;">${label}</td>
                    <td style="color:#F1F5F9;font-size:15px;font-weight:500;">${val}</td>
                  </tr>
                </table>`
                )
                .join("")}

              <!-- Message -->
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-left:3px solid #3B82F6;border-radius:0 12px 12px 0;padding:20px 24px;margin-top:8px;">
                <p style="color:#8B96A8;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px;">Message</p>
                <p style="color:#CBD5E1;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Quick-reply button -->
              <div style="margin-top:32px;">
                <a href="mailto:${email}?subject=Re: Your enquiry to Nexasteck&body=Hi ${name},%0A%0AThank you for reaching out to Nexasteck!%0A%0A"
                  style="display:inline-block;background:linear-gradient(135deg,#3B82F6,#06B6D4);color:#fff;text-decoration:none;padding:13px 28px;border-radius:10px;font-weight:600;font-size:15px;">
                  Reply to ${name} →
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.06);padding:20px 48px;">
              <p style="color:#5B6577;font-size:12px;margin:0;">
                Sent by Nexasteck contact form · <a href="https://Nexasteck.com" style="color:#3B82F6;text-decoration:none;">Nexasteck.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

module.exports = { userConfirmationTemplate, adminNotificationTemplate };
