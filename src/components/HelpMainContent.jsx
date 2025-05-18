import React from 'react';
import Wiki from "../section/Wiki.jsx";
import FAQ from "../section/FAQ";
import Rules from "../section/Rules";
import ReportAbuse from "../section/ReportAbuse";
import EmergencyHelp from "../section/EmergencyHelp";


const HelpMainContent = ({ 
  isLoading, 
  currentLanguage, 
  activeSection 
}) => {
  // Render the appropriate component based on the active section
  const renderSection = () => {
    const section = activeSection.split('-')[0];
    
    switch (section) {
      case 'wiki':
        return <Wiki subsection={activeSection.replace('wiki', '')} language={currentLanguage} />;
      case 'faq':
        return <FAQ language={currentLanguage} />;
      case 'rules':
        return <Rules subsection={activeSection.replace('rules', '')} language={currentLanguage} />;
      case 'report':
        return <ReportAbuse language={currentLanguage} />;
      case 'emergency':
        return <EmergencyHelp language={currentLanguage} />;
      default:
        return <Wiki subsection="" language={currentLanguage} />;
    }
  };
  
  return (
    <main className="flex-1 overflow-y-auto bg-[#222] p-4">
      <div className="container mx-auto max-w-4xl">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading content...</p>
          </div>
        ) : (
          <div className="fade-in">
            {renderSection()}
          </div>
        )}
      </div>
    </main>
  );
};

export default HelpMainContent;