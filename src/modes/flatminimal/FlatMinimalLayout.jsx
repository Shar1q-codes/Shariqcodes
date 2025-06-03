import React from "react";

export default function FlatMinimalLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white">
      {children}
    </div>
  );
}
