"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
  
  // Mobile accordion states
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const [mobileOpenSubmenus, setMobileOpenSubmenus] = useState({});
  const [mobileOpenSubSubmenus, setMobileOpenSubSubmenus] = useState({});
  
  const dropdownRefs = useRef({});
  const submenuRefs = useRef({});
  const subSubmenuRefs = useRef({});
  const mobileMenuRefs = useRef({});
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

  // Mobile accordion toggle functions
  const toggleMobileMenu = (key) => {
    setMobileOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleMobileSubmenu = (key) => {
    setMobileOpenSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleMobileSubSubmenu = (key) => {
    setMobileOpenSubSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const navLinks = [
    { title: "Home", href: "/" },
    {
      title: "What We Do",
      href: "/what-we-do",
      submenu: [
        {
          title: "Industry Verticals",
          href: "/what-we-do/industry-verticals",
          subitems: [
            {
              title: "Payments",
              href: "/what-we-do/industry-verticals/payments",
              subitems: [
                {
                  title: "Card Issuers",
                  href: "/what-we-do/industry-verticals/payments/card-issuers",
                },
                {
                  title: "Merchant Acquirers",
                  href: "/what-we-do/industry-verticals/payments/merchant-acquirers",
                },
                {
                  title: "E-Commerce",
                  href: "/what-we-do/industry-verticals/payments/e-commerce",
                },
                {
                  title: "Embedded Finance",
                  href: "/what-we-do/industry-verticals/payments/embedded-finance",
                },
                {
                  title: "Payment Gateways",
                  href: "/what-we-do/industry-verticals/payments/payment-gateways",
                },
                {
                  title: "Real Time Payments",
                  href: "/what-we-do/industry-verticals/payments/real-time-payments",
                },
              ],
            },
            {
              title: "Banking",
              href: "/what-we-do/industry-verticals/banking",
              subitems: [
                {
                  title: "Retail Banking",
                  href: "/what-we-do/industry-verticals/banking/retail-banking",
                },
                {
                  title: "Corporate And Commercial Banking",
                  href: "/what-we-do/industry-verticals/banking/corporate-and-commercial-banking",
                },
                {
                  title: "Consumer Lending",
                  href: "/what-we-do/industry-verticals/banking/consumer-lending",
                },
                {
                  title: "Digital Banking",
                  href: "/what-we-do/industry-verticals/banking/digital-banking",
                },
                {
                  title: "Open Banking",
                  href: "/what-we-do/industry-verticals/banking/open-banking",
                },
              ],
            },
            {
              title: "Payments Fraud & AML",
              href: "/what-we-do/industry-verticals/payments-fraud-and-aml",
            },
            {
              title: "Governance Risk & Compliance",
              href: "/what-we-do/industry-verticals/governance-risk-compliance",
            },
            {
              title: "Insurance",
              href: "/what-we-do/industry-verticals/insurance",
            },
            {
              title: "Capital Markets",
              href: "/what-we-do/industry-verticals/capital-markets",
            },
          ],
        },
        {
          title: "Services",
          href: "/what-we-do/services",
          subitems: [
            {
              title: "Business & Technology Advisory Consulting",
              href: "/what-we-do/services/business-and-technology",
            },
            {
              title: "Artificial Intelligence",
              href: "/what-we-do/services/artificial-intelligence",
            },
            {
              title: "Cloud Engineering And DevOps",
              href: "/what-we-do/services/cloud-and-devops",
            },
            {
              title: "Data And Analytics",
              href: "/what-we-do/services/data-and-analytics",
            },
            {
              title: "Product Management & Engineering",
              href: "/what-we-do/services/product-management",
            },
            {
              title: "Enterprise Automation",
              href: "/what-we-do/services/enterprise-automation",
            },
            {
              title: "Legacy Support & Modernization",
              href: "/what-we-do/services/legacy-support",
            },
            {
              title: "Cyber Security",
              href: "/what-we-do/services/cyber-security",
            },
            {
              title: "Identity And Access Management",
              href: "/what-we-do/services/identity-and-access-management",
            },
            {
              title: "Next Gen Technologies",
              href: "/what-we-do/services/next-gen-technologies",
            },
          ],
        },
      ],
    },
    {
      title: "Who We Are",
      href: "/who-we-are",
      submenu: [
        { title: "About Paves", href: "/who-we-are/about" },
        {
          title: "Management and Advisory Board",
          href: "/who-we-are/management-advisory-board",
        },
        {
          title: "Technology Council",
          href: "/who-we-are/technology-council",
        },
      ],
    },
    { title: "Paves AI Labs", href: "/paves-ai-labs" },
    { title: "Insights", href: "/insights" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.png" // Update this path to your actual logo
                alt="Paves Technologies Logo"
                width={120}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>

          {/* Desktop Nav Links - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.title)}
                onMouseLeave={() => handleMouseLeave(link.title)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (link.href) window.location.href = link.href;
                }}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-medium text-gray-900 hover:text-[#000080] transition-colors duration-200 whitespace-nowrap">
                  {link.title.toUpperCase()}
                  {link.submenu && <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />}
                </button>

                {/* Desktop Dropdown */}
                {link.submenu && (
                  <div
                    ref={(el) => (dropdownRefs.current[link.title] = el)}
                    className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-lg p-3 w-64 space-y-1 z-50 hidden"
                  >
                    {link.submenu.map((sub) => (
                      <div
                        key={sub.title}
                        className="relative submenu-item"
                        onMouseEnter={() => handleSubmenuEnter(sub.title)}
                        onMouseLeave={() => handleSubmenuLeave(sub.title)}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (sub.href) window.location.href = sub.href;
                        }}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#000080] rounded-md transition-colors duration-200 cursor-pointer">
                          {sub.title}
                          {sub.subitems && <ChevronRight className="w-4 h-4" />}
                        </div>

                        {sub.subitems && (
                          <div
                            ref={(el) => (submenuRefs.current[sub.title] = el)}
                            className="absolute top-0 left-full bg-white shadow-lg rounded-lg p-3 w-72 ml-px space-y-1 z-50 hidden"
                          >
                            {sub.subitems.map((item) => (
                              <div
                                key={item.title}
                                className="relative submenu-item"
                                onMouseEnter={() =>
                                  handleSubSubmenuEnter(item.title)
                                }
                                onMouseLeave={() =>
                                  handleSubSubmenuLeave(item.title)
                                }
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (item.href) window.location.href = item.href;
                                }}
                              >
                                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#000080] rounded-md transition-colors duration-200 cursor-pointer">
                                  {item.title}
                                  {item.subitems && (
                                    <ChevronRight className="w-4 h-4" />
                                  )}
                                </div>

                                {item.subitems && (
                                  <div
                                    ref={(el) =>
                                      (subSubmenuRefs.current[item.title] = el)
                                    }
                                    className="absolute top-0 left-full bg-white shadow-md rounded-lg p-3 w-64 ml-px space-y-1 z-50 hidden"
                                  >
                                    {item.subitems.map((child) =>
                                      child.href ? (
                                        <Link
                                          key={child.title}
                                          href={child.href}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#000080] rounded-md transition-colors duration-200"
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          {child.title}
                                        </Link>
                                      ) : (
                                        <div
                                          key={child.title}
                                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#000080] rounded-md transition-colors duration-200 cursor-pointer"
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

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#000080] text-white px-4 xl:px-6 py-2 rounded-md text-xs xl:text-sm font-medium hover:bg-blue-900 transition-colors duration-200 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-900 hover:text-[#000080] focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Accordion Style */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.title} className="border-b border-gray-100 last:border-b-0">
                {/* Top Level Link */}
                <div className="flex items-center justify-between">
                  {link.href && !link.submenu ? (
                    <Link
                      href={link.href}
                      className="flex-1 py-3 text-base font-medium text-gray-900 hover:text-[#000080] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={link.href || "#"}
                        className="flex-1 py-3 text-base font-medium text-gray-900 hover:text-[#000080] transition-colors"
                        onClick={(e) => {
                          if (!link.submenu) {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {link.title}
                      </Link>
                      {link.submenu && (
                        <button
                          onClick={() => toggleMobileMenu(link.title)}
                          className="p-3 text-gray-600 hover:text-[#000080] transition-colors"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileOpenMenus[link.title] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Submenu Level 1 */}
                {link.submenu && mobileOpenMenus[link.title] && (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.submenu.map((sub) => (
                      <div key={sub.title} className="border-l-2 border-gray-200 pl-3">
                        <div className="flex items-center justify-between">
                          <Link
                            href={sub.href || "#"}
                            className="flex-1 py-2 text-sm font-medium text-gray-700 hover:text-[#000080] transition-colors"
                            onClick={(e) => {
                              if (!sub.subitems) {
                                setIsMobileMenuOpen(false);
                              }
                            }}
                          >
                            {sub.title}
                          </Link>
                          {sub.subitems && (
                            <button
                              onClick={() => toggleMobileSubmenu(sub.title)}
                              className="p-2 text-gray-600 hover:text-[#000080] transition-colors"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  mobileOpenSubmenus[sub.title] ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Submenu Level 2 */}
                        {sub.subitems && mobileOpenSubmenus[sub.title] && (
                          <div className="pl-3 pb-1 space-y-1">
                            {sub.subitems.map((item) => (
                              <div key={item.title} className="border-l-2 border-gray-200 pl-3">
                                <div className="flex items-center justify-between">
                                  <Link
                                    href={item.href || "#"}
                                    className="flex-1 py-2 text-sm text-gray-600 hover:text-[#000080] transition-colors"
                                    onClick={(e) => {
                                      if (!item.subitems) {
                                        setIsMobileMenuOpen(false);
                                      }
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                  {item.subitems && (
                                    <button
                                      onClick={() => toggleMobileSubSubmenu(item.title)}
                                      className="p-2 text-gray-600 hover:text-[#000080] transition-colors"
                                    >
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                          mobileOpenSubSubmenus[item.title] ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>

                                {/* Submenu Level 3 */}
                                {item.subitems && mobileOpenSubSubmenus[item.title] && (
                                  <div className="pl-3 pb-1 space-y-1">
                                    {item.subitems.map((child) => (
                                      <Link
                                        key={child.title}
                                        href={child.href || "#"}
                                        className="block py-2 text-sm text-gray-600 hover:text-[#000080] transition-colors border-l-2 border-gray-200 pl-3"
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
              </div>
            ))}

            {/* Mobile Contact Button */}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full bg-[#000080] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-900 transition-colors duration-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}