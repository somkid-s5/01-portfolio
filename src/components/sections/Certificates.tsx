'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { Cert } from '@/types/certificate';
import CertificateCard from '@/components/features/certificates/CertificateCard';
import CertificateModal from '@/components/features/certificates/CertificateModal';

interface CertificatesProps {
  initialCertificates: Cert[];
}

const Certificates = ({ initialCertificates }: CertificatesProps) => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  // Filter only highlighted certificates for the homepage, or fallback to recent ones
  let displayCerts = initialCertificates.filter((c) => c.highlight).slice(0, 4);

  if (displayCerts.length === 0) {
    displayCerts = initialCertificates.slice(0, 4);
  }

  return (
    <section id="certificates" className="py-32 bg-[#020202] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
            <Lock size={12} /> SECURE VAULT
          </div>
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-white">
            VERIFIED <span className="text-emerald-500">CREDENTIALS</span>
          </h2>
          <p className="text-gray-500 max-w-lg text-center font-mono text-xs md:text-sm">
            // Accessing encrypted certification database...
            <br />
            // Hover to view Holographic Verification Badge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {displayCerts.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onClick={(c) => setSelectedCert(c)} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-900/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs md:text-sm hover:bg-emerald-900/20 hover:border-emerald-500/50 transition-all group"
          >
            ACCESS FULL DATABASE
            <span className="group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
          </Link>
        </div>
      </div>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};

export default Certificates;
