'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/siteConfig';
import { Home, User, Layers, Briefcase, Award, Cpu, Mail, Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define primary links (always visible) and secondary links (in menu)
  const primaryLinks = navLinks.slice(0, 4); // Home, About, Projects, Career
  const secondaryLinks = navLinks.slice(4); // Certificates, Skills, Contact

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        const sections = navLinks
          .filter((link) => link.href.startsWith('/#'))
          .map((link) => link.href.substring(2));

        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= -300 && rect.top <= 300;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home':
        return <Home size={18} />;
      case 'About':
        return <User size={18} />;
      case 'Projects':
        return <Layers size={18} />;
      case 'Career':
        return <Briefcase size={18} />;
      case 'Certificates':
        return <Award size={18} />;
      case 'Skills':
        return <Cpu size={18} />;
      case 'Contact':
        return <Mail size={18} />;
      default:
        return <Home size={18} />;
    }
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
        <div className="glass-panel border-t border-white/10 bg-black/90 backdrop-blur-xl pb-safe">
          <div className="flex justify-around items-center px-2 py-2">
            {primaryLinks.map((item) => {
              const isHashLink = item.href.startsWith('/#');
              const sectionId = isHashLink ? item.href.substring(2) : item.href.substring(1);
              const isActive = isHashLink ? activeSection === sectionId : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${
                    isActive ? 'text-emerald-400' : 'text-gray-500 hover:text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className={`p-1.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                        : 'bg-transparent'
                    }`}
                  >
                    {getIcon(item.label)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wide">{item.label}</span>
                </Link>
              );
            })}

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${
                isMenuOpen ? 'text-emerald-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all duration-300 ${
                  isMenuOpen
                    ? 'bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                    : 'bg-transparent'
                }`}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </div>
              <span className="text-[10px] font-mono tracking-wide">More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-up Menu for Secondary Links */}
      <div
        className={`fixed inset-x-0 bottom-[80px] z-40 md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-4 mb-4 glass-panel bg-black/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 grid grid-cols-3 gap-4">
            {secondaryLinks.map((item) => {
              const isHashLink = item.href.startsWith('/#');
              const sectionId = isHashLink ? item.href.substring(2) : item.href.substring(1);
              const isActive = isHashLink ? activeSection === sectionId : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getIcon(item.label)}
                  <span className="text-[8px] font-mono">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Backdrop to close menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm"
            style={{ top: 0, bottom: '80px' }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default MobileNav;
