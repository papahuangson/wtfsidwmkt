/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            '[data-rehype-pretty-code-fragment]': {
              position: 'relative',
            },
            pre: {
              padding: '0',
              color: 'inherit',
              backgroundColor: 'transparent',
              fontSize: '0.875rem',
            },
            code: {
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              backgroundColor: 'rgb(244 244 245)',
              border: '1px solid rgb(228 228 231)',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            color: 'rgb(212 212 216)',
            code: {
              backgroundColor: 'rgb(39 39 42)',
              border: '1px solid rgb(63 63 70)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}