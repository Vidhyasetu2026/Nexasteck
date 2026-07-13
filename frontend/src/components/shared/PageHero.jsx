import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, highlight, subtitle }) {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-5">
            <span className="w-5 h-px bg-brand-cyan" />
            {eyebrow}
            <span className="w-5 h-px bg-brand-cyan" />
          </span>
        )}
        <h1 className="font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.2rem,5.5vw,4rem)] max-w-3xl mx-auto">
          {title} {highlight && <span className="grad-text">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
