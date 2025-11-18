"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  CreditCard,
  Banknote,
  ShieldCheck,
  ClipboardCheck,
  BarChart,
  Briefcase,
} from "lucide-react";

import Hero from "../components/Hero";

export default function IndustryVerticals() {
  const verticals = [
    {
      title: "Payments",
      desc: "Implementing secure, efficient solutions for seamless global fund transfers and embedded finance systems.",
      icon: <CreditCard size={28} color="white" strokeWidth={1.8} />,
      href: "/industry-verticals/payments",
    },
    {
      title: "Banking",
      desc: "Reimagining banking through digital transformation, cloud-first architectures, and open banking APIs.",
      icon: <Banknote size={28} color="white" strokeWidth={1.8} />,
      href: "/industry-verticals/banking",
    },
    {
      title: "Payments Fraud & AML",
      desc: "Utilizing AI and advanced analytics to prevent fraud and ensure Anti-Money Laundering compliance.",
      icon: <ShieldCheck size={28} color="white" strokeWidth={1.8} />,
      href: "/industry-verticals/payments-fraud-aml",
    },
    {
      title: "Governance, Risk & Compliance",
      desc: "Aligning governance, risk management, and regulatory frameworks to ensure transparency and accountability.",
      icon: <ClipboardCheck size={28} color="white" strokeWidth={1.8} />,
      href: "/industry-verticals/governance-risk-compliance",
    },
    {
      title: "Insurance",
      desc: "Optimizing underwriting, claims, and policy administration with automation and data intelligence.",
      icon: <Briefcase size={28} color="white" strokeWidth={1.8} />,
      href: "/industry-verticals/insurance",
    },
    {
      title: "Capital Markets",
      desc: "Delivering next-gen trading, investment, and compliance solutions to accelerate transparency and growth.",
      icon: <BarChart size={28} color="white" strokeWidth={1.8} />,
      href: "/industry-verticals/capital-markets",
    },
  ];

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* 🔥 REUSABLE HERO */}
     <Hero
  title="Industry Verticals"
  description="Our deep domain expertise spans the global financial ecosystem."
  image="/assets/what_we_do_hero.jpeg"
  breadcrumb={[
    {
      label: "Paves Technologies",
      className: "text-[#2a3990] font-semibold text-sm"
    },
    {
      label: "Industry Verticals",
      className: "text-gray-600 text-sm"
    }
  ]}
/>



      {/* BLUE SECTION */}
      <section className="bg-[#2a3990] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 py-16 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div className="flex flex-col justify-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empowering Industry Innovation
              </h2>
              <p className="text-indigo-100 leading-relaxed max-w-lg">
                With a cross-industry approach, Paves Technologies leverages AI, data analytics,
                and automation to transform business operations and deliver measurable value.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-row items-center justify-center lg:justify-start gap-12 text-center"
            >
              <div>
                <div className="text-4xl font-bold">6</div>
                <div className="text-sm text-indigo-200 mt-1">Industry Verticals</div>
              </div>
              <div>
                <div className="text-4xl font-bold">200+ yrs</div>
                <div className="text-sm text-indigo-200 mt-1">Combined Expertise</div>
              </div>
            </motion.div>
          </div>

          {/* Right-side Robo Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[350px]">
              <Image
                src="/assets/robo.png"
                alt="AI Illustration"
                width={350}
                height={280}
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 rounded-full blur-3xl bg-indigo-400/30 scale-150 -z-10"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* GRID SECTION */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Collaborating with clients across key verticals
          </h3>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {verticals.map((v) => (
              <motion.article
                key={v.title}
                variants={itemVariants}
                className="relative flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d23369] flex items-center justify-center">
                  {v.icon}
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {v.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href={v.href}
                    className="w-9 h-9 rounded-full bg-[#dbe1ff] inline-flex items-center justify-center hover:bg-[#c9d4ff] transition"
                  >
                    <svg
                      className="w-4 h-4 text-[#2a3990]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
