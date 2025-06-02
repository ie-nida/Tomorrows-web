import React, { useState } from 'react';
import { Download } from 'lucide-react';

const DownloadButton = ({ 
  label, 
  url, 
  size, 
  onClick,
  isPrimary = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onClick) onClick();
    
    window.open(url, '_blank');
  };
  
  return (
    <button
      className={`relative group overflow-hidden rounded-xl ${
        isPrimary ? 'bg-gradient-to-r from-pink-900 to-indigo-950 hover:bg-[#FF86BB]' : 'bg-[#413F7D] hover:bg-[#524FAA]'
      } text-white px-6 py-4 shadow-md transition-all duration-300`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div 
            className={`mr-3 p-2 rounded-full ${
              isPrimary ? 'bg-white/20' : 'bg-white/10'
            }`}
          >
            <Download className={`h-5 w-5 transition-transform duration-300 ${
              isHovered ? 'translate-y-1' : ''
            }`} />
          </div>
          <div className="text-left">
            <div className="font-bold text-lg">{label}</div>
            <div className="text-sm opacity-80">{size}</div>
          </div>
        </div>
        
        <div className="ml-4 w-6 h-6 relative">
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>→</span>
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>↓</span>
        </div>
      </div>
      
      {/* Animated background effect */}
      <div 
        className={`absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-700 ease-out ${
          isHovered ? 'w-full' : 'w-0'
        }`}
      />
    </button>
  );
};

export default DownloadButton;
