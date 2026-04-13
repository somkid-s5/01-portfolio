import React from 'react';
import CertificationsClient from '@/components/features/certifications/CertificationsClient';

import { Certification } from '@/types/certification';
import { PUBLIC_CERTIFICATION_STATUSES } from '@/lib/public-content';
import { supabase } from '@/lib/supabase';

export const revalidate = 60;

export default async function CertificationsPage() {
  let certifications: Certification[] = [];

  try {
    const { data, error } = await supabase
      .from('certs')
      .select('*')
      .in('status', [...PUBLIC_CERTIFICATION_STATUSES])
      .order('issue_date', { ascending: false });

    if (error) {
      console.error('Error fetching certifications:', error);
    } else {
      certifications = data || [];
    }
  } catch (err) {
    console.error('Unexpected error fetching certifications:', err);
  }

  return <CertificationsClient initialCertifications={certifications} />;
}
