import React from "react";
import { Lock, Hash, CheckCircle } from "lucide-react";
import Image from "next/image";

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 bg-[#020202] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
                        <Lock size={12} /> SECURE VAULT
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        VERIFIED <span className="text-emerald-500">CREDENTIALS</span>
                    </h2>
                    <p className="text-gray-500 max-w-lg text-center font-mono text-sm">
            // Accessing encrypted certification database...
                        <br />
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
                            border: "hover:border-red-500/50",
                        },
                        {
                            title: "VMware Certified Professional",
                            issuer: "VMware",
                            id: "VCP-DCV-2024",
                            date: "2024",
                            logo: "https://placehold.co/150x150/1a1a1a/0079D8?text=VMware+VCP",
                            color: "text-blue-500",
                            border: "hover:border-blue-500/50",
                        },
                        {
                            title: "AWS Solutions Architect",
                            issuer: "Amazon Web Services",
                            id: "AWS-SAA-C03",
                            date: "In Progress",
                            logo: "https://placehold.co/150x150/1a1a1a/FF9900?text=AWS+SAA",
                            color: "text-orange-500",
                            border: "hover:border-orange-500/50",
                        },
                        {
                            title: "CompTIA Security+",
                            issuer: "CompTIA",
                            id: "COMP-SEC-PLUS",
                            date: "2022",
                            logo: "https://placehold.co/150x150/1a1a1a/10b981?text=Security+",
                            color: "text-emerald-500",
                            border: "hover:border-emerald-500/50",
                        },
                    ].map((cert, index) => (
                        <div
                            key={index}
                            className={`group relative h-80 bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cert.border} flex flex-col`}
                        >
                            <div className="holo-sheen absolute inset-0 w-full h-full pointer-events-none"></div>
                            <div className="sparkles absolute inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-[200%] w-full -top-full opacity-0 group-hover:animate-scan pointer-events-none z-20"></div>
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="h-40 w-full flex items-center justify-center p-6 relative overflow-hidden bg-gray-900/50 border-b border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                                <Image
                                    src={cert.logo}
                                    alt={cert.title}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-10"
                                />
                            </div>

                            <div className="relative z-40 p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span
                                            className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 ${cert.color} backdrop-blur-md`}
                                        >
                                            {cert.issuer.toUpperCase()}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-mono">
                                            {cert.date}
                                        </span>
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
                                        <CheckCircle
                                            size={12}
                                            className="text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]"
                                        />
                                        <span className="text-[10px] text-emerald-400 font-bold drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]">
                                            VERIFIED
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
