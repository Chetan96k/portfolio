// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur">
      <div className="flex justify-center items-center h-14 space-x-10 font-medium text-gray-700 text-sm">
        <a href="#hero" className="hover:text-black transition">Home</a>
        <a href="#projects" className="hover:text-black transition">Projects</a>
        <a href="#about" className="hover:text-black transition">About</a>
        <a href="#contact" className="hover:text-black transition">Contact</a>
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Z6NlbEJQbXNY6ZAhnBpxOtIqNHuCrKOS/view?usp=drive_link" className="hover:text-black transition">Resume</a>

      </div>
    </nav>
  );
}
