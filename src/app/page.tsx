import React from 'react';
import HomeClient from '@/components/HomeClient';
import { supabase } from '@/lib/supabase';
import { Project } from '@/types/project';
import { Cert } from '@/types/certificate';

export const revalidate = 60; // Revalidate every 60 seconds

// This is a Server Component by default in App Router
export default async function Home() {
  let projects: Project[] = [];
  let certificates: Cert[] = [];

  try {
    const [projectsResult, certsResult] = await Promise.all([
      supabase
        .from('projects')
        .select('*')
        .neq('status', 'draft')
        .neq('status', 'archived')
        .order('created_at', { ascending: false }),
      supabase.from('certs').select('*').order('issue_date', { ascending: false }),
    ]);

    if (projectsResult.error) {
      console.error('Error fetching projects:', projectsResult.error);
    } else {
      projects = projectsResult.data || [];
    }

    if (certsResult.error) {
      console.error('Error fetching certificates:', certsResult.error);
    } else {
      certificates = certsResult.data || [];
    }
  } catch (err) {
    console.error('Unexpected error fetching data:', err);
  }

  return <HomeClient initialProjects={projects} initialCertificates={certificates} />;
}
