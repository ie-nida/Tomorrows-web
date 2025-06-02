import React from 'react';

const PerformanceIndicator = ({ value, type }) => {
  
  const getStyles = () => {
    if (type === 'performance') {
     
      return {
        textColor: 'text-[#f5f5f5]',
        glowColor: 'drop-shadow-[0_0_8px_#f5b7fb]',
        fontWeight: 'font-semibold'
      };
    } else {
      
      return {
        textColor: 'text-[#e6e6ff]',
        glowColor: 'drop-shadow-[0_0_6px_#8080ff]',
        fontWeight: 'font-medium'
      };
    }
  };

  const styles = getStyles();

  return (
    <div className={`${styles.textColor} ${styles.fontWeight} ${styles.glowColor} text-center`}>
      {type === 'performance' ? value.toLocaleString() : `${value}%`}
    </div>
  );
};

export default PerformanceIndicator;