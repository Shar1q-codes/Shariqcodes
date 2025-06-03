import React from "react";
import { motion } from "framer-motion";

export default function GlassLayout({ children }) {
  return (
    <motion.div
      className="mx-auto h-[80vh] w-[68vw] max-w-4xl max-h-[90vh] rounded-3xl p-8 overflow-y-auto relative flex flex-col justify-start items-center md:w-[80vw] sm:w-[95vw] sm:p-4 scrollbar-hide"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, type: 'spring' }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)', // More transparent background
        backdropFilter: 'blur(7px) saturate(180%)', // More realistic, subtle blur
        WebkitBackdropFilter: 'blur(7px) saturate(180%)', // For Safari
        border: '1px solid rgba(255, 255, 255, 0.1)', // Thinner, more subtle border
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)', // Softer shadow, removed inset
        boxSizing: 'border-box',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE 10+
      }}
    >
      {/* Glass reflection highlight */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-t-3xl pointer-events-none"
        style={{
          width: '70%',
          height: '18%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.04) 100%)',
          filter: 'blur(2.5px)',
          opacity: 0.95,
        }}
      />
      {/* Subtle bottom glass shadow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-b-3xl pointer-events-none"
        style={{
          width: '70%',
          height: '14%',
          background: 'linear-gradient(0deg, rgba(31,38,135,0.09) 0%, rgba(255,255,255,0) 100%)',
          filter: 'blur(4px)',
        }}
      />
      <div className="flex-1 w-full min-h-0 flex flex-col pt-8">
        {children}
      </div>
    </motion.div>
  );
}
