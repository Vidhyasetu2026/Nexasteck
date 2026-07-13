/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Inter'", "-apple-system", "sans-serif"],
        body: ["'Inter'", "-apple-system", "sans-serif"],
      },
      colors: {
        brand: {
          blue:   "#3B82F6",
          cyan:   "#06B6D4",
          purple: "#8B5CF6",
        },
        dark: {
          bg:      "#05070D",
          surface: "#0B0F1A",
          border:  "rgba(255,255,255,0.08)",
        },
        light: {
          bg:      "#FAFBFF",
          surface: "#FFFFFF",
          border:  "rgba(15,23,42,0.08)",
        },
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg,#3B82F6 0%,#06B6D4 50%,#8B5CF6 100%)",
        "grad-blue-cyan": "linear-gradient(135deg,#3B82F6,#06B6D4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 12s infinite",
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        "pulse-dot": "pulse-dot 1.6s ease infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blob: {
          "0%,100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "translate(0,0) scale(1)" },
          "33%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%", transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%", transform: "translate(-20px,15px) scale(0.97)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(1.5)" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,130,246,0.35)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.3)",
      },
    },
  },
  plugins: [],
};
