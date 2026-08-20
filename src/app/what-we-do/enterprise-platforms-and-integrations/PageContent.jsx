"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Boxes, Users, Workflow, Network, ArrowRight } from "lucide-react";

import Hero from "../components/Hero";
import { PLATFORMS, SECTION_BASE } from "./data";

/* lucide components resolved here; data.js stays serializable. */
const ICONS = { Boxes, Users, Workflow, Network };

/* Shared scroll-entrance variants — same timings as the other
   what-we-do sections (services & industry-verticals PageContent). */
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const differentiators = [
  "Platform-agnostic architecture and vendor-neutral advice",
  "Deep domain expertise across banking, payments, and insurance",
  "Secure, compliance-ready integration patterns",
  "AI-led automation built into every workflow",
];

export default function EnterprisePlatformsContent() {
  return (
    <div className="bg-white text-gray-900">
      {/* ── HERO ──────────────────────────────────────────────
          Rendered inline (not via a HeroWrapper pathname map) because this is
          a top-level What We Do section, the same as the Services and
          Industry Verticals landing pages. */}
      <Hero
        title="Enterprise Platforms & Integrations"
        description="Connecting enterprise platforms, applications, and data to create seamless, scalable business ecosystems."
        image="/assets/shared/what_we_do_hero.jpeg"
        breadcrumb={[
          { label: "Paves Technologies", href: "/" },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Enterprise Platforms & Integrations" },
        ]}
      />

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a3990] mb-5">
            One Connected Enterprise, Not Ten Disconnected Systems
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Most enterprises don&rsquo;t suffer from a shortage of platforms — they
            suffer from platforms that don&rsquo;t talk to each other. We
            implement, extend, and integrate the systems that run your business,
            so processes flow end to end and your data stays consistent
            wherever it lands.
          </p>
        </motion.div>
      </section>

      {/* ── CAPABILITY CARDS ──────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
            Platforms We Work With
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
            className="grid gap-6 sm:gap-8 md:grid-cols-2"
          >
            {PLATFORMS.map(({ slug, title, icon, summary, technologies, capabilities }) => {
              const Icon = ICONS[icon] ?? Network;
              return (
              <motion.article
                key={slug}
                variants={itemVariants}
                className="group flex flex-col bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#2a3990]">
                    {title}
                  </h4>
                </div>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {summary}
                </p>

                {/* Technologies */}
                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#dbe1ff] px-3 py-1 text-xs font-medium text-[#2a3990]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Capabilities
                  </p>
                  <ul className="grid grid-cols-1 xs:grid-cols-2 gap-x-5 gap-y-2">
                    {capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-primary font-bold leading-5">
                          &rsaquo;
                        </span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link through to the platform's own page */}
                <Link
                  href={`${SECTION_BASE}/${slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2a3990] hover:text-primary transition-colors"
                >
                  Explore {title}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={2}
                  />
                </Link>
              </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY PAVES ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
          Why Paves for Enterprise Platforms &amp; Integrations?
        </h3>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto"
        >
          {differentiators.map((point) => (
            <motion.li
              key={point}
              variants={itemVariants}
              className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 flex items-start shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-[#2a3990] text-2xl font-bold mr-4 shrink-0 leading-6">
                &rsaquo;
              </span>
              <p className="text-sm sm:text-base text-gray-800 font-medium">
                {point}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#0F1E63] text-white text-center py-14 sm:py-16 lg:py-20 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Let&rsquo;s connect your enterprise ecosystem
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Tell us where your systems are holding you back, and we&rsquo;ll show
          you what an integrated platform landscape could look like.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary px-7 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#c0395a] transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
