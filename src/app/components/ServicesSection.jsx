"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Cloud, Briefcase, Cpu, Package, Zap, Globe, Wrench } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom applications built with modern frameworks and best practices, tailored to your business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS, Azure, GCP expertise. Migration, optimization, and management of cloud infrastructure.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic guidance to transform your digital landscape and achieve business objectives.",
  },
  {
    icon: Cpu,
    title: "DevOps & Automation",
    description: "CI/CD pipelines, infrastructure-as-code, and operational excellence for seamless deployments.",
  },
  {
    icon: Package,
    title: "Product Engineering",
    description: "From concept to launch, we build scalable products that users love and businesses trust.",
  },
  {
    icon: Zap,
    title: "AI & Data Solutions",
    description: "Machine learning, analytics, and data-driven insights to unlock your organization's potential.",
  },
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description: "Responsive, performant applications that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "Proactive monitoring, updates, and support to keep your systems running at peak performance.",
  },
]

export function ServicesSection() {
  const [visibleItems, setVisibleItems] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target 
            const index = Number.parseInt(element.dataset.index || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-32 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated SVG Wave Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="serviceWave" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d23369" />
            <stop offset="100%" stopColor="#3a4aac" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="150" r="300" fill="url(#serviceWave)" opacity="0.5" />
        <circle cx="1000" cy="450" r="250" fill="url(#serviceWave)" opacity="0.3" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #d23369, #86163c)" }}
            >
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleItems.includes(index)
            const delay = index * 50

            return (
              <div
                key={index}
                data-index={index}
                className={`group relative p-6 rounded-xl bg-slate-700/20 border border-slate-600/30 hover:border-[#d23369]/60 hover:bg-slate-700/30 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div
                  className="flex items-center justify-center h-12 w-12 rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #d23369, #86163c)" }}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>

                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(210, 51, 105, 0.1), transparent)",
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
