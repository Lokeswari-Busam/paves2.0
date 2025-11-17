"use client";
import { motion } from "framer-motion";
import { Search, Target, Compass, HeartHandshake, GraduationCap } from "lucide-react";

const values = [
  {
    Icon: Search,
    title: "Trust and Integrity",
    desc: "We build strong relationships with transparency and ethical responsibility.",
  },
  {
    Icon: Target,
    title: "Customer & Employee Success",
    desc: "We are committed to our clients' and employees' success, fostering mutual prosperity.",
  },
  {
    Icon: Compass,
    title: "Innovation & Agility",
    desc: "We embrace change and deliver cutting-edge solutions.",
  },
  {
    Icon: HeartHandshake,
    title: "Collaboration & Partnership",
    desc: "We partner with clients to understand their needs and find creative solutions.",
  },
  {
    Icon: GraduationCap,
    title: "Continuous Learning and Growth",
    desc: "We empower our team and clients to drive success by staying ahead of industry trends.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-38 px-10md:px-16 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-5xl font-semibold mb-12  text-[#2a3990] "
      >
        Our Core Values
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {values.map(({ Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            {/* <Icon size={40} className="text-pink-700  mb-3" /> */}
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2">
            <Icon size={30} className="text-white" />
            </div>

            <h3 className="text-lg font-semibold text-[#2a3990] mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
