const BASE_URL = "https://www.pavestechnologies.com";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/what-we-do`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/what-we-do/enterprise-platforms-and-integrations`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/enterprise-platforms-and-integrations/erp-platforms`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/enterprise-platforms-and-integrations/crm-platforms`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/enterprise-platforms-and-integrations/workflow-and-service-management`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/enterprise-platforms-and-integrations/integration-and-middleware`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments/card-issuers`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments/merchant-acquirers`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments/e-commerce`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments/embedded-finance`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments/payment-gateways`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments/real-time-payments`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/banking`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/banking/retail-banking`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/banking/corporate-and-commercial-banking`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/banking/consumer-lending`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/banking/digital-banking`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/banking/open-banking`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/payments-fraud-and-aml`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/governance-risk-compliance`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/insurance`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/industry-verticals/capital-markets`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/artificial-intelligence`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/business-and-technology`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/cloud-and-devops`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/data-and-analytics`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/product-management`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/enterprise-automation`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/legacy-support`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/cyber-security`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/identity-and-access-management`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/what-we-do/services/next-gen-technologies`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/who-we-are/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/who-we-are/management-advisory-board`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/who-we-are/technology-council`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/paves-ai-labs`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/insights`, priority: 0.8, changeFrequency: "daily" },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
