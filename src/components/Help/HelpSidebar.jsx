import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, HelpCircle, Shield, Flag, AlertCircle } from 'lucide-react';

const SidebarItem = ({ 
  title, 
  icon, 
  id, 
  setActiveSection, 
  activeSection, 
  children 
}) => {
  const [isOpen, setIsOpen] = useState(activeSection === id || (children && children.some(child => child.id === activeSection)));
  const hasChildren = children && children.length > 0;

  return (
    <div>
      <div 
        className={`flex items-center justify-between py-3 px-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
          activeSection === id ? 'bg-purple-50 dark:bg-gray-700 border-l-4 border-purple-500 dark:border-pink-800' : ''
        }`}
        onClick={() => {
          if (hasChildren) {
            setIsOpen(!isOpen);
          }
          setActiveSection(id);
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="text-pink-600 dark:text-pink-800">
            {icon}
          </div>
          <span className={`${activeSection === id ? 'font-medium' : ''}`}>{title}</span>
        </div>
        
        {hasChildren && (
          <span className="text-gray-400">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div className="pl-12 bg-gray-50 dark:bg-gray-800 border-l border-purple-100 dark:border-gray-700 ml-4">
          {children.map((child, index) => (
            <div 
              key={index} 
              className={`py-2 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                activeSection === child.id ? 'text-pink-600 dark:text-pink-800 font-medium' : ''
              }`}
              onClick={() => setActiveSection(child.id)}
            >
              {child.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const HelpSidebar = ({ isOpen, setActiveSection, activeSection }) => {
  if (!isOpen) return null;
  
  const sidebarItems = [
    {
      title: "Wiki",
      icon: <BookOpen size={18} />,
      id: "wiki",
      children: [
        { title: "Getting Started", id: "wiki-getting-started" },
        { title: "Game Modes", id: "wiki-game-modes" },
        { title: "Controls", id: "wiki-controls" },
        { title: "Scoring", id: "wiki-scoring" }
      ]
    },
    {
      title: "FAQ",
      icon: <HelpCircle size={18} />,
      id: "faq",
      children: [
        { title: "Account Questions", id: "faq-account" },
        { title: "Gameplay Questions", id: "faq-gameplay" },
        { title: "Technical Issues", id: "faq-technical" }
      ]
    },
    {
      title: "Rules",
      icon: <Shield size={18} />,
      id: "rules",
      children: [
        { title: "Community Guidelines", id: "rules-community" },
        { title: "Chat Rules", id: "rules-chat" },
        { title: "Ranking Criteria", id: "rules-ranking" }
      ]
    },
    {
      title: "Report Abuse",
      icon: <Flag size={18} />,
      id: "report",
      children: []
    },
    {
      title: "No, Really, I Do Need Help",
      icon: <AlertCircle size={18} />,
      id: "need-help",
      children: []
    }
  ];
  
  return (
    <aside className="w-64 md:w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-colors duration-300">
      <div className="py-4">
        <div className="px-4 py-2 text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">
          HELP CONTENTS
        </div>
        
        <nav className="mt-1">
          {sidebarItems.map((item, index) => (
            <SidebarItem 
              key={index} 
              title={item.title} 
              icon={item.icon} 
              id={item.id} 
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              children={item.children}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default HelpSidebar;