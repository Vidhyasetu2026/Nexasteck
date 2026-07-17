// ════════════════════════════════════════════════════════════
//  SITE DATA — every piece of editable content lives here.
//  Update text, links, and items without touching components.
// ════════════════════════════════════════════════════════════

export const SITE = {
  name: "Nexasteck",
  companyName:"Nexasteck Private Limited",
  websiteLink:"https://nexasteck.com",
  shortName: "NS",
  tagline: "Premium Software Development Agency",
  email: "info@Nexasteck.com",
  phone: "+91 9876543210",
  address: "Hanuman Nagar, Satna, Madhya Pradesh, India",
  get mapEmbedUrl() {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      this.address
    )}&output=embed`;
  },
  whatsapp: "919876543210",
  social: {
    instagram: "https://instagram.com/Nexasteck",
    linkedin: "https://linkedin.com/company/Nexasteck",
    github: "https://github.com/Nexasteck",
    twitter: "https://twitter.com/Nexasteck",
    dribbble: "https://dribbble.com/Nexasteck",
  },
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Process", path: "/process" },
  { label: "Contact", path: "/contact" },
];

// ─── HERO ──────────────────────────────────────────────────
export const HERO = {
  badge: "Now booking Q3 projects",
  rotatingWords: ["Websites", "Mobile Apps", "SaaS Platforms", "AI Products", "E-Commerce Stores"],
  subtext:
    "We're a product engineering studio that designs, builds, and scales premium digital experiences for ambitious founders and growing businesses.",
};

// ─── STATS ─────────────────────────────────────────────────
export const STATS = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "yr", label: "In Business" },
  { value: 8, suffix: "", label: "Team Members" },
];

// ─── ABOUT ─────────────────────────────────────────────────
export const ABOUT = {
  eyebrow: "Who We Are",
  heading: "Engineers and designers obsessed with craft",
  body: [
    "Nexasteck started in 2022 with a simple belief — software should feel as good as it works. Today we're a small, senior team that partners with founders and product teams to design and ship digital products that hold up under real-world pressure.",
    "We don't outsource thinking to templates. Every engagement starts with understanding the actual problem, then building the smallest, most reliable solution that solves it well.",
  ],
  values: [
    { icon: "🎯", title: "Outcome-driven", desc: "We measure success by your metrics, not lines of code shipped." },
    { icon: "⚡", title: "Fast & senior", desc: "No junior hand-offs. You work directly with the people building your product." },
    { icon: "🔍", title: "Detail-obsessed", desc: "Pixel-perfect UI, sub-200ms interactions, zero tolerance for jank." },
    { icon: "🤝", title: "Long-term partners", desc: "Most of our clients stay with us well past launch day." },
  ],
};

// ─── SERVICES ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: "web-development",
    icon: "🌐",
    accent: "#3B82F6",
    title: "Web Development",
    short: "Fast, modern, SEO-ready websites and web apps.",
    description:
      "From marketing sites to complex web applications, we build with React, Next.js, and Node.js — engineered for speed, scale, and search visibility.",
    features: ["Server-side rendering", "Headless CMS integration", "Core Web Vitals optimization", "API development"],
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    id: "mobile-apps",
    icon: "📱",
    accent: "#06B6D4",
    title: "Mobile Apps",
    short: "Cross-platform apps with native-like performance.",
    description:
      "We design and ship iOS and Android apps from a single codebase using Flutter and React Native, without compromising on feel or speed.",
    features: ["Cross-platform (iOS + Android)", "Push notifications", "Offline-first architecture", "App Store deployment"],
    tags: ["Flutter", "React Native", "Firebase"],
  },
  {
    id: "ui-ux-design",
    icon: "🎨",
    accent: "#8B5CF6",
    title: "UI/UX Design",
    short: "Interfaces people enjoy using, backed by research.",
    description:
      "Every pixel has a reason. We run discovery, wireframe, prototype, and test before a single line of production code is written.",
    features: ["User research", "Wireframes & prototypes", "Design systems", "Usability testing"],
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    id: "backend-apis",
    icon: "⚙️",
    accent: "#10B981",
    title: "Backend & APIs",
    short: "Scalable infrastructure that won't fall over.",
    description:
      "REST and GraphQL APIs, authentication, queues, and databases — architected to handle growth without a rewrite.",
    features: ["REST & GraphQL APIs", "Database architecture", "Authentication & security", "Cloud infrastructure (AWS/GCP)"],
    tags: ["Node.js", "Python", "PostgreSQL", "AWS"],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    accent: "#F59E0B",
    title: "E-Commerce",
    short: "Online stores built to convert and scale.",
    description:
      "Custom storefronts and headless commerce builds with seamless checkout, payment integration, and inventory management.",
    features: ["Custom storefronts", "Payment gateway integration", "Inventory management", "Analytics dashboards"],
    tags: ["Shopify", "WooCommerce", "Razorpay", "Stripe"],
  },
  {
    id: "ai-integration",
    icon: "🤖",
    accent: "#EF4444",
    title: "AI Integration",
    short: "Practical AI features that solve real problems.",
    description:
      "Chatbots, smart search, content generation, and workflow automation — built on top of leading LLM providers.",
    features: ["Custom chatbots", "LLM integration", "Workflow automation", "Smart search & recommendations"],
    tags: ["OpenAI", "Claude API", "LangChain"],
  },
];

// ─── TECH STACK ────────────────────────────────────────────
export const TECH_CATEGORIES = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "PHP", "Python", "Express"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Vercel", "CI/CD"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Framer"],
  },
];

// ─── PROJECTS / PORTFOLIO ──────────────────────────────────
export const PROJECT_CATEGORIES = ["All", "Web App", "Mobile App", "E-Commerce", "SaaS", "UI/UX"];

export const PROJECTS = [
  {
    id: "shopease",
    category: "E-Commerce",
    title: "ShopEase",
    subtitle: "Online Retail Platform",
    description: "Full-stack e-commerce platform with custom cart, Razorpay integration, and real-time inventory sync.",
    longDescription:
      "ShopEase needed a complete rebuild from a slow WordPress storefront to a custom React + Node.js platform. We rearchitected the checkout flow, integrated Razorpay for payments, and built a real-time inventory dashboard for the operations team. Post-launch, conversion rate improved by 3.2× and page load time dropped from 6.2s to 1.1s.",
    gradient: "linear-gradient(135deg,#1E3A8A,#0891B2)",
    emoji: "🏪",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    year: "2025",
    client: "ShopEase Retail Pvt Ltd",
    duration: "10 weeks",
    results: ["3.2× conversion rate increase", "1.1s average page load", "40% reduction in cart abandonment"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "datapulse",
    category: "SaaS",
    title: "DataPulse",
    subtitle: "Analytics Dashboard",
    description: "Real-time analytics platform with role-based access and automated PDF reporting for 500+ daily users.",
    longDescription:
      "DataPulse's team needed a dashboard that could visualize complex datasets without overwhelming non-technical users. We designed a modular widget system, built role-based access controls, and shipped automated weekly PDF reports — cutting manual reporting time by 80%.",
    gradient: "linear-gradient(135deg,#5B21B6,#DB2777)",
    emoji: "📊",
    tags: ["Next.js", "PostgreSQL", "AWS", "D3.js"],
    year: "2025",
    client: "DataPulse Analytics",
    duration: "14 weeks",
    results: ["80% less manual reporting time", "500+ daily active users", "99.9% uptime since launch"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "medbook",
    category: "Mobile App",
    title: "MedBook",
    subtitle: "Doctor Appointment App",
    description: "Mobile app for clinic bookings, patient records, and secure doctor-patient messaging.",
    longDescription:
      "MedBook connects patients with local clinics for appointment booking, digital records, and secure messaging. Built with Flutter for a single codebase across iOS and Android, with Firebase handling real-time sync and push notifications.",
    gradient: "linear-gradient(135deg,#064E3B,#0891B2)",
    emoji: "🏥",
    tags: ["Flutter", "Firebase", "Node.js"],
    year: "2024",
    client: "MedBook Health",
    duration: "12 weeks",
    results: ["15,000+ app downloads", "4.7★ average app store rating", "60% reduction in no-shows"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "learnhub",
    category: "Web App",
    title: "LearnHub",
    subtitle: "Online Learning Platform",
    description: "Video course platform with progress tracking, quizzes, certificates, and Stripe subscription billing.",
    longDescription:
      "LearnHub wanted a Udemy-style platform tailored to their niche audience. We built custom video streaming with adaptive bitrate, progress tracking, automated certificate generation, and tiered Stripe subscriptions.",
    gradient: "linear-gradient(135deg,#7C2D12,#CA8A04)",
    emoji: "🎓",
    tags: ["React", "Python", "Stripe", "FFmpeg"],
    year: "2024",
    client: "LearnHub Education",
    duration: "16 weeks",
    results: ["2,400+ enrolled students", "92% course completion rate", "$45K MRR within 6 months"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "payflow",
    category: "SaaS",
    title: "PayFlow",
    subtitle: "Payment Dashboard",
    description: "Multi-currency payment tracking dashboard with fraud detection and bank reconciliation.",
    longDescription:
      "PayFlow needed a unified dashboard to track payments across multiple gateways and currencies. We built real-time reconciliation, automated fraud flagging, and exportable financial reports for their finance team.",
    gradient: "linear-gradient(135deg,#0F172A,#3B82F6)",
    emoji: "💳",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    year: "2025",
    client: "PayFlow Technologies",
    duration: "11 weeks",
    results: ["$2M+ transactions tracked monthly", "70% faster reconciliation", "Zero missed fraud flags in 6 months"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "propvista",
    category: "Mobile App",
    title: "PropVista",
    subtitle: "Property Listing App",
    description: "Property discovery app with map-based search, virtual tours, and AI-powered price predictions.",
    longDescription:
      "PropVista needed to stand out in a crowded real estate app market. We built map-clustered search, embedded 360° virtual tours, and an ML-backed price prediction model trained on regional listing data.",
    gradient: "linear-gradient(135deg,#134E4A,#8B5CF6)",
    emoji: "🏡",
    tags: ["React Native", "Google Maps", "Python", "ML"],
    year: "2024",
    client: "PropVista Realty",
    duration: "13 weeks",
    results: ["8,000+ active listings", "35% faster lead-to-tour time", "Featured in Real Estate Tech Weekly"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// ─── PROCESS ───────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: "01",
    icon: "🔍",
    title: "Discovery",
    description: "We dive into your goals, users, and constraints before proposing a single solution.",
    duration: "1–2 weeks",
    deliverables: ["Requirements document", "User personas", "Technical feasibility report", "Project roadmap"],
    tools: ["Notion", "Figma", "Miro"],
    detail:
      "Every project starts with structured discovery calls where we map your business goals, target users, and constraints. We audit any existing systems, research your competitors, and define clear success metrics before touching a single design tool. By the end of this phase, you'll have a documented roadmap you can hold us to.",
  },
  {
    number: "02",
    icon: "✏️",
    title: "Design",
    description: "High-fidelity prototypes you approve before we write production code.",
    duration: "2–4 weeks",
    deliverables: ["Wireframes", "High-fidelity UI designs", "Interactive prototype", "Design system"],
    tools: ["Figma", "Framer"],
    detail:
      "We move from low-fidelity wireframes to fully interactive, pixel-perfect prototypes. Every screen is designed with your brand and users in mind, and nothing goes to development until you've reviewed and approved it in a clickable prototype — no surprises when the real thing ships.",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Develop",
    description: "Sprint-based builds with weekly demos — you always know where things stand.",
    duration: "4–12 weeks",
    deliverables: ["Working builds every sprint", "Staging environment access", "Code documentation", "Test coverage"],
    tools: ["React", "Node.js", "GitHub", "Linear"],
    detail:
      "Development happens in one- to two-week sprints, each ending with a live demo on a staging environment you can access anytime. We write tested, documented code — not just code that works, but code your future team can maintain. Weekly check-ins mean you're never left wondering what's happening.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Launch",
    description: "Deployment, testing, and a 30-day post-launch support window included.",
    duration: "1 week",
    deliverables: ["Production deployment", "QA & performance testing", "Handover documentation", "Team training session"],
    tools: ["Vercel", "AWS", "Sentry"],
    detail:
      "Before launch, we run full QA passes — cross-browser, cross-device, performance, and security checks. We handle the deployment, monitor the first days closely, and walk your team through everything they need to manage the product going forward. Every project includes 30 days of post-launch support.",
  },
];

// ─── PROCESS PAGE EXTRAS ───────────────────────────────────
export const PROCESS_PRINCIPLES = [
  { icon: "🎯", title: "No black boxes", desc: "You see the roadmap, the backlog, and the code — nothing happens behind closed doors." },
  { icon: "📅", title: "Weekly demos", desc: "Every sprint ends with something real you can click through, not a status update slide." },
  { icon: "🔄", title: "Built to change", desc: "Requirements evolve. Our sprint structure absorbs change without blowing up the timeline." },
  { icon: "🤝", title: "Direct access", desc: "You talk to the engineers and designers building your product — no account-manager relay." },
];

export const PROCESS_FAQS = [
  { q: "What if my requirements change mid-project?", a: "Sprint-based development is built for this. We re-prioritize the backlog at the start of each sprint, so changes get absorbed without derailing the whole timeline — as long as scope changes are reasonable relative to the original agreement." },
  { q: "How involved do I need to be?", a: "As involved as you want. Most clients join the weekly demo calls and respond to async questions within a day. We handle the day-to-day execution either way." },
  { q: "What happens after launch?", a: "Every project includes a 30-day post-launch support window for bug fixes and small adjustments. After that, you can move to a monthly retainer or handle it in-house with our documentation." },
  { q: "Can you join a project already in progress?", a: "Yes — we regularly step into existing codebases. We start with a short code and architecture audit before committing to a timeline, so estimates stay realistic." },
];

// ─── TESTIMONIALS ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Nexasteck delivered our e-commerce platform ahead of schedule. Sales tripled in the first month — the design quality is genuinely world-class.",
    name: "Rahul Sharma",
    role: "Founder, ShopEase",
    initials: "RS",
    color: "linear-gradient(135deg,#3B82F6,#06B6D4)",
  },
  {
    stars: 5,
    quote: "Transparent communication, clean code, and the product impressed our investors. They're not just developers — they're genuine partners.",
    name: "Priya Verma",
    role: "CEO, DataPulse",
    initials: "PV",
    color: "linear-gradient(135deg,#8B5CF6,#DB2777)",
  },
  {
    stars: 5,
    quote: "From idea to a live app in 12 weeks. The attention to UX detail is something we hadn't seen from other agencies we'd tried before.",
    name: "Ankit Joshi",
    role: "Director, MedBook",
    initials: "AJ",
    color: "linear-gradient(135deg,#064E3B,#0891B2)",
  },
  {
    stars: 5,
    quote: "They built our entire SaaS backend from scratch — scalable, well-documented, and the team was always available when we needed them.",
    name: "Sneha Patel",
    role: "CTO, PayFlow",
    initials: "SP",
    color: "linear-gradient(135deg,#F59E0B,#EF4444)",
  },
];

// ─── TEAM ──────────────────────────────────────────────────
export const TEAM = [
  { name: "Raja Kushwaha", role: "CEO & Founder", initials: "RK", color: "linear-gradient(135deg,#3B82F6,#06B6D4)" },
  { name: "Prakash Kushwaha", role: "Chief Technology Officer", initials: "PK", color: "linear-gradient(135deg,#8B5CF6,#DB2777)" },
  { name: "Vikram Kushwaha", role: "Senior Developer", initials: "VK", color: "linear-gradient(135deg,#10B981,#06B6D4)" },
  { name: "Amritlal Kushwaha", role: "Senior Developer", initials: "AK", color: "linear-gradient(135deg,#F59E0B,#EF4444)" },
];

// ─── FAQ ───────────────────────────────────────────────────
export const FAQS = [
  { q: "How long does a typical project take?", a: "Most projects take 8–16 weeks depending on scope. A simple marketing site can ship in 3–4 weeks, while a full SaaS platform typically takes 12–20 weeks. We'll give you a clear timeline after the discovery call." },
  { q: "Do you work with startups or only established companies?", a: "Both. About half our clients are early-stage founders building their first product, and the other half are established businesses modernizing or scaling existing systems." },
  { q: "What's included after launch?", a: "Every project includes a 30-day post-launch support window for bug fixes and adjustments. We also offer ongoing retainer plans for ongoing feature development and maintenance." },
  { q: "Can you work with our existing codebase?", a: "Yes — we regularly take over existing projects, whether that's adding features, fixing technical debt, or doing a partial rebuild. We'll do a code audit first to scope it accurately." },
  { q: "How do you price projects?", a: "Most projects are fixed-price based on a detailed scope we agree on upfront. For ongoing work or unclear scopes, we also offer monthly retainers." },
];

// ─── CONTACT ───────────────────────────────────────────────
export const CONTACT_SERVICES = SERVICES.map((s) => s.title).concat("Other");
