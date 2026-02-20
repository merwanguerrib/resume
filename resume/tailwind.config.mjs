/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f7f5ff',
        surface: '#ffffff',
        panel: '#efeaff',
        primary: {
          DEFAULT: '#6f4bff',
          light: '#a78bfa',
          dark: '#4b2ed9',
        },
        accent: '#c9b8ff',
        ink: '#1c1433',
        muted: '#6c677d',
        line: '#e4ddff',
        success: '#22c55e',
      },
      fontFamily: {
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 40px -32px rgba(76, 54, 153, 0.65)',
        glow: '0 0 0 1px rgba(111, 75, 255, 0.15), 0 24px 60px -36px rgba(76, 54, 153, 0.75)',
      },
      backgroundImage: {
        hero: 'radial-gradient(1200px circle at 20% -10%, rgba(111, 75, 255, 0.25), transparent 55%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
        shimmer: 'shimmer 12s ease infinite',
      },
    },
  },
  plugins: [],
};
