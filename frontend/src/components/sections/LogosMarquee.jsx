import React from "react";
import {
  SiReact, SiNodedotjs, SiFlutter, SiFigma,
  SiMongodb, SiNextdotjs, SiLaravel, SiTypescript, SiDocker,
  SiFirebase, SiTailwindcss, SiPostgresql, SiGithub, SiVercel,
  SiPython, SiRedis, SiGraphql, SiSupabase, SiStripe,
} from "react-icons/si";

const LOGOS = [
  { name: "React",       Icon: SiReact,        color: "#61DAFB" },
  { name: "Next.js",     Icon: SiNextdotjs,    color: "#ffffff" },
  { name: "Node.js",     Icon: SiNodedotjs,    color: "#68A063" },
  { name: "TypeScript",  Icon: SiTypescript,   color: "#3178C6" },
  { name: "Flutter",     Icon: SiFlutter,      color: "#54C5F8" },
  { name: "Laravel",     Icon: SiLaravel,      color: "#FF2D20" },
  { name: "Python",      Icon: SiPython,       color: "#FFD43B" },
  { name: "MongoDB",     Icon: SiMongodb,      color: "#47A248" },
  { name: "PostgreSQL",  Icon: SiPostgresql,   color: "#336791" },
  { name: "Redis",       Icon: SiRedis,        color: "#DC382D" },
  { name: "Firebase",    Icon: SiFirebase,     color: "#FFCA28" },
  { name: "Docker",      Icon: SiDocker,       color: "#2496ED" },
  { name: "Tailwind",    Icon: SiTailwindcss,  color: "#38BDF8" },
  { name: "GraphQL",     Icon: SiGraphql,      color: "#E10098" },
  { name: "Figma",       Icon: SiFigma,        color: "#F24E1E" },
  { name: "Stripe",      Icon: SiStripe,       color: "#635BFF" },
  { name: "Vercel",      Icon: SiVercel,       color: "#ffffff" },
  { name: "Supabase",    Icon: SiSupabase,     color: "#3ECF8E" },
  { name: "GitHub",      Icon: SiGithub,       color: "#e0e0e0" },
];

// Duplicate for seamless infinite loop
const LOOP = [...LOGOS, ...LOGOS];

function LogoItem({ name, Icon, color }) {
  return (
    <div
      className="flex flex-col items-center gap-2.5 group cursor-default"
      style={{ minWidth: 72 }}
    >
      {/* Icon pill */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border"
        style={{
          background: `${color}12`,
          borderColor: `${color}22`,
        }}
      >
        <Icon
          size={28}
          style={{ color, opacity: 0.75, transition: "opacity 0.2s" }}
          className="group-hover:opacity-100"
        />
      </div>
      {/* Name label */}
      <span
        className="text-[11px] font-medium whitespace-nowrap transition-colors duration-200"
        style={{ color: "var(--text-dim)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function LogosMarquee() {
  return (
    <section
      className="relative z-10 py-14 border-y"
      style={{ borderColor: "var(--border)", overflow: "hidden" }}
    >
      <p
        className="text-center text-xs uppercase tracking-[0.25em] font-semibold mb-10"
        style={{ color: "var(--text-dim)" }}
      >
        Built with technologies you can trust
      </p>

      <div className="overflow-hidden mask-fade">
        <div
          className="flex items-end w-max animate-marquee"
          style={{ gap: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          {LOOP.map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </div>

      <style>{`
        .mask-fade {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 6%, black 94%, transparent);
        }
      `}</style>
    </section>
  );
}
