"use client";

import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* CONNECT BAR */}
      <section className="bg-[#1a1d24] py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-8">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Connect
            </h3>

            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <div className="link flex items-center gap-1">
                <FaFacebook /> <span>Facebook</span>
              </div>
              <div className="link flex items-center gap-1">
                <FaTwitter /> <span>Twitter</span>
              </div>
              <div className="link flex items-center gap-1">
                <FaInstagram /> <span>Instagram</span>
              </div>
              <div className="link flex items-center gap-1">
                <FaLinkedin /> <span>LinkedIn</span>
              </div>
              <div className="link flex items-center gap-1">
                <FaYoutube /> <span>YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#0d0f16] text-gray-300 pt-10 pb-10">
        {/* 5 Columns */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* COMPANY DESCRIPTION */}
          <div>
            <Image
              src="/assets/logo.png"
              width={130}
              height={55}
              alt="Paves Technologies"
              className="mb-3"
            />

            <p className="text-xs text-gray-400 leading-5 mb-5 pr-4">
              Paves Technologies delivers AI-driven solutions across financial
              services, governance, compliance, cloud modernization, and
              next-generation digital engineering transformation.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="footer-heading-small">Company</h4>
            <ul className="footer-links-small">
              <li>About Paves</li>
              <li>Management & Advisory Board</li>
              <li>Technology Council</li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="footer-heading-small">Explore</h4>
            <ul className="footer-links-small">
              <li>Paves AI Labs</li>
              <li>Insights</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* INDUSTRY VERTICALS */}
          <div>
            <h4 className="footer-heading-small">Industry Verticals</h4>
            <ul className="footer-links-small">
              <li>Payments</li>
              <li>Banking</li>
              <li>Insurance</li>
              <li>Capital Markets</li>
              <li>Gov, Risk & Compliance</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="footer-heading-small">Services</h4>
            <ul className="footer-links-small">
              <li>Artificial Intelligence</li>
              <li>Cloud Engineering & DevOps</li>
              <li>Data & Analytics</li>
              <li>Cyber Security</li>
              <li>Enterprise Automation</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 border-t border-gray-800 pt-5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>© 2025 Paves Technologies. All Rights Reserved.</p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <p className="hover-link">Privacy Policy</p>
            <p className="hover-link">Terms of Use</p>
            <p className="hover-link">Legal</p>
          </div>
        </div>

        {/* Animations + Smaller Typography */}
        <style jsx>{`
          .footer-heading-small {
            color: white;
            font-weight: 600;
            margin-bottom: 0.7rem;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .footer-links-small li {
            color: #aab0bc;
            margin-bottom: 0.35rem;
            cursor: pointer;
            font-size: 0.78rem;
            transition: 0.2s ease;
          }

          .footer-links-small li:hover {
            color: #fff;
            transform: translateX(3px);
          }

          .link {
            cursor: pointer;
            transition: 0.25s ease;
            font-size: 0.85rem;
          }

          .link:hover {
            color: white;
            transform: translateY(-2px);
          }
        `}</style>
      </footer>
    </>
  );
}
