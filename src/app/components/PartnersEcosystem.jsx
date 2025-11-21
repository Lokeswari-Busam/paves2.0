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

  // ✔ Your partner images array
  const partnerLogos = [
    "/assets/awsPartner.jpg",
    "/assets/MicrosoftPartner.png",
    "/assets/googlecloudPartner.png",
    "/assets/VmwarePartner.jpg",
  ];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: animateStage !== "full" ? "#d3e8f4" : "transparent",
      }}
    >
      {/* FULL SCREEN → SHRINK → LEFT BLOB */}
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
          left: animateStage === "full" ? 0 : "4%",
          top: animateStage === "full" ? 0 : "50%",
          translateY: animateStage === "full" ? "0%" : "-50%",
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

      {/* RIGHT SIDE CONTENT */}
      <AnimatePresence>
        {animateStage === "showContent" && (
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute right-16 max-w-xl"
          >
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4 tracking-wide"
            >
              PARTNERS ECOSYSTEM
            </motion.h2>

            {/* Subheading */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-semibold text-blue-700 mb-4"
            >
              Devoted to Progress
            </motion.h3>

            {/* Partner Logos (auto loaded) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex items-center gap-6 mb-6"
            >
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={logo}
                    alt={`Partner-${index}`}
                    width={55}
                    height={55}
                    className="rounded-md object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              Explore our growing ecosystem of partners, shaping the future
              of technology together.
            </motion.p>

            {/* Learn More Link */}
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="text-blue-700 font-semibold text-lg underline cursor-pointer"
            >
              Learn More →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
