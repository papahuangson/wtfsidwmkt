export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  tags?: string[];
  readingTime?: number;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  featured?: boolean;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  startDate: string;
  endDate?: string;
  status: 'in-progress' | 'completed' | 'archived';
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  nav: NavItem[];
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}