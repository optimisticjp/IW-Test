'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { FREE_WEBSITE_POINTS, WEBSITE_CARD_ROWS } from '@/lib/constants'
import { trackCTA } from '@/lib/analytics'

export default function FreeWebsite() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 py-[clamp(60px,8vw,96px)] px-5">

      {/* Background blob */}
      <div className="absolute -top-1/4 right-0 w-[45vw] max-w-[520px] aspect-square rounded-full blur-3xl bg-white/10 pointer-events-none animate-glow-pulse" />

      <div className="relative max-w-[1080px] mx-auto flex flex-wrap gap-12 md:gap-[60px] items-center">

        {/* Copy column */}
        <motion.div
          className="flex-[1_1_320px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-1.5 bg-white/20 border border-white/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-white mb-5">
            The Infinite Weblinks promise
          </div>

          <h2 className="text-white mb-5">
            We build your site first.{' '}
            <span className="gradient-text">You decide after.</span>
          </h2>

          <p className="text-slate-100 text-base leading-[1.75] mb-8">
            Most agencies take a deposit before you&apos;ve seen a pixel. We build your real,
            working website and send you a live link. Love it — we connect your domain.
            Don&apos;t — you walk away with nothing owed.
          </p>

          <ul className="mb-9 space-y-3.5">
            {FREE_WEBSITE_POINTS.map(({ bold, desc }) => (
              <li key={bold} className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-white font-bold">✓</span>
                </span>
                <span className="text-sm text-slate-100 leading-relaxed">
                  <strong className="text-white font-bold">{bold}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>

          <Button
            href="/website"
            size="lg"
            variant="ghost"
            onClick={() => trackCTA('Get my free website', 'free-website')}
          >
            Get your free website →
          </Button>
        </motion.div>

        {/* Stats card — glassy dark card (website preview mockup) */}
        <motion.div
          className="flex-[1_1_260px] max-w-[340px]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7">
            {/* Status bar */}
            <div className="flex items-center gap-2 mb-5 text-[11px] text-slate-200 font-bold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
              Your new site · Live preview
            </div>

            {/* Stats rows */}
            {WEBSITE_CARD_ROWS.map(({ label, value, valueColor }) => (
              <div
                key={label}
                className="flex justify-between items-center py-3 border-b border-white/15 last:border-0"
              >
                <span className="text-[13px] text-slate-200">{label}</span>
                <span className="text-[13px] font-bold" style={{ color: valueColor }}>
                  {value}
                </span>
              </div>
            ))}

            {/* Quote */}
            <p className="mt-5 text-[12px] text-slate-200 leading-relaxed italic">
              &ldquo;We&apos;d rather earn your business by showing you a website worth paying for.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
