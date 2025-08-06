import { Metadata } from 'next';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, socialLinks } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${siteConfig.author.name} - developer focused on great UX and accessibility.`,
};

const iconMap = {
  Github,
  Twitter,
  Linkedin,
  Mail,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a developer passionate about creating accessible, user-focused digital experiences.
          </p>
        </div>

        {/* Main content */}
        <div className="prose prose-lg prose-gray dark:prose-invert mx-auto">
          <div className="not-prose mb-12">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! 👋
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate developer who believes that great software should be both powerful 
                and intuitive, working seamlessly for users of all abilities. My focus is on creating 
                digital experiences that are not only functional but also accessible and enjoyable to use.
              </p>
            </div>
          </div>

          <h2>My Journey</h2>
          <p>
            My journey in web development started with a curiosity about how websites work. 
            Over the years, I've grown from someone who was amazed by simple HTML pages to 
            a developer who cares deeply about user experience, performance, and accessibility.
          </p>

          <p>
            I believe that technology should empower everyone, and that means building with 
            accessibility in mind from the start, not as an afterthought. Every line of code 
            I write is an opportunity to make the web a more inclusive place.
          </p>

          <h2>What I Do</h2>
          <p>
            I specialize in building modern web applications using technologies like React, 
            Next.js, and TypeScript. But technology is just a tool – what really drives me 
            is solving problems and creating experiences that users love.
          </p>

          <p>
            Whether it's optimizing performance, implementing responsive designs, or ensuring 
            keyboard navigation works perfectly, I pay attention to the details that make a 
            difference in real-world usage.
          </p>

          <h2>Skills & Technologies</h2>
          
          <div className="not-prose grid gap-6 md:grid-cols-2 my-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React & Next.js</li>
                <li>TypeScript & JavaScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>Web Accessibility (WCAG)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tools & Practices
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Git & Version Control</li>
                <li>Performance Optimization</li>
                <li>SEO Best Practices</li>
                <li>Testing & Quality Assurance</li>
                <li>Agile Development</li>
                <li>User Experience Design</li>
              </ul>
            </div>
          </div>

          <h2>Beyond Code</h2>
          <p>
            When I'm not coding, you'll find me reading about new technologies, contributing 
            to open source projects, or sharing what I've learned through writing and speaking. 
            I believe in giving back to the community that has taught me so much.
          </p>

          <p>
            I'm also passionate about mentoring other developers and helping them navigate 
            their own journeys in tech. There's nothing quite like seeing someone have that 
            "aha!" moment when a concept finally clicks.
          </p>

          <h2>Let's Connect</h2>
          <p>
            I'm always interested in connecting with fellow developers, potential collaborators, 
            or anyone who shares a passion for creating great digital experiences. Don't hesitate 
            to reach out!
          </p>
        </div>

        {/* Contact section */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just say hello? 
            I'd love to hear from you!
          </p>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-300 text-gray-600 hover:text-primary-600 hover:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:border-primary-600 transition-colors"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          <a href={`mailto:${siteConfig.author.email}`}>
            <Button size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Send me an email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}