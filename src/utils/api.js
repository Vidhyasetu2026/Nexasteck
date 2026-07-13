// ─── API Service ──────────────────────────────────────────
// Central place for all API calls. Update VITE_API_URL in
// your frontend .env to point to your deployed server.
// ──────────────────────────────────────────────────────────

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Submit the contact form.
 * Returns { success: true, message } on success
 * Returns { success: false, error } on failure
 */
export async function submitContactForm(data) {
  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      // Server returned 4xx/5xx — use error message from response
      return { success: false, error: json.error || "Something went wrong. Please try again." };
    }

    return json; // { success: true, message: "..." }
  } catch (err) {
    // Network error / server offline
    return {
      success: false,
      error: "Cannot reach the server. Please check your connection or email us at hello@Nexasteck.com",
    };
  }
}
