"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

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

      {/* GRID: LEFT CARDS | RIGHT FORM */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT: 4 OFFICE CARDS IN 2x2 GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((o, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-secondary font-semibold">{o.country}</h3>
              <h4 className="font-bold mt-1">{o.company}</h4>

              <p className="text-sm mt-2 leading-relaxed">
                {o.address.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>

              <h3 className="text-secondary font-semibold mt-4">Contact</h3>
              <p className="font-bold">{o.phone}</p>
            </div>
          ))}
        </section>

        {/* RIGHT: CONTACT FORM */}
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
              <option>Select Subject</option>
              <option>General Query</option>
              <option>Business Inquiry</option>
              <option>Support</option>
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

      {/* MAP BELOW BOTH */}
      <section className="max-w-7xl mx-auto mt-16 h-[500px] rounded-xl border border-border overflow-hidden">
        <MapContainer
          center={[20.0, 0.0]}
          zoom={2}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {offices.map((o, i) => (
            <Marker key={i} position={o.coords} icon={icon}>
              <Popup>
                <strong>{o.country}</strong><br />
                {o.company}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
}
