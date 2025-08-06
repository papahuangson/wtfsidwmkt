import Link from 'next/link';
import { ArrowRight, BookOpen, Code, User, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';
import { getAllBlogPosts } from '@/lib/blog';
import { getFeaturedProjects } from '@/lib/projects';
import { formatDate } from '@/lib/utils';

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3);
  const featuredProjects = getFeaturedProjects().slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Hello, I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {siteConfig.author.name}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/about">
              <Button size="lg" className="gap-2">
                <User className="h-4 w-4" />
                About Me
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                <Code className="h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Sections */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Recent Blog Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Recent Posts
                </h2>
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {recentPosts.length > 0 ? (
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <article key={post.slug} className="group">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block space-y-2 rounded-lg p-4 transition-colors hover:bg-white dark:hover:bg-gray-800"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt)}
                          </time>
                          {post.readingTime && (
                            <span>{post.readingTime} min read</span>
                          )}
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    No posts yet
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Check back soon for new content!
                  </p>
                </div>
              )}
            </div>

            {/* Featured Projects */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Featured Projects
                </h2>
                <Link 
                  href="/projects"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {featuredProjects.length > 0 ? (
                <div className="space-y-6">
                  {featuredProjects.map((project) => (
                    <article key={project.slug} className="group">
                      <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-white dark:border-gray-700 dark:hover:bg-gray-800">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Project Tags */}
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Project Links */}
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              <Github className="h-3 w-3" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Code className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    No projects yet
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Check back soon for new projects!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I'm a developer passionate about creating accessible, user-focused digital experiences. 
              I believe great software should be both powerful and intuitive, working seamlessly for 
              users of all abilities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              When I'm not coding, you'll find me exploring new technologies, contributing to open 
              source projects, or sharing what I've learned through writing and speaking.
            </p>
            <Link href="/about">
              <Button variant="outline" className="gap-2 mt-6">
                Learn more about me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? I'd love to hear about it and explore how we can collaborate.
          </p>
          <div className="mt-8">
            <a href={`mailto:${siteConfig.author.email}`}>
              <Button size="lg" className="gap-2">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}