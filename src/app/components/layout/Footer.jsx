"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const careersUrl = process.env.NEXT_PUBLIC_CAREERS_URL || "https://careers.pavestechnologies.com";

  return (
    <>
      {/* CONNECT BAR */}
      <section className="bg-[#1a1d24] py-6 sm:py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
              Connect
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm">
              <a
                href="https://www.facebook.com/pavestechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 sm:gap-2 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              >
                <FaFacebook className="text-base sm:text-lg" />
                <span>Facebook</span>
              </a>

              <a
                href="https://twitter.com/pavestech"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 sm:gap-2 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              >
                <FaTwitter className="text-base sm:text-lg" />
                <span>Twitter</span>
              </a>

              <a
                href="https://www.instagram.com/pavestechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 sm:gap-2 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              >
                <FaInstagram className="text-base sm:text-lg" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/company/paves-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 sm:gap-2 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              >
                <FaLinkedin className="text-base sm:text-lg" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.youtube.com/@pavestechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center gap-1.5 sm:gap-2 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              >
                <FaYoutube className="text-base sm:text-lg" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#0d0f16] text-gray-300 pt-8 sm:pt-10 pb-6 sm:pb-10">

        {/* 5 Columns */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

          {/* COMPANY DESCRIPTION */}
          <div className="xs:col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/">
              <Image
                src="/assets/home/logo.png"
                width={130}
                height={55}
                alt="Paves Technologies"
                className="mb-3 w-28 sm:w-32 h-auto"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-5 sm:leading-6 mb-5 pr-0 sm:pr-4 max-w-xs lg:max-w-none">
              Paves Technologies delivers AI-driven solutions across financial
              services, governance, compliance, cloud modernization, and
              next-generation digital engineering transformation.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="footer-heading-small">Company</h4>
            <ul className="footer-links-small">
              <li>
                <Link href="/who-we-are/about">About Paves</Link>
              </li>
              <li>
                <Link href="/who-we-are/management-advisory-board">
                  Management &amp; Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/technology-council">
                  Technology Council
                </Link>
              </li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="footer-heading-small">Explore</h4>
            <ul className="footer-links-small">
              <li>
                <Link href="/paves-ai-labs">Paves AI Labs</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li>
              <li>
                <a href={careersUrl} target="_blank" rel="noopener noreferrer">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* INDUSTRY VERTICALS */}
          <div>
            <h4 className="footer-heading-small">Industry Verticals</h4>
            <ul className="footer-links-small">
              <li>
                <Link href="/what-we-do/industry-verticals/payments">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/industry-verticals/banking">
                  Banking
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/industry-verticals/insurance">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/industry-verticals/capital-markets">
                  Capital Markets
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/industry-verticals/governance-risk-compliance">
                  Gov, Risk &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="footer-heading-small">Services</h4>
            <ul className="footer-links-small">
              <li>
                <Link href="/what-we-do/services/artificial-intelligence">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/services/cloud-and-devops">
                  Cloud Engineering &amp; DevOps
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/services/data-and-analytics">
                  Data &amp; Analytics
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/services/cyber-security">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/services/enterprise-automation">
                  Enterprise Automation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 sm:mt-10 border-t border-gray-800 pt-4 sm:pt-5 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 sm:gap-0 text-xs sm:text-sm text-gray-400">
          <p className="text-center sm:text-left">
            © 2025 Paves Technologies. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors duration-200">
              Legal
            </Link>
            <Link href="/lca-notices" className="hover:text-white transition-colors duration-200">
              LCA Notices
            </Link>
          </div>
        </div>

        <style jsx>{`
          .footer-heading-small {
            color: white;
            font-weight: 600;
            margin-bottom: 0.7rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          @media (min-width: 640px) {
            .footer-heading-small {
              font-size: 0.8rem;
            }
          }

          .footer-links-small li {
            margin-bottom: 0.35rem;
            font-size: 0.7rem;
            transition: 0.2s ease;
          }

          @media (min-width: 640px) {
            .footer-links-small li {
              font-size: 0.78rem;
            }
          }

          .footer-links-small li a {
            color: #aab0bc;
            cursor: pointer;
            display: inline-block;
            transition: color 0.2s ease, transform 0.2s ease;
          }

          .footer-links-small li a:hover {
            color: #fff;
            transform: translateX(3px);
          }
        `}</style>
      </footer>
    </>
  );
}