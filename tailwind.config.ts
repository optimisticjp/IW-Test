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
        brand: {
          DEFAULT: '#075aaa',
          50:  '#edf4fb',
          100: '#d0e6f5',
          200: '#a2cde9',
          300: '#6aafda',
          400: '#3a92ca',
          500: '#1a78bb',
          600: '#075aaa',
          700: '#0a4a8a',
          800: '#0b3a6e',
          900: '#0a2d54',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft:    '#f0f4f8',
        },
        // Legacy colors kept for backward compatibility
        violet: '#5b21b6',
        cyan:   '#0891b2',
        snow:   '#f7f9ff',
        mist:   '#eef2ff',
        ink: {
          DEFAULT: '#0f172a',
          mid:     '#1e293b',
          card:    '#101e36',
          border:  '#e2e8f0',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',         'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-plus-jakarta)',  'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':     'linear-gradient(135deg, #075aaa 0%, #4f46e5 100%)',
        'gradient-brand-alt': 'linear-gradient(135deg, #075aaa 0%, #0b3a6e 100%)',
        'gradient-dark':      'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)',
        'gradient-cta':       'linear-gradient(135deg, #04091a 0%, #0b1238 45%, #04091a 100%)',
        'gradient-surface':   'linear-gradient(135deg, #f0f4f8 0%, #edf4fb 100%)',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1'   },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-8px)'  },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)'      },
          '33%':      { transform: 'translateY(-14px) scale(1.02)' },
          '66%':      { transform: 'translateY(-6px) scale(0.98)'  },
        },
        gradientShift: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)'     },
          '25%':      { transform: 'translate(2%, -3%) scale(1.05)' },
          '50%':      { transform: 'translate(-2%, 2%) scale(0.97)' },
          '75%':      { transform: 'translate(1%, 3%) scale(1.03)'  },
        },
      },
      animation: {
        'glow-pulse':     'glowPulse 6s ease-in-out infinite',
        'float':          'floatUp 6s ease-in-out infinite',
        'float-slow':     'floatSlow 9s ease-in-out infinite',
        'gradient-shift': 'gradientShift 9s ease-in-out infinite',
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(7,90,170,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'btn':        '0 4px 20px rgba(7,90,170,0.35)',
        'btn-brand':  '0 4px 20px rgba(7,90,170,0.40)',
        'btn-lg':     '0 6px 32px rgba(7,90,170,0.45)',
        'glass':      '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glow-brand': '0 0 40px rgba(7,90,170,0.15)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
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
