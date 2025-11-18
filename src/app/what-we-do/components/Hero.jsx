"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ title, breadcrumb = [], image, description }) {
  return (
    <header className="relative overflow-hidden h-[70vh] bg-gray-100">

      {/* HERO IMAGE — Full width → animates to right half */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "50%" }}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-7 bottom-6 overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-20 h-full flex items-center px-8 lg:px-6"
      >
        <div className="max-w-2xl">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2a3990] leading-tight">
            {title}
          </h1>

          {/* DESCRIPTION */}
          {description && (
            <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          )}

          {/* ⭐ CLICKABLE BREADCRUMB */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">

                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#2a3990] hover:text-[#000080] hover:underline transition font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-semibold">
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {index < breadcrumb.length - 1 && (
                  <span className="text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
