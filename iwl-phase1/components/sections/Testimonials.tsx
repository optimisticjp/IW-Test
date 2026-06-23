'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Testimonials() {
  return (
    <section className="bg-snow py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand/[0.07] border border-brand/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand mb-5">
            Results
          </div>
          <h2 className="text-ink">What our clients say</h2>
          {/* Remove this note once you have real testimonials */}
          <p className="text-xs text-slate-400 mt-2">
            Replace placeholder testimonials with real ones in <code className="font-mono text-slate-500">lib/constants.ts</code>
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={card}
              className="bg-white border-[1.5px] border-slate-200 rounded-2xl p-7 hover:shadow-card transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-slate-500 leading-[1.7] mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
