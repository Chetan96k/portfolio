// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, description, image, deploy }) {
  return (
    <a
      href={deploy}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-3xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition duration-300 overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6 bg-white/80 dark:bg-white/10 backdrop-blur">
        <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base text-black dark:text-white">{description}</p>
      </div>
    </a>
  );
}
