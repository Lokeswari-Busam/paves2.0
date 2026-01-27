"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InfoCarousel() {
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
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="relative w-full py-28 bg-blue-50 min-h-[600px] flex flex-col items-center overflow-hidden">

      {/* ==== SVG Background (Light Blue Abstract) ==== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <circle cx="20%" cy="30%" r="250" fill="#d7e3ff" />
        <circle cx="80%" cy="60%" r="300" fill="#bccaff" />
        <circle cx="50%" cy="90%" r="200" fill="#e4e9ff" />
      </svg>

      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-[#2a338b] text-center mb-16 z-10">
        Industry Verticals
      </h2>

      <div className="w-full max-w-6xl flex items-center justify-center z-10">
        
        {/* Left Image */}
        <motion.div
          key={currentIndex + "-img"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 h-[470px] relative flex items-center justify-end pr-10"
        >
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Spacer */}
        <div className="w-4" />

        {/* Right Text */}
        <motion.div
          key={currentIndex + "-text"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 h-[470px] px-12 flex flex-col justify-center text-[#2a338b]"
        >
          <h3 className="text-4xl font-bold mb-6">
            {items[currentIndex].title}
          </h3>

          <p className="text-lg leading-relaxed mb-8">
            {items[currentIndex].description}
          </p>

          <button className="font-semibold text-[#2a338b] hover:text-[#2a338b]/80 inline-flex items-center hover:underline transition">
            Read more <span className="ml-2 text-xl">➔</span>
          </button>
        </motion.div>

      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="w-12 h-12 rounded bg-[#2a338b] hover:bg-gray-700 flex items-center justify-center"
        >
          <span className="text-2xl text-white">&#8592;</span>
        </button>

        <span className="text-[#2a338b] text-xl font-bold">
          {currentIndex + 1}/{items.length}
        </span>

        <button
          aria-label="Next"
          onClick={handleNext}
          className="w-12 h-12 rounded bg-[#2a338b] hover:bg-gray-700 flex items-center justify-center"
        >
          <span className="text-2xl text-white">&#8594;</span>
        </button>
      </div>

    </section>
  );
}


