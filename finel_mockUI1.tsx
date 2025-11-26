import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Server, Database, Code, Terminal, Cpu, Globe, ExternalLink, ChevronDown, Monitor, Cloud, Lock, ShieldCheck, Activity, Award, CheckCircle, Calendar, Hash, Briefcase, GraduationCap, FolderGit2, Play } from 'lucide-react';

// --- Helper Component: Typewriter Effect ---
const Typewriter = ({ text, delay = 0, speed = 80, className, showCursor = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false); // พิมพ์เสร็จแล้ว
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {(isTyping || showCursor) && started && (
        <span className="animate-pulse text-emerald-500 font-bold ml-1">_</span>
      )}
    </span>
  );
};

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll & Mouse Move
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'career', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden relative">
      
      {/* --- Global Styles --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes scanline {
          0% { top: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 200%; opacity: 0; }
        }
        @keyframes holoPan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .holo-sheen {
          background: linear-gradient(115deg, transparent 0%, rgba(255, 0, 0, 0.3) 15%, rgba(255, 154, 0, 0.3) 25%, rgba(208, 222, 33, 0.3) 35%, rgba(79, 220, 74, 0.3) 45%, rgba(63, 218, 216, 0.3) 55%, rgba(47, 201, 226, 0.3) 65%, rgba(28, 127, 238, 0.3) 75%, rgba(95, 21, 242, 0.3) 85%, transparent 100%);
          background-size: 300% 300%;
          mix-blend-mode: color-dodge;
          opacity: 0;
          transition: opacity 0.4s ease, background-position 0.1s;
          pointer-events: none;
          z-index: 30;
        }
        .sparkles {
           background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L52.5 45L97.5 47.5L52.5 50L50 95L47.5 50L2.5 47.5L47.5 45L50 0Z' fill='white' fill-opacity='0.3'/%3E%3C/svg%3E");
           background-size: 50px 50px;
           mix-blend-mode: overlay;
           opacity: 0;
        }
        .group:hover .holo-sheen { opacity: 1; animation: holoPan 3s linear infinite; }
        .group:hover .sparkles { opacity: 1; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-scan { animation: scanline 2s linear infinite; }
        .glass-panel {
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .glass-panel:hover { border-color: rgba(16, 185, 129, 0.3); }
        .text-glow { text-shadow: 0 0 30px rgba(16, 185, 129, 0.4); }
        .matrix-bg {
           background-image: linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, .03) 25%, rgba(16, 185, 129, .03) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .03) 75%, rgba(16, 185, 129, .03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, .03) 25%, rgba(16, 185, 129, .03) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .03) 75%, rgba(16, 185, 129, .03) 76%, transparent 77%, transparent);
           background-size: 50px 50px;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #10b981; }
      `}</style>

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300" style={spotlightStyle}></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 matrix-bg pointer-events-none"></div>
      </div>

      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 glass-panel border-b-0 bg-black/50' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer">
            <span className="text-emerald-500 font-mono group-hover:animate-pulse">_</span>
            SMART
            <span className="text-lime-400">.SYS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Career', 'Certificates', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm uppercase tracking-widest font-mono hover:text-emerald-400 transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-500'}`}
              >
                <span className="text-emerald-500/50 mr-1">&gt;</span>{item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SYSTEM ONLINE: READY FOR DEPLOYMENT
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter min-h-[300px] md:min-h-0">
              <Typewriter text="ARCHITECTING" delay={200} speed={80} /> <br />
              <Typewriter 
                text="RESILIENT" 
                delay={1400} 
                speed={80} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 text-glow"
              /> <br />
              <Typewriter text="SYSTEMS" delay={2400} speed={80} showCursor={true} />
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-emerald-500/20 pl-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-3000 fill-mode-both" style={{animationDelay: '3.5s'}}>
              Bridging the gap between <span className="text-emerald-400 font-mono">Bare Metal</span> and <span className="text-lime-400 font-mono">Cloud Native</span>. 
              Transforming complex infrastructure into automated efficiency.
            </p>
            <div className="flex gap-4 pt-4 animate-in fade-in zoom-in duration-1000 delay-4000 fill-mode-both" style={{animationDelay: '4s'}}>
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center gap-2 group">
                <Terminal size={18} className="group-hover:rotate-12 transition-transform" /> 
                View Projects
              </button>
              <button className="px-8 py-4 glass-panel hover:bg-white/5 text-white font-bold rounded-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-lime-400">
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-emerald-900/50 to-black rounded-xl rotate-12 border border-emerald-500/20 backdrop-blur-sm animate-float">
                <div className="w-full h-full opacity-20 bg-[linear-gradient(0deg,transparent_24%,#10b981_25%,#10b981_26%,transparent_27%,transparent_74%,#10b981_75%,#10b981_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,#10b981_25%,#10b981_26%,transparent_27%,transparent_74%,#10b981_75%,#10b981_76%,transparent_77%,transparent)] bg-[size:20px_20px]"></div>
             </div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-40 glass-panel rounded-lg z-20 flex flex-col p-4 animate-float animation-delay-2000 -rotate-6 border-l-4 border-l-lime-500">
                <div className="flex gap-2 mb-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-emerald-400 space-y-1">
                   <p>$ systemctl status k8s</p>
                   <p className="text-white">● active (running)</p>
                   <p className="text-gray-500">Loaded: loaded...</p>
                </div>
             </div>
             <div className="absolute top-20 right-10 p-4 glass-panel rounded-xl animate-bounce duration-[3000ms] border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Server className="text-emerald-400 w-8 h-8" />
             </div>
             <div className="absolute bottom-20 left-10 p-4 glass-panel rounded-xl animate-bounce duration-[4000ms] border border-lime-500/30">
                <Activity className="text-lime-400 w-8 h-8" />
             </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-full aspect-square bg-[#0a0a0a] rounded-2xl overflow-hidden border border-emerald-500/20 glass-panel flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mb-6 border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                     <span className="text-5xl">👨‍💻</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white font-mono tracking-tighter">SMART</h3>
                  <div className="flex items-center gap-2 mt-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                     <p className="text-emerald-400 font-mono text-sm">System Administrator</p>
                  </div>
                  <div className="absolute bottom-0 w-full flex border-t border-white/5 bg-black/40 backdrop-blur-sm">
                     <div className="flex-1 py-4 text-center border-r border-white/5">
                        <div className="text-xl font-bold text-white">5+</div>
                        <div className="text-[10px] uppercase text-gray-500 tracking-wider">Years Exp</div>
                     </div>
                     <div className="flex-1 py-4 text-center">
                        <div className="text-xl font-bold text-white">100%</div>
                        <div className="text-[10px] uppercase text-gray-500 tracking-wider">Uptime Goal</div>
                     </div>
                  </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-emerald-500 font-mono text-lg block mb-2">&lt;WhoAmI /&gt;</span>
                BRIDGING <span className="text-lime-400">OPS</span> <br />
                AND <span className="text-teal-400">DEVELOPMENT</span>
              </h2>
              
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-light">
                 <p>
                    I operate at the intersection of hardware and code. With a background deep in <span className="text-white font-medium">Server Infrastructure, VMWare, and Oracle DBs</span>, I understand the weight of "Production."
                 </p>
                 <p>
                    Now, I'm channeling that discipline into <span className="text-white font-medium">Full Stack Development</span>. I don't just write code; I design systems that are scalable, secure, and maintainable from day one.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 border border-emerald-500/20 rounded bg-emerald-500/5">
                    <h4 className="font-mono text-emerald-400 mb-1 flex items-center gap-2"><Server size={16}/> Backend Core</h4>
                    <p className="text-xs text-gray-500">NestJS, PostgreSQL, Redis</p>
                 </div>
                 <div className="p-4 border border-lime-500/20 rounded bg-lime-500/5">
                    <h4 className="font-mono text-lime-400 mb-1 flex items-center gap-2"><Code size={16}/> Frontend Modern</h4>
                    <p className="text-xs text-gray-500">Next.js 15, React, Tailwind</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects & Deployments Section (Renamed from Work) --- */}
      <section id="projects" className="py-32 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                PROJECT <span className="text-gray-600">LOGS</span>
              </h2>
              <p className="text-gray-500 font-mono text-sm max-w-xl border-l border-gray-700 pl-4">
                // A curated collection of Web Apps, Automation Scripts, and Home Lab Infrastructure.
              </p>
            </div>
            <div className="hidden md:block">
              <button className="text-emerald-500 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm">
                [ View_GitHub_Repo ] <Github size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            
            {/* Project 1: Web Development (Main) */}
            <div className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
              {/* Fake Dashboard UI */}
              <div className="absolute inset-0 p-8 opacity-40 group-hover:opacity-20 transition-opacity">
                 <div className="w-full h-full border border-gray-800 bg-gray-900/50 rounded grid grid-cols-3 gap-4 p-4">
                    <div className="col-span-2 bg-gray-800/50 rounded h-32 animate-pulse"></div>
                    <div className="bg-emerald-900/20 rounded h-32"></div>
                    <div className="col-span-3 bg-gray-800/50 rounded h-full"></div>
                 </div>
              </div>
              <div className="absolute top-6 right-6 z-20">
                 <span className="px-3 py-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded flex items-center gap-1">
                    <Globe size={12} /> WEB APP
                 </span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 text-[10px] font-mono bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 rounded">NEXT.JS 15</span>
                  <span className="px-2 py-1 text-[10px] font-mono bg-blue-900/30 text-blue-400 border border-blue-500/30 rounded">NESTJS</span>
                  <span className="px-2 py-1 text-[10px] font-mono bg-orange-900/30 text-orange-400 border border-orange-500/30 rounded">GRAFANA</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">Enterprise Monitoring Dashboard</h3>
                <p className="text-gray-400 text-sm line-clamp-2">A centralized dashboard built with Next.js and NestJS to monitor Server Health via Websockets. Integrated with Grafana for real-time analytics.</p>
              </div>
            </div>

            {/* Project 2: Automation Script */}
            <div className="col-span-1 md:col-span-1 row-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-lime-500/50 transition-all duration-500 flex flex-col justify-between p-8">
               <div className="absolute top-0 right-0 p-32 bg-lime-500/5 blur-3xl rounded-full pointer-events-none"></div>
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded bg-lime-500/10 flex items-center justify-center text-lime-400 mb-6 border border-lime-500/20">
                     <Terminal size={24} />
                  </div>
                  <span className="px-2 py-1 text-[10px] font-bold bg-lime-500/20 text-lime-400 border border-lime-500/30 rounded flex items-center gap-1">
                    <Code size={12} /> SCRIPT
                 </span>
               </div>
               
               <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Auto-Backup & Notify</h3>
                  <div className="space-y-4 mt-4">
                     <p className="text-gray-500 text-xs font-mono bg-black/50 p-2 rounded border border-gray-800">
                        #!/bin/bash<br/>
                        # Oracle DB Backup<br/>
                        expdp system/pass...<br/>
                        curl -X POST https://api.telegram.org/...
                     </p>
                     <p className="text-gray-400 text-sm">Shell scripts for automated Oracle DB backups (RMAN/DataPump) with instant Telegram alerts on failure.</p>
                  </div>
               </div>
            </div>

            {/* Project 3: Infrastructure / Home Lab */}
            <div className="col-span-1 md:col-span-1 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-teal-500/50 transition-all duration-500 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <Server size={32} className="text-teal-500 opacity-80" />
                 <span className="px-2 py-1 text-[10px] font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded flex items-center gap-1">
                    <Cloud size={12} /> INFRA
                 </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mt-4">Ultimate Home Lab</h3>
                <p className="text-xs text-gray-500 mt-2 font-mono leading-relaxed">
                   Running Proxmox VE with Kubernetes Cluster. Network segmentation via VLANs on Mikrotik. TrueNAS for storage.
                </p>
              </div>
            </div>

            {/* Project 4: Security */}
            <div className="col-span-1 md:col-span-1 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/50 transition-all duration-500 p-6 flex flex-col justify-between">
               <div className="flex justify-between items-start">
                 <ShieldCheck size={32} className="text-red-500 opacity-80" />
                 <span className="px-2 py-1 text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 rounded flex items-center gap-1">
                    <Lock size={12} /> SEC
                 </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mt-4">Wazuh SIEM</h3>
                <p className="text-xs text-gray-500 mt-2 font-mono leading-relaxed">
                   Implemented Open Source Security Platform for threat detection and integrity monitoring on all servers.
                </p>
              </div>
            </div>
            
            {/* Project 5: DevOps / IaC */}
            <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 p-8 flex items-center gap-8">
               <div className="h-24 w-24 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shrink-0">
                  <FolderGit2 className="text-emerald-400 w-10 h-10" />
               </div>
               <div>
                  <div className="flex items-center gap-2 mb-2">
                     <span className="px-2 py-1 text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded flex items-center gap-1">
                        <Play size={10} /> CI/CD
                     </span>
                     <h3 className="text-2xl font-bold">GitLab CI + Ansible</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                     Full DevOps pipeline. Auto-deploying applications to Kubernetes and configuring servers via Ansible AWX.
                  </p>
                  <div className="flex gap-2">
                     <span className="text-[10px] font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded">TERRAFORM</span>
                     <span className="text-[10px] font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded">DOCKER</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-32 relative overflow-hidden bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-2">TECHNICAL <span className="text-emerald-500">ARSENAL</span></h2>
             <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-1 rounded-xl bg-gray-900/50 border border-gray-800">
               <div className="bg-gray-900 px-4 py-2 rounded-t-lg border-b border-gray-800 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="ml-4 text-xs text-gray-500 font-mono">root@smart-server:~/skills/infrastructure</span>
               </div>
               <div className="p-8 space-y-6">
                {[
                  { name: 'Linux (Oracle/Ubuntu/Rocky)', level: '95%' },
                  { name: 'VMWare vSphere/vCenter', level: '90%' },
                  { name: 'Oracle Database (RMAN/DataPump)', level: '85%' },
                  { name: 'Networking (VLAN/Switching)', level: '80%' },
                  { name: 'Docker & Kubernetes', level: '70%' },
                ].map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1 text-sm font-mono text-gray-300">
                      <span>{skill.name}</span>
                      <span className="text-emerald-500">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-none overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-1000 group-hover:bg-emerald-400"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
               </div>
            </div>

            <div className="glass-panel p-1 rounded-xl bg-gray-900/50 border border-gray-800">
               <div className="bg-gray-900 px-4 py-2 rounded-t-lg border-b border-gray-800 flex justify-between items-center">
                  <span className="text-xs text-blue-400 font-mono">src/skills/FullStack.tsx</span>
                  <div className="flex gap-1">
                     <span className="w-16 h-2 bg-gray-800 rounded-full"></span>
                  </div>
               </div>
               <div className="p-8 space-y-6">
                {[
                  { name: 'HTML / CSS / Tailwind', level: '85%' },
                  { name: 'JavaScript / TypeScript', level: '75%' },
                  { name: 'React / Next.js', level: '70%' },
                  { name: 'Node.js / NestJS', level: '60%' },
                  { name: 'SQL / PostgreSQL', level: '65%' },
                ].map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1 text-sm font-mono text-gray-300">
                      <span>{skill.name}</span>
                      <span className="text-lime-400">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-none overflow-hidden">
                      <div 
                        className="h-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)] transition-all duration-1000 group-hover:bg-lime-400"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Career & Education Section --- */}
      <section id="career" className="py-32 relative">
         <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
               <div className="w-12 h-12 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Terminal size={24} />
               </div>
               <div>
                  <h2 className="text-3xl font-bold text-white">SYSTEM <span className="text-emerald-500">LOGS</span></h2>
                  <p className="text-gray-500 font-mono text-sm">root@smart:~/career_history# log --graph</p>
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
                              System Administrator <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">CURRENT</span>
                           </h3>
                           <p className="text-emerald-400 font-mono text-sm mt-1">Government Agency</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mt-2 md:mt-0">
                           <Calendar size={14} /> 2020 - Present
                        </div>
                     </div>
                     <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex gap-3">
                           <span className="text-emerald-500 mt-1">▹</span>
                           Managed large-scale infrastructure combining Physical Servers (Fujitsu, HP) and Virtualization (VMware vCenter, Oracle LDOM).
                        </li>
                        <li className="flex gap-3">
                           <span className="text-emerald-500 mt-1">▹</span>
                           Automated backup & restore processes for Oracle Databases using RMAN/DataPump and Shell Scripts with Telegram alerts.
                        </li>
                        <li className="flex gap-3">
                           <span className="text-emerald-500 mt-1">▹</span>
                           Implemented Centralized Monitoring using Wazuh, Prometheus, and Grafana to ensure 99.9% system uptime.
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
                              B.Sc. Information Technology
                           </h3>
                           <p className="text-blue-400 font-mono text-sm mt-1">Prestigious University</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mt-2 md:mt-0">
                           <GraduationCap size={14} /> 2016 - 2020
                        </div>
                     </div>
                     <p className="text-gray-400 text-sm mb-4">
                        Major in Network Security and Systems Administration.
                     </p>
                     <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">Network Security</span>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">Database Mgmt</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Certificates Section --- */}
      <section id="certificates" className="py-32 bg-[#020202] relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
                  <Lock size={12} /> SECURE VAULT
               </div>
               <h2 className="text-4xl font-bold mb-4 text-white">VERIFIED <span className="text-emerald-500">CREDENTIALS</span></h2>
               <p className="text-gray-500 max-w-lg text-center font-mono text-sm">
                  // Accessing encrypted certification database...<br/>
                  // Hover to view Holographic Verification Badge.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { 
                     title: "Oracle Certified Professional", 
                     issuer: "Oracle", 
                     id: "OCP-2023-88X", 
                     date: "2023", 
                     logo: "https://placehold.co/150x150/1a1a1a/F80000?text=Oracle+OCP",
                     color: "text-red-500", 
                     border: "hover:border-red-500/50" 
                  },
                  { 
                     title: "VMware Certified Professional", 
                     issuer: "VMware", 
                     id: "VCP-DCV-2024", 
                     date: "2024", 
                     logo: "https://placehold.co/150x150/1a1a1a/0079D8?text=VMware+VCP",
                     color: "text-blue-500", 
                     border: "hover:border-blue-500/50" 
                  },
                  { 
                     title: "AWS Solutions Architect", 
                     issuer: "Amazon Web Services", 
                     id: "AWS-SAA-C03", 
                     date: "In Progress", 
                     logo: "https://placehold.co/150x150/1a1a1a/FF9900?text=AWS+SAA",
                     color: "text-orange-500", 
                     border: "hover:border-orange-500/50" 
                  },
                  { 
                     title: "CompTIA Security+", 
                     issuer: "CompTIA", 
                     id: "COMP-SEC-PLUS", 
                     date: "2022", 
                     logo: "https://placehold.co/150x150/1a1a1a/10b981?text=Security+",
                     color: "text-emerald-500", 
                     border: "hover:border-emerald-500/50" 
                  },
               ].map((cert, index) => (
                  <div key={index} className={`group relative h-80 bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cert.border} flex flex-col`}>
                     <div className="holo-sheen absolute inset-0 w-full h-full pointer-events-none"></div>
                     <div className="sparkles absolute inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-300"></div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-[200%] w-full -top-full opacity-0 group-hover:animate-scan pointer-events-none z-20"></div>
                     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                     
                     <div className="h-40 w-full flex items-center justify-center p-6 relative overflow-hidden bg-gray-900/50 border-b border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <img 
                           src={cert.logo} 
                           alt={cert.title} 
                           className="w-24 h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-10"
                        />
                     </div>
                     
                     <div className="relative z-40 p-6 flex-1 flex flex-col justify-between">
                        <div>
                           <div className="flex justify-between items-center mb-2">
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 ${cert.color} backdrop-blur-md`}>
                                 {cert.issuer.toUpperCase()}
                              </span>
                              <span className="text-[10px] text-gray-500 font-mono">{cert.date}</span>
                           </div>
                           <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors leading-tight drop-shadow-md">
                              {cert.title}
                           </h3>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-800 flex justify-between items-center mt-auto">
                           <div className="flex items-center gap-1 text-[10px] text-gray-600 font-mono group-hover:text-white/80 transition-colors">
                              <Hash size={10} /> {cert.id}
                           </div>
                           <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <CheckCircle size={12} className="text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
                              <span className="text-[10px] text-emerald-400 font-bold drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]">VERIFIED</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-32 bg-[#050505] relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-white">INITIALIZE <span className="text-emerald-500">CONNECTION</span></h2>
          <p className="text-gray-400 mb-12 text-lg">
            Ready to deploy your next project? Let's discuss architecture and implementation.
          </p>

          <form className="max-w-lg mx-auto space-y-6 text-left">
            <div className="relative group">
               <label className="text-xs font-mono text-emerald-500 mb-1 block ml-1">&lt;Input name="Name" /&gt;</label>
               <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm" />
            </div>
            <div className="relative group">
               <label className="text-xs font-mono text-emerald-500 mb-1 block ml-1">&lt;Input name="Email" /&gt;</label>
               <input type="email" className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm" />
            </div>
            <div className="relative group">
               <label className="text-xs font-mono text-emerald-500 mb-1 block ml-1">&lt;Textarea name="Message" /&gt;</label>
               <textarea rows="4" className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2">
               TRANSMIT MESSAGE <Mail size={18} />
            </button>
          </form>

          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="p-4 rounded-full bg-gray-900 border border-gray-800 hover:border-emerald-500 hover:text-emerald-400 transition-all hover:-translate-y-2"><Github size={24} /></a>
            <a href="#" className="p-4 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 hover:text-blue-400 transition-all hover:-translate-y-2"><Linkedin size={24} /></a>
            <a href="#" className="p-4 rounded-full bg-gray-900 border border-gray-800 hover:border-lime-500 hover:text-lime-400 transition-all hover:-translate-y-2"><Globe size={24} /></a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 border-t border-gray-900 text-center text-gray-600 text-xs font-mono bg-[#020202]">
        <p>SYSTEM STATUS: NORMAL | &copy; 2025 SMART.DEV | POWERED BY NEXT.JS</p>
      </footer>

    </div>
  );
};

export default App;