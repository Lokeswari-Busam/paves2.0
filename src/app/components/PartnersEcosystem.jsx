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
      desc: "We believe that true partnership begins with shared success. Our mission is to fully align with your vision, challenges, and long-term goals so we can co-create solutions that deliver measurable, sustainable impact. By deeply understanding your business environment, customer expectations, and operational gaps, we design strategies and digital experiences that don’t just look good—but solve real business problems. ",
    },
    {
      title: "Seeing Through Your Lens",
      desc: "Every business is unique, and so are the challenges and opportunities it encounters. That’s why we immerse ourselves in your world—your industry, your customers, your processes—to understand your perspectives and priorities. This deep discovery helps us uncover insights that truly matter and create solutions that are meaningful, relevant, and aligned with your organizational goals.",
    },
    {
      title: "Building Trust Through Transparency",
      desc: "Trust is the foundation of every long-lasting relationship, and we treat it as non-negotiable. From the very first interaction to final delivery—and beyond—we operate with absolute transparency, honesty, and integrity. We communicate openly, share progress proactively, and ensure that every decision we make prioritizes your best interests. There are no hidden agendas, no surprises, and no gaps in information.",
    },
  ];

  // Generate shapes once for all cards
  const shapes = [];
  const shapeCount = 16; // number of shapes
  for (let i = 0; i < shapeCount; i++) {
    const type = Math.random() > 0.5 ? "circle" : "rect";
    const x = Math.random() * 500;
    const y = Math.random() * 500;
    const size = 40 + Math.random() * 60; // increased size
    const opacity = 0.05 + Math.random() * 0.2;
    const rotation = Math.random() * 360;

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
          rx={Math.random() * 6}
          opacity={opacity}
          transform={`rotate(${rotation} ${x + size / 2} ${y + size / 2})`}
        />
      );
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/future-visions-business-technology-concept.jpg')" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black/40 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex md:flex-row flex-col gap-30">

          {/* CENTER HEADING */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-3 text-center">
              Your Vision, Our Commitment –  
              <br />
              A Partnership Built for the Future
            </h1>

            <p className="text-white text-1xl text-center max-w-3xl mx-auto">
              At Paves Technologies, we believe in creating long-term, meaningful partnerships 
              that go beyond short-term gains. We prioritize trust, collaboration, and alignment 
              with your business objectives to ensure our solutions deliver sustained value over time.
            </p>
          </div>

          {/* HORIZONTAL SCROLLING CARDS */}
          <motion.div style={{ x: cardsX }} className="flex gap-32 pt-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group w-[400px] h-[400px] overflow-hidden flex flex-col items-center justify-center text-center rounded-4xl shadow-xl border border-white/25 transition-all duration-300"
              >
                {/* Dark card background */}
                <div className="absolute inset-0 bg-[#040435] z-0"></div>

                {/* Same geometric shapes for all cards */}
                <svg className="absolute inset-0 w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  {shapes}
                </svg>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-2 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="absolute inset-0 flex items-center justify-center px-4 text-white text-lg leading-relaxed text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  {service.desc}
                </p>
              </div>
            ))}
          </motion.div>

          {/* SECOND SET OF SCROLL-ANIMATED CARDS */}
          <motion.div className="relative w-full h-[500px] overflow-hidden">
            {services.map((service, index) => {
              const start = index / services.length;
              const end = (index + 1) / services.length;

              const cardY = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

              return (
                <motion.div
                  key={index}
                  style={{ y: cardY, opacity }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-300 p-6 shadow-xl rounded-xl w-[450px] h-[450px] flex flex-col justify-center text-center transition-all duration-300"
                >
                  <h3 className="text-4xl font-bold text-blue-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-white text-sm leading-relaxed px-6 opacity-80">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
