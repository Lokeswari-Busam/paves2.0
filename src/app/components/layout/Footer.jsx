"use client"

import { useEffect, useState } from "react"
import { ArrowUp, Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div
                className="text-2xl font-bold bg-clip-text text-transparent mb-4"
                style={{ backgroundImage: "linear-gradient(to right, #d23369, #86163c)" }}
              >
                Paves
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Empowering businesses through innovative technology solutions and strategic partnerships.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-700/30 border border-slate-600/50 text-gray-300 hover:text-[#d23369] hover:border-[#d23369]/50 transition-all"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-700/30 border border-slate-600/50 text-gray-300 hover:text-[#d23369] hover:border-[#d23369]/50 transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-700/30 border border-slate-600/50 text-gray-300 hover:text-[#d23369] hover:border-[#d23369]/50 transition-all"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Careers"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-[#d23369] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {["Software Dev", "Cloud Solutions", "IT Consulting", "DevOps"].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-300 hover:text-[#d23369] transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="mailto:hello@pavestechnologies.com" className="hover:text-[#d23369] transition-colors">
                    hello@pavestechnologies.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="hover:text-[#d23369] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="text-gray-400">San Francisco, CA</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#3a4aac]/30 mb-6" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Paves Technologies. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="text-gray-400 hover:text-[#d23369] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d23369] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d23369] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 h-12 w-12 rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(135deg, #d23369, #86163c)" }}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
