"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * HeroUltimate.jsx
 *
 * Single-file premium hero — Balanced animations for FinTech + AI.
 * Local preview image path (background image #2):
 * /mnt/data/A_digital_artwork_showcases_an_abstract_representa.png
 *
 * For production: move file to public/assets/hero-bg.png and set USE_LOCAL_PREVIEW=false
 */

const IMAGE_LOCAL = "/mnt/data/A_digital_artwork_showcases_an_abstract_representa.png";
const IMAGE_PUBLIC = "/assets/hero-background.png";
const USE_LOCAL_PREVIEW = false; // set false and copy image to public/ for production

export default function HeroUltimate() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const cardControls = useAnimation();

  // entrance animation for glass card
  useEffect(() => {
    cardControls.start({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
  }, [cardControls]);

  // track mouse for parallax & spotlight
  useEffect(() => {
    function onMove(e) {
      if (!rootRef.current) return;
      const r = rootRef.current.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      setMouse({ x, y });

      // small parallax on background image
      if (bgRef.current) {
        const px = (x / r.width - 0.5) * 6; // -3..3
        const py = (y / r.height - 0.5) * 6; // -3..3
        bgRef.current.style.transform = `translate3d(${px}px, ${py}px, 0) scale(1.02)`;
      }
    }
    const el = rootRef.current;
    el?.addEventListener("mousemove", onMove);
    return () => el?.removeEventListener("mousemove", onMove);
  }, []);

  // particles positions computed once
  const particles = useRef(
    Array.from({ length: 20 }).map(() => ({
      l: Math.random() * 100,
      t: Math.random() * 100,
      s: Math.random() * 6 + 2,
      d: Math.random() * 6 + 6,
      delay: Math.random() * 4,
    }))
  ).current;

  // shimmer animation keyframes will be in style jsx
  return (
    <section
      ref={rootRef}
      className="relative w-full h-screen overflow-hidden bg-white dark:bg-slate-900"
      aria-label="Hero"
    >
      {/* Background image layer */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {USE_LOCAL_PREVIEW ? (
          <img
            alt="Hero background"
            src={IMAGE_LOCAL}
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
          />
        ) : (
          <img
            alt="Hero background"
            src={IMAGE_PUBLIC}
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
          />
        )}
      </div>

      {/* subtle dim overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

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
              <h1 className="text-7xl font-semibold leading-tight">Paves</h1>
              <h1 className="text-7xl font-semibold leading-tight">Technologies</h1>
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
              transition={{ duration: 0.7 }}
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
          <button className="px-8 py-3 text-lg  text-white bg-blue-400 rounded-full hover:bg-blue-700 transition-all">
            Explore Services
          </button>
          <button className="px-8 py-3 text-lg  border border-white rounded-full hover:bg-white hover:text-black transition-all">
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* scoped styles */}
      <style jsx>{`
        /* beam animation */
        @keyframes beamMove {
          0% { transform: translateX(-8%) skewX(-15deg); opacity: 0.45; }
          50% { transform: translateX(6%) skewX(-15deg); opacity: 0.6; }
          100% { transform: translateX(-8%) skewX(-15deg); opacity: 0.45; }
        }
        .animate-beam { animation: beamMove 12s linear infinite; }
        .animate-beam.delay-1 { animation-delay: 2s; }

        /* circuit line dash */
        .circuit { stroke-dasharray: 220; stroke-dashoffset: 220; animation: dash 5s linear infinite; }
        .circuit.delay-1 { animation-delay: 0.6s; }
        .circuit.delay-2 { animation-delay: 1.3s; }
        @keyframes dash {
          0% { stroke-dashoffset: 220; opacity: 0.6; }
          50% { stroke-dashoffset: 110; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.6; }
        }

        /* node pulse */
        .nodePulse { transform-origin: center; animation: nodePop 2.6s ease-in-out infinite; }
        .nodePulse.delay-1 { animation-delay: 0.3s; }
        .nodePulse.delay-2 { animation-delay: 0.6s; }
        @keyframes nodePop {
          0% { transform: scale(0.95); opacity: 0.9; }
          50% { transform: scale(1.14); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.9; }
        }

        /* waves */
        .wave { transform: translateY(10px); animation: waveMove 8s ease-in-out infinite; }
        .wave-2 { animation-duration: 10s; opacity: 0.9; }
        @keyframes waveMove {
          0% { transform: translateY(6px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(6px); }
        }

        /* shimmer on AI-First text */
        .aiFirst {
          background-size: 200% 100%;
          animation: shimmer 3.6s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-beam, .circuit, .wave, .aiFirst, .nodePulse, [data-animate] { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
