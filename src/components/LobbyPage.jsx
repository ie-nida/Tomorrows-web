import React, { useState } from 'react';
import styled from 'styled-components';

const LobbyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#8B004E] via-[#1F1F1F] to-black flex flex-col text-white relative">
      
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-0 w-full relative">
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
          <div className="hidden lg:flex">
            <button className="px-4 py-2">Home</button>
            <button className="px-4 py-2">Play</button>
            <button className="px-4 py-2">Leaderboard</button>
            <button className="px-4 py-2">Profile</button>
            <button className="px-4 py-2">Settings</button>
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

      {/* Welcome Section */}
      <div className="text-center text-white mt-24">
        <h2 className="text-5xl font-bold">Welcome to osu!</h2>
        <p className="mt-4 text-xl">The ultimate rhythm game experience.</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Start Game
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full bg-transparent p-6 text-center text-white">
        <p>&copy; 2025 osu! - All rights reserved.</p>
      </footer>
    </div>
  );
};

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

export default LobbyPage;

