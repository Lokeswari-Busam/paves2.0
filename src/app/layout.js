import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/layout/Navbar";
import  Footer  from "./components/layout/Footer";
import LenisSetup from "./lenis-setup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.pavestechnologies.com"),
  title: {
    default: "Paves Technologies | AI-Driven Financial Technology Solutions",
    template: "%s | Paves Technologies",
  },
  description:
    "Paves Technologies delivers AI-driven solutions across financial services, payments, banking, cloud modernization, and next-generation digital engineering. Offices in USA, India, Singapore & Dubai.",
  keywords: [
    "Paves Technologies",
    "AI financial services",
    "fintech solutions",
    "payments technology",
    "banking modernization",
    "cloud engineering",
    "data analytics",
    "enterprise AI",
    "digital transformation",
  ],
  authors: [{ name: "Paves Technologies" }],
  creator: "Paves Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pavestechnologies.com",
    siteName: "Paves Technologies",
    title: "Paves Technologies | AI-Driven Financial Technology Solutions",
    description:
      "Delivering AI-driven solutions across financial services, payments, banking, cloud modernization, and digital engineering.",
    images: [
      {
        url: "/assets/home/logo.png",
        width: 1200,
        height: 630,
        alt: "Paves Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paves Technologies | AI-Driven Financial Technology Solutions",
    description:
      "Delivering AI-driven solutions across financial services, payments, banking, cloud modernization, and digital engineering.",
    images: ["/assets/home/logo.png"],
    creator: "@PavesTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Paves Technologies",
  url: "https://www.pavestechnologies.com",
  logo: "https://www.pavestechnologies.com/assets/home/logo.png",
  description:
    "Paves Technologies delivers AI-driven solutions across financial services, payments, banking, cloud modernization, and next-generation digital engineering.",
  sameAs: [
    "https://www.linkedin.com/company/pavestechnologies",
    "https://twitter.com/PavesTech",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-407-536-5300",
      contactType: "customer service",
      areaServed: "US",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-90593-64400",
      contactType: "customer service",
      areaServed: "IN",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "1540 International Pkwy, Suite 2000",
      addressLocality: "Lake Mary",
      addressRegion: "FL",
      postalCode: "32746",
      addressCountry: "US",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisSetup/>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
