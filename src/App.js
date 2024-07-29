import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="container mx-auto min-h-screen flex">
        <div className={`gap-4 w-full ${location.pathname == "/projects" ? "grid-cols-1" : "grid grid-cols-2"}`}>
          <div className="flex flex-col py-20">
            <Header />
          </div>
          <div className={`gap-4 w-full ${location.pathname == "/projects" ? "pb-20 px-10" : "pb-20 ps-20"}`}>
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
