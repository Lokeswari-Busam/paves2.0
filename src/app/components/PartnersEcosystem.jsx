"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardsX = useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]);

  const services = [
    {
      title: "Your Success Is Our Success",
      desc: "We believe that true partnership begins with shared success. Our mission is to fully align with your vision, challenges, and long-term goals so we can co-create solutions that deliver measurable, sustainable impact."
    },
    {
      title: "Seeing Through Your Lens",
      desc: "Every business is unique, and so are the challenges and opportunities it encounters. We immerse ourselves in your world to understand your priorities and create meaningful solutions."
    },
    {
      title: "Building Trust Through Transparency",
      desc: "Trust is the foundation of every long-lasting relationship. We communicate openly, share progress proactively, and keep transparency at the core of everything we do."
    },
  ];

  // geometric shapes
  const shapes = [];
  for (let i = 0; i < 16; i++) {
      const type = Math.random() > 0.5 ? "circle" : "rect";
      const x = Math.random() * 400;
      const y = Math.random() * 300;
      const size = 40 + Math.random() * 50;
      const opacity = 0.05 + Math.random() * 0.15;

      if (type === "circle") {
          shapes.push(
              <circle
                  key={`circle-${i}`}
                  cx={x}
                  cy={y}
                  r={size / 2}
                  fill="#4e5d94"
                  opacity={opacity}
              />
          );
      } else {
          shapes.push(
              <rect
                  key={`rect-${i}`}
                  x={x}
                  y={y}
                  width={size}
                  height={size}
                  fill="#4e5d94"
                  rx={4}
                  opacity={opacity}
              />
          );
      }
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/future-visions-business-technology-concept.jpg')",
      }}
    >
      {/* black overlay */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black/40 overflow-hidden px-4 md:px-10">

        {/* HEADING */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-4xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug px-4">
            Your Vision, Our Commitment – <br />
            A Partnership Built for the Future
          </h1>
          <p className="text-sm md:text-lg opacity-90">
            At Paves Technologies, we create long-term strategic partnerships to
            ensure our solutions deliver sustainable long-term value.
          </p>
        </div>

        {/* HORIZONTAL → VERTICAL RESPONSIVE CARDS */}
        <motion.div
          style={{ x: cardsX }}
          className="hidden md:flex gap-36 pt-20"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[380px] h-[380px] overflow-hidden rounded-3xl border border-white/20 shadow-xl flex flex-col items-center justify-center text-center bg-[#040435]"
            >
              {/* geometric shapes */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                {shapes}
              </svg>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 z-20">
                {service.title}
              </h3>

              <p className="text-white px-4 opacity-0 group-hover:opacity-100">
                {service.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* MOBILE VERTICAL STACK */}
        <div className="flex flex-col md:hidden gap-6 mt-10 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[330px] rounded-3xl bg-[#040435] border border-white/20 shadow-xl p-6 text-white flex flex-col justify-center text-center"
            >
              <svg className="absolute inset-0 w-full h-full opacity-40">
                {shapes}
              </svg>

              <h3 className="text-2xl font-bold mb-3 relative z-20">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-20 opacity-90">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
