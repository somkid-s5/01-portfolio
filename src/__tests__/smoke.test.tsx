import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/features/projects/ProjectCard';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

const mockProject: any = {
  id: '1',
  title: 'Test Project',
  description: 'A test project description',
  slug: 'test-project',
  tech_stack: ['React', 'Next.js'],
  cover_image_url: '/test.jpg',
  github_url: 'https://github.com/test/test',
  demo_url: 'https://test.com',
  created_at: '2023-01-01',
  category: 'web',
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeDefined();
  });

  it('renders tech stack', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('Next.js')).toBeDefined();
  });
});
