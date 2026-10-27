// config.js - booking link and form key used across the site

const DEFAULT_CAL_LINK =
  "https://cal.com/connor-francis-ml8o5h/15-minute-meeting";
const OLD_PROFILE_LINK = "https://cal.com/connor-francis-ml8o5h";

function resolveCalLink(value) {
  if (!value) {
    return DEFAULT_CAL_LINK;
  }

  const trimmed = String(value).trim().replace(/\/$/, "");
  if (trimmed === OLD_PROFILE_LINK) {
    return DEFAULT_CAL_LINK;
  }

  return trimmed;
}

const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;

export const CAL_LINK = resolveCalLink(import.meta.env.VITE_CAL_LINK);
export const LINKEDIN_URL = linkedInUrl || "https://www.linkedin.com";

// Fill this in with your Web3Forms access key, or set VITE_WEB3FORMS_ACCESS_KEY
// in client/.env. Get a key at https://web3forms.com
export const WEB3FORMS_ACCESS_KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY_PLACEHOLDER;
