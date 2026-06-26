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
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          DEFAULT: '#075aaa',
          600: '#075aaa',
          700: '#054d94',
          800: '#043c73',
          900: '#022852',
          950: '#011a3d',
        },
        accent: {
          DEFAULT: '#6366F1',
          light:   '#818CF8',
          dark:    '#4F46E5',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft:    '#F8FAFF',
          muted:   '#F1F5F9',
        },
        ink:       '#0F172A',
        secondary: '#475569',
        muted:     '#94A3B8',
        border: {
          DEFAULT: '#E2E8F0',
          light:   '#F1F5F9',
        },
        // legacy aliases
        violet: '#5b21b6',
        cyan:   '#0891b2',
        snow:   '#f7f9ff',
        mist:   '#eef2ff',
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)',         'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':     'linear-gradient(135deg, #075aaa 0%, #6366F1 100%)',
        'gradient-brand-r':   'linear-gradient(135deg, #6366F1 0%, #075aaa 100%)',
        'gradient-text':      'linear-gradient(135deg, #075aaa 0%, #4F8EF7 40%, #6366F1 100%)',
        'gradient-surface':   'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        'gradient-hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(7,90,170,0.12) 0%, transparent 70%)',
        // legacy
        'gradient-brand-alt': 'linear-gradient(135deg, #075aaa 0%, #0b3a6e 100%)',
        'gradient-dark':      'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)',
        'gradient-cta':       'linear-gradient(135deg, #04091a 0%, #0b1238 45%, #04091a 100%)',
      },
      boxShadow: {
        'card':       '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(7,90,170,0.06)',
        'card-md':    '0 2px 4px rgba(0,0,0,0.05), 0 8px 28px rgba(7,90,170,0.09)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.05), 0 16px 48px rgba(7,90,170,0.13)',
        'btn':        '0 1px 3px rgba(7,90,170,0.25), 0 4px 16px rgba(7,90,170,0.18)',
        'btn-lg':     '0 2px 6px rgba(7,90,170,0.3),  0 8px 32px rgba(7,90,170,0.22)',
        'glass':      '0 2px 20px rgba(7,90,170,0.07), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glow-sm':    '0 0 32px rgba(7,90,170,0.15)',
        'glow-md':    '0 0 64px rgba(7,90,170,0.18)',
        // legacy
        'btn-brand':  '0 4px 20px rgba(7,90,170,0.40)',
        'glow-brand': '0 0 40px rgba(7,90,170,0.15)',
      },
      borderRadius: {
        'card':    '12px',
        'card-lg': '16px',
        'card-xl': '20px',
        'card-2xl':'24px',
        // legacy
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-slow':     'float 10s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'pulse-soft':     'pulseSoft 4s ease-in-out infinite',
        'marquee':        'marquee 28s linear infinite',
        'marquee-slow':   'marquee 42s linear infinite',
        'gradient-move':  'gradientMove 12s ease-in-out infinite alternate',
        'fade-up':        'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in':       'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'count-up':       'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        // legacy
        'glow-pulse':     'glowPulse 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5'  },
          '50%':      { opacity: '0.85' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)'    },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientMove: {
          '0%':   { transform: 'scale(1) translate(0px, 0px)'       },
          '33%':  { transform: 'scale(1.12) translate(20px, -15px)' },
          '66%':  { transform: 'scale(0.95) translate(-15px, 10px)' },
          '100%': { transform: 'scale(1.08) translate(10px, -8px)'  },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)'  },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)'    },
        },
        // legacy keyframes
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1'   },
        },
        gradientShift: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)'     },
          '25%':      { transform: 'translate(2%, -3%) scale(1.05)' },
          '50%':      { transform: 'translate(-2%, 2%) scale(0.97)' },
          '75%':      { transform: 'translate(1%, 3%) scale(1.03)'  },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
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
