import React from 'react';
import { Menu, X, Github, HelpCircle } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const HelpHeader = ({ 
  isSidebarOpen, 
  toggleSidebar, 
  currentLanguage,
  onChangeLanguage 
}) => {
  return (
    <header className="bg-[#2d2d2d] border-b border-[#3a3a3a] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleSidebar} 
            className="p-1 rounded hover:bg-[#3a3a3a] transition-colors"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#333] rounded-full flex items-center justify-center">
              <HelpCircle size={20} className="text-pink-400" />
            </div>
            <h1 className="ml-2 text-xl font-bold">
              <span className="text-pink-400">osu!</span>help
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/ppy/osu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#3a3a3a] transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={24} className="text-yellow-400" />
          </a>
          <LanguageSelector 
            currentLanguage={currentLanguage} 
            onChangeLanguage={onChangeLanguage} 
          />
        </div>
      </div>
    </header>
  );
};

export default HelpHeader;