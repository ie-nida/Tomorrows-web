import React from 'react';
import { Menu, X, Moon, Sun, Search, HelpCircle } from 'lucide-react';
import NavBar from '../../pages/Navbar';

const HelpHeader = ({
  toggleSidebar,
  isSidebarOpen,
  isDarkMode,
  toggleDarkMode,
  searchQuery,
  setSearchQuery,
  handleSearch
}) => {
  return (
    <>
      <NavBar />

      <header className="relative bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300 mt-32">
        <button 
          onClick={toggleSidebar} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-20"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="container mx-auto px-4 py-3 flex justify-center items-center relative">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] animate-[pulse_3s_ease-in-out_infinite,bounceSlow_3s_ease-in-out_infinite]">
              Osu! Help Center
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default HelpHeader;

