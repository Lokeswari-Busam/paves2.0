"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function IndustryVerticals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Payments",
      description:
        "Payment services comprise a variety of solutions that facilitate secure and efficient financial transactions. The aim is to provide fast, reliable, and scalable options for both individuals and businesses.",
      image: "/assets/payments.jpg",
    },
    {
      title: "Banking",
      description:
        "Banking encompasses a broad spectrum of financial services including personal and business accounts, loans, deposit services, fund transfers, and e-banking.",
      image: "/assets/banking.png",
    },
    {
      title: "Payments Fraud & AML",
      description:
        "Payments Fraud & Anti-Money Laundering (AML) services implement rigorous mechanisms to detect and prevent financial crime.",
      image: "/assets/pay-fraud.jpg",
    },
    {
      title: "Governance Risk & Compliance",
      description:
        "Governance Risk & Compliance (GRC) refers to frameworks and solutions that help organizations meet regulatory requirements, manage risks, and ensure ethical practices.",
      image: "/assets/grc.jpg",
    },
    {
      title: "Insurance",
      description:
        "Insurance services provide financial protection against various risks such as accidents, health issues, property loss, and business liability.",
      image: "/assets/insurence.jpg",
    },
    {
      title: "Capital Markets",
      description:
        "Capital Markets consist of platforms and products that enable investment, trading, and the allocation of equity and debt.",
      image: "/assets/capital market.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-blue-50 flex flex-col items-center overflow-hidden">

      {/* ==== SVG Background ==== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <circle cx="20%" cy="30%" r="250" fill="#d7e3ff" />
        <circle cx="80%" cy="60%" r="300" fill="#bccaff" />
        <circle cx="50%" cy="90%" r="200" fill="#e4e9ff" />
      </svg>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#2a338b] text-center mb-12 md:mb-16 z-10">
        Our Services
      </h2>

      {/* Content Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-6 px-6 z-10">

        {/* Image */}
        <motion.div
          key={`img-${currentIndex}`}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[450px] flex justify-center"
        >
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="w-full h-full rounded-xl object-cover shadow-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-[#2a338b] px-2 md:px-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {items[currentIndex].title}
          </h3>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            {items[currentIndex].description}
          </p>

          <button className="font-semibold text-[#2a338b] hover:text-[#2a338b]/80 inline-flex items-center hover:underline transition">
            Read more <span className="ml-2 text-xl">➔</span>
          </button>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-10 md:mt-14 flex items-center gap-6 z-20">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded bg-[#2a338b] hover:bg-gray-700 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl text-white">&#8592;</span>
        </button>

        <span className="text-[#2a338b] text-lg md:text-xl font-bold">
          {currentIndex + 1}/{items.length}
        </span>

        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded bg-[#2a338b] hover:bg-gray-700 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl text-white">&#8594;</span>
        </button>
      </div>

    </section>
  );
}
