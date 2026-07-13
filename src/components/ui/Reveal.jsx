import React from "react";
import { motion } from "framer-motion";

const variants = {
  up:    { hidden: { opacity: 0, y: 36 },  show: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -36 }, show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -36 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 },  show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
};

/**
 * Scroll-triggered reveal wrapper.
 * Wrap any block of content; animates in once when it enters viewport.
 */
export default function Reveal({ children, direction = "up", delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}
