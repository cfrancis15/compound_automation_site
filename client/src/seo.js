// seo.js - titles, descriptions, Open Graph, and JSON-LD shared by pages and the build

import { landscapingFaqs } from "./data/landscaping.js";

export const SITE_URL = "https://compoundautomation.dev";
export const SITE_NAME = "Compound Automation";
export const CONTACT_EMAIL = "connor@compoundautomation.dev";

export const homeSeo = {
  title: "Compound Automation | More Customers for Local Service Businesses",
  description:
    "We dig into your business, your market, and your competitors, then build and run a marketing plan that brings local service businesses more jobs.",
  path: "/",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Compound Automation",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    areaServed: "Colorado",
  },
};

export const landscapingSeo = {
  title: "Marketing for Landscaping Companies in Colorado | Compound Automation",
  description:
    "Get a free growth plan for your landscaping company. See how to get Google and AI to recommend you first, then decide if you want us to run it.",
  path: "/landscaping",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landscapingFaqs.map(function mapFaq(item) {
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      };
    }),
  },
};

export function pageUrl(path) {
  if (path === "/") {
    return SITE_URL + "/";
  }
  return SITE_URL + path;
}
