"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cert } from "@/types/certificate";
import { Lock, Hash, CheckCircle, Clock, AlertCircle, Search, Filter, X } from "lucide-react";
import Image from "next/image";

interface CertificatesClientProps {
    initialCertificates: Cert[];
}

export default function CertificatesClient({ initialCertificates }: CertificatesClientProps) {
    const [certificates, setCertificates] = useState<Cert[]>(initialCertificates);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const spotlightStyle = {
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
    };

    const filteredCertificates = certificates.filter((cert) => {
        const matchesFilter = filter === "all" || cert.status === filter;
        const certName = cert.name || "";
        const certVendor = cert.vendor || "";
        const matchesSearch = certName.toLowerCase().includes(search.toLowerCase()) ||
            certVendor.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'passed': return <CheckCircle size={12} className="text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" />;
            case 'in_progress': return <Clock size={12} className="text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" />;
            default: return <AlertCircle size={12} className="text-gray-400" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'passed': return "VERIFIED";
            case 'in_progress': return "IN PROGRESS";
            default: return status.toUpperCase();
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'passed': return "text-emerald-400";
            case 'in_progress': return "text-amber-400";
            default: return "text-gray-400";
        }
    };

    const getBorderColor = (vendor: string) => {
        const v = vendor.toLowerCase();
        if (v.includes('oracle')) return "hover:border-red-500/50";
        if (v.includes('vmware')) return "hover:border-blue-500/50";
        if (v.includes('aws') || v.includes('amazon')) return "hover:border-orange-500/50";
        if (v.includes('comptia') || v.includes('isc2')) return "hover:border-emerald-500/50";
        return "hover:border-emerald-500/50";
    };

    const getVendorColor = (vendor: string) => {
        const v = vendor.toLowerCase();
        if (v.includes('oracle')) return "text-red-500";
        if (v.includes('vmware')) return "text-blue-500";
        if (v.includes('aws') || v.includes('amazon')) return "text-orange-500";
        if (v.includes('comptia') || v.includes('isc2')) return "text-emerald-500";
        return "text-emerald-500";
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden relative">
            {/* --- Background Effects --- */}
            <div
                className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
                style={spotlightStyle}
            ></div>
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
                <div className="absolute inset-0 matrix-bg pointer-events-none"></div>
            </div>

            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
                <div className="flex flex-col items-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
                        <Lock size={12} /> SECURE VAULT
                    </div>
                    <h1 className="text-5xl font-bold mb-6 text-white text-center">
                        CERTIFICATION <span className="text-emerald-500">DATABASE</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-center text-lg mb-12">
                        Comprehensive record of verified credentials, licenses, and ongoing professional development tracks.
                    </p>

                    {/* Search and Filter */}
                    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 mb-12">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-500 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search credentials..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            {['all', 'passed', 'in_progress'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-6 py-4 rounded-lg border font-mono text-sm whitespace-nowrap transition-all ${filter === f
                                        ? "bg-emerald-900/20 border-emerald-500 text-emerald-400"
                                        : "bg-[#0a0a0a] border-gray-800 text-gray-400 hover:border-gray-600"
                                        }`}
                                >
                                    {f === 'all' ? 'ALL RECORDS' : f.toUpperCase().replace('_', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {filteredCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className={`group relative h-72 w-full sm:w-60 bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${getBorderColor(cert.vendor)} flex flex-col cursor-pointer`}
                        >
                            <div className="holo-sheen absolute inset-0 w-full h-full pointer-events-none"></div>
                            <div className="sparkles absolute inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-[200%] w-full -top-full opacity-0 group-hover:animate-scan pointer-events-none z-20"></div>
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="h-40 w-full flex items-center justify-center p-4 relative bg-gray-900/50 border-b border-white/5">
                                <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-inner">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                                    {cert.badge_image_url ? (
                                        <Image
                                            src={cert.badge_image_url}
                                            alt={cert.name}
                                            fill
                                            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-4xl font-bold text-gray-500">
                                            {cert.vendor.substring(0, 1)}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative z-40 p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span
                                            className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 ${getVendorColor(cert.vendor)} backdrop-blur-md`}
                                        >
                                            {cert.vendor.toUpperCase()}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-mono">
                                            {cert.issue_date ? new Date(cert.issue_date).getFullYear() : 'N/A'}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors leading-tight drop-shadow-md line-clamp-2">
                                        {cert.name}
                                    </h3>
                                </div>

                                <div className="pt-4 border-t border-gray-800 flex justify-between items-center mt-auto">
                                    <div className="flex items-center gap-1 text-[10px] text-gray-600 font-mono group-hover:text-white/80 transition-colors">
                                        <Hash size={10} /> {cert.id.substring(0, 8)}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {getStatusIcon(cert.status)}
                                        <span className={`text-[10px] ${getStatusColor(cert.status)} font-bold drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]`}>
                                            {getStatusText(cert.status)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCertificates.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
                        <p className="text-gray-500 text-lg">No certificates found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSearch("");
                                setFilter("all");
                            }}
                            className="mt-4 text-emerald-500 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </main>

            {/* Image Popup Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
                    <button
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center pointer-events-none" onClick={(e) => e.stopPropagation()}>
                        {selectedCert.badge_image_url ? (
                            <div className="relative w-full h-full pointer-events-auto">
                                <Image
                                    src={selectedCert.badge_image_url}
                                    alt={selectedCert.name}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                        ) : (
                            <div className="text-9xl font-bold text-gray-800">{selectedCert.vendor.substring(0, 1)}</div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
