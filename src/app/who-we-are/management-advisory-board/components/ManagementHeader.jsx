"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHeader() {
  return (
    <section className="relative flex flex-col md:flex-row w-full overflow-hidden bg-gray-50 min-h-[70vh]">

      {/* --- Left Side (Text Content) --- */}
      <motion.div
        className="relative z-10 md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-16 bg-gradient-to-r from-indigo-100 to-indigo-50"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2a3990] leading-snug mb-4">
          Management & Advisory Board
        </h1>

        {/* ⭐ Breadcrumb (Same Design as Hero Component) */}
        <div className="mt-2 flex items-center gap-2 flex-wrap text-xs md:text-sm font-semibold">
          {[
            { label: "Paves Technologies", href: "/" },
            { label: "management-advisory-board" }
          ].map((item, index, arr) => (
            <span key={index} className="flex items-center gap-2">

              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[#2a3990] hover:text-[#000080] hover:underline transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}

              {/* Separator */}
              {index < arr.length - 1 && (
                <span className="text-gray-400">›</span>
              )}
            </span>
          ))}
        </div>

      </motion.div>

      {/* --- Right Side (Image) --- */}
      <motion.div
        className="relative md:w-1/2 h-[500px] md:h-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/who-we-are/data-analysis-strategy.jpg"
          alt="Management and Advisory Board"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </motion.div>

    </section>
  );
}
