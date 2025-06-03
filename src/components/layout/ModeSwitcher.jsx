import React from "react";
import { useMode } from "../../context/ModeContext";
import { motion } from "framer-motion";

export default function ModeSwitcher() {
  const { mode, setMode, MODES } = useMode();
  const glassmorphismLabelClass = "text-white/80 text-sm font-medium mr-2 md:mr-0";
  const parallaxLabelClass = "text-white/90 text-sm font-medium mr-2 md:mr-0"; // Slightly more opaque for parallax
  const flatMinimalLabelClass = "text-gray-700 text-sm font-medium mr-2 md:mr-0";

  const glassmorphismSelectClass =
    "bg-white/30 backdrop-blur-xl border border-white/30 rounded-lg px-4 py-2 text-gray-900 font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-60 text-base sm:text-sm sm:px-2 sm:py-1 transition-all duration-200" +
    " bg-gradient-to-br from-white/30 via-white/10 to-blue-200/10";
  const parallaxSelectClass =
    "bg-black/50 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 text-white font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-70 text-base sm:text-sm sm:px-2 sm:py-1 transition-all duration-200";
  const flatMinimalSelectClass =
    "bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 text-base sm:text-sm sm:px-2 sm:py-1 transition-all duration-200";

  const glassmorphismOptionClass = "bg-white/70 backdrop-blur-lg text-gray-900";
  const parallaxOptionClass = "bg-slate-700/90 backdrop-blur-md text-white";
  const flatMinimalOptionClass = "bg-white text-gray-900 hover:bg-gray-100";

  let labelClass;
  let selectClass;
  let optionClass;

  switch (mode) {
    case "glassmorphism":
      labelClass = glassmorphismLabelClass;
      selectClass = glassmorphismSelectClass;
      optionClass = glassmorphismOptionClass;
      break;
    case "parallax":
      labelClass = parallaxLabelClass;
      selectClass = parallaxSelectClass;
      optionClass = parallaxOptionClass;
      break;
    case "flatminimal":
      labelClass = flatMinimalLabelClass;
      selectClass = flatMinimalSelectClass;
      optionClass = flatMinimalOptionClass;
      break;
    default:
      labelClass = parallaxLabelClass; // Default to parallax for safety
      selectClass = parallaxSelectClass;
      optionClass = parallaxOptionClass;
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-end gap-2 md:gap-4 pt-6 pb-4 z-20">
      <label htmlFor="layout-mode" className={labelClass}>Choose Layout:</label>
      <motion.select
        id="layout-mode"
        className={selectClass}
        value={mode}
        onChange={e => setMode(e.target.value)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {MODES.map(m => (
          <option
            key={m.id}
            value={m.id}
            className={optionClass}
          >
            {m.label}
          </option>
        ))}
      </motion.select>
    </div>
  );
}
