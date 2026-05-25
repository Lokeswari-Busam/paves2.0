export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.pavestechnologies.com/sitemap.xml",
    host: "https://www.pavestechnologies.com",
  };
}
