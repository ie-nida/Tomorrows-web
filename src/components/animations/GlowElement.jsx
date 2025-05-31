import React from 'react';

const GlowElement = ({
  children,
  className = '',
  color,
  intensity = 'medium',
  isPulsing = false
}) => {
  const intensityValues = {
    low: '10px',
    medium: '15px',
    high: '20px'
  };

  const glowStyle = color
    ? { '--animation-glow-color': color }
    : {};

  const classes = [
    'glow-hover',
    isPulsing ? 'pulse-highlight' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{
        ...glowStyle,
        '--glow-intensity': intensityValues[intensity]
      }}
    >
      {children}
    </div>
  );
};

export default GlowElement;
