import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <nav className="py-3 w-full flex justify-center items-center gap-10 relative">

          {/* Logo Section */}
          <div className="w-auto flex justify-start pl-3 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[20px]
                ${isActive ? "text-[#201C44]" : "text-black"}`
              }
            >
              <img
                src="/Assets/Logo/dutyflex-1.png"
                alt="Navbar Logo"
                className="h-12 sm:h-14 md:h-12 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* Navbar Links — Desktop */}
          <div className="w-[70%] hidden md:flex justify-start items-center gap-20">

            <NavLink to="/platform" className={({ isActive }) =>
              `group relative font-jakarta tracking-wider font-bold text-[16px] pb-1
               ${isActive ? "text-[#201C44]" : "text-black"}`
            }>
              Platform
              <span className="group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 w-0"></span>
            </NavLink>

            <NavLink to="/solutions" className={({ isActive }) =>
              `group relative font-jakarta tracking-wider font-bold text-[16px] pb-1
               ${isActive ? "text-[#201C44]" : "text-black"}`
            }>
              Solutions
              <span className="group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 w-0"></span>
            </NavLink>

            <NavLink to="/resources" className={({ isActive }) =>
              `group relative font-jakarta tracking-wider font-bold text-[16px] pb-1
               ${isActive ? "text-[#201C44]" : "text-black"}`
            }>
              Resources
              <span className="group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 w-0"></span>
            </NavLink>

            <NavLink to="/pricing" className={({ isActive }) =>
              `group relative font-jakarta tracking-wider font-bold text-[16px] pb-1
               ${isActive ? "text-[#201C44]" : "text-black"}`
            }>
              Pricing
              <span className="group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 w-0"></span>
            </NavLink>
          </div>

          {/* Login Button — Desktop */}
          <div className="w-[10%] hidden md:flex items-center justify-center">
            <NavLink
              to="/accounts/login"
              className="font-jakarta tracking-wider text-center font-bold text-[16px] px-2 py-3 hover:bg-[#201C44] hover:text-white transition-all 
             w-[80%] rounded-md bg-[#FAE0E1]"
            >
              Login
            </NavLink>
          </div>

          {/* Hamburger Button — Mobile */}
          <button
            className="md:hidden absolute right-5 top-4 z-50 transition-all"
            onClick={() => setOpen(!open)}
          >
            {/* Icon animation */}
            <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${open ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full bg-white shadow-lg z-40 w-[70%] p-6 transition-all duration-500 
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-6 mt-10 text-[17px] font-jakarta font-semibold">

            {/* Home added first */}
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/platform" onClick={() => setOpen(false)}>
              Platform
            </NavLink>

            <NavLink to="/solutions" onClick={() => setOpen(false)}>
              Solutions
            </NavLink>

            <NavLink to="/resources" onClick={() => setOpen(false)}>
              Resources
            </NavLink>

            <NavLink to="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </NavLink>

            <NavLink
              to="/accounts/login"
              onClick={() => setOpen(false)}
              className="px-3 py-2 bg-[#FAE0E1] rounded-md text-center mt-4"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
