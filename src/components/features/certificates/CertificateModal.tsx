'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Cert } from '@/types/certificate';

interface CertificateModalProps {
  cert: Cert | null;
  onClose: () => void;
}

const CertificateModal = ({ cert, onClose }: CertificateModalProps) => {
  if (!cert) return null;
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Main Card Container with "Wow" Frame */}
      <div className="relative w-full max-w-4xl group" onClick={(e) => e.stopPropagation()}>
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
            <div className="relative z-10 p-10 flex-1 flex items-center justify-center">
              {/* Decorative Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>

              {cert.badge_image_url ? (
                <div className="relative w-full h-[400px] max-w-3xl flex items-center justify-center p-4">
                  <div className="absolute inset-0 border border-emerald-500/20 rounded-lg bg-black/40 backdrop-blur-sm"></div>
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 holo-sheen opacity-20 pointer-events-none rounded-lg"></div>

                  <Image
                    src={cert.badge_image_url}
                    alt="Certificate"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] z-20"
                  />
                </div>
              ) : (
                <div className="w-full h-[300px] flex items-center justify-center border border-emerald-500/10 bg-black/40 rounded-lg">
                  <div className="text-9xl font-bold text-emerald-900/20 animate-pulse">?</div>
                </div>
              )}
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

export default CertificateModal;
