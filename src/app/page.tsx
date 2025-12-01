import React from "react";
import HomeClient from "@/components/HomeClient";
import { supabase } from "@/lib/supabase";

// This is a Server Component by default in App Router
export default async function Home() {
  let projects = [];
  let certificates = [];

    try {
        const [projectsResult, certsResult] = await Promise.all([
            supabase
                .from('projects')
                .select('id,title,slug,description,status,tech_stack,github_url,demo_url,cover_image_url,category,key_features,created_at,started_at,finished_at')
                .neq('status', 'draft')
                .neq('status', 'archived')
                .order('created_at', { ascending: false }),
            supabase
                .from('certs')
                .select('id,name,vendor,status,issue_date,badge_image_url,highlight,credential_url,credential_id')
                .order('issue_date', { ascending: false })
        ]);

    if (projectsResult.error) {
      console.error("Error fetching projects:", projectsResult.error);
    } else {
      projects = projectsResult.data || [];
    }

    if (certsResult.error) {
      console.error("Error fetching certificates:", certsResult.error);
    } else {
      certificates = certsResult.data || [];
    }
  } catch (err) {
    console.error("Unexpected error fetching data:", err);
  }

  return <HomeClient initialProjects={projects} initialCertificates={certificates} />;
}
