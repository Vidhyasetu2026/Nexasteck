import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { SERVICES } from "../../data/siteData";

export default function ServicesPreview() {
  return (
    <section id="services" className="relative z-10 section-pad py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Do"
          title="Services built around"
          highlight="your outcomes"
          subtitle="End-to-end product development — from first sketch to scaled infrastructure."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.08}>
              <Link
                to="/services"
                data-cursor-hover
                className="group glass rounded-2xl p-7 block h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${svc.accent}12, transparent)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{ background: `${svc.accent}18` }}
                  >
                    {svc.icon}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg">{svc.title}</h3>
                    <FiArrowUpRight
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      style={{ color: svc.accent }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {svc.short}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.slice(0, 3).map((t) => <Tag key={t} label={t} color={svc.accent} />)}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
