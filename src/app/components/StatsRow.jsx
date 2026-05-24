"use client";
import { motion } from "framer-motion";

const STATS = [
  { value: "200+", label: "Clients Served" },
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Industry Verticals" },
  { value: "10+", label: "Years of Innovation" },
];

export default function StatsRow() {
  return (
    <section className="w-full bg-[#2a3990] py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center py-6 px-4 rounded-lg border border-white/20 bg-white/5 hover:border-blue-300/50 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-blue-100/80 text-center font-medium tracking-wide">
                {stat.label}
              </div>
              <div className="mt-3 h-0.5 w-8 bg-blue-400 rounded-full opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
