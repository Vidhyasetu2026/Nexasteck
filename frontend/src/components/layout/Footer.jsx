import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin, FiGithub, FiTwitter, FiArrowRight } from "react-icons/fi";
import { SITE, NAV_LINKS, SERVICES } from "../../data/siteData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative z-10 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">

        {/* Newsletter row */}
        <div className="glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Stay in the loop</h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Occasional notes on what we're building — no spam, ever.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full md:w-64 min-w-0 px-4 py-3 rounded-xl text-sm outline-none border bg-transparent"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            />

            <button
              type="submit"
              className="w-full md:w-auto px-5 py-3 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white flex items-center justify-center gap-1.5 font-semibold text-sm"
            >
              {subscribed ? "Subscribed ✓" : <>Subscribe <FiArrowRight size={14} /></>}
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-display font-extrabold text-white text-sm">
                {SITE.shortName}
              </div>
              <span className="font-display font-extrabold text-lg grad-text">{SITE.name}</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Premium software development for ambitious founders and growing teams.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm hover:text-brand-blue transition-colors" style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-sm hover:text-brand-blue transition-colors" style={{ color: "var(--text-muted)" }}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
                      <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-xs hover:text-brand-blue transition-colors"
                style={{ color: "var(--text-dim)" }}
              >
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--text-dim)" }} />
              <Link
                to="/terms-and-conditions"
                className="text-xs hover:text-brand-blue transition-colors"
                style={{ color: "var(--text-dim)" }}
              >
                Terms & Conditions
              </Link>
            </div>

          <div className="flex gap-3">
            {[
              { icon: FiInstagram, url: SITE.social.instagram },
              { icon: FiLinkedin, url: SITE.social.linkedin },
              { icon: FiGithub, url: SITE.social.github },
              { icon: FiTwitter, url: SITE.social.twitter },
            ].map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
