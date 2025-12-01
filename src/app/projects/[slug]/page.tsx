import React from 'react';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft, Calendar, Layers, Code } from 'lucide-react';
import Footer from '@/components/Footer';

export const revalidate = 60;

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;

  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black font-sans">
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors mb-8 font-mono text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO PROJECTS
        </Link>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-800 mb-12 group">
          {project.cover_image_url ? (
            <Image
              src={project.cover_image_url}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <span className="text-gray-700 font-mono text-xl">NO VISUAL DATA</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono backdrop-blur-md">
                {project.category || 'PROJECT'}
              </span>
              {project.status === 'in_progress' && (
                <span className="px-3 py-1 bg-amber-900/40 border border-amber-500/30 text-amber-400 rounded text-xs font-mono backdrop-blur-md">
                  IN PROGRESS
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-emerald-500">01.</span> OVERVIEW
              </h2>
              <div className="prose prose-invert prose-emerald max-w-none text-gray-300 leading-relaxed">
                <p>{project.description}</p>
                {project.content_md && (
                  <div className="mt-8 whitespace-pre-wrap font-mono text-sm bg-gray-900/30 p-6 rounded-lg border border-gray-800">
                    {project.content_md}
                  </div>
                )}
              </div>
            </section>

            {project.key_features && project.key_features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-emerald-500">02.</span> KEY FEATURES
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.key_features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 bg-gray-900/20 p-4 rounded border border-gray-800/50"
                    >
                      <span className="text-emerald-500 mt-1">▹</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 space-y-6 sticky top-32">
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Project Links
                </h3>
                <div className="flex flex-col gap-3">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-emerald-500/50 text-white rounded transition-all group"
                    >
                      <Github size={18} />
                      <span>SOURCE CODE</span>
                      <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="h-px bg-gray-800"></div>

              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Layers size={14} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-gray-900 text-emerald-400 border border-emerald-500/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-800"></div>

              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Calendar size={14} /> Timeline
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Started:</span>
                    <span className="text-gray-300">
                      {project.started_at
                        ? new Date(project.started_at).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Finished:</span>
                    <span className="text-gray-300">
                      {project.finished_at
                        ? new Date(project.finished_at).toLocaleDateString()
                        : 'In Progress'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
