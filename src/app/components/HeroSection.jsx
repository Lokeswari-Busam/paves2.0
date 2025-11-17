"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("collapse"), 2000), // Collapse after 2s
      setTimeout(() => setStage("hold"), 3000), // Hold P & T for 0.5s
      setTimeout(() => setStage("expand"), 3000), // Expand after 3.5s
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
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/assets/Gemini_Generated_Image_brn12tbrn12tbrn1.png')] bg-cover bg-center " />
      {/* <svg
        ref={svgRef}
        className="absolute inset-0 w-[200%] h-full opacity-40"
        viewBox="0 0 2400 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d23369" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3a4aac" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <g ref={svgRef}>
          <path
            d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M1200,300 Q1500,250 1800,300 T2400,300 L2400,600 L1200,600 Z"
            fill="url(#waveGradient)"
          />
        </g>
      </svg>{" "}
      `` */}
      {/* Shapes */}
      {/* <div
        ref={shape1Ref}
        className="absolute top-20 right-30 w-30 h-30 rounded-full  z-10 bg-primary shadow-primary shadow-2xl"
        // style={{
        //   background:
        //     "radial-gradient(circle, rgba(210, 51, 105, 0.5), transparent)",
        // }}
      /> */}
      {/* <div
        ref={shape2Ref}
        className="absolute bottom-20 left-30 w-40 h-40 rounded-full bg-primary shadow-primary shadow-2xl z-10"
        // style={{
        //   background:
        //     "radial-gradient(circle, rgba(134, 22, 60, 0.5), transparent)",
        // }}
      /> */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <>
          <h1
            ref={heroHeadingRef}
            className="text-7xl font-bold mb-6 leading-tight text-white"
            // style={{
            //   backgroundImage:
            //     "linear-gradient(to right, #d23369, #212d74, #3a4aac)",
            // }}
          >
            Empowering Innovation Through Technology.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming ideas into scalable solutions
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
