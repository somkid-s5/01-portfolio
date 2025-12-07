'use client';

import React from 'react';
import Image from 'next/image';
import { Hash } from 'lucide-react';
import { Cert } from '@/types/certificate';
import { getVendorColor, getBorderColor, getStatusConfig } from '@/lib/certificate-utils';

interface CertificateCardProps {
  cert: Cert;
  onClick?: (cert: Cert) => void;
}

const CertificateCard = ({ cert, onClick }: CertificateCardProps) => {
  const statusConfig = getStatusConfig(cert.status);
  const StatusIcon = statusConfig.icon;

  const handleClick = () => {
    if (onClick && window.innerWidth >= 768) {
      onClick(cert);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative h-72 w-full sm:w-60 bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${getBorderColor(
        cert.vendor,
      )} flex flex-col cursor-default md:cursor-pointer`}
    >
      <div className="holo-sheen absolute inset-0 w-full h-full pointer-events-none"></div>
      <div className="sparkles absolute inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/10 to-transparent h-[200%] w-full -top-full opacity-0 group-hover:animate-scan pointer-events-none z-20"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>

      <div className="h-40 w-full flex items-center justify-center p-4 relative bg-gray-900/50 border-b border-white/5">
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-inner">
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
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
              className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 ${getVendorColor(
                cert.vendor,
              )} backdrop-blur-md`}
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

        <div className="pt-2 border-t border-gray-800 flex justify-between items-center mt-auto">
          <div className="flex items-center gap-1 text-[10px] text-gray-600 font-mono group-hover:text-white/80 transition-colors">
            <Hash size={10} /> {cert.id.substring(0, 8)}
          </div>
          <div className="flex items-center gap-1">
            <StatusIcon size={12} className={statusConfig.shadow + ' ' + statusConfig.color} />
            <span
              className={`text-[10px] ${statusConfig.color} font-bold drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]`}
            >
              {statusConfig.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
