"use client";

import { usePathname } from "next/navigation";
import GlassGradientHero from "./components/GlassGradientHero";

export default function ServicesLayout({ children }) {
  const pathname = usePathname();

  // 🔥 Full Hero Config Matching Your Folder Names
  const heroSectionData = {
    "/what-we-do/services/artificial-intelligence": {
      title: "Artificial Intelligence",
      description:
        "Building intelligent systems with machine learning, NLP, and computer vision to automate processes and deliver predictive insights.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Artificial Intelligence",
    },

    "/what-we-do/services/business-and-technology": {
      title: "Business & Technology Advisory",
      description:
        "Aligning business goals with intelligent technology strategies to accelerate digital transformation and enterprise innovation.",
    image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Business & Technology",
    },

    "/what-we-do/services/cloud-and-devops": {
      title: "Cloud Engineering & DevOps",
      description:
        "Designing and scaling cloud-native platforms with automated CI/CD workflows, resilient infrastructure, and optimized performance.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Cloud & DevOps",
    },

    "/what-we-do/services/cyber-security": {
      title: "Cyber Security",
      description:
        "Protecting digital ecosystems with continuous monitoring, advanced threat intelligence, and enterprise-grade security frameworks.",
     image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Cyber Security",
    },

    "/what-we-do/services/data-and-analytics": {
      title: "Data & Analytics",
      description:
        "Transforming raw data into real business intelligence through analytics, data engineering, and insights-driven decision frameworks.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Data & Analytics",
    },

    "/what-we-do/services/enterprise-automation": {
      title: "Enterprise Automation",
      description:
        "Empowering businesses with intelligent automation, streamlined workflows, and robotic process automation for maximum efficiency.",
     image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Enterprise Automation",
    },

    "/what-we-do/services/identity-and-access-management": {
      title: "Identity & Access Management",
      description:
        "Simplifying and securing access with IAM platforms designed for scalability, compliance, and seamless authentication experience.",
     image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Identity & Access Management",
    },

    "/what-we-do/services/legacy-support": {
      title: "Legacy Support & Modernization",
      description:
        "Revitalizing outdated systems with modern architectures, minimal disruption, enhanced performance, and future-ready technology stacks.",
     image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Legacy Support",
    },

    "/what-we-do/services/next-gen-technologies": {
      title: "Next Gen Technologies",
      description:
        "Exploring and implementing cutting-edge technologies such as blockchain, IoT, and quantum computing to future-proof enterprises.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Next Gen Technologies",
    },

    "/what-we-do/services/product-management": {
      title: "Product Management & Engineering",
      description:
        "Turning great ideas into scalable digital products with user-centered design, agile engineering, and continuous innovation.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb:
        "Paves Technologies › What We Do › Services › Product Management",
    },
  };

  // Find hero data based on current path
  const heroData = heroSectionData[pathname];

  return (
    <div>
      {heroData && (
        <GlassGradientHero
          title={heroData.title}
          description={heroData.description}
          image={heroData.image}
          breadcrumb={heroData.breadcrumb}
        />
      )}

      {children}
    </div>
  );
}
