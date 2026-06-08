import { Outlet } from "react-router-dom";
import DemoNavbar from "./components/Navbar.jsx";
import "./App.css";

function DemoLayout() {
  return (
    <div className="demo-wrapper">
      <div className="demo-app">
        <DemoNavbar />
        <main className="demo-app__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DemoLayout;
