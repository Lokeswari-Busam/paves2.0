"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GlassGradientHero({ title, description, breadcrumb = [], image }) {
  return (
    <header className="relative h-[75vh] flex items-center justify-center bg-gradient-to-br from-[#1a1f3b] to-[#0d1230] overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-52 h-52 bg-blue-500/30 blur-[120px] rounded-full"></div>

      {/* Background Image */}
      <Image
        src={image}
        fill
        alt="hero-bg"
        className="object-cover opacity-20"
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-10 rounded-3xl max-w-3xl text-center shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>

        <p className="mt-4 text-gray-200 text-lg">{description}</p>

        {/* Breadcrumb Navigation */}
         <p className="mt-4 text-sm text-gray-300 flex justify-center gap-2 flex-wrap">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-pink-300 hover:text-white hover:underline transition font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}

              {/* Add "/" separator except last item */}
              {index < breadcrumb.length - 1 && <span>/</span>}
            </span>
          ))}
        </p>
      </motion.div>
    </header>
  );
}
