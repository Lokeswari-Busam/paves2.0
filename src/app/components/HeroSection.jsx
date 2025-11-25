"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("collapse"), 2000),
      setTimeout(() => setStage("hold"), 3000),
      setTimeout(() => setStage("expand"), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative flex flex-col justify-center h-screen text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/businessman-working-futuristic-office.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-4xl">
        <AnimatePresence mode="wait">
          {/* INITIAL */}
          {stage === "initial" && (
            <motion.div
              key="initial"
              className="text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Paves
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Technologies
              </h1>
            </motion.div>
          )}

          {/* COLLAPSE */}
          {stage === "collapse" && (
            <motion.div key="collapse" className="text-left">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight overflow-hidden"
                initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 85% 0% 0%)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Paves
              </motion.h1>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight overflow-hidden"
                initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 85% 0% 0%)" }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
              >
                Technologies
              </motion.h1>
            </motion.div>
          )}

          {/* HOLD */}
          {stage === "hold" && (
            <motion.div
              key="hold"
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">P</h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">T</h1>
            </motion.div>
          )}

          {/* EXPAND */}
          {stage === "expand" && (
            <motion.div
              key="expand"
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Paving the Bridge Between
              </motion.h1>

              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Tech & Trust
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: stage === "expand" ? 1 : 0,
            y: stage === "expand" ? 0 : 10,
          }}
          transition={{ duration: 0.8 }}
          className="mt-4 md:mt-6 text-base md:text-lg text-gray-300"
        >
          Transforming ideas into scalable solutions
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8"
        >
          <button className="px-6 py-3 md:px-8 md:py-3 text-base md:text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all">
            Explore Services
          </button>

          <button className="px-6 py-3 md:px-8 md:py-3 text-base md:text-lg font-semibold border border-white rounded-full hover:bg-white hover:text-black transition-all">
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
