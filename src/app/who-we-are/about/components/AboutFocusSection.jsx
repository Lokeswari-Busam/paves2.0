"use client";
import { motion } from "framer-motion";
import { Cpu, Users, Rocket, Layers } from "lucide-react";

const focusList = [
  {
    Icon: Cpu,
    title: "AI First Strategy",
    desc: "Uniquely poised to lead in this era of transformative innovation.",
  },
  {
    Icon: Users,
    title: "Building Dynamic Teams",
    desc: "Structured around our AI-first strategy, we excel in building agile teams.",
  },
  {
    Icon: Rocket,
    title: "Delivering Cutting-edge Solutions",
    desc: "Our technology solutions harness the full potential of Artificial Intelligence, Generative AI, and Agentic AI.",
  },
  {
    Icon: Layers,
    title: "Embracing AI as our Foundation",
    desc: "We enable businesses to accelerate innovation, optimize operations, and achieve unprecedented growth.",
  },
];

export default function AboutFocusSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#2a3990] flex flex-col md:flex-row items-start gap-12">
      {/* Left: Empowering content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6  text-white ">
          Empowering Tomorrow with AI-Driven Solutions
        </h2>
        <p className="text-white text-lg leading-relaxed">
          At Paves Technologies, we harness the transformative power of Artificial Intelligence,
          Generative AI, and Agentic AI to deliver innovative technology solutions and outsourcing
          services. From automation to augmentation, we pave the way for businesses to achieve
          scalable growth, efficiency, and a competitive edge in the AI era.
        </p>
      </motion.div>

      {/* Right: Our Focus List */}
      <motion.ul
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {focusList.map(({ Icon, title, desc }, i) => (
          <li
            key={i}
            className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2">
            <Icon size={30} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2a3990] mb-1">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}




