"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnsRef = useRef(null);
  const imageRef = useRef(null);

  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from(heroRef.current, { opacity: 0 })
        .from(titleRef.current, { y: 40, opacity: 0 }, "-=0.6")
        .from(subtitleRef.current, { y: 30, opacity: 0 }, "-=0.4")
        .from(btnsRef.current, { y: 20, opacity: 0 }, "-=0.3")
        .from(imageRef.current, { x: 50, opacity: 0, scale: 0.95 }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 pt-32 pb-24"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-[#000080]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-extrabold text-primary leading-tight"
          >
            Paving the way to a smarter, more connected future.
          </h1>

          <p
            ref={subtitleRef}
            className="mt-5 text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            We transform global businesses through AI, cloud, data, and enterprise
            automation — delivering measurable impact across banking, payments,
            and digital innovation.
          </p>

          <div
            ref={btnsRef}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/what-we-do"
              className="px-6 py-3 rounded-full bg-[#000080] text-white font-semibold hover:bg-[#0000a8] transition"
            >
              Explore Our Solutions
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-[#000080] text-[#000080] font-semibold hover:bg-[#000080] hover:text-white transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div
          ref={imageRef}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-[350px] h-[350px]">
            <div className="absolute inset-0 bg-linear-to-tr from-[#000080] to-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src="/assets/what_we_do_hero.jpeg"
              alt="Technology illustration"
              className="relative z-10 w-full h-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
