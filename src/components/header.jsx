import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Logo from "../../src/assets/images/javed-akhtar.jpg";
import Effect from "../effects/effect";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="sticky top-20 z-10">
        <div className={`gap-4 w-full ${location.pathname == "/projects" ? "flex flex-col gap-0" : "flex flex-col gap-10"}`}>
        
          <div className="flex items-center flex-grow gap-5">
            <div className="flex items-center flex-grow gap-5">
              <div className="relative flex">
                <img className="w-20 relative z-10 rounded-full" src={Logo} alt="logo" />
                <span className=" flex h-full w-full absolute">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-25 duration-300 "></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-slate-500"></span>
                </span>
              </div>
              <div className="flex flex-col flex-grow gap-0">
              {location.pathname =="/projects" ? (<div className="relative z-10 mb-2"><Link className="flex gap-3" to="/"><span className="w-6"><BackArrow/></span>Back</Link></div>) : null}
                <h1 className="text-4xl font-extrabold text-slate-800 ">
                  Javed Akhtar
                </h1>
                <div className="flex items-center">
                  <p className="text-lg text-slate-500">
                    Senior Frontend Developer
                  </p>
                  <p className="text-sm text-red-500 ms-auto">
                    +91 7565 891 692
                  </p>
                </div>
              </div>
            </div>
          </div>
          {location.pathname !== "/projects" && (
            <p className="text-slate-800 text-5xl font-extralight -tracking-wide leading-tight">
              I build the design{" "}
              <span className="font-bold">pixel-perfect and intractive</span>{" "}
              creating Inclusive experiences for all.
            </p>
          )}

          <div></div>
        </div>
      </div>
      {/* <div className="fixed -left-1/3 top-0 w-screen h-screen pointer-events-none z-0"><Effect/></div> */}
    </>
  );
};


const BackArrow = () =>{
  return(
    <svg viewBox="0 0 32 32"><path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 Z"/></svg>
  )
}

export default Header;
