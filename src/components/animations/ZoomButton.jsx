import React from 'react';

const ZoomButton = ({
  children,
  onClick,
  className = '',
  type = 'in'
}) => {
  const zoomClass = {
    in: 'zoom-in',
    out: 'zoom-out',
    pulse: 'zoom-pulse'
  }[type];

  return (
    <button
      onClick={onClick}
      className={`${zoomClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default ZoomButton;
