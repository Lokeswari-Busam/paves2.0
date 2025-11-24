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

      {/* light streak beams (diagonal subtle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="beamGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <rect x="10%" y="0" width="40%" height="100%" transform="skewX(-15)" fill="url(#beamGrad)" className="opacity-40 animate-beam" />
        <rect x="55%" y="0" width="28%" height="100%" transform="skewX(-12)" fill="url(#beamGrad)" className="opacity-30 animate-beam delay-1" />
      </svg>

      {/* AI circuit lines - subtle animated strokes */}
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" aria-hidden>
        <g stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.12" fill="none">
          <path d="M120 260 L360 240 L680 300" className="circuit" />
          <path d="M420 140 L760 160 L1120 120" className="circuit delay-1" />
          <path d="M980 420 L1300 380 L1680 420" className="circuit delay-2" />
        </g>
        {/* small node circles */}
        <g fill="#3b82f6" fillOpacity="0.9">
          <circle cx="120" cy="260" r="3" className="nodePulse" />
          <circle cx="680" cy="300" r="3" className="nodePulse delay-1" />
          <circle cx="1120" cy="120" r="3" className="nodePulse delay-2" />
        </g>
      </svg>

      {/* wave layers (soft moving shapes) */}
      <svg className="absolute left-0 bottom-0 w-full h-48 pointer-events-none" preserveAspectRatio="none" aria-hidden>
        <path className="wave wave-1" d="M0 120 C 300 0 600 180 1000 120 L 100% 200 L 0 200 Z" fill="rgba(14,165,233,0.04)"></path>
        <path className="wave wave-2" d="M0 140 C 350 40 700 200 1000 140 L 100% 200 L 0 200 Z" fill="rgba(59,130,246,0.03)"></path>
      </svg>

      {/* spotlight radial that follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(360px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.12), transparent 30%)`,
          mixBlendMode: "screen",
        }}
        aria-hidden
      />

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              width: p.s,
              height: p.s,
              background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
              filter: "blur(6px)",
              opacity: 0.95,
            }}
            animate={{ y: [0, -14, 0], x: [0, (i % 2 ? 8 : -8), 0] }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      {/* bottom gradient overlay */}
      <div className="absolute left-0 right-0 bottom-0 h-48 pointer-events-none bg-gradient-to-t from-black/28 to-transparent" />

      {/* top-right dark toggle */}
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={() => setIsDark((v) => !v)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-sm shadow-sm hover:scale-105 transition"
        >
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* CONTENT: left glass card */}
      <div className="relative z-30 h-full flex items-center px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={cardControls}
            style={{
              background: isDark ? "rgba(6,8,23,0.56)" : "rgba(255,255,255,0.72)",
              backdropFilter: "blur(10px)",
              border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(2,6,23,0.06)",
              boxShadow: isDark ? "0 12px 40px rgba(2,6,23,0.55)" : "0 8px 30px rgba(2,6,23,0.06)",
            }}
            className="rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center font-semibold bg-blue-50 text-blue-700">
                PT
              </div>
              <div className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>Paves Technologies</div>
            </div>

            <motion.h1
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`mt-4 text-3xl md:text-4xl font-extrabold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
            >
              The Future of <br />
              Financial Services is{" "}
              <span className="aiFirst inline-block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-First
              </span>
            </motion.h1>

            <p className={`mt-4 max-w-lg ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Delivering enterprise-grade AI solutions, secure cloud platforms, and automation that transforms financial services.
            </p>

            <div className="mt-6 flex gap-3">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(59,130,246,0.2)" }}
                href="/ai-labs"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium"
              >
                Go to AI Labs
              </motion.a>

              <motion.a whileHover={{ scale: 1.03 }} href="/insights" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-sm text-slate-700 bg-transparent">
                Insights
              </motion.a>
            </div>
          </motion.div>

          <div className={`mt-4 text-sm ${isDark ? "text-slate-300/90" : "text-slate-700/90"}`}>
            <strong>Enterprise • Secure • Scalable</strong> — modern AI-first solutions for finance.
          </div>
        </div>
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
