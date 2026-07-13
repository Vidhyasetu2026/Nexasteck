import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { FAQS } from "../../data/siteData";

export default function FAQSection({ items = FAQS, eyebrow = "FAQ", title = "Common", highlight = "questions" }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative z-10 py-28 px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow={eyebrow} title={title} highlight={highlight} center />

        <div className="space-y-3">
          {items.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-brand-blue"
                  >
                    <FiPlus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
