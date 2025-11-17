"use client";

import { motion } from "framer-motion";

export default function JoinUs() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{
        backgroundImage:
          "url('/assets/business-data-analysis-strategy-marketing-graph-concept.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            JOIN US
          </h2>

          <p className="text-lg leading-relaxed mb-4 max-w-xl">
            At Paves Technologies, we’re not just building software —
            we’re building the future of AI-driven innovation, one idea at a time.
          </p>

          <p className="text-lg leading-relaxed mb-8 max-w-xl">
            We’re a team of passionate technologists, thinkers, and
            problem-solvers who thrive on challenges and believe in the
            power of collaboration.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
            >
              Explore Jobs
            </a>

            <a
              href="#"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Search and Apply
            </a>
          </div>
        </motion.div>

        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
