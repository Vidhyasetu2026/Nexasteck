import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const grow = () => ringRef.current && (ringRef.current.style.transform = "translate(-50%,-50%) scale(2.4)");
    const shrink = () => ringRef.current && (ringRef.current.style.transform = "translate(-50%,-50%) scale(1)");

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const interactive = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-brand-cyan -translate-x-1/2 -translate-y-1/2"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full border border-brand-blue/50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
        style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
      />
    </>
  );
}
