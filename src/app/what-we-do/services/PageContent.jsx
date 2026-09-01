"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  Cpu,
  Cloud,
  Database,
  Shield,
  Bot,
  Settings,
  Key,
  Workflow,
  RefreshCw,
  LineChart,
  ArrowRight,
} from "lucide-react";

import Hero from "../components/Hero";

export default function ServicesPage() {
  const services = [
    {
      title: "Business & Technology Advisory Consulting",
      desc: "We partner with businesses to define digital strategies, streamline operations, and accelerate innovation with technology-led transformation.",
      icon: <LineChart />,
      href: "/services/business-and-technology",
    },
    {
      title: "Artificial Intelligence",
      desc: "Our AI experts build intelligent systems using machine learning, NLP, and computer vision to automate processes and deliver predictive insights.",
      icon: <Bot />,
      href: "/services/artificial-intelligence",
    },
    {
      title: "Cloud Engineering and DevOps",
      desc: "We design, migrate, and optimize scalable cloud infrastructures, enabling faster deployments, better resilience, and efficient cost management.",
      icon: <Cloud />,
      href: "/services/cloud-and-devops",
    },
    {
      title: "Data and Analytics",
      desc: "Transform raw data into actionable insights. Our analytics frameworks empower leaders to make confident, data-driven decisions.",
      icon: <Database />,
      href: "/services/data-and-analytics",
    },
    {
      title: "Product Management & Engineering",
      desc: "We turn ideas into market-ready products by integrating user research, agile engineering, and continuous innovation.",
      icon: <Settings />,
      href: "/services/product-management",
    },
    {
      title: "Enterprise Automation",
      desc: "We enable enterprises to streamline workflows and enhance productivity through process automation and RPA integration.",
      icon: <Workflow />,
      href: "/services/enterprise-automation",
    },
    {
      title: "Legacy Support & Modernization",
      desc: "Our team modernizes outdated systems with minimal disruption — boosting performance, reliability, and scalability.",
      icon: <RefreshCw />,
      href: "/services/legacy-support",
    },
    {
      title: "Cyber Security",
      desc: "We safeguard digital ecosystems through advanced threat intelligence, compliance frameworks, and continuous monitoring.",
      icon: <Shield />,
      href: "/services/cyber-security",
    },
    {
      title: "Identity and Access Management",
      desc: "Secure and simplify access across applications and systems with IAM solutions designed for performance and compliance.",
      icon: <Key />,
      href: "/services/identity-and-access-management",
    },
    {
      title: "Next Gen Technologies",
      desc: "We explore and implement cutting-edge technologies — from blockchain to IoT — to future-proof businesses.",
      icon: <Cpu />,
      href: "/services/next-gen-technologies",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
  {/* HERO */}
  <Hero
    title="Services"
    description="We deliver technology solutions that help organizations innovate, scale, and stay future-ready."
    image="/assets/shared/what_we_do_hero.jpeg"
    breadcrumb={[
      { label: "Paves Technologies", href: "/" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Services" },
    ]}
  />

  {/* SERVICES GRID */}
  <section className="relative bg-gray-50 overflow-hidden py-12 sm:py-16 lg:py-20">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
        Services We Provide
      </h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-6 sm:gap-8 md:grid-cols-2"
      >
        {services.map((service, idx) => (
          <Link
            key={idx}
            href={`/what-we-do${service.href}`}
            className="block group"
          >
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="
                relative
                flex flex-col sm:flex-row
                sm:items-center
                gap-4 sm:gap-6
                bg-white
                rounded-xl
                p-5 sm:p-6
                shadow-sm
                border border-gray-100
                hover:shadow-lg hover:-translate-y-1
                transition-all
                cursor-pointer
              "
            >
              {/* ICON */}
              <div
                className="
                  shrink-0
                  w-12 h-12 sm:w-14 sm:h-14 sm:self-center
                  rounded-full
                  bg-[#d23369]
                  flex items-center justify-center
                  group-hover:scale-110
                  transition-transform
                "
              >
                {React.cloneElement(service.icon, {
                  className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                  strokeWidth: 1.8,
                })}
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* ARROW */}
              <div className="self-end sm:self-auto shrink-0">
                <div
                  className="
                    w-10 h-10 sm:w-9 sm:h-9
                    rounded-full
                    bg-[#dbe1ff]
                    inline-flex items-center justify-center
                    group-hover:bg-[#c9d4ff]
                    transition
                  "
                >
                  <svg
                    className="w-4 h-4 text-[#2a3990]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </div>
  </section>
</main>

  );
}
