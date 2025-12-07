import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';
import ProjectCard from '@/components/features/projects/ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  // Limit to top 3 projects for the homepage
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              PROJECT <span className="text-gray-600">LOGS</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm max-w-xl border-l border-gray-700 pl-4">
              // A curated collection of Web Apps, Automation Scripts, and Home Lab Infrastructure.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group text-emerald-500 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
            >
              [ View_All_Projects ]{' '}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center md:hidden">
          <Link
            href="/projects"
            className="group text-emerald-500 hover:text-white transition-colors flex items-center gap-2 font-mono text-xs"
          >
            [ View_All_Projects ]{' '}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
