import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#101321',
        muted: '#6B7280',
        surface: '#F6F7F9',
        brand: '#0F172A',
        accent: '#38BDF8'
      },
      boxShadow: {
        menu: '0 20px 40px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
