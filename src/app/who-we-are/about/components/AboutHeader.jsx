"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <h2 className="text-6xl md:text-6xl font-semibold text-indigo-900 leading-snug mb-4">
          ABOUT
        </h2>
        <h1 className="text-2xl font-bold text-pink-700 mb-3 tracking-wide">
          Paves Technologies &gt; About
        </h1>
      </motion.div>

      {/* --- Right Side (Image  */}
      <motion.div
        className="relative md:w-1/2 h-[500px] md:h-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <Image
          src="/assets/modern-equipped-computer-lab.jpg"
          alt="About Paves Technologies"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
