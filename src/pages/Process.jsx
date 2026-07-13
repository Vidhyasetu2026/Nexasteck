import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiCheckSquare, FiTool, FiChevronDown, FiArrowRight } from "react-icons/fi";
import PageHero from "../components/shared/PageHero";
import SEO from "../components/shared/SEO";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import RouterButton from "../components/ui/RouterButton";
import CTASection from "../components/sections/CTASection";
import FAQSection from "../components/sections/FAQSection";
import { PROCESS_STEPS, PROCESS_PRINCIPLES, PROCESS_FAQS } from "../data/siteData";

function StepCard({ step, index, isOpen, onToggle }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="glass rounded-2xl overflow-hidden">
        {/* Header — always visible */}
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-5 md:gap-8 p-6 md:p-8 text-left"
        >
          {/* Number */}
          <span className="font-display font-extrabold text-4xl md:text-5xl opacity-15 shrink-0 w-14 md:w-20">
            {step.number}
          </span>

          {/* Title + short description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xl">{step.icon}</span>
              <h3 className="font-display font-bold text-lg md:text-xl">{step.title}</h3>
            </div>
            <p className="text-sm leading-relaxed hidden sm:block" style={{ color: "var(--text-muted)" }}>
              {step.description}
            </p>
          </div>

          {/* Duration badge (desktop) */}
          <span
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0"
            style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}
          >
            <FiClock size={12} /> {step.duration}
          </span>

          {/* Chevron */}
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-brand-blue"
          >
            <FiChevronDown size={20} />
          </motion.span>
        </button>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden"
            >
              <div
                className="px-6 md:px-8 pb-8 pt-2 border-t grid md:grid-cols-[1fr_auto] gap-8"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  {/* Mobile-only duration badge */}
                  <span
                    className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                    style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}
                  >
                    <FiClock size={12} /> {step.duration}
                  </span>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {step.detail}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-3">
                      <FiCheckSquare size={14} className="text-brand-cyan" />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                        Deliverables
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm">
                          <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                          <span style={{ color: "var(--text-muted)" }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools sidebar */}
                <div className="md:w-40 shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <FiTool size={14} className="text-brand-purple" style={{ color: "#8B5CF6" }} />
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                      Tools
                    </span>
                  </div>
                  <div className="flex flex-wrap md:flex-col gap-2">
                    {step.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border text-center"
                        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function Process() {
  const [openStep, setOpenStep] = useState(0); // first step open by default

  return (
    <>
      <SEO
        title="Our Process — Nexasteck"
        description="How Nexasteck designs and builds software: Discovery, Design, Development, and Launch — with clear timelines and deliverables at every stage."
      />

      <PageHero
        eyebrow="How We Work"
        title="A process built on"
        highlight="clarity"
        subtitle="No black boxes, no vague timelines. Here's exactly what happens at every stage of your project — and what you get at the end of each one."
      />

      {/* ── Detailed timeline ─────────────────────────────── */}
      <section className="relative z-10 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              index={i}
              isOpen={openStep === i}
              onToggle={() => setOpenStep(openStep === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* ── Principles ────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Why It Works"
            title="Principles behind"
            highlight="every project"
            subtitle="The process only matters if it's actually followed. Here's what we hold ourselves to."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-7 h-full text-center">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline overview strip ───────────────────────── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="glass rounded-2xl p-8 md:p-10 text-center">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-dim)" }}>
                Typical End-to-End Timeline
              </p>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-6">
                <span className="grad-text">8–19 weeks</span>, start to launch
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {PROCESS_STEPS.map((s, i) => (
                  <React.Fragment key={s.number}>
                    <div
                      className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <span>{s.icon}</span> {s.title} · {s.duration}
                    </div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <span className="self-center" style={{ color: "var(--text-dim)" }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
                Exact timelines depend on scope — we'll give you a precise estimate after discovery.
              </p>
              <div className="mt-8">
                <RouterButton to="/contact">
                  Get Your Project Timeline <FiArrowRight />
                </RouterButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection
        items={PROCESS_FAQS}
        eyebrow="Process FAQ"
        title="Questions about"
        highlight="how we work"
      />

      <CTASection />
    </>
  );
}
