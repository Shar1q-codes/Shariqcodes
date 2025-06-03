import React from "react";
import FlatMinimalNavbar from "./FlatMinimalNavbar";

export default function FlatMinimalLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white">
      <FlatMinimalNavbar />
      <main className="max-w-5xl mx-auto w-full px-4 pt-8 pb-16">
        {/* FlatMinimal section wrappers */}
        <section className="bg-white rounded-none py-16" id="skills-section">
          {Array.isArray(children) ? children[0] : children}
        </section>
        <section className="bg-gray-50 rounded-none py-16" id="focus-section">
          {Array.isArray(children) ? children[1] : null}
        </section>
        <section className="bg-white rounded-none py-16" id="projects-section">
          {Array.isArray(children) ? children[2] : null}
        </section>
        <section className="bg-gray-50 rounded-none py-16" id="services-section">
          {Array.isArray(children) ? children[3] : null}
        </section>
        <section className="bg-white rounded-none py-16" id="contact-section">
          {Array.isArray(children) ? children[4] : null}
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 text-center py-6 text-gray-500 text-sm bg-white">
        &copy; {new Date().getFullYear()} Shariq Hussain. All rights reserved.
      </footer>
    </div>
  );
}
