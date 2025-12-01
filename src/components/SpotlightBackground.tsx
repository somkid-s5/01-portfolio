'use client';

import React, { useState, useEffect } from 'react';

export default function SpotlightBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
  };

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
        style={spotlightStyle}
      ></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 matrix-bg pointer-events-none"></div>
      </div>
    </>
  );
}
