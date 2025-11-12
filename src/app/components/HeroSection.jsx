"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let cleanup;

    import("../animations/heroAnimation").then(({ initHeroAnimation }) => {
      cleanup = initHeroAnimation(heroRef, shape1Ref, shape2Ref);
    });

    return () => cleanup && cleanup();
  }, [isClient]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />

      <svg
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-10"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d23369" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3a4aac" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"
          fill="url(#waveGradient)"
          className="animate-wave"
        />
        <path
          d="M0,350 Q300,300 600,350 T1200,350 L1200,600 L0,600 Z"
          fill="rgba(210, 51, 105, 0.1)"
          className="animate-wave opacity-50"
          style={{ animationDelay: "1s" }}
        />
      </svg>  ``

      {/* Shapes */}
      <div
        ref={shape1Ref}
        className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-60 z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(210, 51, 105, 0.15), transparent)",
        }}
      />
      <div
        ref={shape2Ref}
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(134, 22, 60, 0.15), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, #d23369, #212d74, #3a4aac)",
            }}
          >
            Empowering Innovation Through Technology.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforming ideas into scalable solutions
          </p>
        </>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(to right, #d23369, #86163c)",
            }}
          >
            Explore Services
          </button>
          <button
            className="px-8 py-4 rounded-full border-2 text-[#d23369] font-semibold hover:bg-[#d23369]/5 transition-all duration-300"
            style={{ borderColor: "#d23369" }}
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
