import React from 'react';
import { Server, Code } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 py-12 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* --- left profile --- */}
          <div className="w-full md:w-5/12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-full max-w-sm mx-auto aspect-square bg-[#0a0a0a] rounded-2xl overflow-hidden border border-emerald-500/20 glass-panel flex flex-col justify-end group-hover:scale-[1.02] transition-transform duration-500">
              {/* Full Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              >
                <source src="/my-profile.mp4" type="video/mp4" />
              </video>

              {/* Gradient Overlay - Adjusted to be clearer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="text-center mb-1">
                  <h3 className="text-xl md:text-3xl font-bold text-white font-mono tracking-tighter drop-shadow-lg">
                    SOMKID SODSAI
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></span>
                    <p className="text-emerald-400 font-mono text-xs md:text-sm font-bold drop-shadow-md">
                      System Administrator
                    </p>
                  </div>
                </div>

                <div className="flex border-t border-white/10 bg-black/40 backdrop-blur-md">
                  <div className="flex-1 py-2 md:py-3 text-center border-r border-white/10">
                    <div className="text-sm md:text-xl font-bold text-white">1+</div>
                    <div className="text-[9px] md:text-[10px] uppercase text-gray-400 tracking-wider">
                      Year Exp
                    </div>
                  </div>
                  <div className="flex-1 py-2 md:py-3 text-center">
                    <div className="text-sm md:text-xl font-bold text-white">100%</div>
                    <div className="text-[9px] md:text-[10px] uppercase text-gray-400 tracking-wider">
                      Passion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- right profile --- */}
          <div className="w-full md:w-7/12 space-y-4 md:space-y-6">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-emerald-500 font-mono text-xs md:text-base block mb-1">
                &lt;WhoAmI /&gt;
              </span>
              SMALL <span className="text-lime-400">EXPERIENCE</span> <br />
              BIG <span className="text-teal-400">AMBITION</span>
            </h2>

            <div className="space-y-3 text-gray-400 text-xs md:text-sm leading-relaxed font-light">
              <p>
                I&apos;m a{' '}
                <span className="text-white font-medium">Junior System Administrator</span> who
                learns best by getting my hands dirty. With{' '}
                <span className="text-white font-medium">1 year of hands-on experience</span>,
                I&apos;ve worked across servers, infrastructure, and application development.
              </p>
              <p>
                I stay curious, keep pushing myself, and refine my skills by tackling different
                challenges along the way.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border border-emerald-500/20 rounded bg-emerald-500/5">
                <h4 className="font-mono text-emerald-400 mb-1 flex items-center gap-2 text-sm">
                  <Server size={14} /> <span className="hidden md:inline">Core Infrastructure</span>
                </h4>
                <p className="text-[10px] text-gray-500">Linux, VMware, Networking, Cloud Basics</p>
              </div>
              <div className="p-3 border border-lime-500/20 rounded bg-lime-500/5">
                <h4 className="font-mono text-lime-400 mb-1 flex items-center gap-2 text-sm">
                  <Code size={14} />{' '}
                  <span className="hidden md:inline">Automation & Operations</span>
                </h4>
                <p className="text-[10px] text-gray-500">Docker, CI/CD, Scripting, Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
