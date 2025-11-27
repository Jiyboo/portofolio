import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.png";

const BottomNav = ({ active, setActive }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full bg-[#0b1220]/95 backdrop-blur-xl border-t border-[#2563EB]/40 py-3 z-50">
      
      <div className="flex justify-between px-8 relative">


        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-16 h-16 bg-[#2563EB]/30 rounded-full blur-xl transition-all duration-300"></div>

        {navLinks.map((nav) => {
          const isActive = active === nav.id;

          return (
            <button
              key={nav.id}
              onClick={() => {
                document
                  .getElementById(nav.id)
                  .scrollIntoView({ behavior: "smooth" });
                setActive(nav.id);
              }}
              className={`
                flex flex-col items-center transition-all duration-300
                ${isActive ? "scale-125 -translate-y-2" : "opacity-60"}
              `}
            >
              <span
                className={`
                icon-base 
                ${nav.id === "about" && "icon-about"}
                ${nav.id === "works" && "icon-works"}
                ${nav.id === "resume" && "icon-resume"}
                ${active === nav.id ? "scale-125" : "opacity-70"}
                  `}
                />

              <p className={`text-[12px] mt-1 ${isActive ? "text-white" : "text-gray-400"}`}>
                {nav.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
