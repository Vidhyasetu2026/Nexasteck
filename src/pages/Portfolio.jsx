import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";
import PageHero from "../components/shared/PageHero";
import SEO from "../components/shared/SEO";
import Tag from "../components/ui/Tag";
import CTASection from "../components/sections/CTASection";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/siteData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <SEO title="Portfolio — Nexasteck" description="Explore our portfolio of web apps, mobile apps, SaaS products, and e-commerce platforms." />
      <PageHero
        eyebrow="Our Work"
        title="Projects that"
        highlight="speak for themselves"
        subtitle="Filter by category or search to find the kind of work most relevant to you."
      />

      <section className="relative z-10 pb-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Search + filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--text-dim)" }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none border bg-transparent"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200"
                  style={
                    activeCategory === cat
                      ? { background: "var(--grad-blue-cyan)", borderColor: "transparent", color: "#fff" }
                      : { borderColor: "var(--border)", color: "var(--text-muted)" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link to={`/portfolio/${p.id}`} data-cursor-hover className="group glass rounded-2xl overflow-hidden block h-full">
                    <div className="h-48 relative flex items-center justify-center text-4xl overflow-hidden" style={{ background: p.gradient }}>
                      <span className="transition-transform duration-500 group-hover:scale-110">{p.emoji}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <FiArrowUpRight className="text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">{p.category}</span>
                      <h3 className="font-display font-bold text-lg mt-2 mb-3">{p.title}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
              No projects match your search. Try a different keyword or filter.
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
