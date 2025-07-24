import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-white text-black dark:bg-black dark:text-white">
      <p className="text-lg flex items-center justify-center gap-2">
        Made with
        <FaHeart className="text-red-500" />
        by <span className="font-semibold">Chetan</span>
      </p>
    </footer>
  );
}
