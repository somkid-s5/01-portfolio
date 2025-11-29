import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { data: projects } = await supabase
        .from('projects')
        .select('slug, updated_at')
        .neq('status', 'draft')
        .neq('status', 'archived');

    const projectUrls = (projects || []).map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        lastModified: new Date(project.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteConfig.url}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteConfig.url}/certificates`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...projectUrls,
    ]
}
