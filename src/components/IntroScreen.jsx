import React, { useEffect, useState } from "react";

// Cinematic gradient background and shimmer effect for tagline
export default function IntroScreen({ onFinish }) {
  const tagline = "Where Imagination Meets Reality";
  const [typedTagline, setTypedTagline] = useState("");
  const [show, setShow] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Cinematic timing: Welcome fades in, then tagline types in
    const t1 = setTimeout(() => setShowWelcome(true), 500); // Fade in welcome
    const t2 = setTimeout(() => setShowTagline(true), 1900); // Start tagline typewriter after welcome
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  // When tagline is fully typed, pause before fading out
  // Keep intro visible for one full background animation loop (8s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 5900); // 5.9s = balanced cinematic intro
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect for tagline
  useEffect(() => {
    let typeTimeout;
    if (showTagline && typedTagline.length < tagline.length) {
      typeTimeout = setTimeout(() => {
        setTypedTagline(tagline.slice(0, typedTagline.length + 1));
      }, 38); // Fast but cinematic
    }
    return () => clearTimeout(typeTimeout);
  }, [showTagline, typedTagline, tagline]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-bg-pan select-none" style={{
      background: "linear-gradient(120deg, #2d0066, #1e90ff, #00e1d3, #ff4ecd, #2d0066)", // first and last color are identical
      backgroundSize: "400% 400%"
    }}>
      <div className="text-center">
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-white mb-4 transition-opacity duration-700 ${showWelcome ? "opacity-100" : "opacity-0"}`}
          style={{ letterSpacing: "0.04em", textShadow: "0 4px 32px #0008" }}
        >
          Welcome to <span className="text-fuchsia-400">Shariq's Portfolio</span>
        </h1>
        <div
          className={`text-xl md:text-3xl font-semibold tracking-wide mt-6 transition-all duration-700 ${showTagline ? "opacity-100 scale-110" : "opacity-0 scale-95"} tagline-shimmer`}
          style={{ color: "#f8fafc", minHeight: 48 }}
        >
          <span>{typedTagline}</span>
        </div>
      </div>
      <style>{`
        .animate-bg-pan {
          animation: bg-pan-cine 8s ease-in-out infinite;
        }
        @keyframes bg-pan-cine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          62.5% { background-position: 0% 50%; }
          100% { background-position: 0% 50%; }
        }
        .tagline-shimmer {
          position: relative;
          overflow: hidden;
        }
        .tagline-shimmer span {
          display: inline-block;
          position: relative;
        }
        .tagline-shimmer span:after {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 200%; height: 100%;
          background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%);
          animation: shimmer-move 2.2s infinite;
        }
        @keyframes shimmer-move {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
