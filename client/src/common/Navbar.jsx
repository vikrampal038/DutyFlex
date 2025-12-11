import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <nav className=" py-3 w-full flex justify-center items-center gap-5">
          {/* For Logo Section */}
          <div className="w-[20%] flex justify-start">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[20px] text-center align-start  ${
                  isActive ? "text-[#201C44] " : "text-black "
                }`
              }
            >
              {/* Home/logo */}
              <img
                src="/Assets/Logo/dutyflex-1.png"
                alt="Navbar Logo"
                className="mx-auto h-10 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* For Navbar Section */}
          <div className="w-[70%] flex justify-start items-center gap-20">
            {/* for Platform */}
            <NavLink
              to="/platform"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 ${
                  isActive ? "text-[#201C44] " : "text-black "
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Platform
                  <span
                    className={`group-hover:w-full group-hover:bg[#111] absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

            {/* For Solutions */}
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 ${
                  isActive ? "text-[#201C44] " : "text-black "
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Solutions
                  <span
                    className={`group-hover:w-full group-hover:bg[#111] absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>

            {/* For Resources */}
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 ${
                  isActive ? "text-[#201C44] " : "text-black "
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Resources
                  <span
                    className={`group-hover:w-full group-hover:bg[#111] absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>

            {/* For Pricing */}
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 ${
                  isActive ? "text-[#201C44] " : "text-black "
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Pricing
                  <span
                    className={`group-hover:w-full group-hover:bg[#111] absolute left-0 bottom-0 h-0.5 bg-[#201C44] transition-all duration-300 
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}

          {/* For Sign Up Button */}
          <div className="w-[10%] items-center flex justify-center">
            <NavLink
              to="/accounts/login"
              className="font-jakarta text-center tracking-wider font-bold text-[16px] px-2 py-3  hover:bg-[#201C44] hover:text-white transition-all duration-1400  w-[80%] rounded-md bg-[#FAE0E1]"
            >
              Login
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
