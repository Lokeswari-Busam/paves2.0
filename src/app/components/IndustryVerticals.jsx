"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-blue-50 flex flex-col items-center overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,57,144,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(42,57,144,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 z-10 relative px-4">
        <div className="inline-block px-6 py-2 border-2 border-[#2a338b] text-[#2a338b] uppercase tracking-widest text-[11px] font-bold mb-5">
          Markets We Serve
        </div>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-sm bg-[#2a338b] rotate-45 flex-shrink-0" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a338b]">
            Industry Verticals
          </h2>
          <div className="w-3 h-3 rounded-sm bg-[#2a338b] rotate-45 flex-shrink-0" />
        </div>
        <div className="h-0.5 w-16 bg-blue-500 rounded-full mx-auto mt-3" />
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center z-10 px-4 sm:px-6">

        {/* Image */}
        <motion.div
          key={currentIndex + "-img"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 h-[220px] sm:h-[300px] md:h-[360px] lg:h-[470px] relative flex items-center justify-center lg:justify-end lg:pr-10 mb-8 lg:mb-0"
        >
          <Image
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            width={700}
            height={470}
            className="w-full h-full object-cover rounded-xl shadow-xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          key={currentIndex + "-text"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 h-auto lg:h-[470px] px-4 sm:px-6 lg:px-12 flex flex-col justify-center text-[#2a338b]"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            {items[currentIndex].title}
          </h3>
          <div className="h-0.5 w-12 bg-blue-500 rounded-full mb-4 sm:mb-6 opacity-80" />

          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            {items[currentIndex].description}
          </p>

          <button className="font-semibold inline-flex items-center hover:underline transition">
            Read more <span className="ml-2 text-xl">➔</span>
          </button>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-8 z-20">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-[#2a338b] hover:bg-gray-700 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl text-white">&#8592;</span>
        </button>

        <span className="text-[#2a338b] text-lg sm:text-xl font-bold">
          {currentIndex + 1}/{items.length}
        </span>

        <button
          aria-label="Next"
          onClick={handleNext}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-[#2a338b] hover:bg-gray-700 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl text-white">&#8594;</span>
        </button>
      </div>

    </section>
  );
}
