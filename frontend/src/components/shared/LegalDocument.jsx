import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiClock, FiList } from "react-icons/fi";

import SEO from "./SEO";
import PageHero from "./PageHero";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import RouterButton from "../ui/RouterButton";
import CTASection from "../sections/CTASection";

function DocSection({ section, index }) {
    return (
        <Reveal delay={Math.min(index * 0.04, 0.2)}>
            <div
                id={section.id}
                className="glass rounded-2xl p-7 md:p-9 scroll-mt-32"
            >
                <div className="flex items-start gap-4 mb-6">
                    <div
                        className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl"
                        style={{
                            background: "rgba(59,130,246,.1)",
                            color: "#3B82F6"
                        }}
                    >
                        {section.icon}
                    </div>

                    <div>
                        <span
                            className="text-xs font-bold uppercase tracking-widest"
                            style={{ color: "var(--text-dim)" }}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-display font-bold text-2xl leading-tight">
                            {section.title}
                        </h2>
                    </div>
                </div>

                <div className="space-y-6 pl-0 md:pl-16">
                    {/* Paragraphs */}
                    {section.content &&
                        section.content.map((paragraph, i) => (
                            <p
                                key={i}
                                className="leading-8"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {paragraph}
                            </p>
                        ))}

                    {/* Groups */}
                    {section.groups &&
                        section.groups.map((group) => (
                            <div key={group.heading}>
                                <h4 className="font-display font-bold text-base mb-3">
                                    {group.heading}
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {group.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <FiCheckCircle className="text-brand-cyan shrink-0" />
                                            <span style={{ color: "var(--text-muted)" }}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    {/* Simple items */}
                    {section.items && (
                        <div className="grid sm:grid-cols-2 gap-3">
                            {section.items.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <FiCheckCircle className="text-brand-cyan shrink-0" />
                                    <span style={{ color: "var(--text-muted)" }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Note */}
                    {section.note && (
                        <div
                            className="rounded-xl p-4"
                            style={{
                                background: "rgba(59,130,246,.08)",
                                border: "1px solid var(--border)"
                            }}
                        >
                            <p
                                className="text-sm leading-7"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {section.note}
                            </p>
                        </div>
                    )}

                    {/* Contact */}
                    {(section.company || section.email || section.website) && (
                        <div
                            className="rounded-xl p-5"
                            style={{ border: "1px solid var(--border)" }}
                        >
                            {section.company && (
                                <p className="font-bold mb-2">{section.company}</p>
                            )}
                            {section.email && (
                                <p style={{ color: "var(--text-muted)" }}>
                                    📧 {section.email}
                                </p>
                            )}
                            {section.website && (
                                <p style={{ color: "var(--text-muted)" }}>
                                    🌐 {section.website}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Reveal>
    );
}

function TocSidebar({ sections, activeId }) {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 110;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <nav className="hidden lg:block sticky top-32 self-start w-64 shrink-0">
            <div className="glass rounded-2xl p-5">
                <div
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: "var(--text-dim)" }}
                >
                    <FiList size={14} />
                    On this page
                </div>

                <ul className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                    {sections.map((section, i) => {
                        const active = activeId === section.id;
                        return (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollTo(section.id)}
                                    className="w-full flex items-center gap-3 text-left text-sm py-2 px-3 rounded-lg transition-colors"
                                    style={{
                                        color: active ? "#3B82F6" : "var(--text-muted)",
                                        background: active
                                            ? "rgba(59,130,246,.1)"
                                            : "transparent",
                                        fontWeight: active ? 700 : 500
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{
                                            background: active
                                                ? "#3B82F6"
                                                : "var(--border-strong)"
                                        }}
                                    />
                                    <span className="truncate">{section.title}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

function MobileTocStrip({ sections, activeId }) {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="lg:hidden -mx-6 mb-8 px-6 overflow-x-auto">
            <div className="flex gap-2 w-max pb-2">
                {sections.map((section) => {
                    const active = activeId === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className="whitespace-nowrap text-xs font-semibold px-4 py-2 rounded-full border transition-colors"
                            style={{
                                borderColor: active ? "#3B82F6" : "var(--border)",
                                color: active ? "#3B82F6" : "var(--text-muted)",
                                background: active ? "rgba(59,130,246,.1)" : "transparent"
                            }}
                        >
                            {section.title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default function LegalDocument({
    seoTitle,
    seoDescription,
    heroEyebrow = "Legal",
    heroTitle,
    heroHighlight,
    heroSubtitle,
    docName,
    effectiveDate,
    lastUpdated,
    sections,
    highlights = [],
    highlightsEyebrow = "Highlights",
    highlightsTitle = "At a",
    highlightsHighlight = "glance",
    highlightsSubtitle = "Our commitment in simple words.",
    closingQuestion = "Questions?",
    closingTitle = "Need more information?",
    closingSubtitle = "Contact our team if you have any questions."
}) {
    const [activeId, setActiveId] = useState(sections?.[0]?.id);
    const observerRef = useRef(null);

    useEffect(() => {
        const elements = sections
            .map((s) => document.getElementById(s.id))
            .filter(Boolean);

        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible[0]) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
        );

        elements.forEach((el) => observerRef.current.observe(el));

        return () => observerRef.current && observerRef.current.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sections]);

    return (
        <>
            <SEO title={seoTitle} description={seoDescription} />

            <PageHero
                eyebrow={heroEyebrow}
                title={heroTitle}
                highlight={heroHighlight}
                subtitle={heroSubtitle}
            />

            {(effectiveDate || lastUpdated) && (
                <div className="px-6 -mt-8 mb-4">
                    <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
                        {docName && (
                            <span
                                className="font-display font-bold"
                                style={{ color: "var(--text)" }}
                            >
                                {docName}
                            </span>
                        )}
                        {effectiveDate && (
                            <span
                                className="inline-flex items-center gap-2"
                                style={{ color: "var(--text-muted)" }}
                            >
                                <FiClock size={14} />
                                Effective: {effectiveDate}
                            </span>
                        )}
                        {lastUpdated && (
                            <span
                                className="inline-flex items-center gap-2"
                                style={{ color: "var(--text-muted)" }}
                            >
                                <FiClock size={14} />
                                Updated: {lastUpdated}
                            </span>
                        )}
                    </div>
                </div>
            )}

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <MobileTocStrip sections={sections} activeId={activeId} />

                    <div className="flex gap-10 items-start">
                        <TocSidebar sections={sections} activeId={activeId} />

                        <div className="flex-1 min-w-0 space-y-5">
                            {sections.map((section, i) => (
                                <DocSection
                                    key={section.id}
                                    section={section}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {highlights.length > 0 && (
                <section className="py-24 px-6" style={{ background: "var(--bg-2)" }}>
                    <div className="max-w-6xl mx-auto">
                        <SectionHeader
                            eyebrow={highlightsEyebrow}
                            title={highlightsTitle}
                            highlight={highlightsHighlight}
                            subtitle={highlightsSubtitle}
                            center
                        />

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                            {highlights.map((item) => (
                                <Reveal key={item.label}>
                                    <div className="glass rounded-2xl p-8 text-center">
                                        <div
                                            className="text-3xl mb-4 flex justify-center"
                                            style={{ color: "#3B82F6" }}
                                        >
                                            {item.icon}
                                        </div>
                                        <h3 className="font-display font-bold">
                                            {item.label}
                                        </h3>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <Reveal>
                        <div className="glass rounded-2xl p-10 text-center">
                            <p
                                className="text-xs uppercase font-bold tracking-widest mb-4"
                                style={{ color: "var(--text-dim)" }}
                            >
                                {closingQuestion}
                            </p>
                            <h2 className="font-display text-4xl font-extrabold mb-5">
                                {closingTitle}
                            </h2>
                            <p style={{ color: "var(--text-muted)" }}>
                                {closingSubtitle}
                            </p>
                            <div className="mt-8">
                                <RouterButton to="/contact">
                                    Contact Us
                                    <FiArrowRight />
                                </RouterButton>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            {/* <CTASection /> */}
        </>
    );
}
