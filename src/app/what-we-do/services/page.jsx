"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function ServicesPage() {
  const services = [
    {
      title: "Business & Technology Advisory Consulting",
      desc: "We partner with businesses to define digital strategies, streamline operations, and accelerate innovation with technology-led transformation.",
      icon: <LineChart className="w-10 h-10 text-[#000080]" />,
      href: "/services/business-technology-advisory-consulting",
    },
    {
      title: "Artificial Intelligence",
      desc: "Our AI experts build intelligent systems using machine learning, NLP, and computer vision to automate processes and deliver predictive insights.",
      icon: <Bot className="w-10 h-10 text-[#000080]" />,
      href: "/services/artificial-intelligence",
    },
    {
      title: "Cloud Engineering and DevOps",
      desc: "We design, migrate, and optimize scalable cloud infrastructures, enabling faster deployments, better resilience, and efficient cost management.",
      icon: <Cloud className="w-10 h-10 text-[#000080]" />,
      href: "/services/cloud-engineering-devops",
    },
    {
      title: "Data and Analytics",
      desc: "Transform raw data into actionable insights. Our analytics frameworks empower leaders to make confident, data-driven decisions.",
      icon: <Database className="w-10 h-10 text-[#000080]" />,
      href: "/services/data-analytics",
    },
    {
      title: "Product Management & Engineering",
      desc: "We turn ideas into market-ready products by integrating user research, agile engineering, and continuous innovation.",
      icon: <Settings className="w-10 h-10 text-[#000080]" />,
      href: "/services/product-management-engineering",
    },
    {
      title: "Enterprise Automation",
      desc: "We enable enterprises to streamline workflows and enhance productivity through process automation and RPA integration.",
      icon: <Workflow className="w-10 h-10 text-[#000080]" />,
      href: "/services/enterprise-automation",
    },
    {
      title: "Legacy Support & Modernization",
      desc: "Our team modernizes outdated systems with minimal disruption — boosting performance, reliability, and scalability.",
      icon: <RefreshCw className="w-10 h-10 text-[#000080]" />,
      href: "/services/legacy-support-modernization",
    },
    {
      title: "Cyber Security",
      desc: "We safeguard digital ecosystems through advanced threat intelligence, compliance frameworks, and continuous monitoring.",
      icon: <Shield className="w-10 h-10 text-[#000080]" />,
      href: "/services/cyber-security",
    },
    {
      title: "Identity and Access Management",
      desc: "Secure and simplify access across applications and systems with IAM solutions designed for performance and compliance.",
      icon: <Key className="w-10 h-10 text-[#000080]" />,
      href: "/services/identity-access-management",
    },
    {
      title: "Next Gen Technologies",
      desc: "We explore and implement cutting-edge technologies — from blockchain and quantum computing to IoT — to future-proof businesses.",
      icon: <Cpu className="w-10 h-10 text-[#000080]" />,
      href: "/services/next-gen-technologies",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
     {/* HERO SECTION */}
<section className="relative bg-[#F2F3F7] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="col-span-12 lg:col-span-7"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
        Services
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        We deliver end-to-end technology solutions across industries — enabling smarter operations,
        better customer experiences, and sustainable innovation.
      </p>
      <div className="mt-6 text-sm text-gray-500 font-medium">
        <span className="text-[#000080] font-semibold">PAVES TECHNOLOGIES</span>
        <span className="mx-2">›</span>
        <span>Services</span>
      </div>
    </motion.div>

    {/* RIGHT-SIDE DIAGONAL IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="hidden lg:block col-span-5"
    >
      <div className="relative h-60 w-full">
        <div className="absolute inset-0 clip-diagonal overflow-hidden shadow-lg">
          <Image
            src="/assets/industry-bg.jpg" // <-- use your own image here
            alt="Services Illustration"
            fill
            className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#000080]/25 via-transparent to-transparent"></div>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* SERVICES GRID */}
      <section className="bg-[#F2F3F7] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Services we provide
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,128,0.15)",
                  borderColor: "#000080",
                }}
                className="flex flex-col justify-between p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:bg-white"
              >
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center bg-[#000080]/10 rounded-full p-4 shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Learn More Link */}
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center text-[#000080] font-semibold group transition-all"
                >
                  Learn More
                  <ArrowRight
                    className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
