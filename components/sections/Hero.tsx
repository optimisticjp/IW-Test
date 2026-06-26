'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { trackCTA } from '@/lib/analytics'
import { HERO_STATS } from '@/lib/constants'

const PILLARS = [
  {
    title: 'Websites & Stores',
    desc:  'Built to convert',
    color: '#075aaa',
    float: 'animate-float',
    delay: '0s',
    icon:  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  },
  {
    title: 'Paid Growth',
    desc:  'Google & Meta ads',
    color: '#6366F1',
    float: 'animate-float-slow',
    delay: '0.6s',
    icon:  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: 'Social Growth',
    desc:  'Instagram & YouTube',
    color: '#059669',
    float: 'animate-float-delayed',
    delay: '1.2s',
    icon:  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
  {
    title: 'SEO & AI Search',
    desc:  'Rank & get cited',
    color: '#0891b2',
    float: 'animate-float',
    delay: '0.3s',
    icon:  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  },
  {
    title: 'Funnels & CRO',
    desc:  'More conversions',
    color: '#d97706',
    float: 'animate-float-slow',
    delay: '0.9s',
    icon:  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />,
  },
  {
    title: 'Email & Retention',
    desc:  'Keep buyers coming back',
    color: '#7c3aed',
    float: 'animate-float-delayed',
    delay: '1.5s',
    icon:  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
]

const GRID: Array<{ top: string; left: string }> = [
  { top: '0%',  left: '0%'  },
  { top: '0%',  left: '50%' },
  { top: '33%', left: '0%'  },
  { top: '33%', left: '50%' },
  { top: '66%', left: '0%'  },
  { top: '66%', left: '50%' },
]

const colVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-66px)] flex items-center bg-white px-5 pt-[66px]">

      {/* Blob backgrounds */}
      <div
        className="blob animate-gradient-move bg-brand-100 w-[600px] h-[600px] opacity-40"
        style={{ top: '-10%', left: '-15%' }}
      />
      <div
        className="blob animate-gradient-move bg-blue-100 w-[400px] h-[400px] opacity-30"
        style={{ top: '20%', right: '-10%', animationDelay: '4s', animationDirection: 'alternate-reverse' }}
      />
      <div
        className="blob animate-gradient-move bg-indigo-100 w-[300px] h-[300px] opacity-20"
        style={{ bottom: '-5%', left: '30%', animationDelay: '8s' }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-[1080px] mx-auto py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-[55%_45%] gap-16 items-center">

          {/* Left column */}
          <motion.div variants={colVariants} initial="hidden" animate="visible">

            <motion.div variants={itemVariant}>
              <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
                No setup fee &middot; No contracts &middot; No runaround
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariant}
              className="font-display text-slate-900 mb-5 leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Get more customers{' '}
              <span className="gradient-text">online.</span>
              <br />
              Starting with a free website.
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="text-slate-500 text-[clamp(16px,2vw,18px)] max-w-[500px] mb-8 leading-relaxed"
            >
              We build it first at no cost. Then we run the ads, SEO, social growth and
              funnels that fill it with buyers.
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="flex gap-6 md:gap-10 flex-wrap mb-9"
            >
              {HERO_STATS.map(({ number, label }) => (
                <div key={label}>
                  <div className="font-display gradient-text text-[clamp(22px,3.5vw,28px)] font-black leading-none">
                    {number}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1">{label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="flex gap-3 flex-col sm:flex-row"
            >
              <Button
                href="/website"
                variant="primary"
                size="lg"
                onClick={() => trackCTA('Get my free website', 'hero')}
              >
                Get my free website →
              </Button>
              <Button href="/services" variant="outline" size="lg">
                See how it works
              </Button>
            </motion.div>

            <motion.p
              variants={itemVariant}
              className="mt-5 text-xs text-slate-400 font-medium"
            >
              Trusted by brands in 6 countries &middot; 75+ services in-house &middot; 7+ person team
            </motion.p>

          </motion.div>

          {/* Right column: pillar mini-cards, stacked in a grid */}
          <div className="hidden lg:block relative h-[420px]">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                className="absolute w-[46%]"
                style={{ top: GRID[i].top, left: GRID[i].left, padding: '2px' }}
              >
                {/* Float animation on inner wrapper to avoid conflict with Framer scale */}
                <div
                  className={pillar.float}
                  style={{ animationDelay: pillar.delay }}
                >
                  <div className="glass rounded-card-lg shadow-glass p-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5"
                      style={{ background: `${pillar.color}18` }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={pillar.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        {pillar.icon}
                      </svg>
                    </div>
                    <p className="font-display font-bold text-[13px] text-slate-900 leading-snug">
                      {pillar.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
