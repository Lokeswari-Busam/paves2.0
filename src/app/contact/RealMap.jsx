"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function RealMap({ offices }) {
  return (
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
  );
}
