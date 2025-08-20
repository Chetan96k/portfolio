// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import foodOrderingAppLogo from "../assets/food-ordering-app.png";
import portfolioLogo from "../assets/portfolio.png";
import mernAuthLogo from "../assets/MERN-auth-app.png";
import gptflixLogo from "../assets/gptflix.png"

const projects = [
  {
    title: "Portfolio Site",
    description: "Clean, minimal design with React & Tailwind.",
    image: portfolioLogo,
    deploy: "https://chetankanti19.vercel.app/",
  },
  {
    title: "Food Ordering App",
    description: "Swiggy‑style app with restaurants menu & add-to-cart feature.",
    image: foodOrderingAppLogo,
    deploy: "https://food-ordering-app-topc019.vercel.app/",
  },
  {
    title: "MERN Authentication App",
    description: "Full-stack MERN auth with JWT and middleware validation.",
    image: mernAuthLogo,
    deploy: "https://mern-auth-app-blue.vercel.app/login",
  },
  {
    title: "GPTFLIX",
    description: "Smart movie recommendation platform with modern UI.",
    image: gptflixLogo,
    deploy: "https://gptflix-ebon.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 border-b-[12px] border-gray-200 dark:border-gray-800"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 pb-3 text-center text-black dark:text-white">
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
