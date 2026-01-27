"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("collapse"), 1000),      // After 1s: show P & T
      setTimeout(() => setStage("expand"), 1500),        // After 1.5s total: show full tagline
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden pt-20 md:pt-0"
      style={{
        backgroundImage: "url('/assets/hero-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-blue-900/50"></div>
      
      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-7xl mx-auto">
          
          <AnimatePresence mode="wait">
            {/* INITIAL - Full Company Name (1s) */}
            {stage === "initial" && (
              <motion.div
                key="initial"
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                    Paves
                  </span>
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mt-1 md:mt-2">
                  <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                    Technologies
                  </span>
                </h1>
              </motion.div>
            )}

            {/* COLLAPSE - Just P & T (0.5s) */}
            {stage === "collapse" && (
              <motion.div
                key="collapse"
                className="text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.h1
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: 1.1,
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.7)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  P
                </motion.h1>
                <motion.h1
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent -mt-1 md:-mt-2"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: 1.1,
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.7)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  T
                </motion.h1>
              </motion.div>
            )}

            {/* EXPAND - Full Tagline (after 1.5s total) */}
            {stage === "expand" && (
              <motion.div
                key="expand"
                className="text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* P expands to "Paving the Bridge Between" */}
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 md:mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="inline-block text-white">
                    Paving the Bridge Between
                  </span>
                </motion.h1>

                {/* T expands to "Tech & Trust" */}
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <span className="inline-block relative">
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                      Tech & Trust
                    </span>
                    <motion.span
                      className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </span>
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TAGLINE - Smaller Font */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: stage === "expand" ? 1 : 0,
              y: stage === "expand" ? 0 : 15,
            }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light max-w-3xl leading-relaxed"
          >
            Transforming ideas into{" "}
            <span className="font-semibold text-blue-300">scalable solutions</span>{" "}
            with cutting-edge AI and cloud technologies
          </motion.p>

          {/* BUTTONS - Smaller Size */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: stage === "expand" ? 1 : 0,
              y: stage === "expand" ? 0 : 15,
            }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="group px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/40 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold border-2 border-white/50 backdrop-blur-sm bg-white/5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: stage === "expand" ? 1 : 0,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1.5">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}