"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const [mobileOpenSubmenus, setMobileOpenSubmenus] = useState({});
  const [mobileOpenSubSubmenus, setMobileOpenSubSubmenus] = useState({});

  const dropdownRefs = useRef({});
  const submenuRefs = useRef({});
  const subSubmenuRefs = useRef({});
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = (ref) => {
    if (!ref) return;
    gsap.killTweensOf(ref);
    gsap.fromTo(ref, { opacity: 0, y: 10, display: "none" }, {
      opacity: 1, y: 0, display: "block", duration: 0.3, ease: "power3.out",
      onStart: () => (ref.style.display = "block"),
    });
    const items = ref.querySelectorAll(".submenu-item");
    gsap.fromTo(items, { opacity: 0, y: -12 }, { opacity: 1, y: 0, stagger: 0.05, delay: 0.04, duration: 0.25, ease: "power2.out" });
  };

  const hideDropdown = (ref) => {
    if (!ref) return;
    gsap.killTweensOf(ref);
    gsap.to(ref, { opacity: 0, y: 5, duration: 0.2, ease: "power2.inOut", onComplete: () => (ref.style.display = "none") });
  };

  const handleMouseEnter = (menu) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
      if (key !== menu && ref) gsap.to(ref, { opacity: 0, y: 5, duration: 0.15, onComplete: () => (ref.style.display = "none") });
    });
    setActiveDropdown(menu);
    showDropdown(dropdownRefs.current[menu]);
  };

  const handleMouseLeave = (menu) => {
    hideTimeout.current = setTimeout(() => {
      hideDropdown(dropdownRefs.current[menu]);
      if (activeDropdown === menu) setActiveDropdown(null);
    }, 200);
  };

  const handleSubmenuEnter = (key) => showDropdown(submenuRefs.current[key]);
  const handleSubmenuLeave = (key) => hideDropdown(submenuRefs.current[key]);
  const handleSubSubmenuEnter = (key) => showDropdown(subSubmenuRefs.current[key]);
  const handleSubSubmenuLeave = (key) => hideDropdown(subSubmenuRefs.current[key]);

  const toggleMobileMenu = (key) => setMobileOpenMenus((p) => ({ ...p, [key]: !p[key] }));
  const toggleMobileSubmenu = (key) => setMobileOpenSubmenus((p) => ({ ...p, [key]: !p[key] }));
  const toggleMobileSubSubmenu = (key) => setMobileOpenSubSubmenus((p) => ({ ...p, [key]: !p[key] }));

  const navLinks = [
    { title: "Home", href: "/" },
    {
      title: "What We Do", href: "/what-we-do",
      submenu: [
        {
          title: "Industry Verticals", href: "/what-we-do/industry-verticals",
          subitems: [
            {
              title: "Payments", href: "/what-we-do/industry-verticals/payments",
              subitems: [
                { title: "Card Issuers", href: "/what-we-do/industry-verticals/payments/card-issuers" },
                { title: "Merchant Acquirers", href: "/what-we-do/industry-verticals/payments/merchant-acquirers" },
                { title: "E-Commerce", href: "/what-we-do/industry-verticals/payments/e-commerce" },
                { title: "Embedded Finance", href: "/what-we-do/industry-verticals/payments/embedded-finance" },
                { title: "Payment Gateways", href: "/what-we-do/industry-verticals/payments/payment-gateways" },
                { title: "Real Time Payments", href: "/what-we-do/industry-verticals/payments/real-time-payments" },
              ],
            },
            {
              title: "Banking", href: "/what-we-do/industry-verticals/banking",
              subitems: [
                { title: "Retail Banking", href: "/what-we-do/industry-verticals/banking/retail-banking" },
                { title: "Corporate And Commercial Banking", href: "/what-we-do/industry-verticals/banking/corporate-and-commercial-banking" },
                { title: "Consumer Lending", href: "/what-we-do/industry-verticals/banking/consumer-lending" },
                { title: "Digital Banking", href: "/what-we-do/industry-verticals/banking/digital-banking" },
                { title: "Open Banking", href: "/what-we-do/industry-verticals/banking/open-banking" },
              ],
            },
            { title: "Payments Fraud & AML", href: "/what-we-do/industry-verticals/payments-fraud-and-aml" },
            { title: "Governance Risk & Compliance", href: "/what-we-do/industry-verticals/governance-risk-compliance" },
            { title: "Insurance", href: "/what-we-do/industry-verticals/insurance" },
            { title: "Capital Markets", href: "/what-we-do/industry-verticals/capital-markets" },
          ],
        },
        {
          title: "Services", href: "/what-we-do/services",
          subitems: [
            { title: "Business & Technology Advisory Consulting", href: "/what-we-do/services/business-and-technology" },
            { title: "Artificial Intelligence", href: "/what-we-do/services/artificial-intelligence" },
            { title: "Cloud Engineering And DevOps", href: "/what-we-do/services/cloud-and-devops" },
            { title: "Data And Analytics", href: "/what-we-do/services/data-and-analytics" },
            { title: "Product Management & Engineering", href: "/what-we-do/services/product-management" },
            { title: "Enterprise Automation", href: "/what-we-do/services/enterprise-automation" },
            { title: "Legacy Support & Modernization", href: "/what-we-do/services/legacy-support" },
            { title: "Cyber Security", href: "/what-we-do/services/cyber-security" },
            { title: "Identity And Access Management", href: "/what-we-do/services/identity-and-access-management" },
            { title: "Next Gen Technologies", href: "/what-we-do/services/next-gen-technologies" },
          ],
        },
      ],
    },
    {
      title: "Who We Are", href: "/who-we-are",
      submenu: [
        { title: "About Paves", href: "/who-we-are/about" },
        { title: "Management and Advisory Board", href: "/who-we-are/management-advisory-board" },
        { title: "Technology Council", href: "/who-we-are/technology-council" },
      ],
    },
    { title: "Paves AI Labs", href: "/paves-ai-labs" },
    { title: "Insights", href: "/insights" },
    { title: "Careers", href: "/careers" },
  ];

  const isActive = (href) => pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/assets/logo.png" alt="Paves Technologies" width={130} height={40} className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div
                  key={link.title}
                  className="relative group"
                  onMouseEnter={() => link.submenu && handleMouseEnter(link.title)}
                  onMouseLeave={() => link.submenu && handleMouseLeave(link.title)}
                >
                  <motion.button
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[10px] xl:text-[11px] font-bold tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-200"
                    style={{ color: active ? "#2a3990" : "#374151" }}
                    onClick={() => link.href && (window.location.href = link.href)}
                  >
                    <span className="relative group-hover:text-[#2a3990] transition-colors duration-200">
                      {link.title}
                    </span>
                    {link.submenu && <ChevronDown className="w-3 h-3 group-hover:text-[#2a3990] transition-colors duration-200" />}

                    {/* Sliding underline */}
                    <span
                      className="absolute bottom-0 left-1/2 h-0.5 bg-[#2a3990] rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"
                      style={{ width: active ? "100%" : "0%", left: active ? "0%" : "50%" }}
                    />
                  </motion.button>

                  {/* Level 1 Dropdown */}
                  {link.submenu && (
                    <div
                      ref={(el) => (dropdownRefs.current[link.title] = el)}
                      className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-lg p-2.5 w-64 space-y-0.5 z-50 hidden"
                    >
                      {link.submenu.map((sub) => (
                        <div
                          key={sub.title}
                          className="relative submenu-item"
                          onMouseEnter={() => handleSubmenuEnter(sub.title)}
                          onMouseLeave={() => handleSubmenuLeave(sub.title)}
                          onClick={(e) => { e.stopPropagation(); if (sub.href) window.location.href = sub.href; }}
                        >
                          <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2a3990] rounded-md transition-colors duration-150 cursor-pointer">
                            {sub.title}
                            {sub.subitems && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
                          </div>

                          {sub.subitems && (
                            <div
                              ref={(el) => (submenuRefs.current[sub.title] = el)}
                              className="absolute top-0 left-full bg-white border border-gray-100 shadow-lg rounded-lg p-2.5 w-72 ml-px space-y-0.5 z-50 hidden"
                            >
                              {sub.subitems.map((item) => (
                                <div
                                  key={item.title}
                                  className="relative submenu-item"
                                  onMouseEnter={() => handleSubSubmenuEnter(item.title)}
                                  onMouseLeave={() => handleSubSubmenuLeave(item.title)}
                                  onClick={(e) => { e.stopPropagation(); if (item.href) window.location.href = item.href; }}
                                >
                                  <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2a3990] rounded-md transition-colors duration-150 cursor-pointer">
                                    {item.title}
                                    {item.subitems && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
                                  </div>

                                  {item.subitems && (
                                    <div
                                      ref={(el) => (subSubmenuRefs.current[item.title] = el)}
                                      className="absolute top-0 left-full bg-white border border-gray-100 shadow-md rounded-lg p-2.5 w-60 ml-px space-y-0.5 z-50 hidden"
                                    >
                                      {item.subitems.map((child) => (
                                        <Link
                                          key={child.title}
                                          href={child.href}
                                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2a3990] rounded-md transition-colors duration-150"
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          {child.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:block bg-[#000080] text-white px-5 py-2 text-[11px] font-bold tracking-widest uppercase hover:bg-[#2a3990] transition-colors duration-200 whitespace-nowrap"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-[#2a3990] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            <div className="px-4 py-2 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href || "#"}
                      className="flex-1 py-3 text-sm font-bold tracking-widest uppercase text-gray-800 hover:text-[#2a3990] transition-colors"
                      onClick={() => { if (!link.submenu) setIsMobileMenuOpen(false); }}
                    >
                      {link.title}
                    </Link>
                    {link.submenu && (
                      <button onClick={() => toggleMobileMenu(link.title)} className="p-3 text-gray-500 hover:text-[#2a3990] transition-colors">
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpenMenus[link.title] ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>

                  {link.submenu && mobileOpenMenus[link.title] && (
                    <div className="pl-4 pb-2 space-y-0.5">
                      {link.submenu.map((sub) => (
                        <div key={sub.title} className="border-l-2 border-[#2a3990]/20 pl-3">
                          <div className="flex items-center justify-between">
                            <Link
                              href={sub.href || "#"}
                              className="flex-1 py-2 text-sm font-medium text-gray-700 hover:text-[#2a3990] transition-colors"
                              onClick={() => { if (!sub.subitems) setIsMobileMenuOpen(false); }}
                            >
                              {sub.title}
                            </Link>
                            {sub.subitems && (
                              <button onClick={() => toggleMobileSubmenu(sub.title)} className="p-2 text-gray-400 hover:text-[#2a3990] transition-colors">
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileOpenSubmenus[sub.title] ? "rotate-180" : ""}`} />
                              </button>
                            )}
                          </div>

                          {sub.subitems && mobileOpenSubmenus[sub.title] && (
                            <div className="pl-3 pb-1 space-y-0.5">
                              {sub.subitems.map((item) => (
                                <div key={item.title} className="border-l-2 border-[#2a3990]/10 pl-3">
                                  <div className="flex items-center justify-between">
                                    <Link
                                      href={item.href || "#"}
                                      className="flex-1 py-2 text-xs text-gray-600 hover:text-[#2a3990] transition-colors"
                                      onClick={() => { if (!item.subitems) setIsMobileMenuOpen(false); }}
                                    >
                                      {item.title}
                                    </Link>
                                    {item.subitems && (
                                      <button onClick={() => toggleMobileSubSubmenu(item.title)} className="p-2 text-gray-400 hover:text-[#2a3990] transition-colors">
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileOpenSubSubmenus[item.title] ? "rotate-180" : ""}`} />
                                      </button>
                                    )}
                                  </div>

                                  {item.subitems && mobileOpenSubSubmenus[item.title] && (
                                    <div className="pl-3 pb-1 space-y-0.5">
                                      {item.subitems.map((child) => (
                                        <Link
                                          key={child.title}
                                          href={child.href || "#"}
                                          className="block py-1.5 text-xs text-gray-500 hover:text-[#2a3990] transition-colors border-l-2 border-gray-100 pl-3"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {child.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="pt-3 pb-2"
              >
                <Link
                  href="/contact"
                  className="block w-full bg-[#000080] text-white px-6 py-3 text-sm font-bold tracking-widest uppercase text-center hover:bg-[#2a3990] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
