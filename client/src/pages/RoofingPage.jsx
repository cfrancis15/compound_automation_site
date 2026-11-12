// RoofingPage - sales funnel for roofing company owners

import IndustryPage from "../components/IndustryPage.jsx";
import { roofingPage } from "../data/roofing.js";
import { roofingSeo } from "../seo.js";

function RoofingPage() {
  return <IndustryPage page={roofingPage} seo={roofingSeo} />;
}

export default RoofingPage;
