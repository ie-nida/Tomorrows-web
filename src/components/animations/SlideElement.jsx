import React, { useEffect, useRef } from 'react';

const SlideElement = ({
  children,
  direction = 'left',
  delay = 0,
  duration,
  className = ''
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const directionClass = `slide-in-${direction}`;
    elementRef.current.classList.add(directionClass);
    
    if (delay) {
      elementRef.current.style.animationDelay = `${delay}ms`;
    }
    
    if (duration) {
      elementRef.current.style.animationDuration = `${duration}ms`;
    }
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default SlideElement;
