import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import RouterButton from "../ui/RouterButton";
import Counter from "../ui/Counter";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { HERO, STATS, SITE } from "../../data/siteData";

export default function Hero() {
  const typed = useTypewriter(HERO.rotatingWords);
  const parallax = useMouseParallax(14);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">

      {/* Floating mockup cards — parallax on mouse move */}
      <motion.div
        className="hidden md:block absolute top-32 left-[8%] glass rounded-2xl p-4 w-48 animate-float"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-dot" />
          <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Deploy successful</span>
        </div>
        <div className="h-1.5 rounded-full bg-brand-blue/30 w-full mb-1.5" />
        <div className="h-1.5 rounded-full bg-brand-cyan/20 w-2/3" />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-48 right-[10%] glass rounded-2xl p-4 w-44"
        style={{ transform: `translate(${-parallax.x}px, ${-parallax.y}px)`, animation: "float 7s ease-in-out infinite", animationDelay: "1s" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <div className="text-2xl font-display font-extrabold grad-text mb-1">98.7%</div>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Uptime this month</span>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute bottom-40 left-[14%] glass rounded-2xl p-3 w-36"
        style={{ transform: `translate(${parallax.x * 0.6}px, ${-parallax.y * 0.6}px)`, animation: "float 8s ease-in-out infinite", animationDelay: "2s" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex -space-x-2 mb-2">
          {["#3B82F6", "#06B6D4", "#8B5CF6"].map((c, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2" style={{ background: c, borderColor: "var(--bg)" }} />
          ))}
        </div>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>32+ happy clients</span>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-8 relative z-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse-dot" />
        {HERO.badge}
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 font-display font-extrabold leading-[1.05] tracking-tight text-[clamp(2.4rem,7vw,5.6rem)] max-w-5xl"
      >
        We Build Premium
        <span className="block grad-text min-h-[1.2em]">
          {typed}
          <span className="inline-block w-[3px] h-[0.85em] bg-brand-cyan ml-1 align-middle animate-pulse" />
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative z-10 mt-6 text-lg max-w-xl"
        style={{ color: "var(--text-muted)" }}
      >
        {HERO.subtext}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <RouterButton to="/contact" size="lg">
          Start a Project <FiArrowRight />
        </RouterButton>
        <RouterButton to="/portfolio" variant="outline" size="lg">
          <FiPlay size={15} /> View Our Work
        </RouterButton>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16"
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display font-extrabold text-3xl md:text-4xl grad-text">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs mt-1 font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
