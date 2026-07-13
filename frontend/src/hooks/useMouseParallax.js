import { useEffect, useState } from "react";

/**
 * Tracks normalized mouse position (-1 to 1) for parallax effects.
 * strength scales the output range.
 * Skipped entirely on touch devices — there's no hover/mousemove
 * concept there, and the floating cards are hidden on mobile anyway.
 */
export function useMouseParallax(strength = 20) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia?.("(pointer: fine)").matches) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPos({ x: x * strength, y: y * strength });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength]);

  return pos;
}
