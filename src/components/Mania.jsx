import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import Sidebar from './ManiaSidebar';
import LanguageSelector from './ManiaLanguageSelector';
import MainContent from './ManiaMainContent';

function Mania() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeLanguage = async (lang) => {
    if (lang === currentLanguage) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentLanguage(lang);
      setIsLoading(false);
    } catch (error) {
      console.error('Error changing language:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="bg-[#2d2d2d] border-b border-[#3a3a3a] shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button onClick={toggleSidebar} className="p-1 rounded hover:bg-[#3a3a3a] transition-colors">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#333] rounded-full flex items-center justify-center">
                <span className="text-purple-400">🎹</span>
              </div>
              <h1 className="ml-2 text-xl font-bold">wiki</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-full hover:bg-[#3a3a3a] transition-colors">
              <Github size={24} className="text-purple-400" />
            </a>
            <LanguageSelector
              currentLanguage={currentLanguage}
              onChangeLanguage={changeLanguage}
            />
          </div>
        </div>
      </header>
      
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <MainContent isLoading={isLoading} currentLanguage={currentLanguage} />
      </div>
    </div>
  );
}

export default Mania;