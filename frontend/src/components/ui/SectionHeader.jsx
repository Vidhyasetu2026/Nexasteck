import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, highlight, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className={`mb-14 ${center ? "text-center mx-auto" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-cyan mb-4">
          <span className="w-5 h-px bg-brand-cyan inline-block" />
          {eyebrow}
          <span className="w-5 h-px bg-brand-cyan inline-block" />
        </span>
      )}
      <h2 className="font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,4.5vw,3.2rem)]">
        {title}{" "}
        {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[var(--text-muted)] text-[1.05rem] leading-relaxed max-w-xl ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
