"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const STEPS = [
  { step: 1, title: "Apply", description: "Submit your profile and area of expertise" },
  { step: 2, title: "Connect", description: "Meet our team and explore opportunities" },
  { step: 3, title: "Innovate", description: "Join a culture that builds what's next" },
];

export default function JoinUs() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);

  return (
    <section className="relative w-full bg-[#2a3990] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        ref={wrapperRef}
        className="relative max-w-6xl mx-auto min-h-[320px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[560px] flex items-center"
      >
        {/* IMAGE – scrolls right */}
        <motion.div
          style={{ x: imageX }}
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
        >
          <img
            src="/assets/professional-businesswoman-holding-plan.jpg"
            alt="Team"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* CONTENT OVERLAY */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-20 w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-16"
        >
          {/* Left: Heading + CTA */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md px-3 sm:px-0">
            <div className="inline-block px-5 py-1.5 border border-blue-300 text-blue-200 uppercase tracking-widest text-[10px] font-bold mb-4">
              Join Our Team
            </div>

            <div className="flex items-start gap-2 mb-3">
              <div className="w-3 h-3 rounded-sm bg-blue-300 rotate-45 flex-shrink-0 mt-2" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Build the Future With Us
              </h1>
            </div>

            <div className="h-0.5 w-12 bg-blue-300 rounded-full mb-4 opacity-70" />

            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6">
              Be part of a culture that values innovation, growth, creativity, and meaningful impact.
            </p>

            <Link
              href="/careers"
              className="inline-block px-6 py-2.5 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
              style={{ background: "#000080" }}
            >
              Join Us
            </Link>
          </div>

          {/* Right: Process Steps */}
          <div className="hidden md:block pt-2">
            <h3 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-6">
              How It Works
            </h3>
            <div className="space-y-5">
              {STEPS.map((s, i) => (
                <div key={s.step} className="flex items-start gap-5">
                  {/* Step indicator + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-300 text-[#2a3990] font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {s.step}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="w-px bg-gradient-to-b from-blue-300 to-transparent mt-1"
                        style={{ height: "2.5rem" }}
                      />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pb-1">
                    <div className="px-4 py-3 rounded-md border border-white/20 bg-white/10">
                      <h4 className="font-semibold text-white text-sm mb-0.5">{s.title}</h4>
                      <p className="text-xs text-blue-100/80">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
