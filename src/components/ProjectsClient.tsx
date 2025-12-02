'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Project } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

interface ProjectsClientProps {
  initialProjects: Project[];
}

const ProjectsClient = ({ initialProjects }: ProjectsClientProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Extract unique categories and tech stack items
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialProjects.forEach((p) => {
      const stack = (p.tech_stack || []).map((s) => s.toLowerCase());
      if (stack.includes('next.js') || stack.includes('react')) cats.add('WEB APP');
      else if (stack.includes('ansible') || stack.includes('terraform')) cats.add('INFRA');
      else if (stack.includes('python')) cats.add('SCRIPT');
      else if (stack.includes('security')) cats.add('SEC');
      else cats.add('PROJECT');
    });
    return Array.from(cats);
  }, [initialProjects]);

  const allTech = useMemo(() => {
    const tech = new Set<string>();
    initialProjects.forEach((p) => {
      (p.tech_stack || []).forEach((t) => tech.add(t));
    });
    return Array.from(tech).sort();
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch =
        (project.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.description || '').toLowerCase().includes(searchQuery.toLowerCase());

      const stack = (project.tech_stack || []).map((s) => s.toLowerCase());
      let category = 'PROJECT';
      if (stack.includes('next.js') || stack.includes('react')) category = 'WEB APP';
      else if (stack.includes('ansible') || stack.includes('terraform')) category = 'INFRA';
      else if (stack.includes('python')) category = 'SCRIPT';
      else if (stack.includes('security')) category = 'SEC';

      const matchesCategory = selectedCategory ? category === selectedCategory : true;
      const matchesTech = selectedTech ? (project.tech_stack || []).includes(selectedTech) : true;

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [initialProjects, searchQuery, selectedCategory, selectedTech]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black font-sans">
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="mb-12">
          <h1 className="text-2xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
            ALL <span className="text-gray-600">PROJECTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl  text-xs md:text-lg">
            Explore my complete portfolio of web applications, infrastructure automation, and
            security tools.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg  text-[10px] md:text-sm font-medium whitespace-nowrap transition-colors border ${!selectedCategory ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/50' : 'bg-[#0a0a0a] text-gray-400 border-white/10 hover:border-white/30'}`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                  className={`px-4 py-2 rounded-lg text-[10px] md:text-sm font-medium whitespace-nowrap transition-colors border ${selectedCategory === cat ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/50' : 'bg-[#0a0a0a] text-gray-400 border-white/10 hover:border-white/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack Filter */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] md:text-sm text-gray-500 flex items-center gap-2">
              <Filter size={14} /> Tech Stack:
            </span>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-colors border ${selectedTech === tech ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-[#0a0a0a] text-gray-500 border-white/5 hover:border-white/20'}`}
              >
                {tech}
              </button>
            ))}
            {(selectedCategory || selectedTech || searchQuery) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSelectedTech(null);
                }}
                className="px-3 py-1 rounded-full text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1 ml-auto"
              >
                <X size={12} /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
                setSelectedTech(null);
              }}
              className="mt-4 text-emerald-500 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsClient;
