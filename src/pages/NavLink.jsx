import React from "react";

const NavLink = ({ to, label, isMobile = false }) => {
  return (
    <li className={`group relative ${isMobile ? "w-full" : ""}`}>
      <a
        href={to}
        className="text-white font-[Quicksand] transition-all duration-300"
      >
        {label}
        <span className="absolute block w-full h-1 bg-pink-100 scale-x-0 transition-all duration-300 transform origin-left group-hover:scale-x-100"></span>
      </a>
    </li>
  );
};

export default NavLink;