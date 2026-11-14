// seo.js - titles, descriptions, Open Graph, and JSON-LD shared by pages and the build

import { industryFaqs } from "./data/industryShared.js";
import { outboundFaqs } from "./data/outbound.js";

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

function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industryFaqs.map(function mapFaq(item) {
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      };
    }),
  };
}

export const landscapingSeo = {
  title: "Marketing for Landscaping Companies in Colorado | Compound Automation",
  description:
    "Get a free growth plan for your landscaping company. See how to get Google and AI to recommend you first, then decide if you want us to run it.",
  path: "/landscaping",
  jsonLd: faqPageJsonLd(),
};

export const roofingSeo = {
  title: "Marketing for Roofing Companies in Colorado | Compound Automation",
  description:
    "Get a free growth plan for your roofing company. See how to get Google and AI to recommend you first, then decide if you want us to run it.",
  path: "/roofing",
  jsonLd: faqPageJsonLd(),
};

export const paintingSeo = {
  title: "Marketing for Painting Companies in Colorado | Compound Automation",
  description:
    "Get a free growth plan for your painting company. See how to get Google and AI to recommend you first, then decide if you want us to run it.",
  path: "/painting",
  jsonLd: faqPageJsonLd(),
};

export const outboundSeo = {
  title: "Outbound Business Development | Compound Automation",
  description:
    "We run outbound for you, from prospecting and outreach through qualification and a booked meeting. Request an outbound plan, then decide if you want us to run it.",
  path: "/outbound",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: outboundFaqs.map(function mapFaq(item) {
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

export const funnelPages = [landscapingSeo, roofingSeo, paintingSeo, outboundSeo];

export function pageUrl(path) {
  if (path === "/") {
    return SITE_URL + "/";
  }
  return SITE_URL + path;
}
