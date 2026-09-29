import React, { useRef, useState } from 'react';

/**
 * 9. Cursor Spotlight (Kinetics #9)
 * Card with a soft radial spotlight following pointer.
 */
export const SpotlightCard = ({ children, className = '', glowColor = 'rgba(0, 255, 136, 0.15)' }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden glass-panel glass-panel-hover rounded-2xl p-6 ${className}`}
    >
      {/* Soft Radial Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
