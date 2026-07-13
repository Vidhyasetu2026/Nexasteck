import React from "react";
import { motion } from "framer-motion";
import RouterButton from "../components/ui/RouterButton";
import SEO from "../components/shared/SEO";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found — Nexasteck" />
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-extrabold text-[clamp(4rem,15vw,9rem)] grad-text leading-none">404</h1>
          <p className="text-lg mt-4 mb-10" style={{ color: "var(--text-muted)" }}>
            This page wandered off. Let's get you back on track.
          </p>
          <RouterButton to="/"><FiArrowLeft /> Back to Home</RouterButton>
        </motion.div>
      </section>
    </>
  );
}
