"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function JoinUs() {
  const wrapperRef = useRef(null);

  // Track scroll movement
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  // IMAGE moves to the RIGHT on scroll
  const imageX = useTransform(scrollYProgress, [0, 1], ["-20%", "70%"]);

  // TEXT fades + moves upward a bit
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);

  return (
    <section className="relative w-full bg-[#2a3990] text-white py-16 px-6 overflow-hidden">
      <div
        ref={wrapperRef}
        className="relative max-w-7xl mx-auto h-[600px] flex items-center"
      >
        {/* FULL-WIDTH IMAGE that slides RIGHT */}
        <motion.div
          style={{ x: imageX }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src="/assets/professional-businesswoman-holding-plan.jpg"
            alt="Team"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT SIDE TEXT — Revealed on scroll */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-20 w-full max-w-md text-left pr-4"
        >
          <p className="text-blue-200 font-semibold tracking-wide mb-3">
            Build the Future With Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Join Our Team and Shape What’s Next
          </h1>

          <p className="text-blue-100 text-lg mb-6">
            Be part of a culture that values innovation, growth,
            creativity, and meaningful impact.
          </p>

          <Link
            href="/careers"
            className="px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
            style={{ background: "#000080" }}
          >
            Join Us
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
