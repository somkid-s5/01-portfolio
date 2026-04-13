import React from 'react';
import ProjectsClient from '@/components/features/projects/ProjectsClient';
import { PUBLIC_PROJECT_STATUSES } from '@/lib/public-content';
import { supabase } from '@/lib/supabase';
import { Project } from '@/types/project';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .in('status', [...PUBLIC_PROJECT_STATUSES])
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      projects = data || [];
    }
  } catch (err) {
    console.error('Unexpected error fetching projects:', err);
  }

  return <ProjectsClient initialProjects={projects} />;
}
