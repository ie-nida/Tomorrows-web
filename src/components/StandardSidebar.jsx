import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const sidebarItems = [
  {
    title: 'Gameplay',
    children: [
      { title: 'Song Selection', href: '#song-selection' },
      { title: 'Gameplay Basics', href: '#gameplay-basics' },
      { title: 'Hit Objects', href: '#hit-objects' }
    ]
  },
  { 
    title: 'Controls & Input',
    href: '#controls',
    children: [
      { title: 'Mouse', href: '#mouse-controls' },
      { title: 'Keyboard', href: '#keyboard-controls' },
      { title: 'Tablet', href: '#tablet-controls' }
    ]
  },
  { title: 'Scoring', href: '#scoring' },
  {
    title: 'Game Elements',
    children: [
      { title: 'Approach Circles', href: '#approach-circles' },
      { title: 'Sliders', href: '#sliders' },
      { title: 'Spinners', href: '#spinners' },
      { title: 'Health Bar', href: '#health-bar' }
    ]
  },
  { title: 'Game Mods', href: '#game-mods' },
  { title: 'Skinning', href: '#skinning' },
  {
    title: 'osu! Mapping',
    href: '#mapping',
    children: [
      { title: 'Beatmap Ranking', href: '#map-ranking' }
    ]
  },
  {
    title: 'Community',
    children: [
      { title: 'Tournaments', href: '#tournaments' },
      { title: 'Notable Players', href: '#notable-players' }
    ]
  },
  { title: 'History', href: '#history' }
];

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div 
        className={`flex items-center justify-between py-2 px-4 ${hasChildren ? 'cursor-pointer' : ''} hover:bg-[#3a3a3a] transition-colors sidebar-item`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {item.href ? (
          <a href={item.href} className="w-full no-underline">{item.title}</a>
        ) : (
          <span>{item.title}</span>
        )}
        
        {hasChildren && (
          <span className="ml-2">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div className="pl-4 border-l border-[#3a3a3a] ml-4">
          {item.children.map((child, index) => (
            <div key={index} className="py-1 px-2 hover:bg-[#3a3a3a] transition-colors">
              <a href={child.href} className="block w-full no-underline">{child.title}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const StandardSidebar = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <aside className="w-64 bg-[#252525] border-r border-[#3a3a3a] overflow-y-auto">
      <div className="py-4">
        <div className="px-4 py-2 font-bold text-pink-700 uppercase text-sm tracking-wider">
          CONTENTS
        </div>
        
        <nav className="mt-2">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default StandardSidebar;