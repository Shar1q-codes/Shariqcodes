import React from "react";
import { ModeProvider, useMode } from "./context/ModeContext";
import WallBackground from "./components/layout/WallBackground";
import GlassLayout from "./modes/glassmorphism/GlassLayout";
import ParallaxLayout from "../src/modes/parallax/ParallaxLayout";
import FlatMinimalLayout from "../src/modes/flatminimal/FlatMinimalLayout";
import ModeSwitcher from "./components/layout/ModeSwitcher";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Services from "./sections/Services";

function ThemedRoot() {
  const { mode } = useMode();

  if (mode === "parallax") {
    // Full website parallax effect, no glass, no WallBackground
    return (
      <ParallaxLayout>
        <div className="pointer-events-auto">
          <ModeSwitcher />
          <div className="space-y-16 pt-8 pb-8">
            <Home />
            <Projects />
            <Services />
            <Contact />
          </div>
        </div>
      </ParallaxLayout>
    );
  }

  // For glassmorphism and flatminimal, keep WallBackground and themed layout
  if (mode === "flatminimal") {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <WallBackground />
        <FlatMinimalLayout>
          <div className="w-full flex justify-end pt-8 pb-2 px-4">
            <ModeSwitcher />
          </div>
          <div className="space-y-16 pt-4 pb-8">
            <Home />
            <Projects />
            <Services />
            <Contact />
          </div>
        </FlatMinimalLayout>
      </div>
    );
  }

  // glassmorphism (default)
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <WallBackground />
      {mode === "glassmorphism" && (
        <div className="fixed top-8 right-12 z-50 pointer-events-auto sm:top-2 sm:right-2 w-fit">
          <ModeSwitcher />
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GlassLayout>
          <div className="pointer-events-auto">
            <div className="space-y-16 pt-8 pb-8">
              <Home />
              <Projects />
              <Services />
              <Contact />
            </div>
          </div>
        </GlassLayout>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <ModeProvider>
      <ThemedRoot />
    </ModeProvider>
  );
}
