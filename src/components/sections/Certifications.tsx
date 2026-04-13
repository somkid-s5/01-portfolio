'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { Certification } from '@/types/certification';
import CertificationCard from '@/components/features/certifications/CertificationCard';
import CertificationModal from '@/components/features/certifications/CertificationModal';

interface CertificationsProps {
  initialCertifications: Certification[];
}

const Certifications = ({ initialCertifications }: CertificationsProps) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Filter highlighted certifications for the homepage, or fallback to recent ones.
  let displayCerts = initialCertifications.filter((c) => c.highlight).slice(0, 4);

  if (displayCerts.length === 0) {
    displayCerts = initialCertifications.slice(0, 4);
  }

  return (
    <section id="certifications" className="py-32 bg-[#020202] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-widest mb-4">
            <Lock size={12} /> SECURE VAULT
          </div>
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-white">
            VERIFIED <span className="text-emerald-500">CERTIFICATIONS</span>
          </h2>
          <p className="text-gray-500 max-w-lg text-center font-mono text-xs md:text-sm">
            // Accessing encrypted certifications database...
            <br />
            // Hover to view Holographic Verification Badge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {displayCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} onClick={(c) => setSelectedCert(c)} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-900/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs md:text-sm hover:bg-emerald-900/20 hover:border-emerald-500/50 transition-all group"
          >
            ACCESS FULL DATABASE
            <span className="group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
          </Link>
        </div>
      </div>

      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};

export default Certifications;
