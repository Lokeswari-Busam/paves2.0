"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-900 text-white py-16 px-6 md:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-4"
      >
        Connect with Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-6 text-lg opacity-90"
      >
        We'd love to discuss how we can help you harness the power of AI for your business.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="space-y-3 text-lg"
      >
        <p className="flex justify-center items-center gap-2">
          <Mail className="w-5 h-5" />{" "}
          <a href="mailto:contact@pavestechnologies.com" className="underline">
            contact@pavestechnologies.com
          </a>
        </p>
        <p className="flex justify-center items-center gap-2">
          <Phone className="w-5 h-5" />{" "}
          <a href="tel:+14075365300" className="underline">
            +1 407-536-5300
          </a>
        </p>
      </motion.div>
    </section>
  );
}
