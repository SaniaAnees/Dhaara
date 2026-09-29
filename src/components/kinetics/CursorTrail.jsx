import React, { useEffect, useRef, useState } from 'react';

/**
 * 2. Cursor Trail (Kinetics #2)
 * Comet tail of dots lerping towards cursor position.
 */
export const CursorTrail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dotsRef = useRef(Array.from({ length: 7 }, () => ({ x: 0, y: 0 })));
  const mouseRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      const dots = dotsRef.current;
      let targetX = mouseRef.current.x;
      let targetY = mouseRef.current.y;

      dots.forEach((dot, index) => {
        dot.x += (targetX - dot.x) * 0.35;
        dot.y += (targetY - dot.y) * 0.35;

        targetX = dot.x;
        targetY = dot.y;

        const el = elementsRef.current[index];
        if (el) {
          const scale = 1 - index * 0.12;
          const opacity = (1 - index * 0.13) * 0.6;
          el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${scale})`;
          el.style.opacity = opacity.toString();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (elementsRef.current[i] = el)}
          className="fixed top-0 left-0 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#00ff88] transition-opacity duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
};
