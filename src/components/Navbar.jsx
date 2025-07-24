import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    {
      href: "https://drive.google.com/file/d/1Z6NlbEJQbXNY6ZAhnBpxOtIqNHuCrKOS/view?usp=drive_link",
      label: "Resume",
      external: true,
    },
  ];

  return (
    <nav className="sticky top-0 z-50  shadow-sm w-full">
      {/* Navbar container */}
      <div className="bg-white/50 backdrop-blur flex items-center justify-between md:justify-center h-14 w-full px-4">
        {/* Logo - visible only in mobile */}
        <div className="text-lg font-semibold text-gray-700 md:hidden">Chetan</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-700">
          {navLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : ""}
              className="hover:text-black transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full px-6 py-4 space-y-3 text-gray-700 font-medium text-sm shadow-md z-40 bg-white/50 backdrop-blur">
          {navLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : ""}
              className="block hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
