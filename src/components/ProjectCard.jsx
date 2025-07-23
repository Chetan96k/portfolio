// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, description, image, github }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </a>
  );
}
