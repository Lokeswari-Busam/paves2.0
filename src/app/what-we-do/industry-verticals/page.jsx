"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IndustryVerticals() {
  const verticals = [
    {
      title: "Payments",
      desc: "We help global payment networks and fintechs build seamless, secure, and scalable payment infrastructures.",
      icon: "/assets/industry-verticals.jpeg",
    },
    {
      title: "Banking",
      desc: "We modernize banking systems with digital-first platforms that enhance efficiency and customer experience.",
      icon: "/assets/industry-verticals.jpeg",
    },
    {
      title: "Insurance",
      desc: "From underwriting to claims, we empower insurers with AI-driven automation and analytics solutions.",
      icon: "/assets/industry-verticals.jpeg",
    },
    {
      title: "Capital Markets",
      desc: "Delivering next-gen trading and compliance solutions to accelerate growth and transparency.",
      icon: "/assets/industry-verticals.jpeg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-[#000080] text-white overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/industry-verticals.jpeg"
            alt="Industry Verticals"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl font-bold mb-4">Industry Verticals</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Deep domain expertise across payments, banking, and insurance — driving meaningful digital change.
          </p>
        </motion.div>
      </motion.section>

      {/* Section Background Effects */}
      <div className="absolute top-[60vh] inset-x-0 bottom-0 -z-10 overflow-hidden">
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,128,0.05)_0%,white_80%)]" />
        {/* Subtle Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-[#000080]" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#000080]" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-[#000080]" />
        </div>
        {/* Animated Glow Circles */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-20 -left-32 w-[400px] h-[400px] rounded-full bg-[#000080]/10 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#1a1aff]/10 blur-3xl"
        ></motion.div>
      </div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-[#000080] mb-5">
          Empowering Core Financial Ecosystems
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          We bring strategic, technical, and operational expertise to help financial enterprises evolve faster,
          stay compliant, and deliver innovation with confidence.
        </p>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative px-6 md:px-16 max-w-7xl mx-auto pb-24"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verticals.map((v, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 15px 35px rgba(0,0,128,0.2), 0 5px 15px rgba(0,0,0,0.05)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="group relative p-6 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm 
              hover:shadow-xl transition-all duration-400 text-center cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-16 h-16 mx-auto mb-5 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={v.icon}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#000080] transition-colors duration-300">
                {v.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                {v.desc}
              </p>

              {/* Accent Line */}
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#000080] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-2xl"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pb-16"
      >
        <Link
          href="/what-we-do"
          className="inline-block px-8 py-3 rounded-full bg-[#000080] text-white font-medium hover:bg-[#1a1aff] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          ← Back to What We Do
        </Link>
      </motion.div>
    </main>
  );
}
