# IK Software — Premium Agency Website

A premium, fully responsive React.js portfolio website for a software agency.

## 🚀 Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

To build for production:
```bash
npm run build
npm run preview
```

> **Note:** This was built without network access to verify the live build (sandboxed
> environment), but every import/export pair, icon name, and Tailwind class was manually
> cross-checked against the package APIs and `tailwind.config.js`. Run `npm install && npm run dev`
> as your first step — if anything surfaces, it'll be a quick one-line fix and I can patch it
> immediately if you paste me the error.

---

## 📁 Project Structure

```
src/
├── data/
│   └── siteData.js         ← ✏️  ALL CONTENT LIVES HERE (single source of truth)
│
├── context/
│   └── ThemeContext.jsx    ← Dark/Light mode provider
│
├── hooks/
│   ├── useTypewriter.js    ← Rotating hero text effect
│   ├── useMouseParallax.js ← Mouse-tracking parallax
│   └── useLockBodyScroll.js← Locks scroll when mobile menu open
│
├── components/
│   ├── ui/                 ← Generic reusable primitives
│   │   ├── Button.jsx
│   │   ├── RouterButton.jsx (Button that uses React Router <Link>)
│   │   ├── GlassCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Reveal.jsx      (scroll-reveal animation wrapper)
│   │   ├── Counter.jsx     (animated count-up numbers)
│   │   └── Tag.jsx
│   │
│   ├── layout/              ← Site-wide chrome
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── shared/               ← Cross-cutting features
│   │   ├── CustomCursor.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ScrollToTop.jsx (back-to-top button)
│   │   ├── ScrollToTopOnRouteChange.jsx (resets scroll on navigation)
│   │   ├── WhatsAppButton.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── PageHero.jsx (banner for inner pages)
│   │   ├── PageTransition.jsx (route change animation)
│   │   └── SEO.jsx (per-page title/meta tags)
│   │
│   └── sections/             ← Composed sections (used on Home + other pages)
│       ├── Hero.jsx
│       ├── LogosMarquee.jsx
│       ├── ServicesPreview.jsx
│       ├── TechStack.jsx
│       ├── PortfolioPreview.jsx (Swiper slider)
│       ├── Process.jsx
│       ├── Testimonials.jsx (Swiper slider)
│       ├── FAQSection.jsx (accordion)
│       └── CTASection.jsx
│
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Portfolio.jsx          ← with category filters + search
    ├── ProjectDetail.jsx      ← case study page, dynamic route /portfolio/:id
    ├── Contact.jsx            ← form + Google Map + socials
    └── NotFound.jsx
```

---

## ✏️ How to Update Content

**Everything lives in `src/data/siteData.js`.** Update text, stats, projects, services,
testimonials, team members, and FAQs from this one file — no need to touch components.

| What to change | Object/array in siteData.js |
|---|---|
| Company name, email, phone, address, socials | `SITE` |
| Nav menu items | `NAV_LINKS` |
| Hero rotating words & subtext | `HERO` |
| Stats (50+ projects, etc.) | `STATS` |
| About page story & values | `ABOUT` |
| Services list | `SERVICES` |
| Tech stack categories | `TECH_CATEGORIES` |
| Portfolio projects + case studies | `PROJECTS` |
| Process steps | `PROCESS_STEPS` |
| Client testimonials | `TESTIMONIALS` |
| Team members | `TEAM` |
| FAQ accordion | `FAQS` |

### Example — adding a new project:
```js
// In PROJECTS array:
{
  id: "my-new-project",          // used in URL: /portfolio/my-new-project
  category: "Web App",
  title: "Project Name",
  subtitle: "One-line subtitle",
  description: "Short card description.",
  longDescription: "Full case-study paragraph for the detail page.",
  gradientCSS: "linear-gradient(135deg,#111,#222)",
  emoji: "🚀",
  tags: ["React", "Node.js"],
  year: "2026",
  client: "Client Name",
  duration: "8 weeks",
  results: ["Result 1", "Result 2"],
  liveUrl: "https://...",
  githubUrl: "https://...",
}
```

---

## 🎨 Design System

Colors, fonts, and animation keyframes are defined in `tailwind.config.js` and `src/index.css`.

```js
// tailwind.config.js
colors: {
  brand: { blue: "#3B82F6", cyan: "#06B6D4", purple: "#8B5CF6" }
}
```

Dark/Light mode uses CSS variables (`--bg`, `--text`, `--text-muted`, `--border`, etc.)
defined per theme in `src/index.css` under `html.dark` and `html.light`. Toggle is in
`src/components/shared/ThemeToggle.jsx`, state lives in `src/context/ThemeContext.jsx`.

> Note: theme preference is kept in memory only (no `localStorage`), since the
> generation sandbox disallows browser storage in some environments. If you deploy this
> yourself, you can add `localStorage.getItem/setItem` calls in `ThemeContext.jsx` to persist
> the choice across page reloads.

---

## ✅ What's Implemented (Round 1 — Core)

- Multi-page routing (Home, About, Services, Portfolio, Project Detail, Contact, 404)
- Dark/Light mode toggle
- Animated hero with typewriter effect, mouse parallax floating cards, animated counters
- Glassmorphism cards throughout
- GSAP-ready structure (Framer Motion handles current animations; GSAP can be added to
  any section for scroll-triggered timeline work)
- Framer Motion page transitions
- Swiper.js sliders (Portfolio preview + Testimonials)
- Scroll-reveal animations on every section
- Custom cursor (desktop only)
- Animated gradient blob background
- Loading screen
- Sticky navbar with scroll-based blur
- Mobile hamburger menu
- Back-to-top button
- WhatsApp floating button
- Newsletter subscription UI (footer)
- Project search + category filtering (Portfolio page)
- Case study detail pages with results, tags, and related projects
- FAQ accordion
- Contact form + embedded Google Map
- Per-page SEO (title + meta description)
- Reduced-motion support, visible focus states

## 🔜 Not Yet Included (Round 2 candidates)

- Blog/Articles section
- Careers page
- Multi-language support
- Image Gallery / Video Showcase
- Downloadable company profile PDF
- GSAP ScrollTrigger-specific timeline animations (currently using Framer Motion `whileInView`,
  which covers the same scroll-reveal use case — let me know if you specifically need GSAP
  timeline sequencing for something Framer can't do)

Let me know which of these to build next, and I'll add them with the same reusable,
config-driven pattern.
