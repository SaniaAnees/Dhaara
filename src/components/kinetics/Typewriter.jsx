import React, { useState, useEffect } from 'react';

/**
 * 5. Typewriter (Kinetics #5)
 * Loops through phrases array typing ~55ms and deleting ~30ms, with steps() caret.
 */
export const Typewriter = ({ phrases, className = '' }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          // Pause at full phrase
          setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        // Deleting back
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 30 : 55);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span className="inline-block w-2 h-5 ml-1 bg-emerald-400 caret-blink" />
    </span>
  );
};
