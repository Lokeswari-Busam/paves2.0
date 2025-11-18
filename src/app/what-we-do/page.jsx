"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  const sections = [
    {
      title: "Industry Verticals",
      desc: `We partner with organizations across payments, banking, insurance, and capital markets to modernize legacy systems and accelerate growth. 
      Our domain experts and engineers collaborate to build secure, compliant, and scalable solutions that help businesses stay ahead in fast-changing markets. 
      Whether it’s streamlining core systems, improving data visibility, or enabling digital payments — we bring innovation that matters.`,
      img: "/assets/industry-verticals.jpeg",
      link: "/what-we-do/industry-verticals",
    },
    {
      title: "Services",
      desc: `Our service offerings cover the complete technology spectrum — from cloud transformation, data analytics, and AI integration to intelligent automation and cybersecurity. 
      We build future-ready solutions that not only solve current challenges but also set the foundation for innovation and growth. 
      With deep technical expertise and a delivery mindset, we enable clients to scale faster, respond smarter, and operate securely in the digital era.`,
      img: "/assets/services.jpeg",
      link: "/what-we-do/services",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-gray-100">
      
      {/* HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/assets/what_we_do_hero.jpeg"
          alt="What We Do"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomIn}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl px-6 text-white"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            What We Do
          </motion.h1>

          <motion.p
            className="text-md md:text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            At <span className="font-semibold">Paves Technologies</span>, our mission is
            to simplify digital transformation with clarity, precision, and innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-28">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={idx % 2 === 0 ? slideLeft : slideRight}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE — CLICKABLE */}
            <Link
              href={section.link}
              className="relative w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-xl group block"
            >
              <motion.div
                variants={zoomIn}
                transition={{ duration: 0.7 }}
                className="w-full h-full relative"
              >
                <Image
                  src={section.img}
                  alt={section.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white drop-shadow-lg">
                  {section.title}
                </h3>
              </motion.div>
            </Link>

            {/* TEXT — NOT CLICKABLE */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="md:w-1/2 space-y-5"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2a3990]">
                {section.title}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {section.desc}
              </p>

              {/* BUTTON — CLICKABLE */}
              <Link href={section.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-2.5 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 shadow-md"
                  style={{ background: "#2a3990" }}
                >
                  <span className="relative z-10">Know More</span>
                  <span className="absolute inset-0 bg-linear-to-r from-[#000080] via-indigo-700 to-[#000080] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>
        ))}
      </section>
    </div>
  );
}
