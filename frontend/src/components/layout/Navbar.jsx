import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../shared/ThemeToggle";
import RouterButton from "../ui/RouterButton";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { SITE, NAV_LINKS } from "../../data/siteData";
import logo from "/logo.png";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30);
        ticking = false;
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);
  useLockBodyScroll(open);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-400"
        style={{
          background: scrolled ? "var(--bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          opacity: scrolled ? 0.97 : 1,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Nexasteck Logo"
              className="w-50 h-10 object-contain"
            />

            {/* <span className="font-display font-extrabold text-xl tracking-tight grad-text">
              {SITE.name}
            </span> */}
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => {
              const isHashLink = l.path.includes("#");
              const isActive = !isHashLink && (
                l.path === "/"
                  ? location.pathname === "/"
                  : location.pathname === l.path ||
                  location.pathname.startsWith(l.path + "/")
              );

              return (
                <li key={l.path} className="relative">
                  <Link
                    to={l.path}
                    className="text-sm font-medium transition-colors duration-200 py-1"
                    style={{ color: isActive ? "var(--text)" : "var(--text-muted)" }}
                    onMouseEnter={(e) => !isActive && (e.target.style.color = "var(--text)")}
                    onMouseLeave={(e) => !isActive && (e.target.style.color = "var(--text-muted)")}
                  >
                    {l.label}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden lg:block">
              <RouterButton to="/contact" size="sm">Get a Quote →</RouterButton>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer — uses transform + opacity only (GPU-composited),
          not height:auto, which forces per-frame layout measurement and
          is the most common cause of janky mobile menu animations. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-[72px] left-0 right-0 z-[99] lg:hidden"
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => {
                const isHashLink = l.path.includes("#");
                const isActive = !isHashLink && (
                  l.path === "/"
                    ? location.pathname === "/"
                    : location.pathname === l.path ||
                    location.pathname.startsWith(l.path + "/")
                );

                return (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={l.path}
                      className="flex items-center gap-2.5 py-3.5 text-base font-medium border-b"
                      style={{
                        color: isActive ? "var(--text)" : "var(--text-muted)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan shrink-0" />
                      )}
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-4">
                <RouterButton to="/contact" className="w-full justify-center">Get a Quote →</RouterButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
