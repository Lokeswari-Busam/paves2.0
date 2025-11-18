"use client";

import { motion } from "framer-motion";

export default function PaymentsHero({ title, description, breadcrumb = [] }) {
  return (
    <header className="relative w-full py-20 bg-[#2a3990] overflow-hidden text-white">

      {/* Decorative SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0 L0 40 M0 0 L40 40"
              stroke="white"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          {title}
        </h1>

        {description && (
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}

        {/* Breadcrumb */}
        <div className="mt-4 flex items-center gap-2 flex-wrap text-sm">
          {breadcrumb.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white/80 hover:text-white underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-white/60">{item.label}</span>
              )}
              {idx < breadcrumb.length - 1 && <span className="text-white/40">›</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
