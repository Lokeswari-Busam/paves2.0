"use client";

import MapSection from "./MapSection";

export default function ContactPage() {
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
          <form className="grid grid-cols-1 gap-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-input border border-border p-3 rounded-lg" placeholder="First Name*" />
              <input className="bg-input border border-border p-3 rounded-lg" placeholder="Last Name*" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-input border border-border p-3 rounded-lg" placeholder="Email*" />
              <input className="bg-input border border-border p-3 rounded-lg" placeholder="Phone*" />
            </div>

            <input className="bg-input border border-border p-3 rounded-lg" placeholder="Job Title*" />

            <select className="bg-input border border-border p-3 rounded-lg">
              <option>New Project</option>
              <option>Partnership</option>
              <option>Career</option>
            </select>

            <textarea
              placeholder="How can we help?"
              className="bg-input border border-border p-3 rounded-lg h-32"
            />

            <button className="bg-primary text-primary-foreground py-3 rounded-lg font-medium">
              SEND MESSAGE
            </button>
          </form>
        </section>

      </div>

      {/* MAP BELOW */}
      <MapSection offices={offices} />

    </div>
  );
}
