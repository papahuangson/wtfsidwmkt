import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';
import { getReadingTime } from './utils';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          publishedAt: data.publishedAt,
          updatedAt: data.updatedAt,
          featured: data.featured || false,
          tags: data.tags || [],
          readingTime: getReadingTime(content),
          content,
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      featured: data.featured || false,
      tags: data.tags || [],
      readingTime: getReadingTime(content),
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.tags?.includes(tag)
  );
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}