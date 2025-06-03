import React from "react";
import { useMode } from "../../context/ModeContext";
import GlassLayout from "../../modes/glassmorphism/GlassLayout";
import ParallaxLayout from "../../modes/parallax/ParallaxLayout";
import FlatMinimalLayout from "../../modes/flatminimal/FlatMinimalLayout";

export default function GlassPane({ children }) {
  const { mode } = useMode();
  if (mode === "parallax") return <ParallaxLayout>{children}</ParallaxLayout>;
  if (mode === "flatminimal") return <FlatMinimalLayout>{children}</FlatMinimalLayout>;
  // Default: glassmorphism
  return <GlassLayout>{children}</GlassLayout>;
}
