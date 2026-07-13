// ─── Contact Submission Model ──────────────────────────────
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    service: { type: String, required: true, trim: true },
    budget: { type: String, trim: true, default: "" },
    message: { type: String, required: true, trim: true },

    // Tracking / ops fields
    ip: { type: String, default: "" },
    userEmailSent: { type: Boolean, default: false },
    adminEmailSent: { type: Boolean, default: false },
  },
  { timestamps: true } // adds createdAt / updatedAt
);

module.exports = mongoose.model("Contact", contactSchema);
