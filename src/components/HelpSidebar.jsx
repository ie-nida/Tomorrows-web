import React, { useState } from 'react';
import { Book, HelpCircle, AlertTriangle, Flag, LifeBuoy, ChevronRight, ChevronDown } from 'lucide-react';

const HelpSidebarItem = ({ title, icon, href, isActive, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  return (
    <div>
      <div 
        className={`flex items-center justify-between py-2 px-4 ${
          hasChildren ? 'cursor-pointer' : ''
        } ${isActive ? 'bg-pink-500/20 text-pink-400' : 'hover:bg-[#3a3a3a]'} 
        transition-colors rounded-md sidebar-item`}
        onClick={() => {
          onClick(href);
          if (hasChildren) setIsOpen(!isOpen);
        }}
      >
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          <span>{title}</span>
        </div>
        {hasChildren && (
          <span className="ml-2">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div className="pl-4 border-l border-[#3a3a3a] ml-6 mt-1 mb-1">
          {children.map((child, index) => (
            <div 
              key={index} 
              className={`py-2 px-3 hover:bg-[#3a3a3a] 
              ${isActive && href + child.href === href ? 'text-pink-400' : ''} 
              transition-colors rounded-md cursor-pointer mb-1`}
              onClick={() => onClick(href + child.href)}
            >
              {child.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, activeSection, onChangeSection }) => {
  if (!isOpen) return null;

  const sidebarItems = [
    { 
      title: 'Wiki', 
      icon: <Book size={20} />, 
      href: 'wiki', 
      children: [
        { title: 'Getting Started', href: '-getting-started' },
        { title: 'Gameplay', href: '-gameplay' },
        { title: 'Game Modes', href: '-game-modes' },
        { title: 'Skinning', href: '-skinning' },
      ] 
    },
    { 
      title: 'FAQ', 
      icon: <HelpCircle size={20} />, 
      href: 'faq', 
      children: [] 
    },
    { 
      title: 'Rules', 
      icon: <AlertTriangle size={20} />, 
      href: 'rules', 
      children: [
        { title: 'Community Rules', href: '-community' },
        { title: 'Content Rules', href: '-content' },
        { title: 'Account Rules', href: '-account' },
      ] 
    },
    { 
      title: 'Report Abuse', 
      icon: <Flag size={20} />, 
      href: 'report', 
      children: [] 
    },
    { 
      title: 'Need Help Now', 
      icon: <LifeBuoy size={20} className="text-red-400" />, 
      href: 'emergency', 
      children: [] 
    },
  ];

  return (
    <aside className="w-64 bg-[#252525] border-r border-[#3a3a3a] overflow-y-auto">
      <div className="py-4">
        <div className="px-4 py-2 font-bold text-yellow-400 uppercase text-sm tracking-wider">
          Help Center
        </div>
        <nav className="mt-2 px-2 space-y-1">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              title={item.title}
              icon={item.icon}
              href={item.href}
              isActive={activeSection.startsWith(item.href)}
              onClick={onChangeSection}
              children={item.children}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default HelpSidebar;
