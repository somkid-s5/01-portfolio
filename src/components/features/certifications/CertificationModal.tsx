'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';
import { Certification } from '@/types/certification';
import { getCredentialHref } from '@/lib/certification-utils';

interface CertificationModalProps {
  cert: Certification | null;
  onClose: () => void;
}

const CertificationModal = ({ cert, onClose }: CertificationModalProps) => {
  if (!cert) return null;
  if (typeof document === 'undefined') return null;

  const credentialHref = getCredentialHref(cert);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Main Card Container with "Wow" Frame */}
      <div
        className="relative w-full max-w-3xl group max-h-[calc(100vh-2rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Glow Border */}
        <div className="absolute -inset-[2px] bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-lg opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

        {/* Main Content Box */}
        <div className="relative bg-bg border border-emerald-500/50 p-1 clip-path-cyberpunk">
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
          <div className="relative w-full h-full bg-[#080808] overflow-hidden flex flex-col border border-emerald-500/20 max-h-[calc(100vh-2rem)]">
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
                <div className="h-4 w-px bg-emerald-500/30 mx-2"></div>
                <div className="text-xs text-emerald-500/70 font-mono tracking-widest">
                  ENCRYPTED_CONNECTION :: <span className="text-emerald-400 font-bold">SECURE</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] text-emerald-400 font-mono">
                  v2.0.4
                </div>
              </div>
            </div>

            {/* Main Content (Image) */}
            <div className="relative z-10 px-6 py-6 md:px-8 md:py-8 flex-1 flex flex-col items-center justify-center overflow-y-auto">
              {/* Decorative Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>

              {cert.badge_image_url ? (
                <div className="relative w-full h-[240px] md:h-[320px] max-w-2xl flex items-center justify-center p-3 md:p-4">
                  <div className="absolute inset-0 border border-emerald-500/20 rounded-lg bg-black/40 backdrop-blur-sm"></div>
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 holo-sheen opacity-20 pointer-events-none rounded-lg"></div>

                  <Image
                    src={cert.badge_image_url}
                    alt="Certificate"
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] z-20"
                  />
                </div>
              ) : (
                <div className="w-full h-[220px] md:h-[280px] flex items-center justify-center border border-emerald-500/10 bg-black/40 rounded-lg">
                  <div className="text-7xl md:text-8xl font-bold text-emerald-900/20 animate-pulse">?</div>
                </div>
              )}

              <div className="mt-4 flex w-full max-w-2xl flex-col md:flex-row md:items-center md:justify-between gap-4 border border-emerald-500/15 bg-black/30 px-4 py-4">
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-500/70">
                    Credential Record
                  </p>
                  <h3 className="mt-2 text-base md:text-lg font-semibold text-white">{cert.name}</h3>
                  <p className="mt-1 text-xs md:text-sm text-gray-400 break-all">
                    {cert.vendor}
                    {cert.credential_id ? ` :: ${cert.credential_id}` : ''}
                  </p>
                </div>

                {credentialHref && (
                  <a
                    href={credentialHref}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/15 hover:text-emerald-200"
                  >
                    Verify Credential
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Close Button (Absolute Top Right) */}
        <button
          onClick={onClose}
          className="absolute -top-6 -right-6 z-50 p-3 text-white/50 hover:text-emerald-400 hover:rotate-90 transition-all duration-300 bg-black/80 rounded-full border border-emerald-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)] group"
        >
          <X size={24} className="group-hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default CertificationModal;
