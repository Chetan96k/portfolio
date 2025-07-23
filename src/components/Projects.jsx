// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E‑Commerce App",
    description: "A modern shopping experience with real-time API integration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshwB_0h2wjtfTBF5zy_BebqURStzSeC6TRQ&s",
    github: "https://github.com/Chetan96k/ecommerce-app",
  },
  {
    title: "Portfolio Site",
    description: "Clean, minimal design with React & Tailwind.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshwB_0h2wjtfTBF5zy_BebqURStzSeC6TRQ&s",
    github: "https://github.com/Chetan96k/portfolio",
  },
  {
    title: "Food Delivery",
    description: "Swiggy‑style app with user location & menus.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshwB_0h2wjtfTBF5zy_BebqURStzSeC6TRQ&s",
    github: "https://github.com/Chetan96k/food-delivery",
  },
  {
    title: "Notes App",
    description: "CRUD note-taking with localStorage persistence.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshwB_0h2wjtfTBF5zy_BebqURStzSeC6TRQ&s",
    github: "https://github.com/Chetan96k/notes-app",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white border-b-[12px] border-gray-200"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 pb-3 text-center">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
