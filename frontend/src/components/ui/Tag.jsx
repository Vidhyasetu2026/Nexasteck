import React from "react";

export default function Tag({ label, color }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-wide border"
      style={{
        background: color ? `${color}18` : "rgba(59,130,246,0.1)",
        borderColor: color ? `${color}35` : "rgba(59,130,246,0.22)",
        color: color || "#06B6D4",
      }}
    >
      {label}
    </span>
  );
}
