import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] border-b-[12px] border-gray-200 dark:border-gray-800 px-6 py-16 flex flex-col items-center bg-white text-black dark:bg-black dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 pb-3">Contact</h2>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-10 text-center">
        Feel free to reach out—I’m always open to new opportunities and
        collaborations.
      </p>

      <div className="m-auto px-4 md:px-0 space-y-6">
        {/* Phone */}
        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4 last:border-none">
          <FaPhone className="text-2xl text-blue-500 transition-transform duration-300 hover:scale-110" />
          <span className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
            +91 8431057512
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4 last:border-none">
          <FaEnvelope className="text-2xl text-green-600 transition-transform duration-300 hover:scale-110" />
          <span className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
            chetankanti19@email.com
          </span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4 last:border-none">
          <FaLinkedin className="text-2xl text-blue-700 transition-transform duration-300 hover:scale-110" />
          <a
            href="https://www.linkedin.com/in/chetankanti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
          >
            linkedin.com/in/chetankanti
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4 last:border-none">
          <FaGithub className="text-2xl text-gray-700 transition-transform duration-300 hover:scale-110" />
          <a
            href="https://github.com/Chetan96k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            github.com/Chetan96k
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-2xl text-red-500 transition-transform duration-300 hover:scale-110" />
          <span className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
            Bengaluru, India
          </span>
        </div>
      </div>
    </section>
  );
}
