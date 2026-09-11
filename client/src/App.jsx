// App.jsx - marketing pages plus existing demo routes

import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import BuildPage from "./pages/BuildPage.jsx";
import GrowPage from "./pages/GrowPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import DemoLayout from "./demo/DemoLayout.jsx";
import Dashboard from "./demo/pages/Dashboard.jsx";
import DealDetail from "./demo/pages/DealDetail.jsx";
import Screens from "./demo/pages/Screens.jsx";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/grow" element={<GrowPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
      <Route path="/demo" element={<DemoLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="deals/:id" element={<DealDetail />} />
        <Route path="screens" element={<Screens />} />
      </Route>
    </Routes>
  );
}

export default App;
