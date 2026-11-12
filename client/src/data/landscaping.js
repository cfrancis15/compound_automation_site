// landscaping.js - copy unique to the landscaping funnel

import { offerItems } from "./industryShared.js";

export const landscapingPage = {
  id: "landscaping",
  path: "/landscaping",
  h1: "More booked jobs for your landscaping company.",
  sub: "Get a free growth plan that shows exactly how to get Google and AI to recommend you first.",
  problemHeading: "Homeowners pick from the top three.",
  problemBody:
    "When someone needs a landscaper, they search Google or ask ChatGPT and call one of the first few names they see. If that's not you, those jobs go to a competitor, even if your work is better.",
  offers: offerItems("landscaper near me"),
  finalHeading: "See where your next 20 jobs are coming from.",
};
