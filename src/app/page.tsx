import React from 'react';
import HomeClient from '@/components/HomeClient';
import { supabase } from '@/lib/supabase';
import {
  HOMEPAGE_CERTIFICATION_STATUSES,
  PUBLIC_PROJECT_STATUSES,
} from '@/lib/public-content';
import { Project } from '@/types/project';
import { Certification } from '@/types/certification';

export const revalidate = 60; // Revalidate every 60 seconds

// This is a Server Component by default in App Router
export default async function Home() {
  let projects: Project[] = [];
  let certifications: Certification[] = [];

  try {
    const [projectsResult, certsResult] = await Promise.all([
      supabase
        .from('projects')
        .select('*')
        .in('status', [...PUBLIC_PROJECT_STATUSES])
        .order('created_at', { ascending: false }),
      supabase
        .from('certs')
        .select('*')
        .in('status', [...HOMEPAGE_CERTIFICATION_STATUSES])
        .order('issue_date', { ascending: false }),
    ]);

    if (projectsResult.error) {
      console.error('Error fetching projects:', projectsResult.error);
    } else {
      projects = projectsResult.data || [];
    }

    if (certsResult.error) {
      console.error('Error fetching certifications:', certsResult.error);
    } else {
      certifications = certsResult.data || [];
    }
  } catch (err) {
    console.error('Unexpected error fetching data:', err);
  }

  return <HomeClient initialProjects={projects} initialCertifications={certifications} />;
}
