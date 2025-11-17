import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="py-3 w-full">
          {/* Navbar */}
          <div
            className="w-full pb-15 flex justify-end gap-20 pr-10 border-b border-black
    max-lg:gap-10 max-md:gap-6 max-sm:gap-4 max-sm:justify-center max-sm:flex-wrap max-sm:pr-0"
          >
            <NavLink
              to="/platform"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1
          max-sm:text-[14px] ${isActive ? "text-[#201C44]" : "text-black"}`
              }
            >
              {({ isActive }) => (
                <>
                  Platform
                  <span
                    className={`group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44]
              transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 
          max-sm:text-[14px] ${isActive ? "text-[#201C44]" : "text-black"}`
              }
            >
              {({ isActive }) => (
                <>
                  Solutions
                  <span
                    className={`group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44]
              transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 
          max-sm:text-[14px] ${isActive ? "text-[#201C44]" : "text-black"}`
              }
            >
              {({ isActive }) => (
                <>
                  Resources
                  <span
                    className={`group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44]
              transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 
          max-sm:text-[14px] ${isActive ? "text-[#201C44]" : "text-black"}`
              }
            >
              {({ isActive }) => (
                <>
                  Pricing
                  <span
                    className={`group-hover:w-full absolute left-0 bottom-0 h-0.5 bg-[#201C44]
              transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
                  ></span>
                </>
              )}
            </NavLink>
          </div>

          {/* Footer Section */}
          <div
            className="pt-10 flex justify-between items-center pr-10 
    max-md:flex-col max-md:gap-4 max-md:text-center max-sm:pr-0 max-sm:pt-6"
          >
            {/* Left Text */}
            <div className="flex justify-start items-center gap-2 max-sm:flex-col max-sm:gap-1">
              <h1 className="font-jakarta tracking-wide font-bold text-[14px] max-sm:text-[12px]">
                All rights reserved ® dutyflex.com
              </h1>

              <span className="font-jakarta tracking-wide font-bold text-[14px] max-sm:hidden">
                |
              </span>

              <h1 className="font-jakarta tracking-wide font-bold text-[14px] max-sm:text-[12px]">
                Terms and conditions apply!
              </h1>
            </div>

            {/* Icons */}
            <div className="flex gap-8 justify-end items-center max-md:justify-center max-sm:gap-4 max-sm:flex-wrap">
              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#201C44] text-white
          hover:bg-white hover:text-[#201C44] transition-all duration-700 hover:border border-[#201C44] hover:scale-105"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#201C44] text-white
          hover:bg-white hover:text-[#201C44] transition-all duration-700 hover:border border-[#201C44] hover:scale-105"
              >
                <FaTwitter size={16} />
              </a>

              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#201C44] text-white
          hover:bg-white hover:text-[#201C44] transition-all duration-700 hover:border border-[#201C44] hover:scale-105"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#201C44] text-white
          hover:bg-white hover:text-[#201C44] transition-all duration-700 hover:border border-[#201C44] hover:scale-105"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
