import React from 'react';
import { Terminal, Calendar, GraduationCap } from 'lucide-react';

const Career = () => {
  return (
    <section id="career" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
            <Terminal size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              SYSTEM <span className="text-emerald-500">LOGS</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm">
              root@smart:~/career_history# log --graph
            </p>
          </div>
        </div>

        <div className="space-y-12 relative border-l-2 border-gray-800 ml-6 pl-12">
          {/* Timeline Item 1: Work */}
          <div className="relative group">
            <div className="absolute -left-[57px] top-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#050505] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <div className="glass-panel p-8 rounded-xl border-l-4 border-l-emerald-500 transition-all hover:bg-white/5">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    System Administrator{' '}
                    <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      CURRENT
                    </span>
                  </h3>
                  <p className="text-emerald-400 font-mono text-sm mt-1">Yip In Tsoi Co., Ltd.</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mt-2 md:mt-0">
                  <Calendar size={14} /> 2024 - Present
                </div>
              </div>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">-</span>
                  Managed large-scale infrastructure combining Physical Servers (HPE, Lenovo, DELL,
                  Veritas, Oracle SPARC) and Virtualization (VMware vCenter, Oracle LDOM).
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">-</span>
                  Execute backup & restore processes for VMware using Veritas NetBackup.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">-</span>
                  Troubleshoot client system issues as assigned.
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 2: Education */}
          <div className="relative group">
            <div className="absolute -left-[57px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#050505] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <div className="glass-panel p-8 rounded-xl border-l-4 border-l-blue-500 transition-all hover:bg-white/5">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    B.Sc. Information and Communication Technology
                  </h3>
                  <p className="text-blue-400 font-mono text-sm mt-1">
                    Ubon Ratchathani University
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mt-2 md:mt-0">
                  <GraduationCap size={14} /> 2020 - 2024
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Major Network Technology and Cyber Security.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                  Network
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                  System
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
