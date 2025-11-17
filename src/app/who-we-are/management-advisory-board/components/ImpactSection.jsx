"use client";
import { motion } from "framer-motion";

const impact = [
  {
    title: "Bridging Strategy and Execution",
    desc: "Connecting high-level vision with actionable business goals.",
  },
  {
    title: "Expanding Market Relevance",
    desc: "Ensuring our innovations align with real-world industry demands.",
  },
  {
    title: "Strengthening Thought Leadership",
    desc: "Empowering our teams to lead conversations in emerging technologies.",
  },
  {
    title: "Customer-Centric Expertise",
    desc: "Delivering measurable value through deep understanding of client needs.",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#eef2ff]">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-[#2a3990] mb-6 text-center">
          How Our Advisory Board Impacts Paves Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impact.map(({ title, desc }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#2a3990] mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
