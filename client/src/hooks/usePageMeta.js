// usePageMeta - title, description, Open Graph, canonical, and JSON-LD for the current route

import { useEffect } from "react";
import { SITE_NAME, pageUrl } from "../seo.js";

function setMeta(attr, key, content) {
  const selector = "meta[" + attr + '="' + key + '"]';
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(data) {
  let script = document.getElementById("page-jsonld");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "page-jsonld";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function usePageMeta(seo) {
  useEffect(
    function updateMeta() {
      const url = pageUrl(seo.path);
      document.title = seo.title;

      setMeta("name", "description", seo.description);
      setMeta("property", "og:title", seo.title);
      setMeta("property", "og:description", seo.description);
      setMeta("property", "og:type", "website");
      setMeta("property", "og:url", url);
      setMeta("property", "og:site_name", SITE_NAME);
      setMeta("name", "twitter:card", "summary");
      setMeta("name", "twitter:title", seo.title);
      setMeta("name", "twitter:description", seo.description);
      setCanonical(url);
      setJsonLd(seo.jsonLd);

      return function cleanup() {
        const existing = document.getElementById("page-jsonld");
        if (existing) {
          existing.remove();
        }
      };
    },
    [seo]
  );
}

export default usePageMeta;
