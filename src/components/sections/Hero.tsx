'use client';

import React from 'react';
import Typewriter from '../Typewriter';
import { Terminal, Server, Activity, ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-0 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-200 opacity-75 animate-ping"></span>
              <span className="rounded-full bg-emerald-300 animate-pulse w-2 h-2"></span>
            </span>
            SYSTEM ONLINE: READY FOR DEPLOYMENT
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-none tracking-tighter flex flex-col gap-1 md:gap-2">
            <Typewriter text="EXPLORING" delay={200} speed={80} />
            <Typewriter
              text="LIMITLESS"
              delay={1400}
              speed={80}
              className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-lime-400 text-glow"
            />
            <Typewriter text="POTENTIAL" delay={2400} speed={30} showCursor={true} />
          </h1>

          <p
            className="text-gray-400 text-sm sm:text-base md:text-xl mt-4 max-w-lg leading-relaxed border-l-2 border-emerald-500/20 pl-4 md:pl-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-3000 fill-mode-both"
            style={{ animationDelay: '3.5s' }}
          >
            Fueled by curiosity, powered by grit. A{' '}
            <span className="text-emerald-400 font-mono">Junior</span> on a relentless journey to
            master the craft. I might not know everything yet, but I learn fast and work hard.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 animate-in fade-in zoom-in duration-1000 delay-4000 fill-mode-both"
            style={{ animationDelay: '4s' }}
          >
            <a
              href="#projects"
              className="px-5 py-3 md:px-8 md:py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-sm md:text-base rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group"
            >
              <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 md:px-8 md:py-4 glass-panel hover:bg-white/5 text-white font-bold rounded-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-lime-400 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-tr from-emerald-900/50 to-black rounded-xl rotate-12 border border-emerald-500/20 backdrop-blur-sm animate-float">
            <div className="w-full h-full opacity-20 bg-[linear-gradient(0deg,transparent_24%,#10b981_25%,#10b981_26%,transparent_27%,transparent_74%,#10b981_75%,#10b981_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,#10b981_25%,#10b981_26%,transparent_27%,transparent_74%,#10b981_75%,#10b981_76%,transparent_77%,transparent)] bg-size-[20px_20px]"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 glass-panel rounded-lg z-20 flex flex-col p-4 animate-float animation-delay-2000 -rotate-6 border-l-4 border-l-lime-500">
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-xs text-emerald-400 space-y-1">
              <p>$ systemctl status smart</p>
              <p className="text-white">● active (running)</p>
              <p className="text-gray-500">Loaded: loaded...</p>
            </div>
          </div>
          <div className="absolute top-20 right-10 p-4 glass-panel rounded-xl animate-bounce duration-3000 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Server className="text-emerald-400 w-8 h-8" />
          </div>
          <div className="absolute bottom-20 left-10 p-4 glass-panel rounded-xl animate-bounce duration-4000 border border-lime-500/30">
            <Activity className="text-lime-400 w-8 h-8" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-emerald-500 transition-colors cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
