// App.jsx - marketing pages plus existing demo routes

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LandscapingPage from "./pages/LandscapingPage.jsx";

const DemoLayout = lazy(() => import("./demo/DemoLayout.jsx"));
const Dashboard = lazy(() => import("./demo/pages/Dashboard.jsx"));
const DealDetail = lazy(() => import("./demo/pages/DealDetail.jsx"));
const Screens = lazy(() => import("./demo/pages/Screens.jsx"));

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/landscaping" element={<LandscapingPage />} />
        <Route path="/build" element={<Navigate to="/" replace />} />
        <Route path="/grow" element={<Navigate to="/" replace />} />
        <Route path="/products" element={<Navigate to="/" replace />} />
      </Route>
      <Route
        path="/demo"
        element={
          <Suspense fallback={null}>
            <DemoLayout />
          </Suspense>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="deals/:id" element={<DealDetail />} />
        <Route path="screens" element={<Screens />} />
      </Route>
    </Routes>
  );
}

export default App;
