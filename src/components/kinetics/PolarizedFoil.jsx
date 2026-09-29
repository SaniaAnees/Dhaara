import React, { useState } from 'react';

/**
 * 12. Polarized Foil (Kinetics #12)
 * Dark foil surface with perspective tilt and desaturated conic highlight sweep.
 */
export const PolarizedFoil = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('perspective(500px) rotateY(0deg) rotateX(0deg)');
  const [foilOpacity, setFoilOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * -16;
    const rotateX = ((y / rect.height) - 0.5) * 16;
    
    setTransformStyle(`perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
    setFoilOpacity(0.4);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(600px) rotateY(0deg) rotateX(0deg)');
    setFoilOpacity(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: foilOpacity === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out' }}
      className={`relative overflow-hidden rounded-2xl glass-panel ${className}`}
    >
      {/* Conic Foil Sweep Layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: foilOpacity,
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(0, 255, 136, 0.2) 0deg, rgba(6, 182, 212, 0.2) 120deg, transparent 240deg)',
          mixBlendMode: 'screen'
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
