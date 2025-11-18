"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  Rocket,
  Layers,
  Search,
  Target,
  Compass,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* ---------------------------------------------------- */}
      {/* SECTION 1: ABOUT HEADER */}
      {/* ---------------------------------------------------- */}

      <section className="relative flex flex-col md:flex-row w-full overflow-hidden bg-gray-50 min-h-[70vh]">

        {/* LEFT SIDE */}
        <motion.div
          className="relative z-10 md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-16 bg-gradient-to-r from-indigo-100 to-indigo-50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-6xl font-semibold text-[#2a3990] leading-snug mb-4">
            ABOUT
          </h2>

          <h1 className="text-2xl font-bold text-primary mb-3 tracking-wide">
            Paves Technologies &gt; About
          </h1>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="relative md:w-1/2 h-[400px] md:h-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/modern-equipped-computer-lab.jpg"
            alt="About Paves Technologies"
            fill
            className="object-cover object-center"
          />
        </motion.div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: FOCUS AREAS */}
      {/* ---------------------------------------------------- */}

      <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 relative py-20 px-6 md:px-16 flex flex-col md:flex-row items-start gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2a3990]">
            Empowering Tomorrow with AI-Driven Solutions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Paves Technologies, we harness the transformative power of AI,
            Generative AI, and Agentic AI to deliver innovations that enable
            automated, intelligent, and scalable business growth.
          </p>
        </motion.div>

        {/* RIGHT LIST */}
        <motion.ul
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { Icon: Cpu, title: "AI First Strategy", desc: "Leading with AI in every solution we deliver." },
            { Icon: Users, title: "Building Dynamic Teams", desc: "Agile, scalable, and AI-enhanced teams." },
            { Icon: Rocket, title: "Cutting-edge Solutions", desc: "Harnessing AI, GenAI, and Agentic AI." },
            { Icon: Layers, title: "AI-Driven Foundation", desc: "Accelerating innovation and efficiency." },
          ].map(({ Icon, title, desc }, i) => (
            <li
              key={i}
              className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2a3990]">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </li>
          ))}
        </motion.ul>

      </section>

      {/* SHAPE DIVIDER LEFT */}
      <ShapeDivider direction="left" fill="#eef2ff" shape="curve" />

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: VALUES */}
      {/* ---------------------------------------------------- */}

      <section className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-purple-50 relative py-28 px-10 md:px-16 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-12 text-[#2a3990]"
        >
          Our Core Values
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {[
            { Icon: Search, title: "Trust & Integrity", desc: "Built on ethics and transparency." },
            { Icon: Target, title: "Customer Success", desc: "Success for clients and employees alike." },
            { Icon: Compass, title: "Innovation", desc: "Constantly evolving with creativity." },
            { Icon: HeartHandshake, title: "Collaboration", desc: "Partnering for meaningful solutions." },
            { Icon: GraduationCap, title: "Continuous Growth", desc: "Learning and leading together." },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2a3990] mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* SHAPE DIVIDER RIGHT */}
      <ShapeDivider direction="right" fill="#e0e7ff" shape="tilt" />

    </main>
  );
}



/* ----------------------------------------------------
   SHAPE DIVIDER COMPONENT
---------------------------------------------------- */
function ShapeDivider({ direction = "left", fill = "#fff", shape = "curve" }) {
  const shapes = {
    curve: "M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z",
    tilt: "M0 0 L500 100 L500 0 Z",
  };

  return (
    <div
      className={`w-full overflow-hidden ${
        direction === "left" ? "" : "rotate-180"
      }`}
    >
      <svg
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        className="w-full h-20"
      >
        <path d={shapes[shape]} fill={fill}></path>
      </svg>
    </div>
  );
}
