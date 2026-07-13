// ─── MongoDB Connection ────────────────────────────────────
// Connects once on server startup using Mongoose.
// ──────────────────────────────────────────────────────────
const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("❌ MONGODB_URI is not set in .env — cannot save contact submissions.");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected.");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
}

module.exports = connectDB;
