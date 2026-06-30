/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A2540',
        midnight: '#071A2E',
        'navy-2': '#0E3354',
        gold: '#D99A2B',
        'gold-lt': '#F0C25A',
        paper: '#F6F8FA',
        ink: '#14202B',
        muted: '#5C6B7A',
        line: '#E2E8EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1180px',
      },
    },
  },
  plugins: [],
};
