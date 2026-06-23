'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import MeshGradient from '@/components/ui/MeshGradient'
import { trackCTA } from '@/lib/analytics'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-[clamp(80px,10vw,120px)] px-5 text-center">

      {/* Mesh gradient background */}
      <MeshGradient intensity="medium" />

      {/* Content */}
      <motion.div
        className="relative max-w-[620px] mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-1.5 bg-brand/[0.07] border border-brand/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand mb-5">
          Ready when you are
        </div>

        <h2 className="text-slate-900 mb-5">
          Start with a free website.{' '}
          <span className="gradient-text">Grow it from there.</span>
        </h2>

        <p className="text-slate-500 text-[17px] leading-[1.7] max-w-[460px] mx-auto mb-11">
          Not sure where to start? We&apos;ll tell you honestly what your business needs first.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            href="/website"
            size="lg"
            onClick={() => trackCTA('Get your free website', 'final-cta')}
          >
            Get your free website →
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            onClick={() => trackCTA('Book a growth call', 'final-cta')}
          >
            Book a growth call
          </Button>
        </div>
      </motion.div>

    </section>
  )
}
