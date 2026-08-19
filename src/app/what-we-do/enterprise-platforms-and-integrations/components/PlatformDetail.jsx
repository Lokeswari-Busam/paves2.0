"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Boxes, Users, Workflow, Network, Check } from "lucide-react";

import { getPlatform, PLATFORMS, SECTION_BASE } from "../data";

/* lucide components are resolved here rather than stored in data.js, so the
   data module stays serializable and importable from server components. */
const ICONS = { Boxes, Users, Workflow, Network };

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PlatformDetail({ slug }) {
  const platform = getPlatform(slug);
  if (!platform) return null;

  const {
    title,
    icon,
    summary,
    technologies,
    capabilities,
    deliverables,
    outcomes,
  } = platform;
  const Icon = ICONS[icon] ?? Network;

  const siblings = PLATFORMS.filter((p) => p.slug !== slug);

  return (
    <div className="bg-white text-gray-900">
      {/* ── OVERVIEW ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mx-auto w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a3990] mb-5">
            {title}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {summary}
          </p>

          {/* Technologies */}
          <div className="mt-8">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
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
        </motion.div>
      </section>

      {/* ── WHAT WE DELIVER ───────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
            What We Deliver
          </h3>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
            className="grid gap-5 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto"
          >
            {deliverables.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-4 bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#dbe1ff] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#2a3990]" strokeWidth={2.4} />
                </span>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
          Capabilities
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-5"
        >
          {capabilities.map((cap) => (
            <motion.span
              key={cap}
              variants={itemVariants}
              className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ── OUTCOMES ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 text-center">
            What You Get
          </h3>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto"
          >
            {outcomes.map((point) => (
              <motion.li
                key={point}
                variants={itemVariants}
                className="bg-white border border-gray-100 rounded-xl px-6 py-5 flex items-start shadow-sm hover:shadow-lg transition-shadow duration-300"
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
        </div>
      </section>

      {/* ── EXPLORE OTHER PLATFORMS ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Explore Other Platforms
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {siblings.map((sibling) => {
            const SiblingIcon = ICONS[sibling.icon] ?? Network;
            return (
              <Link
                key={sibling.slug}
                href={`${SECTION_BASE}/${sibling.slug}`}
                className="group flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <SiblingIcon
                    className="w-5 h-5 text-white"
                    strokeWidth={1.8}
                  />
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#2a3990]">
                  {sibling.title}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#0F1E63] text-white text-center py-14 sm:py-16 lg:py-20 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Let&rsquo;s talk about your {title.toLowerCase()}
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
