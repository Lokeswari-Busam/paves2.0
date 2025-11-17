"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdvisoryOverview() {
  const items = [
    { title: "Industry Leaders", color: "bg-pink-700" },
    { title: "Domain Experts", color: "bg-indigo-900" },
    { title: "Visionary Thinkers", color: "bg-pink-700" },
    { title: "Strategic Innovators", color: "bg-indigo-900" },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-indigo-50 via-pink-50 to-indigo-50 overflow-hidden">
      {/* --- Section Header --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#2a3990] mb-5">
          Our Advisory Board
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
            <h4 className="text-[#2a3990] text-lg  font-bold leading-relaxed mb-3">Experience, Expertise, and Strategic Vision – Driving Value for Our Customers.</h4>
             At Paves Technologies, we are guided by an accomplished Advisory Board comprised
             of industry leaders, domain experts, and visionary thinkers. Their deep expertise
             and strategic insights ensure we stay at the forefront of innovation while
             aligning with the unique needs of our customers.
           </p>
      </motion.div>

      {/* --- Main Content (Boxes + Image) --- */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="relative w-[400px] md:w-[500px] lg:w-[520px] h-[400px] md:h-[480px]  overflow-hidden shadow-2xl">
          <Image
            src="/assets/advisory-overview.jpg"
            alt="Advisory Board"
            fill
            className="object-cover object-center"
          />
        </div>
            {/* --- right: Stacked Boxes --- */}
        <div className="relative w-full max-w-[500px] flex flex-col items-start mx-auto ">
        {items.map(({ title, color }, i) => (
            <div
            key={i}
            className={`${color} text-white font-semibold text-center text-base md:text-lg flex items-center justify-center h-30 w-40 md:w-72 rounded-xl shadow-md hover:scale-105 transition-transform duration-300`}
            style={{
          marginLeft: `calc(10% - 160px + ${i * 30}%)`,
          marginTop: i !== 0 ? "-1px" : "0px",
        }}
            >
            {title}
            </div>
        ))}
        </div>



        {/* --- Right: Image --- */}
        
      </motion.div>
    </section>
  );
}
