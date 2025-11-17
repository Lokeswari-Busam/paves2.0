"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaUniversity,
  FaCreditCard,
  FaShieldAlt,
  FaChartLine,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function IndustryVerticals() {
  const [selected, setSelected] = useState(2);

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

  return (
    <div className="w-full bg-[#f4f7ff] py-24 px-6 md:px-20 rounded-t-2xl mt-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-16"
      >
        Industry Verticals
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE – Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Where Experience<br />
            Meets Execution
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our expertise covers the entire financial ecosystem. Each sector is led
            by seasoned industry experts. We deliver practical solutions backed by
            real-world experience.
          </p>

          {/* Large Selected Card */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 p-7 rounded-xl shadow-lg border border-indigo-100 bg-white"
          >
            <div className="flex items-center gap-3 mb-3 text-indigo-700 font-semibold text-xl">
              {verticals[selected].icon}
              {verticals[selected].title}
            </div>

            <p className="text-gray-700">{verticals[selected].desc}</p>
          </motion.div>
        </motion.div>


        {/* RIGHT SIDE – Scrollable List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-200"
        >
          <div className="flex flex-col gap-4">
            {verticals.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelected(index)}
                className={`p-5 rounded-xl cursor-pointer shadow-md border 
                ${selected === index
                    ? "bg-white border-indigo-400 shadow-xl"
                    : "bg-[#e9f0ff] hover:bg-gray-100 border-gray-300"
                  }
                `}
              >
                <div className="flex items-center gap-3 font-semibold text-gray-800">
                  {item.icon}
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
