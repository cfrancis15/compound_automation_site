// track.js - fire analytics events only when a script on the page is already listening

export function trackEvent(name, params) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = params || {};

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  if (window.dataLayer && typeof window.dataLayer.push === "function") {
    window.dataLayer.push(Object.assign({ event: name }, payload));
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, { props: payload });
  }
}
