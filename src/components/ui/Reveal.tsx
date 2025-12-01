'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Reveal = ({ children, width = '100%', delay = 0, direction = 'up' }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before bottom
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(75px)';
      case 'down':
        return 'translateY(-75px)';
      case 'left':
        return 'translateX(75px)';
      case 'right':
        return 'translateX(-75px)';
      default:
        return 'translateY(75px)';
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <div
        style={{
          transform: isVisible ? 'translate(0, 0)' : getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
