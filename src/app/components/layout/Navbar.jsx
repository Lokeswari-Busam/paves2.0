"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
  const dropdownRefs = useRef({});
  const submenuRefs = useRef({});
  const subSubmenuRefs = useRef({});
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate dropdown show
  const showDropdown = (ref) => {
    if (!ref) return;
    gsap.killTweensOf(ref);
    gsap.fromTo(
      ref,
      { opacity: 0, y: 10, display: "none" },
      {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.35,
        ease: "power3.out",
        onStart: () => (ref.style.display = "block"),
      }
    );
    const items = ref.querySelectorAll(".submenu-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: -15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        delay: 0.05,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  };

  const closeDropdown = (menu) => {
    const dropdown = dropdownRefs.current[menu];
    if (dropdown) {
      gsap.killTweensOf(dropdown);
      gsap.to(dropdown, {
        opacity: 0,
        y: 5,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => (dropdown.style.display = "none"),
      });
    }
    if (activeDropdown === menu) setActiveDropdown(null);
  };

  // Animate dropdown hide
  const hideDropdown = (ref) => {
    if (!ref) return;
    gsap.killTweensOf(ref);
    gsap.to(ref, {
      opacity: 0,
      y: 5,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => (ref.style.display = "none"),
    });
  };

  const handleMouseEnter = (menu) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);

    // Close all other open dropdowns
    Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
      if (key !== menu && ref) {
        gsap.killTweensOf(ref);
        gsap.to(ref, {
          opacity: 0,
          y: 5,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => (ref.style.display = "none"),
        });
      }
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


  const handleSubmenuEnter = (submenu) => {
    setActiveSubmenu(submenu);
    showDropdown(submenuRefs.current[submenu]);
  };

  const handleSubmenuLeave = (submenu) => {
    hideDropdown(submenuRefs.current[submenu]);
    setActiveSubmenu(null);
  };

  const handleSubSubmenuEnter = (subSubmenu) => {
    setActiveSubSubmenu(subSubmenu);
    showDropdown(subSubmenuRefs.current[subSubmenu]);
  };

  const handleSubSubmenuLeave = (subSubmenu) => {
    hideDropdown(subSubmenuRefs.current[subSubmenu]);
    setActiveSubSubmenu(null);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    {
      title: "What We Do",
      href: "/what-we-do",
      submenu: [
        {
          title: "Industry Verticals",
          subitems: [
            {
              title: "Payments",
              subitems: [
                {
                  title: "Card Issuers",
                  href: "/industry-verticals/payments/card-issuers",
                },
                {
                  title: "Merchant Acquirers",
                  href: "/industry-verticals/payments/merchant-acquirers",
                },
                {
                  title: "E-Commerce",
                  href: "/industry-verticals/payments/e-commerce",
                },
                {
                  title: "Embedded Finance",
                  href: "/industry-verticals/payments/embedded-finance",
                },
                {
                  title: "Payment Gateways",
                  href: "/industry-verticals/payments/payment-gateways",
                },
                {
                  title: "Real Time Payments",
                  href: "/industry-verticals/payments/real-time-payments",
                },
              ],
            },
            {
              title: "Banking",
              subitems: [
                {
                  title: "Retail Banking",
                  href: "/industry-verticals/banking/retail-banking",
                },
                {
                  title: "Corporate And Commercial Banking",
                  href: "/industry-verticals/banking/corporate-commercial-banking",
                },
                {
                  title: "Consumer Lending",
                  href: "/industry-verticals/banking/consumer-lending",
                },
                {
                  title: "Digital Banking",
                  href: "/industry-verticals/banking/digital-banking",
                },
                {
                  title: "Open Banking",
                  href: "/industry-verticals/banking/open-banking",
                },
              ],
            },
            {
              title: "Payments Fraud & AML",
              href: "/industry-verticals/payments-fraud-aml",
            },
            {
              title: "Governance Risk & Compliance",
              href: "/industry-verticals/governance-risk-compliance",
            },
            { title: "Insurance", href: "/industry-verticals/insurance" },
            {
              title: "Capital Markets",
              href: "/industry-verticals/capital-markets",
            },
          ],
        },
        {
          title: "Services",
          subitems: [
            {
              title: "Business & Technology Advisory Consulting",
              href: "/services/business-technology-advisory-consulting",
            },
            {
              title: "Artificial Intelligence",
              href: "/services/artificial-intelligence",
            },
            {
              title: "Cloud Engineering And DevOps",
              href: "/services/cloud-engineering-devops",
            },
            { title: "Data And Analytics", href: "/services/data-analytics" },
            {
              title: "Product Management & Engineering",
              href: "/services/product-management-engineering",
            },
            {
              title: "Enterprise Automation",
              href: "/services/enterprise-automation",
            },
            {
              title: "Legacy Support & Modernization",
              href: "/services/legacy-support-modernization",
            },
            { title: "Cyber Security", href: "/services/cyber-security" },
            {
              title: "Identity And Access Management",
              href: "/services/identity-access-management",
            },
            {
              title: "Next Gen Technologies",
              href: "/services/next-gen-technologies",
            },
          ],
        },
      ],
    },
    {
      title: "Who We Are",
      submenu: [
        { title: "About Paves", href: "/who-we-are/about" },
        {
          title: "Management and Advisory Board",
          href: "/who-we-are/management-advisory-board",
        },
        { title: "Technology Council", href: "/who-we-are/technology-council" },
      ],
    },
    { title: "Paves AI Labs", href: "/paves-ai-labs" },
    { title: "Insights", href: "/insights" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className={` top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Paves Technologies Logo"
                width={130}
                height={45}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.title)}
                onMouseLeave={() => handleMouseLeave(link.title)}
              >
                <div className="flex items-center my-4 gap-1 cursor-pointer text-sm font-semibold tracking-wide text-gray-900 hover:text-[#000080] transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#000080] after:transition-all after:duration-300 hover:after:w-full">
                  {link.title.toUpperCase()}
                  {link.submenu && <ChevronDown size={16} />}
                </div>

                {/* Dropdown */}
                {link.submenu && (
                  <div
                    ref={(el) => (dropdownRefs.current[link.title] = el)}
                    className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-lg p-3 w-64 space-y-1 z-50 hidden"
                  >
                    {link.submenu.map((sub) => (
                      <div
                        key={sub.title}
                        className="submenu-item relative group"
                        onMouseEnter={() => handleSubmenuEnter(sub.title)}
                        onMouseLeave={() => handleSubmenuLeave(sub.title)}
                      >
                        <div className="flex justify-between items-center px-3 py-1.5 rounded-md text-gray-800 font-medium hover:bg-gray-100 cursor-pointer">
                          {sub.title}
                          {sub.subitems && <ChevronRight size={16} />}
                        </div>

                        {sub.subitems && (
                          <div
                            ref={(el) => (submenuRefs.current[sub.title] = el)}
                            className="absolute top-0 left-full bg-white shadow-lg rounded-lg p-3 w-72 ml-[1px] space-y-1 z-50 hidden"
                          >
                            {sub.subitems.map((item) => (
                              <div
                                key={item.title}
                                className="submenu-item relative group"
                                onMouseEnter={() =>
                                  handleSubSubmenuEnter(item.title)
                                }
                                onMouseLeave={() =>
                                  handleSubSubmenuLeave(item.title)
                                }
                              >
                                <div className="flex justify-between items-center px-3 py-1.5 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer">
                                  {item.title}
                                  {item.subitems && <ChevronRight size={14} />}
                                </div>

                                {item.subitems && (
                                  <div
                                    ref={(el) =>
                                      (subSubmenuRefs.current[item.title] = el)
                                    }
                                    className="absolute top-0 left-full bg-white shadow-md rounded-lg p-3 w-64 ml-[1px] space-y-1 z-50 hidden"
                                  >
                                    {item.subitems.map((child) =>
                                      child.href ? (
                                        <Link
                                          key={child.title}
                                          href={child.href}
                                          className="block px-3 py-1.5 text-gray-700 rounded-md hover:bg-gray-100"
                                        >
                                          {child.title}
                                        </Link>
                                      ) : (
                                        <div
                                          key={child.title}
                                          className="block px-3 py-1.5 text-gray-700 rounded-md hover:bg-gray-100 cursor-default"
                                        >
                                          {child.title}
                                        </div>
                                      )
                                    )}
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
            ))}
          </div>

          {/* Right: Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
              style={{ background: "#000080" }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
