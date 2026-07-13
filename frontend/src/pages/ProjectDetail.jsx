import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import SEO from "../components/shared/SEO";
import Tag from "../components/ui/Tag";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/sections/CTASection";
import { PROJECTS } from "../data/siteData";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <>
      <SEO title={`${project.title} — Case Study | Nexasteck`} description={project.description} />

      {/* Hero banner */}
      <section className="relative z-10 pt-32 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium mb-8" style={{ color: "var(--text-muted)" }}>
            <FiArrowLeft /> Back to portfolio
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">{project.category}</span>
            <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.2rem)] mt-3 mb-2">{project.title}</h1>
            <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>{project.subtitle}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((t) => <Tag key={t} label={t} />)}
            </div>
          </motion.div>

          {/* Big visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="h-72 md:h-96 rounded-3xl flex items-center justify-center text-7xl mb-16"
            style={{ background: project.gradient }}
          >
            {project.emoji}
          </motion.div>
        </div>
      </section>

      {/* Meta + content */}
      <section className="relative z-10 pb-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_280px] gap-12">
          <div>
            <Reveal>
              <h2 className="font-display font-bold text-2xl mb-4">Overview</h2>
              <p className="leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>{project.longDescription}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-2xl mb-5">Results</h2>
              <div className="space-y-3 mb-10">
                {project.results.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <FiCheckCircle className="text-brand-cyan mt-0.5 shrink-0" />
                    <span style={{ color: "var(--text-muted)" }}>{r}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-br from-brand-blue to-brand-cyan shadow-glow-blue"
                >
                  Live Demo <FiExternalLink />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <FiGithub /> View Code
                </a>
              </div>
            </Reveal>
          </div>

          {/* Sidebar meta */}
          <Reveal direction="left" delay={0.15}>
            <div className="glass rounded-2xl p-6 space-y-5 sticky top-28">
              {[
                { label: "Client", value: project.client },
                { label: "Duration", value: project.duration },
                { label: "Year", value: project.year },
                { label: "Category", value: project.category },
              ].map((row) => (
                <div key={row.label}>
                  <div className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: "var(--text-dim)" }}>
                    {row.label}
                  </div>
                  <div className="font-medium text-sm">{row.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* More projects */}
      <section className="relative z-10 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display font-bold text-xl mb-6">More projects</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROJECTS.filter((p) => p.id !== project.id).slice(0, 2).map((p) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="glass rounded-2xl p-6 flex items-center gap-4 group">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: p.gradient }}
                >
                  {p.emoji}
                </div>
                <div>
                  <h4 className="font-display font-bold group-hover:text-brand-blue transition-colors">{p.title}</h4>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
