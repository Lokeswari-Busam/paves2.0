"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhoWeArePage() {
    // ✅ Animation Variants
const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};
  /* ✅ HERO */
  const Hero = ({ title }) => (
    <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
            <Image
              src="/assets/what_we_do_hero.jpeg"
              alt="Who We Are"
              fill
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
    
            <motion.div
              initial="hidden"
              animate="visible"
                variants={zoomIn}
              transition={{ duration: 0.9 }}
              className="relative z-10 max-w-4xl px-6 text-white"
            >
              <motion.h1
                className="text-7xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Who We Are
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                
              </motion.p>
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
    
  );

  /* ✅ SECTION INTRO */
  const SectionIntro = ({ title, text }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <h2 className="text-5xl font-semibold mb-4 text-[#28519e]">{title}</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{text}</p>
    </motion.div>
  );

  /* ✅ INFO CARD */
  const InfoCard = ({ title, text, href }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all border border-gray-200"
    >
      <h3 className="text-2xl font-semibold mb-4 text-[#284d93]">{title}</h3>
      <p className="text-gray-600 mb-6">{text}</p>

      <Link
        href={href}
        className="inline-flex items-center text-[#3173F6] font-medium hover:underline"
      >
        Read More <ArrowRight size={18} className="ml-1" />
      </Link>
    </motion.div>
  );

  /* ✅ CTA SECTION */
  const CTASection = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="mt-24 text-center"
    >
      <h2 className="text-3xl font-bold text-[#204c9f] mb-4">
        Join Us in Building the Future
      </h2>

      <p className="text-gray-600 mb-8">
        Explore our vision, leadership, and technological direction.
      </p>

      <Link href="/careers">
        <button className="px-8 py-3 bg-[#3173F6] hover:bg-[#2559C9] transition-all rounded-xl text-white text-lg font-semibold flex items-center gap-2 mx-auto shadow-lg">
          Explore Careers <ArrowRight size={20} />
        </button>
      </Link>
    </motion.div>
  );

  /* ✅ FINAL PAGE JSX */
  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#2256b8]">

      <Hero title="Who We Are" />

      <div className="max-w-6xl mx-auto px-10 py-14">
        <SectionIntro
          title="Our Identity"
          text="At Paves Technologies, we blend innovation, vision, and leadership to create a 
          future-ready technology ecosystem. Our journey is powered by experienced professionals, 
          a strong advisory board, and a forward-thinking technology council that drives research, strategy,
          and transformation."
        />

        <div className="grid md:grid-cols-3 gap-14">
          <InfoCard
            title="About Us"
            text="Learn our story, mission, and how we aim to reshape the digital future through engineering excellence and innovation."
            href="/about/"
          />

          <InfoCard
            title="Management & Advisory Board"
            text="A team of experienced leaders offering strategic direction to drive Paves' long-term growth and global vision."
            href="/management-advisory-board/"
          />

          <InfoCard
            title="Technology Council"
            text="A visionary group of experts guiding research, assessing emerging trends, and shaping Paves’ innovation roadmap."
            href="/technology-council/"
          />
        </div>
        <CTASection />
      </div>
    </div>
  );
}
