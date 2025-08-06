'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Site Name */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-white dark:hover:text-primary-400"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span>{siteConfig.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8" aria-label="Main navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:hover:text-primary-400',
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300'
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden"
            id="mobile-menu"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-800 dark:hover:text-white',
                    isActive(item.href)
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  )}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}