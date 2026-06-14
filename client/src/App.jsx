// App.jsx - root layout assembling all marketing page sections

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import WhyUs from "./components/WhyUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Products from "./components/Products.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./components/Footer.jsx";
import DemoLayout from "./demo/DemoLayout.jsx";
import Dashboard from "./demo/pages/Dashboard.jsx";
import DealDetail from "./demo/pages/DealDetail.jsx";
import Screens from "./demo/pages/Screens.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyUs />
        <HowItWorks />
        <Portfolio />
        <Products />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="deals/:id" element={<DealDetail />} />
        <Route path="screens" element={<Screens />} />
      </Route>
    </Routes>
  );
}

export default App;
