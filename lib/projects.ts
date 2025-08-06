import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Sample projects data - in a real app, this could come from a CMS, database, or markdown files
const sampleProjects: Project[] = [
  {
    slug: 'accessible-todo-app',
    title: 'Accessible Todo App',
    description: 'A fully accessible todo application built with React and TypeScript, featuring keyboard navigation, screen reader support, and WCAG compliance.',
    longDescription: 'This project demonstrates how to build truly accessible web applications. Every interaction can be performed with keyboard only, all content is properly labeled for screen readers, and the color scheme meets WCAG contrast requirements. Built with React, TypeScript, and styled with Tailwind CSS.',
    featured: true,
    tags: ['React', 'TypeScript', 'Accessibility', 'WCAG', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/accessible-todo-app',
    liveUrl: 'https://accessible-todo-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Todo+App',
    startDate: '2024-01-01',
    endDate: '2024-01-15',
    status: 'completed',
  },
  {
    slug: 'performance-dashboard',
    title: 'Performance Monitoring Dashboard',
    description: 'A real-time dashboard for monitoring web application performance metrics with interactive charts and alerts.',
    longDescription: 'Built a comprehensive dashboard for monitoring web performance metrics including Core Web Vitals, user interactions, and custom business metrics. Features real-time updates, custom alert thresholds, and detailed reporting capabilities.',
    featured: true,
    tags: ['Next.js', 'TypeScript', 'Performance', 'Charts', 'Real-time'],
    githubUrl: 'https://github.com/yourusername/performance-dashboard',
    liveUrl: 'https://perf-dashboard-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Dashboard',
    startDate: '2023-11-01',
    endDate: '2023-12-15',
    status: 'completed',
  },
  {
    slug: 'design-system',
    title: 'Component Design System',
    description: 'A comprehensive design system with reusable React components, documentation, and accessibility guidelines.',
    longDescription: 'Created a scalable design system with 50+ reusable components, comprehensive documentation using Storybook, and detailed accessibility guidelines. Includes automated testing, visual regression testing, and NPM package distribution.',
    featured: false,
    tags: ['React', 'Storybook', 'Design System', 'NPM', 'Testing'],
    githubUrl: 'https://github.com/yourusername/design-system',
    liveUrl: 'https://design-system-docs.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Design+System',
    startDate: '2023-09-01',
    status: 'in-progress',
  },
  {
    slug: 'markdown-blog-engine',
    title: 'Markdown Blog Engine',
    description: 'A fast, SEO-optimized blog engine that converts markdown files to static pages with syntax highlighting.',
    longDescription: 'Built a custom static site generator that processes markdown files into optimized HTML pages. Features include syntax highlighting, automatic sitemap generation, RSS feeds, and optimized images with lazy loading.',
    featured: false,
    tags: ['Next.js', 'Markdown', 'SEO', 'Static Generation'],
    githubUrl: 'https://github.com/yourusername/markdown-blog',
    liveUrl: 'https://markdown-blog-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Blog+Engine',
    startDate: '2023-08-01',
    endDate: '2023-08-30',
    status: 'completed',
  },
];

export function getAllProjects(): Project[] {
  try {
    // In a real application, you might read from markdown files like this:
    // const fileNames = fs.readdirSync(projectsDirectory);
    // ... process markdown files
    
    // For now, return sample data
    return sampleProjects.sort((a, b) => {
      // Sort by featured first, then by start date (newest first)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  } catch (error) {
    console.error('Error reading projects:', error);
    return sampleProjects;
  }
}

export function getProject(slug: string): Project | null {
  try {
    const projects = getAllProjects();
    return projects.find(project => project.slug === slug) || null;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured);
}

export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter(project => 
    project.tags?.includes(tag)
  );
}

export function getAllProjectTags(): string[] {
  const projects = getAllProjects();
  const tags = new Set<string>();
  
  projects.forEach(project => {
    project.tags?.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return getAllProjects().filter(project => project.status === status);
}