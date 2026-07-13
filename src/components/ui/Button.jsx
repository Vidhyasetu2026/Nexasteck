import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable Button / Link-button.
 * variant: "primary" | "outline" | "ghost"
 * as: "button" | "a" | react-router "Link" (pass component)
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  type = "button",
  className = "",
  icon,
  ...rest
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[0.95rem]",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-glow-blue hover:shadow-[0_0_55px_rgba(59,130,246,0.55)]",
    outline:
      "bg-transparent border text-[var(--text)] border-[var(--border)] hover:border-brand-blue",
    ghost:
      "bg-brand-blue/10 text-brand-blue border border-brand-blue/25 hover:bg-brand-blue/15",
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-body tracking-tight transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { y: -2, scale: 1.015 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...rest}>
      {content}
    </motion.button>
  );
}
