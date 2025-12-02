'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Footer from '@/components/Footer';
import { Cert } from '@/types/certificate';
import { Lock, Hash, CheckCircle, Clock, AlertCircle, Search, Filter, X } from 'lucide-react';
import Image from 'next/image';

interface CertificatesClientProps {
  initialCertificates: Cert[];
}

export default function CertificatesClient({ initialCertificates }: CertificatesClientProps) {
  const [certificates, setCertificates] = useState<Cert[]>(initialCertificates);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

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

  const filteredCertificates = certificates.filter((cert) => {
    const matchesFilter = filter === 'all' || cert.status === filter;
    const certName = cert.name || '';
    const certVendor = cert.vendor || '';
    const matchesSearch =
      certName.toLowerCase().includes(search.toLowerCase()) ||
      certVendor.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return (
          <CheckCircle
            size={12}
            className="text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]"
          />
        );
      case 'in_progress':
        return (
          <Clock size={12} className="text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
        );
      default:
        return <AlertCircle size={12} className="text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'passed':
        return 'VERIFIED';
      case 'in_progress':
        return 'IN PROGRESS';
      default:
        return status.toUpperCase();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'text-emerald-400';
      case 'in_progress':
        return 'text-amber-400';
      default:
        return 'text-gray-400';
    }
  };

  const getBorderColor = (vendor: string) => {
    const v = vendor.toLowerCase();
    if (v.includes('oracle')) return 'hover:border-red-500/50';
    if (v.includes('vmware')) return 'hover:border-blue-500/50';
    if (v.includes('aws') || v.includes('amazon')) return 'hover:border-orange-500/50';
    if (v.includes('comptia') || v.includes('isc2')) return 'hover:border-emerald-500/50';
    return 'hover:border-emerald-500/50';
  };

  const getVendorColor = (vendor: string) => {
    const v = vendor.toLowerCase();
    if (v.includes('oracle')) return 'text-red-500';
    if (v.includes('vmware')) return 'text-blue-500';
    if (v.includes('aws') || v.includes('amazon')) return 'text-orange-500';
    if (v.includes('comptia') || v.includes('isc2')) return 'text-emerald-500';
    return 'text-emerald-500';
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
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
            <Lock size={12} /> SECURE VAULT
          </div>
          <h1 className="text-2xl  md:text-5xl font-bold mb-6 text-white text-center">
            CERTIFICATION <span className="text-emerald-500">DATABASE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-center text-sm md:text-lg mb-12">
            Comprehensive record of verified credentials, licenses, and ongoing professional
            development tracks.
          </p>

          {/* Search and Filter */}
          <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-500 transition-colors"
                size={20}
              />
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
                  className={`px-2 md:px-4 py-2 rounded-lg border font-mono text-[10px] md:text-sm whitespace-nowrap transition-all ${
                    filter === f
                      ? 'bg-emerald-900/20 border-emerald-500 text-emerald-400'
                      : 'bg-[#0a0a0a] border-gray-800 text-gray-400 hover:border-gray-600'
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
              onClick={() => {
                if (window.innerWidth >= 768) {
                  setSelectedCert(cert);
                }
              }}
              className={`group relative h-72 w-full sm:w-60 bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${getBorderColor(
                cert.vendor,
              )} flex flex-col cursor-default md:cursor-pointer`}
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
                    <span
                      className={`text-[10px] ${getStatusColor(cert.status)} font-bold drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]`}
                    >
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
                setSearch('');
                setFilter('all');
              }}
              className="mt-4 text-emerald-500 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Image Popup Modal */}
      {selectedCert &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            {/* Main Card Container with "Wow" Frame */}
            <div className="relative w-full max-w-4xl group" onClick={(e) => e.stopPropagation()}>
              {/* Animated Glow Border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-lg opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Main Content Box */}
              <div className="relative bg-[#050505] border border-emerald-500/50 p-1 clip-path-cyberpunk">
                {/* Decorative Corner SVGs */}
                <svg
                  className="absolute top-0 left-0 w-16 h-16 text-emerald-500 z-30 pointer-events-none"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M0 0 L30 0 L35 5 L100 5 L100 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M0 0 L0 30 L5 35 L5 100 L0 100"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <rect x="5" y="5" width="10" height="10" fill="currentColor" />
                </svg>
                <svg
                  className="absolute top-0 right-0 w-16 h-16 text-emerald-500 z-30 pointer-events-none transform scale-x-[-1]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M0 0 L30 0 L35 5 L100 5 L100 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M0 0 L0 30 L5 35 L5 100 L0 100"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <rect x="5" y="5" width="10" height="10" fill="currentColor" />
                </svg>
                <svg
                  className="absolute bottom-0 left-0 w-16 h-16 text-emerald-500 z-30 pointer-events-none transform scale-y-[-1]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M0 0 L30 0 L35 5 L100 5 L100 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M0 0 L0 30 L5 35 L5 100 L0 100"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <rect x="5" y="5" width="10" height="10" fill="currentColor" />
                </svg>
                <svg
                  className="absolute bottom-0 right-0 w-16 h-16 text-emerald-500 z-30 pointer-events-none transform scale-[-1]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M0 0 L30 0 L35 5 L100 5 L100 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M0 0 L0 30 L5 35 L5 100 L0 100"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <rect x="5" y="5" width="10" height="10" fill="currentColor" />
                </svg>

                {/* Inner Container */}
                <div className="relative w-full h-full bg-[#080808] overflow-hidden flex flex-col min-h-[550px] border border-emerald-500/20">
                  {/* Grid Background */}
                  <div className="absolute inset-0 matrix-bg opacity-30 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none"></div>

                  {/* Top Header Bar */}
                  <div className="relative z-10 flex items-center justify-between px-6 py-4 bg-black/60 border-b border-emerald-500/30 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500"></div>
                      </div>
                      <div className="h-4 w-[1px] bg-emerald-500/30 mx-2"></div>
                      <div className="text-xs text-emerald-500/70 font-mono tracking-widest">
                        ENCRYPTED_CONNECTION ::{' '}
                        <span className="text-emerald-400 font-bold">SECURE</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] text-emerald-400 font-mono">
                        v2.0.4
                      </div>
                    </div>
                  </div>

                  {/* Main Content (Image) */}
                  <div className="relative z-10 p-10 flex-1 flex items-center justify-center">
                    {/* Decorative Lines */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

                    {selectedCert.badge_image_url ? (
                      <div className="relative w-full h-[400px] max-w-3xl flex items-center justify-center p-4">
                        <div className="absolute inset-0 border border-emerald-500/20 rounded-lg bg-black/40 backdrop-blur-sm"></div>
                        {/* Holographic Effect */}
                        <div className="absolute inset-0 holo-sheen opacity-20 pointer-events-none rounded-lg"></div>

                        <Image
                          src={selectedCert.badge_image_url}
                          alt="Certificate"
                          fill
                          className="object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] z-20"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-[300px] flex items-center justify-center border border-emerald-500/10 bg-black/40 rounded-lg">
                        <div className="text-9xl font-bold text-emerald-900/20 animate-pulse">
                          ?
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Close Button (Absolute Top Right) */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-6 -right-6 z-50 p-3 text-white/50 hover:text-emerald-400 hover:rotate-90 transition-all duration-300 bg-black/80 rounded-full border border-emerald-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)] group"
              >
                <X size={24} className="group-hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
