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
  image="/assets/what_we_do_hero.jpeg"
  breadcrumb={[
    {
      label: "Paves Technologies",
      href: "/",                    
    },
    {
      label: "What We Do",
      href: "/what-we-do",          
    },
    {
      label: "Services"              
    }
  ]}
/>


      {/* SERVICES GRID */}
      <section className="bg-[#F2F3F7] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Services We Provide
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={`/what-we-do${service.href}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,128,0.15)",
                    borderColor: "#000080",
                  }}
                  className="flex flex-col justify-between p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 cursor-pointer"
                >
                  {/* ICON + TEXT */}
                  <div className="flex items-start gap-5">
                    
                    {/* Icon with same styling as Industry Verticals */}
                    <div className="flex items-center justify-center bg-[#d23369] rounded-full p-4 shrink-0 group-hover:scale-110 transition-transform">
                      {React.cloneElement(service.icon, {
                        className: "w-8 h-8 text-white",
                      })}
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

                  {/* LEARN MORE */}
                  <div className="mt-6 inline-flex items-center text-[#000080] font-semibold group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
