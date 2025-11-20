"use client";

import { motion } from "framer-motion";
//import { Navigation } from "@/components/navbar";
//import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      {/* <Navigation /> */}

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[65vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://pavestechnologies.com/wp-content/uploads/2024/07/contact-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Contact Us
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Have a question or want to collaborate?  
            Our team is ready to assist you.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
          Reach out to us for business inquiries, partnerships, or support.  
          We respond quickly and look forward to working with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Email */}
          <div className="bg-white border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email
            </h3>
            <a
              href="mailto:contact@pavestechnologies.com"
              className="text-[#d23369] font-medium text-lg hover:underline"
            >
              contact@pavestechnologies.com
            </a>
          </div>

          {/* USA */}
          <div className="bg-white border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              United States
            </h3>
            <a
              href="tel:+14075365300"
              className="text-[#d23369] font-medium text-lg hover:underline"
            >
              +1 407-536-5300
            </a>
          </div>

          {/* UAE */}
          <div className="bg-white border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              United Arab Emirates
            </h3>
            <a
              href="tel:+971566202765"
              className="text-[#d23369] font-medium text-lg hover:underline"
            >
              +971 56 620 2765
            </a>
          </div>

          {/* Singapore */}
          <div className="bg-white border rounded-2xl p-8 shadow hover:shadow-lg transition md:col-start-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Singapore
            </h3>
            <a
              href="tel:+6583132613"
              className="text-[#d23369] font-medium text-lg hover:underline"
            >
              +65 8313 2613
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 px-6 bg-[#f8f9ff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Send Us a Message
          </h2>

          <form
            className="grid grid-cols-1 gap-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will get back to you shortly.");
            }}
          >
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-[#d23369] focus:border-[#d23369]"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-[#d23369] focus:border-[#d23369]"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-[#d23369] focus:border-[#d23369]"
                placeholder="How can we help you?"
              />
            </div>

            {/* Submit */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-10 py-3 bg-[#000080] text-white rounded-full font-semibold hover:bg-[#000060] transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
