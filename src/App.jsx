// src/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const userPref = localStorage.getItem("theme");
    if (userPref) {
      setIsDark(userPref === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-[999] px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm dark:text-white shadow"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
