import React from "react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function FlatMinimalNavbar() {
  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <img src="/images/graffiti.png" alt="Shariq Graffiti" className="h-16 max-w-xs w-auto select-none" style={{objectFit: 'contain'}} />
        <ul className="flex gap-6 md:gap-4">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-2 py-1 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
