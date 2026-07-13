import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../../data/siteData";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsapp}?text=Hi! I'd like to discuss a project.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <FaWhatsapp size={26} className="relative z-10" />
    </motion.a>
  );
}
