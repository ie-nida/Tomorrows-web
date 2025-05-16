import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

const LanguageSelector = ({ currentLanguage, onChangeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-1 px-3 rounded-full transition-colors language-selector"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md shadow-lg z-10 overflow-hidden">
          <div className="py-1 max-h-80 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-[#3a3a3a] transition-colors ${
                  lang.code === currentLanguage ? 'bg-[#3a3a3a]' : ''
                }`}
                onClick={() => {
                  onChangeLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
