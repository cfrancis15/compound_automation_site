// LandscapingPage - sales funnel for landscaping company owners

import IndustryPage from "../components/IndustryPage.jsx";
import { landscapingPage } from "../data/landscaping.js";
import { landscapingSeo } from "../seo.js";

function LandscapingPage() {
  return <IndustryPage page={landscapingPage} seo={landscapingSeo} />;
}

export default LandscapingPage;
