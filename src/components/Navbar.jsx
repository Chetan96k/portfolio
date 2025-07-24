import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ isDark, toggleDarkMode }) {
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
    <nav className="sticky top-0 z-50 shadow-sm w-full">
      {/* Navbar container */}
      <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur h-14 w-full flex items-center px-4">
        {/* Mobile Logo (left) */}
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 md:hidden">
          Chetan
        </div>

        {/* Desktop Nav Links (centered absolutely) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 font-medium text-sm text-gray-700 dark:text-gray-200">
          {navLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : ""}
              className="hover:text-black dark:hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Dark Mode Button (right) - desktop only */}
        <div className="hidden md:block absolute right-4">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm dark:text-white shadow"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile controls (right) */}
        <div className="flex items-center space-x-3 md:hidden ml-auto">
          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-xs dark:text-white shadow"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Menu icon */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full px-6 py-4 space-y-3 font-medium text-sm shadow-md z-40 bg-white/50 dark:bg-white/10 backdrop-blur text-gray-700 dark:text-gray-200">
          {navLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : ""}
              className="block hover:text-black dark:hover:text-white transition"
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
