import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../../data/siteData";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18, 100);
        if (next >= 100) clearInterval(interval);
        return next;
      });
    }, 150);

    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070D]"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-display font-extrabold text-2xl text-white mb-6 shadow-glow-blue"
          >
            {SITE.shortName}
          </motion.div>
          <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="mt-4 text-xs text-white/40 tracking-widest uppercase">Loading {Math.round(progress)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
