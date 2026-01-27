"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function JoinUs() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["10%", "70%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);

  return (
    <section className="relative w-full bg-[#2a3990] text-white py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      <div
        ref={wrapperRef}
        className="
          relative 
          max-w-6xl mx-auto 
          h-[450px] sm:h-[500px] md:h-[600px] 
          flex items-center
        "
      >
        {/* IMAGE – scrolls right */}
        <motion.div
          style={{ x: imageX }}
          className="
            absolute top-0 left-0 
            w-full h-full
            rounded-xl overflow-hidden
          "
        >
          <img
            src="/assets/professional-businesswoman-holding-plan.jpg"
            alt="Team"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="
            relative z-20
            w-full 
            max-w-md 
            text-left
            mt-6 sm:mt-0
            pr-0 sm:pr-4
            px-2 sm:px-0
          "
        >
          <p className="text-blue-200 font-semibold tracking-wide mb-2 sm:mb-3 text-sm sm:text-base">
            Build the Future With Us
          </p>

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl 
            font-bold leading-tight 
            mb-3 sm:mb-4
          ">
            Join Our Team and Shape What’s Next
          </h1>

          <p className="
            text-blue-100 
            text-base sm:text-lg 
            mb-4 sm:mb-6
          ">
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
