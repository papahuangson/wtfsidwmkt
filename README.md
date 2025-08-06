# Personal Portfolio & Blog Site

A modern, accessible personal website built with Next.js 15, TypeScript, and Tailwind CSS. Features a blog system, project showcase, and focuses on excellent UX and accessibility.

## ✨ Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Accessibility-First**: WCAG compliant, keyboard navigation, screen reader support
- **Responsive Design**: Mobile-first approach with excellent UX across all devices
- **Blog System**: MDX support for rich content with frontmatter
- **Project Showcase**: Portfolio section with project details and links
- **Dark Mode**: Built-in theme switching with system preference detection
- **SEO Optimized**: Comprehensive metadata, Open Graph, and Twitter cards
- **Type Safe**: Full TypeScript support with proper type definitions
- **Performance**: Optimized builds with static generation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information

Update your personal details in `/lib/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Name',
  description: 'Your description',
  url: 'https://yoursite.com',
  author: {
    name: 'Your Name',
    email: 'hello@yoursite.com',
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourusername',
  },
  // ... navigation items
};
```

### Blog Posts

Add new blog posts as MDX files in `/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description for SEO"
publishedAt: "2024-01-15"
featured: true
tags: ["tag1", "tag2"]
---

# Your Post Content

Write your content here with full Markdown/MDX support.
```

### Projects

Update projects in `/lib/projects.ts`. You can:
- Replace sample data with your real projects
- Add markdown files in `/content/projects/` for more complex project data
- Customize the project schema in `/types/index.ts`

### Styling

- **Colors**: Modify the primary color scheme in `/tailwind.config.js`
- **Fonts**: Update font imports in `/app/globals.css`
- **Components**: Customize UI components in `/components/ui/`

### About Page

Edit `/app/about/page.tsx` to reflect your personal story, skills, and experience.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages and dynamic routes
│   ├── projects/          # Projects showcase
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── layout/           # Header, footer, navigation
│   └── ui/               # UI components (buttons, etc.)
├── content/              # Content files
│   ├── blog/            # Blog posts (MDX)
│   └── projects/        # Project content
├── lib/                 # Utility functions and configurations
│   ├── blog.ts          # Blog post utilities
│   ├── projects.ts      # Project utilities
│   ├── config.ts        # Site configuration
│   └── utils.ts         # General utilities
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🛠 Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for rich blog posts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: Optimized for [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting

## 🎯 Accessibility Features

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Focus management and visible focus indicators
- Screen reader optimizations
- Color contrast compliance (WCAG AA)
- Skip navigation links
- Responsive design for all devices

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🔧 Environment Setup

### VS Code Extensions (Recommended)

- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- MDX
- ESLint
- Prettier

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
# Add any environment variables you need
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy automatically on every push

### Other Platforms

This site works great on:
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/) (with static export)
- Any static hosting provider

For static export, update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `/content/blog/`
2. Add frontmatter with title, description, date, and tags
3. Write your content using Markdown/MDX syntax
4. The post will automatically appear on the blog page

### Managing Projects

Currently using a TypeScript array in `/lib/projects.ts`. You can:
- Add projects directly to the array
- Implement a CMS integration
- Use markdown files for project descriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with modern web development best practices and a focus on:
- Accessibility and inclusive design
- Performance optimization
- Clean, maintainable code
- Excellent user experience

---

**Ready to make it yours?** Start by updating the configuration in `/lib/config.ts` and adding your own content!