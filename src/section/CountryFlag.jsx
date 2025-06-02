import React from 'react';

const CountryFlag = ({ countryCode, className = "" }) => {
  const flagUrl = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode.toUpperCase()}.svg`;

  return (
    <img 
      src={flagUrl} 
      alt={`${countryCode} flag`} 
      className={`w-4 h-3 rounded-sm object-cover shadow-sm ${className}`}
      onError={(e) => {
        
        e.target.src = "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg";
      }}
    />
  );
};

export default CountryFlag;


