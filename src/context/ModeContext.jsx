import React, { createContext, useContext, useState } from "react";

const MODES = [
  { id: "glassmorphism", label: "Glassmorphism" },
  { id: "parallax", label: "Parallax" },
  { id: "flatminimal", label: "Flat Minimal" },
];

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(MODES[0].id); // default: glassmorphism
  return (
    <ModeContext.Provider value={{ mode, setMode, MODES }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
