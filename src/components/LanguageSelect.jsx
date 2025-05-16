import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';

const LanguageSelect = () => {
  const [languages, setLanguages] = useState([
    { code: 'en', name: 'English', flag: 'GB' }, // GB for UK flag (commonly used for English)
    { code: 'ar', name: 'اَلْعَرَبِيَّةُ‎', flag: 'SA' },
    { code: 'be', name: 'беларуская мова', flag: 'BY' },
    { code: 'bg', name: 'български', flag: 'BG' },
    { code: 'ca', name: 'català', flag: 'ES' },
    { code: 'cs', name: 'česky', flag: 'CZ' },
    { code: 'da', name: 'dansk', flag: 'DK' },
    { code: 'de', name: 'Deutsch', flag: 'DE' },
    { code: 'el', name: 'ελληνικά', flag: 'GR' },
    { code: 'es', name: 'español', flag: 'ES' },
    { code: 'fi', name: 'suomi', flag: 'FI' },
    { code: 'fil', name: 'wikang Filipino', flag: 'PH' },
    { code: 'fr', name: 'français', flag: 'FR' },
    { code: 'he', name: 'עִבְרִית‎', flag: 'IL' },
    { code: 'hu', name: 'magyar', flag: 'HU' },
    { code: 'id', name: 'bahasa Indonesia', flag: 'ID' },
    { code: 'it', name: 'italiano', flag: 'IT' },
    { code: 'ja', name: '日本語', flag: 'JP' },
    { code: 'ko', name: '한국어', flag: 'KR' },
    { code: 'lt', name: 'lietuvių kalba', flag: 'LT' },
    { code: 'nl', name: 'Nederlands', flag: 'NL' },
    { code: 'no', name: 'norsk', flag: 'NO' },
    { code: 'pl', name: 'polski', flag: 'PL' },
    { code: 'pt', name: 'português', flag: 'PT' },
    { code: 'pt-BR', name: 'português brasileiro', flag: 'BR' },
    { code: 'ro', name: 'română', flag: 'RO' },
    { code: 'ru', name: 'русский', flag: 'RU' },
    { code: 'sk', name: 'slovenčina', flag: 'SK' },
    { code: 'sl', name: 'slovenščina', flag: 'SI' },
    { code: 'sr', name: 'српски', flag: 'RS' },
    { code: 'sv', name: 'svenska', flag: 'SE' },
    { code: 'th', name: 'ไทย', flag: 'TH' },
    { code: 'tr', name: 'Türkçe', flag: 'TR' },
    { code: 'uk', name: 'українська мова', flag: 'UA' },
    { code: 'vi', name: 'tiếng Việt', flag: 'VN' },
    { code: 'zh-CN', name: '简体中文', flag: 'CN' },
    { code: 'zh-TW', name: '繁體中文（台灣）', flag: 'TW' },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState('Welcome to osu! The ultimate rhythm game experience.');

  useEffect(() => {
    // Initial text in English
    setTranslatedText('Welcome to osu! The ultimate rhythm game experience.');
  }, []);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);

    const apiKey = 'AIzaSyAM-k_Iirg-tN4yOVLpEXhd47-pd9Vb6VE'; // Replace with your actual Google API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    axios.post(url, {
      q: 'Welcome to osu! The ultimate rhythm game experience.',
      source: 'en',
      target: language,
    })
      .then(response => {
        setTranslatedText(response.data.data.translations[0].translatedText);
      })
      .catch(err => {
        console.error("Error fetching translated text: ", err);
        setTranslatedText('Translation failed.');
      });
  };

  return (
    <div className="p-4 text-sm bg-[#1F1F1F] rounded">
      <h1 className="text-base font-semibold mb-2">Select Language</h1>
      <select 
        onChange={(e) => changeLanguage(e.target.value)} 
        value={selectedLanguage} 
        className="w-full p-2 bg-black text-white rounded"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code} className="flex items-center">
            <Flag code={language.flag} style={{ width: '20px', height: '14px', marginRight: '8px' }} />
            {language.name}
          </option>
        ))}
      </select>
      <p className="mt-2">{translatedText}</p>
    </div>
  );
};

export default LanguageSelect;


