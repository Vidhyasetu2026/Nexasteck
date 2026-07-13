import React from "react";
import { FiArrowRight } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import RouterButton from "../ui/RouterButton";
import { PROCESS_STEPS } from "../../data/siteData";

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-28 px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="How We Work"
          title="A process built on"
          highlight="clarity"
          subtitle="No black boxes. You know exactly what's happening at every stage."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div
                className="p-8 h-full relative group transition-colors duration-300"
                style={{ background: "var(--surface-solid)" }}
              >
                <div
                  className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-500 group-hover:w-full"
                />
                <div className="text-5xl font-display font-extrabold opacity-10 mb-3">{step.number}</div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <RouterButton to="/process" variant="outline">
            View Full Process <FiArrowRight />
          </RouterButton>
        </div>
      </div>
    </section>
  );
}
