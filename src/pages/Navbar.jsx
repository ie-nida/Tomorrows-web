import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import osuLazerLogo from "/osu-lazer-logo-white.62cae952 (1).svg"; // osu! Lazer Logo
import osuLogo from "/Osu-Logo.png"; // osu! main logo

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="absolute top-0 left-0 p-6 bg-transparent text-white flex items-center space-x-8 font-sans">
      {/* Logo Section */}
      <div
        className="relative w-24 h-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* osu! Lazer Logo (default) */}
        <img
          src={osuLazerLogo}
          alt="osu Lazer Logo"
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 transform ${isHovered ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
        />
        
        {/* osu! Logo (hovered) */}
        <img
          src={osuLogo}
          alt="osu Logo"
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 transform ${isHovered ? "scale-110 opacity-100" : "scale-90 opacity-0"}`}
        />
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-8 text-lg">
        <li className="group relative">
          <Link
            to="/lobby"  // Using Link to navigate to the home page
            className="text-white glow-link font-[Quicksand] transition-all duration-300"
          >
            Home
            <span className="absolute block w-full h-1 bg-pink-100 scale-x-0 transition-all duration-300 transform origin-left group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li className="group relative">
          <Link
            to="/download"  // Using Link to navigate to the About page
            className="text-white glow-link font-[Quicksand] transition-all duration-300"
          >
            Play
            <span className="absolute block w-full h-1 bg-pink-100 scale-x-0 transition-all duration-300 transform origin-left group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li className="group relative">
          <Link
            to="/OsuDailyLeaderboard"  // Using Link to navigate to the Leaderboard page
            className="text-white glow-link font-[Quicksand] transition-all duration-300"
          >
            Leaderboard
            <span className="absolute block w-full h-1 bg-pink-100 scale-x-0 transition-all duration-300 transform origin-left group-hover:scale-x-100"></span>
          </Link>
        </li>

        <li className="group relative">
          <Link
            to="/communitylive"  // Using Link to navigate to the Leaderboard page
            className="text-white glow-link font-[Quicksand] transition-all duration-300"
          >
            Community
            <span className="absolute block w-full h-1 bg-pink-100 scale-x-0 transition-all duration-300 transform origin-left group-hover:scale-x-100"></span>
          </Link>
        </li>

        <li className="group relative">
          <Link
            to="/"  // Using Link to navigate to the Leaderboard page
            className="text-white glow-link font-[Quicksand] transition-all duration-300"
          >
            Help
            <span className="absolute block w-full h-1 bg-pink-100 scale-x-0 transition-all duration-300 transform origin-left group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;










