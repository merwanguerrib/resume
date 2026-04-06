/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F9F8F5',
        surface: '#FFFFFF',
        elevated: '#F0EEE9',
        dark: '#0C0C0A',
        ink: '#1F1E1B',
        muted: '#9B9791',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(12,12,10,0.04), 0 4px 16px rgba(12,12,10,0.06)',
        'card-hover': '0 2px 4px rgba(12,12,10,0.06), 0 12px 32px rgba(12,12,10,0.1)',
        pill: '0 1px 3px rgba(12,12,10,0.08), 0 8px 24px rgba(12,12,10,0.06)',
        'inner-top': 'inset 0 1px 0 rgba(255,255,255,0.9)',
      },
      spacing: {
        section: '7rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      opacity: {
        '8': '0.08',
        '6': '0.06',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.32, 0.72, 0, 1)',
        'spring-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up-1': 'fadeUp 0.7s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up-2': 'fadeUp 0.7s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up-3': 'fadeUp 0.7s 0.3s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up-4': 'fadeUp 0.7s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
