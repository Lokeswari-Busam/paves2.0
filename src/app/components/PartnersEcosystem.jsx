"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ------------------------
// Flip Card Component
// ------------------------
function FlipCard({ title, desc, shapes, flipped, onClick }) {
  return (
    <div
      className="
        w-[260px] h-[260px]
        sm:w-[300px] sm:h-[300px]
        md:w-[360px] md:h-[360px]
        lg:w-[380px] lg:h-[380px]
        perspective cursor-pointer
      "
      style={{ perspective: "1200px" }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full rounded-3xl"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-3xl bg-[#040435] overflow-hidden shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-40">
            {shapes}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-20">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              {title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-3xl bg-[#040435] overflow-hidden shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-40">
            {shapes}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-white opacity-90 text-sm sm:text-base leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ------------------------
// Main Services Section
// ------------------------
export default function ServicesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardsX = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  const services = [
    {
      title: "Your Success Is Our Success",
      desc:
        "We believe that true partnership begins with shared success. Our mission is to fully align with your vision, challenges, and long-term goals so we can co-create solutions that deliver measurable, sustainable impact.",
    },
    {
      title: "Seeing Through Your Lens",
      desc:
        "Every business is unique, and so are the challenges and opportunities it encounters. We immerse ourselves in your world to understand your priorities and create meaningful solutions.",
    },
    {
      title: "Building Trust Through Transparency",
      desc:
        "Trust is the foundation of every long-lasting relationship. We communicate openly, share progress proactively, and keep transparency at the core of everything we do.",
    },
  ];

  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generatedShapes = Array.from({ length: 16 }, (_, i) => {
      const x = Math.random() * 400;
      const y = Math.random() * 300;
      const size = 40 + Math.random() * 50;
      const opacity = 0.05 + Math.random() * 0.15;

      return Math.random() > 0.5 ? (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={size / 2}
          fill="#4e5d94"
          opacity={opacity}
        />
      ) : (
        <rect
          key={i}
          x={x}
          y={y}
          width={size}
          height={size}
          fill="#4e5d94"
          opacity={opacity}
        />
      );
    });

    setShapes(generatedShapes);
  }, []);

  // -------- Flip Logic --------
  const [activeIndex, setActiveIndex] = useState(null);
  const timerRef = useRef(null);

  const handleCardClick = (i) => {
    if (activeIndex === i) {
      setActiveIndex(null);
      clearTimeout(timerRef.current);
      return;
    }

    setActiveIndex(i);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 4000);
  };
  // ----------------------------

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[220vh] sm:h-[240vh] md:h-[250vh]
        w-full
        bg-fixed bg-cover bg-center
      "
      style={{
        backgroundImage:
          "url('/assets/future-visions-business-technology-concept.jpg')",
      }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black/40 overflow-hidden px-4 md:px-10">

        {/* HEADING */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center max-w-4xl mx-auto px-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
              Your Vision, Our Commitment –
              <br /> A Partnership Built for the Future
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              At Paves Technologies, we create long-term strategic partnerships
              to ensure our solutions deliver sustainable long-term value.
            </p>
          </div>
        </div>

        {/* DESKTOP HORIZONTAL */}
        <motion.div
          style={{ x: cardsX }}
          className="hidden md:flex gap-28 lg:gap-36 pt-20"
        >
          {services.map((service, i) => (
            <FlipCard
              key={i}
              title={service.title}
              desc={service.desc}
              shapes={shapes}
              flipped={activeIndex === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </motion.div>

        {/* MOBILE VERTICAL */}
        <div className="flex flex-col md:hidden gap-6 mt-16 w-full items-center">
          {services.map((service, i) => (
            <FlipCard
              key={i}
              title={service.title}
              desc={service.desc}
              shapes={shapes}
              flipped={activeIndex === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
