import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] border-b-[12px] border-gray-200 bg-white px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 pb-3">
        Contact
      </h2>

      <div className="w-full max-w-2xl space-y-6 text-gray-800">
        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-2xl text-blue-500" />
          <span className="text-lg md:text-xl font-medium">
            +91 8431057512
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl text-green-600" />
          <span className="text-lg md:text-xl font-medium">
            chetankanti19@email.com
          </span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-2xl text-blue-700" />
          <a
            href="https://www.linkedin.com/in/chetankanti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium hover:underline hover:text-blue-700"
          >
            linkedin.com/in/chetankanti
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-2xl text-gray-700" />
          <a
            href="https://github.com/Chetan96k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium hover:underline hover:text-black"
          >
            github.com/Chetan96k
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-2xl text-red-500" />
          <span className="text-lg md:text-xl font-medium">Bengaluru, India</span>
        </div>
      </div>
    </section>
  );
}
