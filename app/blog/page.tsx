import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';
import { getAllBlogPosts, getAllTags } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on development, design, and technology.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Thoughts on development, design, and technology
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-gray-800 dark:hover:border-primary-600"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {post.description}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                        {post.readingTime && (
                          <span>{post.readingTime} min read</span>
                        )}
                      </div>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {post.featured && (
                      <span className="ml-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                        Featured
                      </span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              No posts yet
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}