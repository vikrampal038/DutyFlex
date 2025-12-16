import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" w-full bg-[#ffffff] flex justify-between items-center py-6 gap-15">
        {/* Logo */}
        <div className="shrink-0 flex items-center">
          <NavLink to="/" className="group inline-block">
            <img
              src="/Assets/Logo/dutyflex-1.png"
              alt="Navbar Logo"
              className="w-[160px] h-[40px] object-contain hover:scale-110 transition duration-700 ease-in-out"
            />
          </NavLink>
        </div>

        {/* For Desktop Menu  */}
        <div className="hidden md:flex items-center mr-auto gap-12 font-semibold text-base list-none text-white">
          {[
            { to: "/platform", label: "Platform" },
            { to: "/solutions", label: "Solutions" },
            { to: "/resources", label: "Resources" },
            { to: "/pricing", label: "Pricing" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `font-jakarta tracking-wider font-bold text-[16px] pb-1 transition duration-700 ease-in-out rounded-md ${
                  isActive ? "text-[#256AF4] " : "text-black "
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/accounts/login"
            className="
      font-jakarta text-center tracking-wider font-bold 
      rounded-sm bg-[#FAE0E1] hover:bg-[#201C44] hover:text-white 
      transition-all duration-300
      
      /* Text size — stable */
      text-base lg:text-lg
      
      /* Padding — stable */
      px-6 py-2
    "
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative w-10 h-10 flex md:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="w-full h-full relative"
          >
            {/* Menu Icon */}
            <Menu
              className={`w-10 h-10 text-black absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${
                isMenuOpen
                  ? "opacity-0 rotate-180 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            {/* X Icon */}
            <X
              className={`w-10 h-10 text-black absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-180 scale-75"
              }`}
            />
          </button>
        </div>

        {/* For Mobile Menu  */}
        <div
          className={`absolute md:hidden top-15 right-4 w-[40%] p2-1 bg-[#FAE0E1] rounded-sm 
  flex flex-col items-center font-bold text-xl transform duration-700 
  ease-in-out transition-transform z-40 ${
    isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
          style={{ transition: "transform 0.3s ease, opacity 0.2s ease" }}
        >
          {[
            { to: "/platform", label: "Platform" },
            { to: "/solutions", label: "Solutions" },
            { to: "/resources", label: "Resources" },
            { to: "/pricing", label: "Pricing" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className="font-jakarta tracking-wider inline-block p-3 w-full text-black hover:bg-[#256AF4] hover:text-white text-center  
        font-bold text-[16px] transition duration-1200 ease-in-out">
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Login Button */}
          <NavLink
            to="/accounts/login"
            onClick={() => setIsMenuOpen(false)}
            className="
      mt-2 font-jakarta text-center tracking-wider font-bold  border-t border-t-black 
       bg-[#FAE0E1] hover:bg-[#256AF4] hover:text-white 
      transition-all duration-1200 px-6 py-2 w-full text-[16px]
    "
          >
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
