export interface CertCategory {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

export interface Cert {
    id: string;
    cert_type: string; // 'exam', 'course', etc.
    name: string;
    vendor: string;
    category_id: string | null;
    level: string | null;
    status: 'passed' | 'in_progress' | 'expired' | 'planned';
    issue_date: string | null;
    expiry_date: string | null;
    credential_id: string | null;
    credential_url: string | null;
    score: number | null;
    highlight: boolean;
    notes: string | null;
    created_at: string;
    updated_at: string;
    badge_image_url: string | null;

    // Joined fields (optional)
    category?: CertCategory;
}
