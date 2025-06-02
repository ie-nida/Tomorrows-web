import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Search } from 'lucide-react';
import HelpHeader from './HelpHeader';
import HelpSidebar from './HelpSidebar';
import HelpContent from './HelpContent';

function Help() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('wiki');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <HelpHeader 
        toggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <HelpSidebar 
          isOpen={isSidebarOpen} 
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
        <HelpContent 
          activeSection={activeSection}
          searchQuery={searchQuery}
        />
      </div>
    </div>
    
  );
}

export default Help;