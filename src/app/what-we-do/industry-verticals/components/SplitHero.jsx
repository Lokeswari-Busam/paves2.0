"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplitHero({ title, description, breadcrumb, image }) {
  return (
    <header className="relative w-full bg-white py-7">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2a3990]">
            {title}
          </h1>

          <p className="mt-4 text-gray-600 text-lg">{description}</p>

          <p className="mt-4 text-sm font-medium text-gray-500">{breadcrumb}</p>
        </motion.div>

        {/* Right Tilt Image */}
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
