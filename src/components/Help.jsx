import React, { useState } from 'react';
import NavBar from "../pages/Navbar";
import HelpHeader from './HelpHeader';
import HelpSidebar from './HelpSidebar';
import HelpMainContent from './HelpMainContent';

function Help() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('wiki');
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeLanguage = async (lang) => {
    if (lang === currentLanguage) return;

    setIsLoading(true);
    try {
      // Simulate language change delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentLanguage(lang);
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      <NavBar />
      <HelpHeader 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentLanguage={currentLanguage}
        onChangeLanguage={changeLanguage}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <HelpSidebar 
          isOpen={isSidebarOpen} 
          activeSection={activeSection}
          onChangeSection={changeSection}
        />
        <HelpMainContent 
          isLoading={isLoading} 
          currentLanguage={currentLanguage}
          activeSection={activeSection}
        />
      </div>
    </div>
  );
}

export default Help;