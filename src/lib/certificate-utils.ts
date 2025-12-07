import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const getVendorColor = (vendor: string) => {
  const v = (vendor || '').toLowerCase();
  if (v.includes('oracle')) return 'text-red-500';
  if (v.includes('vmware')) return 'text-blue-500';
  if (v.includes('aws') || v.includes('amazon')) return 'text-orange-500';
  if (v.includes('comptia') || v.includes('isc2')) return 'text-emerald-500';
  return 'text-emerald-500';
};

export const getBorderColor = (vendor: string) => {
  const v = (vendor || '').toLowerCase();
  if (v.includes('oracle')) return 'hover:border-red-500/50';
  if (v.includes('vmware')) return 'hover:border-blue-500/50';
  if (v.includes('aws') || v.includes('amazon')) return 'hover:border-orange-500/50';
  if (v.includes('comptia') || v.includes('isc2')) return 'hover:border-emerald-500/50';
  return 'hover:border-emerald-500/50';
};

export const getStatusConfig = (status: string) => {
  switch (status) {
    case 'passed':
      return {
        text: 'VERIFIED',
        color: 'text-emerald-400',
        icon: CheckCircle,
        shadow: 'drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]',
      };
    case 'in_progress':
      return {
        text: 'IN PROGRESS',
        color: 'text-amber-400',
        icon: Clock,
        shadow: 'drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]',
      };
    default:
      return {
        text: status.toUpperCase(),
        color: 'text-gray-400',
        icon: AlertCircle,
        shadow: '',
      };
  }
};
