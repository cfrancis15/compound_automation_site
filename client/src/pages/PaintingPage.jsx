// PaintingPage - sales funnel for painting company owners

import IndustryPage from "../components/IndustryPage.jsx";
import { paintingPage } from "../data/painting.js";
import { paintingSeo } from "../seo.js";

function PaintingPage() {
  return <IndustryPage page={paintingPage} seo={paintingSeo} />;
}

export default PaintingPage;
