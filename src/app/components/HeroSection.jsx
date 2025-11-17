"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("collapse"), 2000), // Collapse after 2s
      setTimeout(() => setStage("hold"), 3000),     // Hold P & T for 0.5s
      setTimeout(() => setStage("expand"), 3000),   // Expand after 3.5s
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Main Content */}
      <div className="relative z-10 px-16 max-w-4xl">
        <AnimatePresence mode="wait">
          {/* 🟩 INITIAL STAGE */}
          {stage === "initial" && (
            <motion.div
              key="initial"
              className="text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-7xl font-bold leading-tight">Paves</h1>
              <h1 className="text-7xl font-bold leading-tight">Technologies</h1>
            </motion.div>
          )}

          {/* 🟦 COLLAPSE STAGE */}
          {stage === "collapse" && (
            <motion.div key="collapse" className="text-left">
              {/* “Paves” collapses right-to-left */}
              <motion.h1
                className="text-7xl font-bold leading-tight overflow-hidden"
                initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 85% 0% 0%)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Paves
              </motion.h1>

              {/* “Technologies” collapses right-to-left */}
              <motion.h1
                className="text-7xl font-bold leading-tight overflow-hidden"
                initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 85% 0% 0%)" }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
              >
                Technologies
              </motion.h1>
            </motion.div>
          )}

          {/* 🟫 HOLD STAGE */}
          {stage === "hold" && (
            <motion.div
              key="hold"
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-7xl font-bold leading-tight">P</h1>
              <h1 className="text-7xl font-bold leading-tight">T</h1>
            </motion.div>
          )}

          {/* 🟨 EXPAND STAGE */}
          {stage === "expand" && (
            <motion.div
              key="expand"
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* P → Paving the Bridge Between */}
              <motion.h1
                className="text-6xl font-bold leading-tight overflow-hidden whitespace-nowrap"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Paving the Bridge Between
              </motion.h1>

              {/* T → Tech & Trust */}
              <motion.h1
                className="text-6xl font-bold leading-tight overflow-hidden whitespace-nowrap"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                Tech & Trust
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline (only visible after expand) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: stage === "expand" ? 1 : 0,
            y: stage === "expand" ? 0 : 10,
          }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-300"
        >
          Transforming ideas into scalable solutions
        </motion.p>

        {/* Buttons (always visible) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex gap-4 mt-8"
        >
          <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all">
            Explore Services
          </button>
          <button className="px-8 py-3 text-lg font-semibold border border-white rounded-full hover:bg-white hover:text-black transition-all">
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}