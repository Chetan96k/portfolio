import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center">
      <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
        Made with
        <FaHeart className="text-red-500" />
        by <span className="font-semibold">Chetan</span>
      </p>
    </footer>
  );
}
