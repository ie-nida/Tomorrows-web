import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import HamburgerMenu from './HamburgerMenu';
import BottomNav from './BottomNav';
import { Music } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const osuLazerLogo = "osu-lazer-logo-white.62cae952 (1).svg";
  const osuLogo = "Osu-Logo.png";

  return (
    <>
      <nav className="absolute top-0 left-0 p-6 bg-transparent text-white flex items-center space-x-8 font-sans z-50">
        {/* Logo Section */}
        <div
          className="relative w-24 h-24 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={osuLazerLogo}
            alt="osu Lazer Logo"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 transform ${
              isHovered ? "scale-90 opacity-0" : "scale-100 opacity-100"
            }`}
          />
          <img
            src={osuLogo}
            alt="osu Logo"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 transform ${
              isHovered ? "scale-110 opacity-100" : "scale-90 opacity-0"
            }`}
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <NavLink to="/lobby" label="Home" />
          <NavLink to="/download" label="Play" />
          <NavLink to="/OsuDailyLeaderboard" label="Leaderboard" />
          <NavLink to="/communitylive" label="Community" />
          <NavLink to="/help" label="Help" />
        </ul>

        {/* Hamburger Toggle (Medium Devices Only) */}
        <div className="hidden md:block lg:hidden ml-auto z-50">
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>

      {/* Medium Devices Menu Overlay */}
      <div
        className={`hidden md:block lg:hidden fixed inset-0 w-full h-full bg-gradient-to-b from-gray-900/95 to-pink-900/90 backdrop-blur-md transition-all duration-500 ease-in-out z-40 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center text-center">
          <div className="relative mb-8">
            <Music className="text-pink-400 w-10 h-10 animate-pulse" />
            <div className="absolute -inset-1 rounded-full bg-pink-500/20 animate-ping"></div>
          </div>

          <ul className="flex flex-col space-y-6 items-center">
            <NavLink to="/lobby" label="Home" isMobile />
            <NavLink to="/download" label="Play" isMobile />
            <NavLink to="/OsuDailyLeaderboard" label="Leaderboard" isMobile />
            <NavLink to="/communitylive" label="Community" isMobile />
            <NavLink to="/help" label="Help" isMobile />
          </ul>

          <div className="mt-12 flex space-x-4 justify-center">
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <BottomNav />
    </>
  );
};

export default Navbar;