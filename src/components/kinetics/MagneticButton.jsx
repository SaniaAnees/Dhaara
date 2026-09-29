import React, { useRef, useState } from 'react';

/**
 * 1. Magnetic Button (Kinetics #1)
 * Button magnetically pulled toward pointer by ~35% offset; glides back on mouseleave.
 */
export const MagneticButton = ({ children, className = '', onClick, href }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate 35% offset toward pointer
    const offsetX = (e.clientX - centerX) * 0.35;
    const offsetY = (e.clientY - centerY) * 0.35;
    
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={btnRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.15s ease-out'
      }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer select-none ${className}`}
    >
      {children}
    </Component>
  );
};
