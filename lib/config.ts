import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Your Name',
  description: 'Developer focused on great UX and accessibility. Building thoughtful digital experiences.',
  url: 'https://yoursite.com', // Update with your actual domain
  author: {
    name: 'Your Name',
    email: 'hello@yoursite.com',
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourusername',
  },
  nav: [
    {
      title: 'Home',
      href: '/',
      description: 'Back to homepage',
    },
    {
      title: 'About',
      href: '/about',
      description: 'Learn more about me',
    },
    {
      title: 'Blog',
      href: '/blog',
      description: 'Thoughts on development and design',
    },
    {
      title: 'Projects',
      href: '/projects',
      description: 'Things I\'ve built',
    },
  ],
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: `https://github.com/${siteConfig.author.github}`,
    icon: 'Github',
  },
  {
    name: 'Twitter',
    url: `https://twitter.com/${siteConfig.author.twitter?.replace('@', '')}`,
    icon: 'Twitter',
  },
  {
    name: 'LinkedIn',
    url: `https://linkedin.com/in/${siteConfig.author.linkedin}`,
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: `mailto:${siteConfig.author.email}`,
    icon: 'Mail',
  },
];