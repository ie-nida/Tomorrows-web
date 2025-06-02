import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

const DownloadPopup = ({ 
  isOpen, 
  onClose,
  onDownload 
}) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimateIn(true);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        style={{ opacity: animateIn ? 1 : 0 }}
      />
      
      {/* Popup content */}
      <div 
        className={`
          relative w-full max-w-md transform rounded-2xl bg-gradient-to-br from-[#2a1e3d] to-[#1c1528] p-6 text-white shadow-xl
          transition-all duration-500 ease-in-out
          ${animateIn ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
        `}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-pink-300 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        
        {/* OSU-inspired logo/icon */}
        <div className="mb-4 flex justify-center">
  <div className="h-24 w-24 rounded-full flex items-center justify-center shadow-lg p-1">
    <img
      src="./Osu-Logo.png" 
      alt="osu!"
      className="h-full w-full rounded-full object-cover"
    />
  </div>
</div>

        
        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to click the beat?</h2>
          <p className="text-pink-200 mb-4">
            You haven't downloaded osu! yet. Click below to start your rhythm journey!
          </p>
          
          {/* Download button with animation */}
          <button 
            onClick={onDownload}
            className="group relative overflow-hidden px-8 py-4 w-full rounded-xl bg-gradient-to-r from-pink-900 to-purple-900 text-white font-bold text-lg shadow-lg
            hover:brightness-110 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download className="animate-bounce" size={20} />
              Download osu!
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-900 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
        
        {/* Additional info */}
        <div className="text-center text-sm text-pink-200/80">
          <p>Join millions of players worldwide and experience the rhythm!</p>
          <p className="mt-2 text-xs">Version 2025.623.0</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPopup;