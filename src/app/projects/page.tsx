import React from "react";
import ProjectsClient from "@/components/ProjectsClient";
import { supabase } from "@/lib/supabase";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectsPage() {
    let projects = [];

    try {
        const { data, error } = await supabase
            .from('projects')
            .select('id,title,slug,description,status,tech_stack,github_url,demo_url,cover_image_url,category,key_features,created_at,started_at,finished_at')
            .neq('status', 'draft')
            .neq('status', 'archived')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error fetching projects:", error);
        } else {
            projects = data || [];
        }
    } catch (err) {
        console.error("Unexpected error fetching projects:", err);
    }

    return <ProjectsClient initialProjects={projects} />;
}
