'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

const Typewriter = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
  showCursor = false,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
      setIsTyping(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const typeTimeout = setTimeout(() => {
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
      }, speed);
      return () => clearTimeout(typeTimeout);
    }

    setIsTyping(false);
    return; // Explicitly return undefined for consistent return type
  }, [started, displayedText, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {(isTyping || showCursor) && (
        <span className="animate-cursor-blink text-emerald-500 font-bold ml-1">_</span>
      )}
    </span>
  );
};

export default Typewriter;
