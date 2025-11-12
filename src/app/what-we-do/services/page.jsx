"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Artificial Intelligence",
      desc: "From machine learning to generative AI, we design intelligent systems that enhance efficiency and insights.",
      img: "/assets/services.jpeg",
    },
    {
      title: "Cloud & DevOps",
      desc: "We deliver scalable cloud architectures and automated CI/CD pipelines that power enterprise agility.",
      img: "/assets/services.jpeg",
    },
    {
      title: "Cyber Security",
      desc: "Protecting digital ecosystems with zero-trust architectures, data encryption, and proactive defense models.",
      img: "/assets/services.jpeg",
    },
    {
      title: "Automation & RPA",
      desc: "Streamlining business operations with robotic process automation and intelligent workflow orchestration.",
      img: "/assets/services.jpeg",
    },
    {
      title: "Data Engineering",
      desc: "Building data pipelines and analytics frameworks that transform information into strategic intelligence.",
      img: "/assets/services.jpeg",
    },
    {
      title: "Next-Gen Tech",
      desc: "Exploring blockchain, IoT, and immersive tech to build the next era of connected solutions.",
      img: "/assets/services.jpeg",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-[#000080] text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/services.jpeg"
            alt="Our Services"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-200">
            Engineering excellence meets innovation — solutions designed to scale and perform.
          </p>
        </div>
      </section>

      {/* Modern Cards */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#000080] mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href="#"
                  className="text-sm font-medium text-[#000080] hover:text-[#1a1aff]"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/what-we-do"
            className="px-6 py-3 rounded-full bg-[#000080] text-white font-medium hover:bg-[#1a1aff] transition-all shadow-md"
          >
            ← Back to What We Do
          </Link>
        </div>
      </section>
    </main>
  );
}
