"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const PARTNERSHIPS = [
  {
    title: "Your Success Is Our Success",
    desc: "We believe that true partnership begins with shared success. Our mission is to fully align with your vision, challenges, and long-term goals so we can co-create solutions that deliver measurable, sustainable impact.",
  },
  {
    title: "Seeing Through Your Lens",
    desc: "Every business is unique, and so are the challenges and opportunities it encounters. We immerse ourselves in your world to understand your priorities and create meaningful solutions.",
  },
  {
    title: "Building Trust Through Transparency",
    desc: "Trust is the foundation of every long-lasting relationship. We communicate openly, share progress proactively, and keep transparency at the core of everything we do.",
  },
];

function PartnerCard({ title, desc, flipped, onClick }) {
  return (
    <div
      className="w-[260px] h-[300px] sm:w-[300px] sm:h-[340px] md:w-[340px] md:h-[380px] lg:w-[360px] lg:h-[400px] cursor-pointer flex-shrink-0"
      style={{ perspective: "1200px" }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── Front ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-7"
          style={{
            backfaceVisibility: "hidden",
            background: "rgba(15,21,53,0.92)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Large open-quote mark */}
          <div
            className="text-7xl font-bold leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #d23369, #9b4fc7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 0.8,
            }}
          >
            &ldquo;
          </div>

          <div>
            <h3
              className="font-bold text-lg sm:text-xl leading-snug mb-4"
              style={{ color: "#F0F2FA" }}
            >
              {title}
            </h3>
            <div
              className="h-px w-10 rounded-full"
              style={{ background: "linear-gradient(90deg, #d23369, #3d5fdb)" }}
            />
          </div>

          {/* Flip hint */}
          <motion.div
            className="absolute bottom-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-xs text-white font-bold"
            style={{ background: "rgba(210,51,105,0.7)" }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(210,51,105,0)",
                "0 0 12px rgba(210,51,105,0.7)",
                "0 0 0px rgba(210,51,105,0)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↻
          </motion.div>

          {/* Subtle radial glow inside card */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(210,51,105,0.07) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-center p-7"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(145deg, #d23369 0%, #9b4fc7 50%, #212d74 100%)",
          }}
        >
          <h3 className="font-bold text-base sm:text-lg mb-4 text-white leading-snug">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
          <div
            className="mt-5 h-px w-10 rounded-full"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="text-white text-center">
      <span
        className="inline-flex items-center gap-2 border px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase font-medium mb-5"
        style={{
          borderColor: "rgba(210,51,105,0.35)",
          color: "#f9a8c9",
          background: "rgba(210,51,105,0.07)",
        }}
      >
        Our Partnership Promise
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 px-2">
        <span style={{ color: "#F0F2FA" }}>
          Your Vision, Our Commitment &ndash; A{" "}
        </span>
        <span
          style={{
            background:
              "linear-gradient(130deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Partnership Built for the Future
        </span>
      </h2>

      <motion.div
        className="h-0.5 w-16 mx-auto mb-5 rounded-full"
        style={{
          background: "linear-gradient(90deg, #d23369, #3d5fdb)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      />

      <p
        className="text-sm sm:text-base max-w-2xl mx-auto"
        style={{ color: "rgba(240,242,250,0.6)" }}
      >
        At Paves Technologies, we create long-term strategic partnerships to
        ensure our solutions deliver sustainable long-term value.
      </p>
    </div>
  );
}

export default function PartnersEcosystem() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const timerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardsX = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const handleCardClick = (i) => {
    if (activeIndex === i) {
      setActiveIndex(null);
      clearTimeout(timerRef.current);
      return;
    }
    setActiveIndex(i);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActiveIndex(null), 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/future-visions-business-technology-concept.jpg')",
      }}
    >
      {/* ── Mobile layout ── */}
      <div className="md:hidden py-16 px-4" style={{ background: "rgba(11,15,39,0.9)" }}>
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
        <div className="max-w-lg mx-auto mb-12 relative z-10">
          <SectionHeading />
        </div>
        <div className="flex flex-col items-center gap-8 relative z-10">
          {PARTNERSHIPS.map((p, i) => (
            <PartnerCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              flipped={activeIndex === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop layout: sticky + horizontal scroll ── */}
      <div className="hidden md:block relative h-[260vh] lg:h-[250vh]">
        <div
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-10"
          style={{ background: "rgba(11,15,39,0.88)" }}
        >
          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
              `,
              backgroundSize: "55px 55px",
            }}
          />

          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(210,51,105,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Heading behind cards */}
          <div className="absolute inset-0 flex items-center justify-center px-4 z-0">
            <div className="max-w-4xl w-full">
              <SectionHeading />
            </div>
          </div>

          {/* Horizontally scrolling cards */}
          <motion.div
            style={{ x: cardsX }}
            className="flex gap-8 lg:gap-12 xl:gap-16 pt-16 relative z-10"
          >
            {PARTNERSHIPS.map((p, i) => (
              <PartnerCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                flipped={activeIndex === i}
                onClick={() => handleCardClick(i)}
              />
            ))}
          </motion.div>

          {/* Scroll hint — fades as user starts scrolling */}
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <p
              className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-2 select-none"
              style={{ color: "rgba(240,242,250,0.38)" }}
            >
              <span>←</span>
              <span>Scroll to explore</span>
              <span>→</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
