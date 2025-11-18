"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCreditCard,
  FaShieldAlt,
  FaChartLine,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function IndustryVerticals() {
  const [selected, setSelected] = useState(0);

  const verticals = [
    {
      title: "Payments",
      icon: <FaCreditCard size={22} />,
      desc: "Advanced solutions for seamless and secure digital payments.",
    },
    {
      title: "Banking",
      icon: <FaUniversity size={22} />,
      desc: "AI-driven banking solutions enabling smarter financial experiences.",
    },
    {
      title: "Payments Fraud & AML",
      icon: <FaShieldAlt size={22} />,
      desc: "AI-powered tools to detect fraud and ensure compliance with AML regulations.",
    },
    {
      title: "Insurance",
      icon: <FaMoneyCheckAlt size={22} />,
      desc: "Intelligent automation for insurance workflows and customer experience.",
    },
    {
      title: "Governance Risk & Compliance",
      icon: <FaChartLine size={22} />,
      desc: "Enterprise-level GRC solutions to manage risk with confidence.",
    },
    {
      title: "Capital Markets & Wealth Management",
      icon: <FaMoneyCheckAlt size={22} />,
      desc: "Data-powered insights to optimize investment and portfolio decisions.",
    },
  ];

  /** AUTO ROTATE EVERY 2 SECONDS **/
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % verticals.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full py-28 px-6 md:px-20"
      style={{
        backgroundImage: "url('/assets/modern-equipped-computer-lab.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-xl">
          Industry Verticals
        </h1>

        <p className="text-center text-gray-200 text-lg max-w-2xl mx-auto mt-4">
          Expertise across every layer of the financial world — engineered with precision.
        </p>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-16 mt-20">

          {/* LEFT: Auto changing highlight */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30"
          >
            <div className="flex items-center gap-4 mb-4 text-white font-semibold text-3xl drop-shadow">
              <span className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                {verticals[selected].icon}
              </span>
              {verticals[selected].title}
            </div>

            <p className="text-gray-100 text-lg leading-relaxed">
              {verticals[selected].desc}
            </p>
          </motion.div>

          {/* RIGHT: Clickable grid */}
          <div className="grid grid-cols-2 gap-6">
            {verticals.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelected(index)}
                className={`
                  p-5 rounded-xl cursor-pointer transition border text-white
                  ${
                    selected === index
                      ? "bg-white/30 border-white/70 shadow-xl"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }
                `}
              >
                <div className="flex items-center gap-3 font-semibold text-lg">
                  <span
                    className={`p-2 rounded-lg ${
                      selected === index ? "bg-white/30" : "bg-white/10"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
