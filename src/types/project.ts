export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    status: 'draft' | 'in_progress' | 'done' | 'archived';
    tech_stack: string[];
    github_url: string | null;
    demo_url: string | null;
    started_at: string | null;
    finished_at: string | null;
    created_at: string;
    updated_at: string;
    cover_image_url: string | null;
    content_md: string | null;
    published_at: string | null;
    category: string;
    key_features: string[];
}
