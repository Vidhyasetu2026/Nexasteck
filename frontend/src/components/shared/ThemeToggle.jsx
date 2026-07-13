import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="relative w-14 h-8 rounded-full border border-[var(--border)] flex items-center px-1 transition-colors duration-300"
      style={{ background: isDark ? "rgba(59,130,246,0.12)" : "rgba(245,158,11,0.12)" }}
    >
      <span
        className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white transition-transform duration-300"
        style={{ transform: isDark ? "translateX(0px)" : "translateX(24px)" }}
      >
        {isDark ? <FiMoon size={13} /> : <FiSun size={13} />}
      </span>
    </button>
  );
}
