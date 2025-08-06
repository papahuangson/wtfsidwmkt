import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { getAllProjects, getAllProjectTags } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of projects and creations, from web applications to open source contributions.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllProjectTags();

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'completed': { color: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300', label: 'Completed' },
      'in-progress': { color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300', label: 'In Progress' },
      'archived': { color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300', label: 'Archived' },
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.completed;
    
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A showcase of things I've built, from web applications to open source contributions
          </p>
        </div>

        {/* Tags Filter */}
        {tags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Filter by technology
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                {/* Project Image */}
                {project.imageUrl && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {project.title}
                    </h2>
                    <div className="ml-2 flex shrink-0 gap-1">
                      {project.featured && (
                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                          Featured
                        </span>
                      )}
                      {getStatusBadge(project.status)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="mb-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(project.startDate)}
                      {project.endDate && ` - ${formatDate(project.endDate)}`}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-900/50 dark:text-gray-300">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="default" size="sm" className="w-full gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto max-w-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                No projects yet
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Check back soon for new projects and creations!
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}