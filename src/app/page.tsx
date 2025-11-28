import React from "react";
import HomeClient from "@/components/HomeClient";
import { supabase } from "@/lib/supabase";

// This is a Server Component by default in App Router
export default async function Home() {
  let projects = [];

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .neq('status', 'draft')
      .neq('status', 'archived')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching projects on server:", error);
    } else {
      projects = data || [];
    }
  } catch (err) {
    console.error("Unexpected error fetching projects:", err);
  }

  return <HomeClient initialProjects={projects} />;
}
