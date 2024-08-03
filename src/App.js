import "./App.css";
import Header from "./components/header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="container mx-auto md:px-14 px-5 min-h-screen flex">
        <div className={`gap-4 w-full ${location.pathname === "/projects" ? "grid-cols-1" : "grid lg:grid-cols-2"}`}>
          <div className="flex flex-col lg:py-20">
            <Header />
          </div>
          <div className={`gap-4 w-full ${location.pathname === "/projects" ? "pb-20 px-10" : "pb-20 lg:ps-20"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
