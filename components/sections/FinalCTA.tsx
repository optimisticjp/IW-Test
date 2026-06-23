'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-[clamp(80px,10vw,120px)] px-5 text-center"
      style={{ background: 'linear-gradient(135deg, #04091a 0%, #0b1238 45%, #04091a 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[700px] aspect-square rounded-full blur-3xl bg-violet/12 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative max-w-[620px] mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5">
          Ready when you are
        </div>

        <h2 className="text-slate-100 mb-5">
          Start with a free website.{' '}
          <span className="gradient-text">Grow it from there.</span>
        </h2>

        <p className="text-[#8ba3c0] text-[17px] leading-[1.7] max-w-[460px] mx-auto mb-11">
          Not sure where to start? We&apos;ll tell you honestly what your business needs first.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button href="/website" size="lg">
            Get your free website →
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Book a growth call
          </Button>
        </div>
      </motion.div>

    </section>
  )
}
