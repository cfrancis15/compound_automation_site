// App.jsx - root layout assembling all marketing page sections

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import WhyUs from "./components/WhyUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Portfolio from "./components/Portfolio.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./components/Footer.jsx";

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
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
