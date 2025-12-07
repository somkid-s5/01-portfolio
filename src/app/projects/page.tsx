import React from 'react';
import ProjectsClient from '@/components/features/projects/ProjectsClient';
import { supabase } from '@/lib/supabase';
import { Project } from '@/types/project';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .neq('status', 'draft')
      .neq('status', 'archived')
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
