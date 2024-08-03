import  React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../src/assets/images/javed-akhtar.jpg";
import Effect from "../effects/effect";

const Header = () => {
  const location = useLocation();
 
  return (
    <>
      <div className="lg:sticky lg:top-20 lg:pt-0 top-10 z-10">
        <div className={`w-full ${location.pathname === "/projects" ? "flex flex-col gap-0" : "flex flex-col md:gap-10 gap-0"}`}>
        
          <div className="flex items-center md:p-0 md:-mx-0 p-4 -mx-5 flex-grow gap-5 bg-slate-50 md:static fixed z-30 w-full">
            <div className="flex items-center flex-grow gap-5">
              <div className="relative flex">
                <img className="xl:w-20 lg:w-20 w-16 relative z-10 rounded-full" src={Logo} alt="logo" />
                <span className=" flex h-full w-full absolute">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-25 duration-300 "></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-slate-500"></span>
                </span>
              </div>
              <div className="flex flex-col flex-grow gap-0">
              {location.pathname === "/projects" ? (<div className="relative z-10 mb-2"><Link className="flex gap-3" to="/"><span className="w-6"><BackArrow/></span>Back</Link></div>) : null}
                <h1 className="xl:text-4xl lg:text-3xl text-xl font-extrabold text-slate-800 ">
                  Javed Akhtar
                </h1>
                <div className="flex md:flex-row flex-col md:items-center">
                  <p className="xl:text-lg text-sm text-slate-500">
                    Senior Frontend Developer
                  </p>
                  <p className="text-sm text-red-500 md:ms-auto">
                    +91 7565 891 692
                  </p>
                </div>
              </div>
            </div>
          </div>
         
          {location.pathname !== "/projects" && (
            <>
            <p className="text-slate-800 xl:text-4xl lg:text-2xl lg:text-left text-[30px] md:text-left text-center md:mt-0 transition-all delay-500 mt-28  font-extralight -tracking-wide leading-tight">
              I build the design{" "}
              <span className="font-bold md:inline block">pixel-perfect and intractive</span>{" "}
              creating Inclusive experiences for all.
            </p>
            <div className="flex">
              <Link to='/' className="bg-orange-400 rounded-lg py-3 px-8 text-white md:m-0 mx-auto md:mt-0 mt-5">Hire me.</Link>
            </div>
            </>
          )}

          <div></div>
        </div>
      </div>
      {location.pathname !== "/projects" && (<div className="lg:fixed lg:w-3/6 bottom-0 -left-0 lg:h-3/6 h-64 z-0"><Effect/></div>)}
    </>
  );
};


const BackArrow = () =>{
  return(
    <svg viewBox="0 0 32 32"><path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 Z"/></svg>
  )
}

export default Header;
