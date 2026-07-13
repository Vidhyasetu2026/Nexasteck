import React from "react";
import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, style = {} }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`glass rounded-2xl relative overflow-hidden group ${className}`}
      style={style}
    >
      {hover && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-blue/10 to-transparent pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
