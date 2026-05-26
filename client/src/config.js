// config.js - environment-driven links used across the site

const calLink = import.meta.env.VITE_CAL_LINK;
const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;

export const CAL_LINK = calLink || "https://cal.com";
export const LINKEDIN_URL = linkedInUrl || "https://www.linkedin.com";
