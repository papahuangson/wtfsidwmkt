import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

import { getAllBlogPosts, getBlogPost } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/lib/config';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: any) => (
    <a className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary-200 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-6" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto mb-6" {...props} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Post header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
            
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-md bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post content */}
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          {/* Simple content rendering for now */}
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
        </div>

        {/* Post footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Thanks for reading! Have thoughts or questions?
            </p>
            <a
              href={`mailto:${siteConfig.author.email}?subject=Re: ${post.title}`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Send me an email
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}