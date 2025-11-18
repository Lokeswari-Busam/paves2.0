"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PartnersEcosystem() {
  const [animateStage, setAnimateStage] = useState("full");

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStage("shrink"), 1200);
    const timer2 = setTimeout(() => setAnimateStage("showContent"), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: animateStage !== "full" ? "#d3e8f4" : "transparent",
      }}
    >
      {/* FULL SCREEN → SHRINK LEFT BLOB */}
      <motion.div
        initial={{
          width: "100vw",
          height: "100vh",
          borderRadius: "0%",
          left: 0,
          top: 0,
          position: "absolute",
        }}
        animate={{
          width:
            animateStage === "full"
              ? "100vw"
              : animateStage === "shrink"
              ? 480
              : 420,

          height:
            animateStage === "full"
              ? "100vh"
              : animateStage === "shrink"
              ? 480
              : 420,

          borderRadius:
            animateStage === "full"
              ? "0%"
              : "65% 35% 60% 40% / 40% 60% 35% 65%",

          left: animateStage === "full" ? 0 : "4%", // FIXED LEFT PLACEMENT
          top: animateStage === "full" ? 0 : "50%",
          translateY: animateStage === "full" ? "0%" : "-50%", // vertical center alignment

          scale: animateStage === "full" ? 1.07 : 1,
        }}
        transition={{
          duration: animateStage === "full" ? 1.2 : 1,
          ease: [0.25, 0.1, 0.25, 1],
          type: animateStage === "shrink" ? "spring" : "tween",
          stiffness: 90,
        }}
        className="shadow-xl overflow-hidden"
      >
        <Image
          src="/assets/people-working-with-devices-office.jpg"
          alt="Partners Ecosystem"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* CONTENT ON RIGHT SIDE */}
      <AnimatePresence>
        {animateStage === "showContent" && (
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute right-16 max-w-xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-700">Partners Ecosystem</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8"
            >
              Paves Technologies collaborates with top global partners to deliver
              future-ready solutions that drive innovation, scalability, and impact.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } },
              }}
              className="space-y-4"
            >
              {[
                "Future-ready technology collaborations",
                "Strong global partner ecosystem",
                "Accelerated innovation through co-creation",
                "Empowering clients with combined expertise",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  <p className="text-gray-800 text-lg">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
