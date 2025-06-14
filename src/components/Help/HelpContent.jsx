import React, { useEffect, useState } from 'react';
import WikiSection from './Sections/WikiSection';
import FAQSection from './Sections/FAQSection';
import RulesSection from './Sections/RulesSection';
import ReportSection from './Sections/ReportSection';
import NeedHelpSection from './Sections/NeedHelpSection';

const HelpContent = ({ activeSection, searchQuery }) => {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    
    setFadeIn(false);
    
    
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [activeSection]);
  
  const renderSection = () => {
    
    if (activeSection === 'wiki' || activeSection.startsWith('wiki-')) {
      return <WikiSection subSection={activeSection.replace('wiki-', '')} />;
    }
    
    
    if (activeSection === 'faq' || activeSection.startsWith('faq-')) {
      return <FAQSection subSection={activeSection.replace('faq-', '')} />;
    }
    
   
    if (activeSection === 'rules' || activeSection.startsWith('rules-')) {
      return <RulesSection subSection={activeSection.replace('rules-', '')} />;
    }
    
    
    switch (activeSection) {
      case 'report':
        return <ReportSection />;
      case 'need-help':
        return <NeedHelpSection />;
      default:
        return <WikiSection subSection="" />;
    }


  };
  
  
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300 p-4 md:p-8">
      <div 
        className={`container mx-auto max-w-4xl transition-opacity duration-300 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {renderSection()}
      </div>
    </main>
    
    
  );
};

export default HelpContent;