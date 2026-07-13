import React from "react";
import { FiCheck } from "react-icons/fi";
import PageHero from "../components/shared/PageHero";
import SEO from "../components/shared/SEO";
import Reveal from "../components/ui/Reveal";
import Tag from "../components/ui/Tag";
import CTASection from "../components/sections/CTASection";
import FAQSection from "../components/sections/FAQSection";
import { SERVICES } from "../data/siteData";

export default function Services() {
  return (
    <>
      <SEO title="Services — Nexasteck" description="Web development, mobile apps, UI/UX design, backend & APIs, e-commerce, and AI integration services." />
      <PageHero
        eyebrow="What We Offer"
        title="Services built around"
        highlight="your goals"
        subtitle="Every engagement is scoped to the outcome you need — not a generic package."
      />

      <section className="relative z-10 pb-28 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.06}>
              <div
                id={svc.id}
                className="glass rounded-2xl p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-start"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: `${svc.accent}18` }}
                >
                  {svc.icon}
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl mb-2">{svc.title}</h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                    {svc.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <FiCheck className="text-brand-cyan shrink-0" size={16} />
                        <span style={{ color: "var(--text-muted)" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((t) => <Tag key={t} label={t} color={svc.accent} />)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
