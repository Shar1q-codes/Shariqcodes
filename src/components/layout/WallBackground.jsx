import React from "react";

import ModeSwitcher from "./ModeSwitcher";

export default function WallBackground({ mode }) {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url('/images/grain.png')`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Centered Wall Graffiti */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/images/graffiti.png" 
          alt="Wall Graffiti"
          className="w-2/3 max-w-2xl h-auto opacity-25 sm:w-3/4"
        />
      </div>

      {/* Graffiti Signature (Bottom Left) */}
      <img 
        src="/images/graffiti.png" 
        alt="Shariq Signature"
        className="absolute bottom-4 left-4 w-48 h-auto opacity-30 transform -rotate-[5deg] pointer-events-none sm:w-36 sm:bottom-2 sm:left-2"
      />
      {mode === "glassmorphism" && (
        <div className="fixed top-8 right-12 z-30 pointer-events-auto sm:top-2 sm:right-2 w-fit">
          <ModeSwitcher />
        </div>
      )}
    </div>
  );
}
