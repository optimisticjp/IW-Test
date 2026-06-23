'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CASE_STUDIES } from '@/lib/case-studies'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Shows the first 3 case studies from lib/case-studies.ts
const HIGHLIGHTS = CASE_STUDIES.slice(0, 3)

export default function ResultsHighlights() {
  return (
    <section className="bg-snow py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-brand/[0.07] border border-brand/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand mb-4">
              Results
            </div>
            <h2 className="text-ink">What happened when we got to work</h2>
          </div>
          <Link
            href="/results"
            className="text-sm font-bold text-brand hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            See all case studies →
          </Link>
        </div>

        {/* Case study cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {HIGHLIGHTS.map((cs) => (
            <motion.div
              key={cs.id}
              variants={card}
              className="bg-white border-[1.5px] border-slate-200 rounded-2xl overflow-hidden hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Accent bar */}
              <div className="h-1 w-full" style={{ background: cs.accentColor }} />

              <div className="p-6">
                {/* Category + location */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: `${cs.accentColor}12`, color: cs.accentColor }}
                  >
                    {cs.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{cs.location}</span>
                </div>

                {/* Result — the big number */}
                <div
                  className="text-[clamp(22px,3.5vw,30px)] font-black tracking-tightest leading-none mb-1"
                  style={{ color: cs.accentColor }}
                >
                  {cs.result}
                </div>
                <div className="text-xs text-slate-400 mb-4">{cs.resultContext}</div>

                {/* What we did — first 2 points */}
                <ul className="space-y-1.5 mb-5">
                  {cs.approach.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-slate-500">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{ background: cs.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                  {cs.approach.length > 2 && (
                    <li className="text-[12px] text-slate-400 pl-3.5">
                      + {cs.approach.length - 2} more
                    </li>
                  )}
                </ul>

                {/* Service tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.services.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-bold px-2 py-1 rounded-lg"
                      style={{ background: `${cs.accentColor}10`, color: cs.accentColor }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/results" variant="outline" size="lg">
            See full case studies →
          </Button>
        </div>

      </div>
    </section>
  )
}
