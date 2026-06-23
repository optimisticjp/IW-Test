import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand:  '#0a5bc4',
        violet: '#5b21b6',
        cyan:   '#0891b2',
        snow:   '#f7f9ff',
        mist:   '#eef2ff',
        ink: {
          DEFAULT: '#070e1c',
          mid:     '#0c1527',
          card:    '#101e36',
          border:  '#1c3558',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0a5bc4 0%, #5b21b6 100%)',
        'gradient-dark':  'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)',
        'gradient-cta':   'linear-gradient(135deg, #04091a 0%, #0b1238 45%, #04091a 100%)',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':       { opacity: '1'   },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'float':      'floatUp 6s ease-in-out infinite',
      },
      boxShadow: {
        'card':   '0 1px 3px rgba(11,17,32,0.06), 0 4px 20px rgba(11,17,32,0.09)',
        'btn':    '0 4px 24px rgba(10,91,196,0.40)',
        'btn-lg': '0 6px 32px rgba(10,91,196,0.50)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.03em',
        tighter3: '-0.02em',
        widest2:  '0.06em',
        widest3:  '0.08em',
      },
    },
  },
  plugins: [],
}

export default config
