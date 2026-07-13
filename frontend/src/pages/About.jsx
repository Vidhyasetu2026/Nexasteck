import React from "react";
import PageHero from "../components/shared/PageHero";
import SEO from "../components/shared/SEO";
import Reveal from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import CTASection from "../components/sections/CTASection";
import { ABOUT, STATS, TEAM } from "../data/siteData";

export default function About() {
  return (
    <>
      <SEO title="About — Nexasteck" description="Learn about Nexasteck, our values, our team, and how we build premium digital products." />
      <PageHero eyebrow="About Us" title="The team behind" highlight="the craft" />

      {/* Story */}
      <section className="relative z-10 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display font-bold text-2xl mb-6">{ABOUT.heading}</h2>
          </Reveal>
          {ABOUT.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative z-10 py-16 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-display font-extrabold text-4xl grad-text">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs mt-2 font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display font-bold text-2xl mb-10 text-center">What we value</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ABOUT.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-7 h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-display font-bold text-base mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 py-10 pb-28 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display font-bold text-2xl mb-10 text-center">Meet the team</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="glass rounded-2xl p-7 text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-extrabold text-2xl text-white"
                    style={{ background: member.color }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-display font-bold text-base">{member.name}</h3>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
