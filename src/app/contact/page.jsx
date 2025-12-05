"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import MapSection from "./MapSection";

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

import L from "leaflet";

const icon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ContactPage() {
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
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Handle change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Submit Form → Backend API
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    const res = await fetch("http://localhost:8080/api/contact/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("API Error");

    setStatus("success");

    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setStatus(null);
    }, 3000);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      subject: "New Project",
      message: "",
    });

  } catch (err) {
    setStatus("error");

    // Auto-hide error message after 3 seconds
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      {/* HEADING */}
      <h1 className="text-center text-4xl font-bold mb-12">
        Re(<span className="text-primary">AI</span>)magine your world with us
      </h1>

      {/* 2-COLUMN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

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
                value={form.firstName}
                onChange={handleChange}
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="First Name*"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="Last Name*"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="Email*"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="bg-input border border-border p-3 rounded-lg"
                placeholder="Phone*"
                required
              />
            </div>

            <input
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              className="bg-input border border-border p-3 rounded-lg"
              placeholder="Job Title*"
              required
            />

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="bg-input border border-border p-3 rounded-lg"
            >
              <option>New Project</option>
              <option>Partnership</option>
              <option>Career</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-input border border-border p-3 rounded-lg h-32"
              placeholder="How can we help?"
            />

            {/* BUTTON */}
            <button
              disabled={loading}
              className="bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>

            {/* STATUS MESSAGES */}
            {status === "success" && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">Something went wrong.</p>
            )}
          </form>
        </section>
      </div>

      {/* MAP BELOW */}
      <MapSection offices={offices} />

    </div>
  );
}
