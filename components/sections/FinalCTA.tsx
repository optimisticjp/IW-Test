'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { trackCTA } from '@/lib/analytics'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-[clamp(80px,10vw,120px)] px-5 text-center min-h-[60vh] flex items-center">

      {/* Blobs */}
      <div
        className="blob bg-brand-700 w-[500px] h-[500px] opacity-40 animate-gradient-move"
        style={{ top: '-20%', left: '-10%' }}
      />
      <div
        className="blob bg-accent w-[350px] h-[350px] opacity-20 animate-gradient-move"
        style={{ bottom: '-10%', right: '-5%', animationDelay: '5s', animationDirection: 'alternate-reverse' }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-[620px] mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-1.5 border border-white/20 bg-white/10 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-white/80 mb-5">
          Ready when you are
        </div>

        <h2 className="text-white mb-5 text-[clamp(28px,5vw,46px)]">
          Start with a free website.{' '}
          <span className="opacity-70">Grow it from there.</span>
        </h2>

        <p className="text-brand-200 text-[17px] leading-[1.7] max-w-[460px] mx-auto mb-11">
          Not sure where to start? We&apos;ll tell you honestly what your business needs first.
        </p>

        <div className="flex gap-3 justify-center flex-col sm:flex-row">
          <Button
            href="/website"
            size="lg"
            className="bg-white text-brand-700 hover:bg-brand-50 shadow-none hover:shadow-none border-0"
            onClick={() => trackCTA('Get your free website', 'final-cta')}
          >
            Get my free website →
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
