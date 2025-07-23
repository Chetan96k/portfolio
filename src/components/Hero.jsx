// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100vh] flex flex-col justify-center items-center text-center px-6 border-b-[12px] border-gray-200 bg-white"
    >
      <h1 className="text-5xl md:text-7xl font-semibold mb-4">
        Hi, I'm Chetan.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        I build fast, accessible, modern web applications.
      </p>
      <a
        href="#projects"
        className="mt-8 text-sm font-medium bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
      >
        View My Work
      </a>
    </section>
  );
}
