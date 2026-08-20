"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, Lightbulb } from "lucide-react";

export default function AdvisoryOverview() {
  const items = [
    { title: "Industry Leaders", color: "bg-primary", icon: Award },
    { title: "Domain Experts", color: "bg-[#2a3990]", icon: Target },
    { title: "Visionary Thinkers", color: "bg-primary", icon: Lightbulb },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-indigo-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#2a3990] mb-5">
          Our Advisory Board
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="text-[#2a3990] text-lg font-bold mb-3 block">
            Experience, Expertise, and Strategic Vision – Driving Value for Our Customers.
          </span>
          At Paves Technologies, we are guided by an accomplished Advisory Board comprised
          of industry leaders, domain experts, and visionary thinkers. Their deep expertise
          and strategic insights ensure we stay at the forefront of innovation while
          aligning with the unique needs of our customers.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className="relative w-full max-w-md sm:max-w-lg h-[320px] sm:h-[420px] shadow-2xl">
          <Image
            src="/assets/who-we-are/advisory-overview.jpg"
            alt="Advisory Board"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Stacked Cards */}
        <div className="w-full max-w-sm flex flex-col gap-4 items-center">
          {items.map(({ icon: Icon, title, color }, i) => (
            <div
              key={i}
              className={`${color} text-white font-semibold flex items-center justify-center px-6 py-4 rounded-xl shadow-md w-full sm:w-72`}
            >
              {Icon && <Icon className="w-8 h-8 mr-3" />}
              {title}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
