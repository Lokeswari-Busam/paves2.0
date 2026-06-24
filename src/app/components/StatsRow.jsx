"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 15,  suffix: "+", label: "Industry Verticals" },
  { value: 10,  suffix: "+", label: "Years of Innovation" },
];

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const frames = 90; // ~1.5 s at 60 fps
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      // cubic ease-out: fast start, soft landing
      const p = 1 - Math.pow(1 - frame / frames, 3);
      setCount(Math.round(p * end));
      if (frame >= frames) { setCount(end); clearInterval(id); }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsRow() {
  return (
    <section
      className="w-full relative overflow-hidden py-14 sm:py-16"
      style={{
        background: "linear-gradient(160deg, #0b0f27 0%, #0f1535 50%, #0b0f27 100%)",
        borderTop:    "1px solid rgba(210,51,105,0.14)",
        borderBottom: "1px solid rgba(61,95,219,0.14)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.024) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.024) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Centre glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 50%, rgba(210,51,105,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="relative flex flex-col items-center py-8 px-6 cursor-default rounded-xl transition-shadow duration-300"
            >
              {/* Vertical rule between columns — desktop only */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-14 w-px hidden lg:block"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                />
              )}

              {/* Number */}
              <div
                className="text-5xl sm:text-6xl font-bold tabular-nums leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div
                className="font-mono text-[11px] tracking-[0.16em] uppercase"
                style={{ color: "rgba(240,242,250,0.5)" }}
              >
                {stat.label}
              </div>

              {/* Accent line */}
              <motion.div
                className="mt-3 h-px w-8 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #d23369, #3d5fdb)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
