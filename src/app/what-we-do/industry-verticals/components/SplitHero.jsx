"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SplitHero({ title, description, breadcrumb = [], image }) {
  return (
    <header className="relative w-full bg-white py-7">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2a3990]">
            {title}
          </h1>

          <p className="mt-4 text-gray-600 text-lg">{description}</p>

          {/* BREADCRUMB NAVIGATION */}
          <p className="mt-4 text-sm font-medium flex gap-2 flex-wrap text-gray-600">
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
                  <span className="text-gray-500 font-semibold">{item.label}</span>
                )}

                {/* Separator */}
                {index < breadcrumb.length - 1 && (
                  <span className="text-gray-400">/</span>
                )}
              </span>
            ))}
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ rotate: 2, scale: 1.02 }}
          className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </header>
  );
}
