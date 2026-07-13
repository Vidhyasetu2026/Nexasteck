import React from "react";

/**
 * Ambient animated gradient blobs — sits behind all content (z-0).
 * On mobile, the morphing border-radius + heavy blur is expensive to
 * repaint every frame (especially under `position: fixed` during scroll),
 * so we drop to a lighter, static-position style on small screens via
 * the `.bg-blob` class defined in index.css.
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="bg-blob absolute w-[500px] h-[500px] -top-32 -left-32 opacity-[0.16]"
        style={{ background: "#3B82F6" }}
      />
      <div
        className="bg-blob absolute w-[420px] h-[420px] bottom-[10%] -right-20 opacity-[0.14]"
        style={{ background: "#06B6D4", animationDelay: "-4s" }}
      />
      <div
        className="bg-blob absolute w-[350px] h-[350px] top-[45%] left-[40%] opacity-[0.1]"
        style={{ background: "#8B5CF6", animationDelay: "-8s" }}
      />
    </div>
  );
}
