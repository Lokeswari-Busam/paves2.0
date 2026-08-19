/**
 * Single source of truth for the Enterprise Platforms & Integrations section.
 *
 * Consumed by:
 *   - PageContent.jsx            → the landing page's capability cards
 *   - components/HeroWrapper.jsx → per-sub-page hero + breadcrumb
 *   - [slug]/page.jsx            → static params, metadata, and detail content
 *
 * Values are plain serializable data only (no JSX), so this module can be
 * imported from both server and client components. `icon` is a lucide-react
 * export name, resolved to a component inside the client components.
 */

export const SECTION_BASE = "/what-we-do/enterprise-platforms-and-integrations";

export const PLATFORMS = [
  {
    slug: "erp-platforms",
    title: "ERP Platforms",
    icon: "Boxes",
    tagline:
      "Implementing and integrating enterprise resource planning platforms to streamline core business operations.",
    summary:
      "We implement and integrate enterprise resource planning platforms that unify finance, procurement, and operations — giving regulated institutions a single, auditable view of their core business.",
    technologies: ["SAP", "Oracle", "Microsoft Dynamics"],
    capabilities: [
      "Implementation",
      "Customization",
      "Integration",
      "Data Migration",
      "Process Automation",
    ],
    deliverables: [
      "Greenfield implementations and phased rollouts across entities and geographies",
      "Module configuration for finance, procurement, supply chain, and HR",
      "Data migration from legacy ERP with reconciliation and audit trails",
      "Integration with banking, payments, and reporting systems",
      "Automation of period-close, approvals, and regulatory reporting",
    ],
    outcomes: [
      "One auditable version of financial and operational truth",
      "Shorter period-close cycles through automated reconciliation",
      "Reduced manual effort across procure-to-pay and order-to-cash",
      "Reporting that stands up to regulatory scrutiny",
    ],
  },
  {
    slug: "crm-platforms",
    title: "CRM Platforms",
    icon: "Users",
    tagline:
      "Connecting customer data and business processes to deliver integrated customer experiences.",
    summary:
      "We connect customer data and business processes across channels, so onboarding, servicing, and relationship management run on one consistent view of every customer.",
    technologies: ["Salesforce", "Microsoft Dynamics", "SAP Customer Experience"],
    capabilities: [
      "Implementation",
      "Customization",
      "Integration",
      "Data Synchronization",
      "Workflow Automation",
    ],
    deliverables: [
      "CRM implementation aligned to your sales, service, and onboarding processes",
      "Custom objects, flows, and role-based access models",
      "Bi-directional integration with core banking, policy, and billing systems",
      "Customer data synchronization with de-duplication and golden-record rules",
      "Automated case routing, SLA tracking, and servicing workflows",
    ],
    outcomes: [
      "A single customer view across every channel and product",
      "Faster onboarding with fewer manual handoffs",
      "Servicing teams working from current, trustworthy data",
      "Measurable SLAs on case resolution",
    ],
  },
  {
    slug: "workflow-and-service-management",
    title: "Workflow & Service Management",
    icon: "Workflow",
    tagline:
      "Automating enterprise workflows and service operations to improve efficiency and operational visibility.",
    summary:
      "We automate enterprise workflows and service operations — replacing manual handoffs with governed, measurable processes that improve efficiency and operational visibility.",
    technologies: ["ServiceNow", "Microsoft Power Platform"],
    capabilities: [
      "Workflow Automation",
      "IT Service Management",
      "Business Process Automation",
      "Custom Workflows",
    ],
    deliverables: [
      "ITSM implementation covering incident, problem, change, and request",
      "Service catalogue and self-service portal design",
      "Business process automation for onboarding, approvals, and exceptions",
      "Custom applications on ServiceNow and Power Platform",
      "Operational dashboards and SLA reporting",
    ],
    outcomes: [
      "Every request tracked, governed, and measurable",
      "Fewer escalations through automated routing and approvals",
      "Clear operational visibility for service owners",
      "Repeatable processes that survive staff turnover",
    ],
  },
  {
    slug: "integration-and-middleware",
    title: "Integration & Middleware",
    icon: "Network",
    tagline:
      "Connecting applications, APIs, legacy systems, and cloud platforms for seamless enterprise data flow.",
    summary:
      "We connect applications, APIs, legacy core systems, and cloud platforms into a resilient integration layer, so data moves securely and reliably across the enterprise.",
    technologies: ["MuleSoft", "TIBCO", "API Management", "ESB"],
    capabilities: [
      "System Integration",
      "API Integration",
      "Data Synchronization",
      "Legacy Integration",
      "Cloud Integration",
    ],
    deliverables: [
      "Integration architecture and API strategy definition",
      "API design, development, and lifecycle management with gateway policies",
      "Adapters and services that expose legacy core systems safely",
      "Event-driven and batch data synchronization pipelines",
      "Hybrid cloud connectivity with monitoring and error handling",
    ],
    outcomes: [
      "Systems that exchange data reliably instead of via manual files",
      "Reusable APIs that shorten every future integration",
      "Legacy platforms modernized without a risky rewrite",
      "Failures that are observable and recoverable, not silent",
    ],
  },
];

export const getPlatform = (slug) =>
  PLATFORMS.find((platform) => platform.slug === slug);
