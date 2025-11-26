import React from "react";
import {
    Github,
    Globe,
    Terminal,
    Code,
    Cloud,
    Lock,
    ShieldCheck,
    FolderGit2,
    Play,
    Server,
} from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                            PROJECT <span className="text-gray-600">LOGS</span>
                        </h2>
                        <p className="text-gray-500 font-mono text-sm max-w-xl border-l border-gray-700 pl-4">
              // A curated collection of Web Apps, Automation Scripts, and Home
                            Lab Infrastructure.
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
                                <span className="px-2 py-1 text-[10px] font-mono bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 rounded">
                                    NEXT.JS 16
                                </span>
                                <span className="px-2 py-1 text-[10px] font-mono bg-blue-900/30 text-blue-400 border border-blue-500/30 rounded">
                                    NESTJS
                                </span>
                                <span className="px-2 py-1 text-[10px] font-mono bg-orange-900/30 text-orange-400 border border-orange-500/30 rounded">
                                    GRAFANA
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                                Enterprise Monitoring Dashboard
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-2">
                                A centralized dashboard built with Next.js and NestJS to monitor
                                Server Health via Websockets. Integrated with Grafana for
                                real-time analytics.
                            </p>
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
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                Auto-Backup & Notify
                            </h3>
                            <div className="space-y-4 mt-4">
                                <p className="text-gray-500 text-xs font-mono bg-black/50 p-2 rounded border border-gray-800">
                                    #!/bin/bash
                                    <br />
                                    # Oracle DB Backup
                                    <br />
                                    expdp system/pass...
                                    <br />
                                    curl -X POST https://api.telegram.org/...
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Shell scripts for automated Oracle DB backups (RMAN/DataPump)
                                    with instant Telegram alerts on failure.
                                </p>
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
                            <h3 className="text-xl font-bold text-white mt-4">
                                Ultimate Home Lab
                            </h3>
                            <p className="text-xs text-gray-500 mt-2 font-mono leading-relaxed">
                                Running Proxmox VE with Kubernetes Cluster. Network segmentation
                                via VLANs on Mikrotik. TrueNAS for storage.
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
                                Implemented Open Source Security Platform for threat detection
                                and integrity monitoring on all servers.
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
                                Full DevOps pipeline. Auto-deploying applications to Kubernetes
                                and configuring servers via Ansible AWX.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded">
                                    TERRAFORM
                                </span>
                                <span className="text-[10px] font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded">
                                    DOCKER
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
