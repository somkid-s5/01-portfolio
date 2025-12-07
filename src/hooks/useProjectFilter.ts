import { useMemo, useState } from 'react';
import { Project } from '@/types/project';

export function useProjectFilter(initialProjects: Project[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

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

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTech(null);
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedTech,
    setSelectedTech,
    categories,
    allTech,
    filteredProjects,
    clearFilters,
  };
}
