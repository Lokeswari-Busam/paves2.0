"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [stage, setStage] = useState("initial");
  const heroHeadingRef = useRef(null); // ✅ FIXED

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("collapse"), 2000),
      setTimeout(() => setStage("hold"), 2500),
      setTimeout(() => setStage("expand"), 3500),
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
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/assets/Gemini_Generated_Image_brn12tbrn12tbrn1.png')] bg-cover bg-center opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <>
          <h1
            ref={heroHeadingRef}
            className="text-7xl font-bold mb-6 leading-tight text-white"
          >
            Empowering Innovation Through Technology.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming ideas into scalable solutions.
          </p>
        </>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(to right, #364ac0, #212d74)",
            }}
          >
            Explore Services
          </button>

          <button className="px-8 py-3 text-lg font-semibold border border-white rounded-full hover:bg-white hover:text-black transition-all">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
