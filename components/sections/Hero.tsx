'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import MeshGradient from '@/components/ui/MeshGradient'
import GlassCard from '@/components/ui/GlassCard'
import { trackCTA } from '@/lib/analytics'
import { HERO_STATS } from '@/lib/constants'

const PILLARS = [
  {
    title: 'Websites & Stores',
    icon: (
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    title: 'Paid Growth',
    icon: (
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    title: 'Social & Creator Growth',
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: 'SEO & AI Search',
    icon: (
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: 'Funnels & Conversion',
    icon: (
      <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    ),
  },
  {
    title: 'Email / CRM / Retention',
    icon: (
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[clamp(60px,8vw,96px)] px-5 min-h-[540px] flex items-center bg-surface-soft">

      {/* Mesh gradient background */}
      <MeshGradient intensity="medium" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-[1080px] mx-auto">
        <div className="lg:grid lg:grid-cols-[55%_45%] gap-12 items-center">

          {/* ── Left column: copy ── */}
          <div>

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.04em] uppercase text-brand-700 mb-5"
            >
              No setup fee &middot; No contracts &middot; No runaround
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
              className="font-display text-slate-900 mb-5 leading-[1.08] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5.5vw, 62px)' }}
            >
              Get more customers{' '}
              <span className="gradient-text">online</span>
              {' '}— starting with a free website.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
              className="text-slate-500 text-[clamp(16px,2vw,18px)] max-w-[500px] mb-8 leading-relaxed"
            >
              We build it first at no cost. Then we run the ads, SEO, social growth and
              funnels that fill it with buyers.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
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

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              className="flex gap-3 flex-wrap"
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

          </div>

          {/* ── Right column: pillar cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-3 mt-12 lg:mt-0"
          >
            {PILLARS.map((pillar, i) => (
              <GlassCard
                key={pillar.title}
                className={`p-4 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200${i === 0 ? ' animate-float' : ''}`}
                style={i === 0 ? { animationDuration: '6s' } : undefined}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#075aaa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    {pillar.icon}
                  </svg>
                </div>
                <p className="text-xs font-bold text-slate-700 mt-2 leading-snug">
                  {pillar.title}
                </p>
              </GlassCard>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
