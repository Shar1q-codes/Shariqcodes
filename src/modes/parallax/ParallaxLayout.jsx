import React from "react";
import { motion } from "framer-motion";

// Professional, robust parallax layout with fallback and accessibility
export default function ParallaxLayout({ children }) {
  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #9333ea 50%, #f472b6 100%)",
        backgroundColor: "#181924", // fallback color
      }}
      aria-label="Parallax background"
    >
      {/* Layer 1: SVG shapes, only local assets, fallback to gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.07) 0, transparent 70%)," +
            "radial-gradient(circle at 80% 60%, rgba(255,255,255,0.05) 0, transparent 60%)",
        }}
      />
      {/* Layer 2: Subtle animated clouds or shapes (optional, pure CSS for robustness) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse at 60% 20%, rgba(255,255,255,0.08) 0, transparent 60%)",
        }}
      />
      {/* Main content, always visible and centered */}
      <section
        className="w-full max-w-4xl px-4 py-12 md:py-20 flex flex-col items-center justify-center"
        tabIndex={-1}
      >
        {children}
      </section>
    </motion.main>
  );
}
