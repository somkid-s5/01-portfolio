'use client';

import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { Cert } from '@/types/certificate';
import { Lock, Search } from 'lucide-react';
import CertificateCard from '@/components/features/certificates/CertificateCard';
import CertificateModal from '@/components/features/certificates/CertificateModal';

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
            <CertificateCard key={cert.id} cert={cert} onClick={(c) => setSelectedCert(c)} />
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

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
