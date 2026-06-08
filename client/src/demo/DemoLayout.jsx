import { Outlet } from "react-router-dom";
import DemoNavbar from "./components/Navbar.jsx";
import LeadGate from "./components/LeadGate.jsx";
import "./App.css";

function DemoLayout() {
  return (
    <div className="demo-wrapper">
      <LeadGate>
        <div className="demo-app">
          <DemoNavbar />
          <main className="demo-app__main">
            <Outlet />
          </main>
        </div>
      </LeadGate>
    </div>
  );
}

export default DemoLayout;
