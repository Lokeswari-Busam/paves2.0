"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import MapSection from "./MapSection";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Dynamically import (Leaflet cannot run on server)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

export default function ContactPage() {

  const recaptchaRef = useRef(null);

  const [icon, setIcon] = useState(null);
  // Offices Data
  const offices = [
    {
      country: "India",
      company: "Paves Global Infotech Pvt Ltd",
      address: [
        "Chamber No. 12, 8th floor, Tower 1",
        "Vasavi Sky City, Gachibowli",
        "Hyderabad 500032",
      ],
      phone: "+91 90593 64400",
      coords: [17.4401, 78.3489],
    },
    {
      country: "USA",
      company: "Paves Technologies Inc",
      address: ["1540 International Pkwy", "Suite 2000", "Lake Mary, FL 32746"],
      phone: "+1 407-536-5300",
      coords: [28.7600, -81.3392],
    },
    {
      country: "Singapore",
      company: "Paves Technologies PTE. LTD.",
      address: [
        "1 North Bridge Road",
        "#12-09, High Street Center",
        "Singapore 179094",
      ],
      phone: "+65 8313 2613",
      coords: [1.2897, 103.8498],
    },
    {
      country: "Dubai",
      company: "Paves Technologies LLC",
      address: [
        "Venture Zone Business Center, 1703, 17th Floor",
        "Fahidi Heights, Bur Dubai",
        "Near Four Points Sheraton Hotel",
        "Dubai, UAE",
      ],
      phone: "+971 56 620 2765",
      coords: [25.2048, 55.2708],
    },
  ];

  // ------------------------------------
  // FORM STATE
  // ------------------------------------
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    subject: "New Project",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Handle change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    // Leaflet runs ONLY in browser
    const L = require("leaflet");

    const leafletIcon = new L.Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    setIcon(leafletIcon);
  }, []);

  if (!icon) return null; // avoid hydration issues

  // Submit Form → Backend API
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    // Replace the captcha check block in handleSubmit:
    const token = recaptchaRef.current.getValue();

    if (!token) {
      setStatus("captcha");      // was "Please verify CAPTCHA" — now matches the JSX key
      setLoading(false);
      return;
    }

    // ✅ Removed dead `verifyRes` block — backend handles CAPTCHA verification

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, captchaToken: token }),
    });

    if (!res.ok) throw new Error("API Error");

    setStatus("success");
    setTimeout(() => setStatus(null), 3000);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      subject: "New Project",
      message: "",
    });

    recaptchaRef.current.reset();

  } catch (err) {
    setStatus("error");
    setTimeout(() => setStatus(null), 3000);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      {/* HEADING */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
        Re(<span className="text-primary">AI</span>)magine your world with us
      </h1>

      {/* 2-COLUMN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

        {/* LEFT OFFICE CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((o, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-secondary font-semibold">{o.country}</h3>
              <h4 className="font-bold mt-1">{o.company}</h4>

              <p className="text-sm mt-2 leading-relaxed">
                {o.address.map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </p>

              <h3 className="text-secondary font-semibold mt-4">Contact</h3>
              <p className="font-bold">{o.phone}</p>
            </div>
          ))}
        </section>

        {/* RIGHT CONTACT FORM */}
        <section className="bg-card border border-border rounded-xl p-8 shadow-sm h-fit">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                id="firstName"
                aria-label="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="First Name*"
                required
                autoComplete="given-name"
              />
              <input
                name="lastName"
                id="lastName"
                aria-label="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="Last Name*"
                required
                autoComplete="family-name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                id="email"
                aria-label="Email Address"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="Email*"
                required
                autoComplete="email"
              />
              <input
                name="phone"
                id="phone"
                aria-label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="Phone*"
                required
                autoComplete="tel"
              />
            </div>

            <input
              name="jobTitle"
              id="jobTitle"
              aria-label="Job Title"
              value={form.jobTitle}
              onChange={handleChange}
              className="bg-input border border-border p-3 rounded-lg"
              placeholder="Job Title*"
              required
              autoComplete="organization-title"
            />

            <select
              name="subject"
              id="subject"
              aria-label="Subject"
              value={form.subject}
              onChange={handleChange}
              className="bg-input border border-border p-3 rounded-lg"
            >
              <option value="New Project">New Project</option>
              <option value="Partnership">Partnership</option>
              <option value="Career">Career</option>
            </select>

            <textarea
              name="message"
              id="message"
              aria-label="Message"
              value={form.message}
              onChange={handleChange}
              className="bg-input border border-border p-3 rounded-lg h-32"
              placeholder="How can we help?"
            />

            <div className="flex justify-center mt-2 overflow-x-hidden">
              <div className="scale-[0.85] xs:scale-90 sm:scale-100 origin-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  ref={recaptchaRef}
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              disabled={loading}
              className="bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>

            {/* STATUS MESSAGES — find this block and replace it */}
            {status === "captcha" && (
              <p className="text-yellow-500 mt-2">Please complete the CAPTCHA first.</p>
            )}
            {status === "success" && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </section>
      </div>

      {/* MAP BELOW */}
      <MapSection offices={offices} />

      {/* LCA NOTICES */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card border border-border rounded-xl p-6 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold mb-1">LCA Notices</h3>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Pursuant to 20 CFR § 655.734, Paves Technologies Inc. publishes notices of H-1B
              Labor Condition Application (LCA) filings with the U.S. Department of Labor. View
              all current and past LCA postings including job titles, wage rates, and work
              locations.
            </p>
          </div>
          <Link
            href="/lca-notices"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View our Postings →
          </Link>
        </div>
      </div>

    </div>
  );
}
