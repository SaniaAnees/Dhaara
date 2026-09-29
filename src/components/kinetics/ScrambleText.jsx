import React, { useState, useEffect } from 'react';

/**
 * 3. Scramble Reveal (Kinetics #3)
 * Text decodes from random glyphs into final string, left to right.
 */
const GLYPHS = '!<>-_/[]{}=+*^?#';

export const ScrambleText = ({ text, className = '', triggerOnHover = false, speed = 35 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let frame = 0;
    const maxFrames = text.length * 3;

    const interval = setInterval(() => {
      frame++;
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          // If frame index has passed character locking threshold, show real char
          if (frame > index * 2.5) {
            return char;
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame >= maxFrames) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    startScramble();
  }, [text]);

  return (
    <span
      className={`${className} ${isScrambling ? 'font-mono' : ''}`}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
    >
      {displayText}
    </span>
  );
};
