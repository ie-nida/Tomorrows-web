import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const LobbyPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B004E] via-[#1F1F1F] to-black z-0" />

      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/osu_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative flex flex-col h-full text-white z-20">
        {/* Navbar */}
        <div className="flex items-center justify-between px-4 py-2 w-full">
          {/* Left side: osu! Logo */}
          <div className="flex items-center">
            <div className="group w-16 h-16 transform transition-transform duration-300 hover:scale-110">
              <img
                src="/osu-lazer-logo-white.62cae952 (1).svg"
                alt="osu!"
                className="w-full h-full object-contain group-hover:hidden transition duration-300"
              />
              <img
                src="/Osu-Logo.png"
                alt="osu! colorful"
                className="w-full h-full object-contain hidden group-hover:block transition duration-300"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex ml-6">
              <button className="px-4 py-2">Home</button>
              <button className="px-4 py-2">Play</button>
              <button className="px-4 py-2">Leaderboard</button>
              <button className="px-4 py-2">Profile</button>
              <button className="px-4 py-2">Settings</button>
            </div>
          </div>

          {/* Right side: Sign In Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group flex items-center flex-col">
              <img
                src="/cat.jpg"
                alt="Default User"
                className="w-13 h-13 rounded-full object-cover border-2 border-white"
              />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-[#1F1F1F] text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Sign In
              </span>
            </div>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <div className="lg:hidden">
            <StyledWrapper>
              <label className="hamburger">
                <input
                  type="checkbox"
                  checked={isMenuOpen}
                  onChange={() => setIsMenuOpen(!isMenuOpen)}
                />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  />
                  <path className="line" d="M7 16 27 16" />
                </svg>
              </label>
            </StyledWrapper>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col items-center mt-2">
            <button className="px-4 py-2">Home</button>
            <button className="px-4 py-2">Play</button>
            <button className="px-4 py-2">Leaderboard</button>
            <button className="px-4 py-2">Profile</button>
            <button className="px-4 py-2">Settings</button>
          </div>
        )}

        {/* Welcome Text Section */}
        <div className="text-left text-white mt-24 ml-10">
          <h2 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-pink-800 via-white to-indigo-800 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] [animation:bounceSlow_3s_ease-in-out_infinite]">
            Welcome to osu!
          </h2>
          <p
            className="mt-4 text-2xl text-white max-w-2xl [animation:bounceSlow_3s_ease-in-out_infinite] [animation-delay:1s]"
            style={{
              textShadow: '0 0 4px white, 0 0 6px white',
            }}
          >
            The ultimate rhythm game experience – challenge your reflexes, master the beat,
            and rise through the global ranks with style.<br />
            Join a vibrant community and show the world your perfect score!
          </p>

          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-900 to-indigo-950 text-white rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg [animation:bounceSlow_3s_ease-in-out_infinite] [animation-delay:2s]">
            Start Game
          </button>
        </div>

        {/* Girl with osu! logo */}
        <div className="absolute bottom-[-20px] right-50 transform translate-x-1/2 mb-4 z-30 flex flex-col items-center">
          <motion.div
            className="absolute top-[55%] right-[-28%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-20"
            animate={{
              scale: isHovered ? [1.2, 1.3, 1.25, 1.2] : [1, 1.08, 1.04, 1],
              filter: isHovered
                ? ['brightness(1.1)', 'brightness(1.2)', 'brightness(1.15)', 'brightness(1.1)']
                : ['brightness(1)', 'brightness(1.05)', 'brightness(1.02)', 'brightness(1)'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              times: [0, 0.2, 0.35, 1],
              ease: 'easeInOut',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <StyledOsuLogo
              src="/Osu-Logo.png"
              alt="osu! Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <StyledGirlImage src="/girl.png" alt="Girl holding osu! logo" />
        </div>

        {/* Footer */}
        <footer className="w-full bg-transparent p-6 text-center text-white mt-auto">
          <p>&copy; 2025 osu! - All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// Animations
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

const StyledGirlImage = styled.img`
  width: 22rem;
  height: auto;
  z-index: 10;
  animation: ${slideUp} 1s ease-out forwards;
`;

const StyledOsuLogo = styled.img`
  width: 12rem;
  height: auto;
  z-index: 10;
  animation: ${slideUp} 1s ease-out forwards;
`;

export default LobbyPage;
