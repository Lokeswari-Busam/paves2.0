"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [stage, setStage] = useState("initial");
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const generated = Array.from({ length: 6 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      drift: Math.random() * -200 - 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("collapse"), 400),
      setTimeout(() => setStage("expand"), 700),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden pt-20 md:pt-0">
      <Image
        src="/assets/hero-background.png"
        alt=""
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-blue-900/50" />

      {/* Radial Blue Highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.18),transparent_60%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ x: p.x, y: p.y, opacity: 0 }}
            animate={{ y: [p.y, p.y + p.drift], opacity: [0, 0.6, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">

            {/* INITIAL — decorative only, aria-hidden */}
            {stage === "initial" && (
              <motion.div
                key="initial"
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                aria-hidden="true"
              >
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent block">
                    Paves
                  </span>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent block mt-2">
                    Technologies
                  </span>
                </div>
              </motion.div>
            )}

            {/* COLLAPSE — decorative only, aria-hidden */}
            {stage === "collapse" && (
              <motion.div key="collapse" className="text-left" aria-hidden="true">
                <motion.div
                  className="text-5xl sm:text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent"
                  animate={{
                    scale: 1.1,
                    textShadow: [
                      "0 0 20px rgba(59,130,246,0.5)",
                      "0 0 30px rgba(59,130,246,0.7)",
                      "0 0 20px rgba(59,130,246,0.5)",
                    ],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  P
                </motion.div>
                <motion.div
                  className="text-5xl sm:text-7xl md:text-9xl font-bold -mt-2 bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent"
                  animate={{
                    scale: 1.1,
                    textShadow: [
                      "0 0 20px rgba(59,130,246,0.5)",
                      "0 0 30px rgba(59,130,246,0.7)",
                      "0 0 20px rgba(59,130,246,0.5)",
                    ],
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  T
                </motion.div>
              </motion.div>
            )}

            {/* EXPAND */}
            {stage === "expand" && (
              <motion.div key="expand" className="text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 inline-block border border-blue-400 text-blue-300 px-4 py-1.5 text-[11px] tracking-widest uppercase font-semibold"
                >
                  AI &amp; Cloud · Financial Technology
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Paving the Bridge Between
                </motion.h1>
                <motion.h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Tech & Trust
                  </span>
                  <motion.span
                    className="block h-1 bg-blue-500 mt-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.h1>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: stage === "expand" ? 1 : 0,
              y: stage === "expand" ? 0 : 10,
            }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl"
          >
            Transforming ideas into{" "}
            <span className="text-blue-300 font-semibold">scalable solutions</span>{" "}
            with cutting-edge AI and cloud technologies
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === "expand" ? 1 : 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <Link href="/what-we-do/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full text-white font-semibold text-sm shadow-lg"
                style={{ background: "#2563eb" }}
              >
                <span className="relative z-10">Explore Services</span>
                <ArrowRight size={16} className="relative z-10" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: stage === "expand" ? 1 : 0 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}