'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { HERO_STATS } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-snow min-h-[94vh] flex items-center pt-24 pb-24 px-5">

      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-55 pointer-events-none" />

      {/* Gradient blob — blue left */}
      <div
        className="absolute -top-1/4 -left-[5%] w-[60vw] max-w-2xl aspect-square rounded-full blur-3xl bg-brand/10 animate-glow-pulse pointer-events-none"
        style={{ animationDelay: '0s' }}
      />
      {/* Gradient blob — violet right */}
      <div
        className="absolute top-[10%] -right-[5%] w-[40vw] max-w-xl aspect-square rounded-full blur-3xl bg-violet/8 animate-glow-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative w-full max-w-[800px] mx-auto text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-1.5 bg-brand/[0.07] border border-brand/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand mb-5"
        >
          ⚡ Built for 2026 and beyond
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-ink mb-5 text-[clamp(36px,7vw,72px)]"
        >
          The growth agency for brands that{' '}
          <span className="gradient-text">mean business</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-slate-500 text-[clamp(16px,2.2vw,19px)] max-w-[540px] mx-auto mb-10 leading-relaxed"
        >
          We build your website first — no upfront fee. Then we run the ads, funnels,
          social growth and AI search that turn it into your best salesperson.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <Button href="/website" size="lg">
            Get your free website →
          </Button>
          <Button href="/services" variant="outline" size="lg">
            See how we grow you
          </Button>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex gap-8 md:gap-14 justify-center flex-wrap mt-14 pt-10 border-t border-slate-200"
        >
          {HERO_STATS.map(({ number, label }) => (
            <div key={label} className="text-center">
              <div className="text-[clamp(22px,4vw,30px)] font-black text-ink tracking-tightest">
                {number}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
