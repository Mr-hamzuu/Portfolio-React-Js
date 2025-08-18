import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1b2a2f] text-white grid place-items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center"
      >
        
        <svg
          viewBox="0 0 400 200"
          className="mx-auto mb-6 w-64 h-32"
          aria-hidden="true"
        >
          <text x="50%" y="50%" textAnchor="middle" dy=".35em"
            className="fill-white"
            style={{ fontSize: "72px", fontWeight: 800 }}
          >
            404
          </text>
        </svg>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Page not found</h1>
        <p className="text-gray-300 mb-8">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, renamed, or doesn’t exist.
        </p>

        <div className="flex items-center gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2 rounded-full bg-cyan-600 hover:bg-cyan-500 transition font-medium"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-full border border-gray-500 hover:border-white transition"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </main>
  );
}
