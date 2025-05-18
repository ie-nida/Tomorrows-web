import React from 'react';

const StandardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default StandardImage;