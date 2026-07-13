import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { TECH_CATEGORIES } from "../../data/siteData";

export default function TechStack() {
  return (
    <section className="relative z-10 py-28 px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Toolkit"
          title="Technologies we"
          highlight="work with"
          subtitle="A modern, battle-tested stack chosen for performance, maintainability, and scale."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.07}>
              <div className="glass rounded-2xl p-6 h-full">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-cyan mb-4">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-brand-blue hover:-translate-y-0.5 cursor-default"
                      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
