"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Increase scroll travel so ALL cards appear
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-900%"]);

  const services = [
    {
      title: "Business & Technology Advisory Consulting",
      desc: "We help organizations align business goals with advanced technology strategies to drive operational excellence.",
      image: "/assets/business and technology advisory.jpeg",
    },
    {
      title: "Artificial Intelligence",
      desc: "We build AI systems that automate workflows, enhance predictions, and accelerate decision-making.",
      image: "/assets/artificial intelligence.webp",
    },
    {
      title: "Cloud Engineering And DevOps",
      desc: "We architect scalable cloud systems with automated CI/CD pipelines for faster deployments.",
      image: "/assets/cloud engineering and devops.jpeg",
    },
    {
      title: "Data And Analytics",
      desc: "We deliver analytics platforms, dashboards, and predictive modeling to power data-driven decisions.",
      image: "/assets/data analytics.jpg",
    },
    {
      title: "Product Management & Engineering",
      desc: "We build scalable digital products focused on usability, engineering excellence, and innovation.",
      image: "/assets/product management and engineering.jpg",
    },
    {
      title: "Enterprise Automation",
      desc: "We automate repetitive workflows using AI, bots, and workflow orchestration tools.",
      image: "/assets/enterprise automation.jpg",
    },
    {
      title: "Legacy Support & Modernization",
      desc: "We modernize legacy apps, refactor systems, and migrate workloads to modern platforms.",
      image: "/assets/legacy support and modernisation.png",
    },
    {
      title: "Cyber Security",
      desc: "We implement secure architectures, access control, and threat detection systems.",
      image: "/assets/cyber security.jpg",
    },
    {
      title: "Identity And Access Management",
      desc: "We deploy SSO, MFA, and RBAC to secure identity access across applications.",
      image: "/assets/Identity-and-Access-Management.jpg",
    },
    {
      title: "Next Gen Technologies",
      desc: "We build solutions using IoT, Blockchain, AR/VR, and intelligent edge systems.",
      image: "/assets/next gen technologies.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative 
        h-[200vh]               /* Increased scroll height */
        w-full 
        bg-fixed bg-cover bg-center
      "
      style={{ backgroundImage: "url('/assets/services_bg.jpg')" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black/40">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 
          flex md:flex-row flex-col gap-18">

          {/* LEFT TEXT */}
          <div className="text-white flex flex-col justify-center max-w-lg">
            <p className="text-blue-200 tracking-wide mb-3 text-lg">
              Our Core Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Empowering Businesses Through Technology & Innovation
            </h1>

            <p className="text-blue-100 text-lg max-w-md">
              Discover our powerful range of services designed to accelerate digital transformation and enable future-ready businesses.
            </p>
          </div>

          {/* RIGHT — SCROLLING CARDS */}
          <motion.div
            style={{ y: cardsY }}
            className="space-y-8 pt-20 w-full md:w-[480px]"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden"
              >
                <div className="w-full h-48 md:h-56 overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    width={800}
                    height={580}
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
                </div>

                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
