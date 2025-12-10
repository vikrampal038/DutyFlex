import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <nav className=" py-3 w-full flex justify-center items-center gap-15">
          {/* Logo */}
          <div className="w-auto flex border items-center">
            <NavLink
              to="/"
              className="group inline-block"
            >
              {/* Home/logo */}
              <img
                src="/Assets/Logo/dutyflex-1.png"
                alt="Navbar Logo"
                className="w-auto h-10  object-contain"
              />
            </NavLink>
          </div>

          {/* For Desktop Menu  */}
          <div className="w-[80%] flex justify-start items-center gap-20  border">
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
                  `group relative inline-block font-jakarta tracking-wider font-bold text-[16px] pb-1 ${
                    isActive ? "text-[#0E265E] " : "text-black "
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Login */}
          <div className="hidden items-center md:flex border">
            <NavLink
              to="/accounts/login"
              className="font-jakarta text-center tracking-wider font-bold text-[16px] px-2 py-2  hover:bg-[#201C44] hover:text-white transition-all duration-1400  w-35 rounded-md bg-[#FAE0E1]"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-[#201C44] transition-transform duration-700"
            onClick={toggleMenu}
          >
            {open ? (
              <X className="  h-8 w-8 rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="h-8 w-8 rotate-0 transition-transform duration-300" />
            )}
          </button>
        </nav>

        
      </div>
    </>
  );
};

export default Navbar;
