import React from "react";
import { FiArrowRight } from "react-icons/fi";
import RouterButton from "../ui/RouterButton";
import Reveal from "../ui/Reveal";

export default function CTASection() {
  return (
    <section className="relative z-10 py-28 px-6">
      <Reveal direction="scale">
        <div
          className="max-w-4xl mx-auto rounded-[28px] p-12 md:p-16 text-center relative overflow-hidden border"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.05))",
            borderColor: "rgba(59,130,246,0.25)",
          }}
        >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-brand-blue/15 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-4">
              Ready to build something <span className="grad-text">great?</span>
            </h2>
            <p className="max-w-md mx-auto mb-9" style={{ color: "var(--text-muted)" }}>
              Tell us about your project — free consultation, response within 24 hours.
            </p>
            <RouterButton to="/contact" size="lg">
              Start Your Project <FiArrowRight />
            </RouterButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
