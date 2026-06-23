'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import { CASE_STUDIES, RESULTS_STATS } from '@/lib/case-studies'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

export default function ResultsPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-5 text-center"
        style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[640px] aspect-square rounded-full blur-3xl bg-brand/15 pointer-events-none animate-glow-pulse" />

        <div className="relative max-w-[680px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5"
          >
            Real results
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-100 text-[clamp(32px,5.5vw,58px)] mb-5"
          >
            Numbers our clients{' '}
            <span className="gradient-text">actually care about</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8ba3c0] text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[500px] mx-auto"
          >
            Revenue, users and growth — not impressions, reach or vanity metrics.
            Here&apos;s what we&apos;ve actually delivered.
          </motion.p>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <div className="bg-ink-mid border-b border-ink-border py-10 px-5">
        <div className="max-w-[1080px] mx-auto flex flex-wrap justify-around gap-6">
          {RESULTS_STATS.map(({ number, label }) => (
            <div key={label} className="text-center px-4">
              <div className="text-[clamp(28px,4.5vw,40px)] font-black tracking-tightest gradient-text">
                {number}
              </div>
              <div className="text-xs text-slate-600 mt-1 font-medium max-w-[140px] mx-auto leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CASE STUDIES ──────────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">

          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              Case studies
            </p>
            <h2 className="text-ink">What happened when we got to work</h2>
          </div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.id}
                variants={fadeUp}
                className="bg-white border-[1.5px] border-slate-200 rounded-3xl overflow-hidden"
              >
                <div className="flex flex-wrap">

                  {/* Result panel */}
                  <div
                    className="flex-[0_0_auto] w-full md:w-56 flex flex-col items-center justify-center p-8 text-center"
                    style={{ background: `${cs.accentColor}10`, borderRight: '1.5px solid #e2e8f0' }}
                  >
                    <div
                      className="text-[10px] font-extrabold tracking-widest uppercase mb-3"
                      style={{ color: cs.accentColor }}
                    >
                      {cs.category} · {cs.location}
                    </div>
                    <div
                      className="text-[clamp(22px,3.5vw,34px)] font-black tracking-tightest leading-none mb-1"
                      style={{ color: cs.accentColor }}
                    >
                      {cs.result}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{cs.resultContext}</div>

                    {/* Services badges */}
                    <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                      {cs.services.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{
                            background: `${cs.accentColor}15`,
                            color: cs.accentColor,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-7 md:p-8 min-w-0">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: cs.accentColor }}
                      />
                      <span className="text-sm font-bold text-ink">{cs.client}</span>
                    </div>

                    {/* Challenge */}
                    <div className="mb-5">
                      <p className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-2">
                        The challenge
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* Approach */}
                    <div className="mb-5">
                      <p className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 mb-2">
                        What we did
                      </p>
                      <ul className="space-y-1.5">
                        {cs.approach.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                              style={{ background: cs.accentColor }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    {cs.quote && (
                      <div
                        className="border-l-2 pl-4 py-1 mt-5"
                        style={{ borderColor: cs.accentColor }}
                      >
                        <p className="text-sm text-slate-500 italic leading-relaxed mb-2">
                          &ldquo;{cs.quote}&rdquo;
                        </p>
                        <p className="text-xs font-bold text-slate-400">
                          {cs.quoteName} · {cs.quoteRole}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ADD YOUR RESULT CTA ────────────────────────────── */}
      <section className="bg-snow py-16 px-5 border-b border-slate-100">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-4">
            Already a client?
          </p>
          <h2 className="text-[clamp(22px,4vw,34px)] text-ink mb-4">
            Want your results featured here?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-7">
            If we&apos;ve worked together and you&apos;re happy with the results,
            we&apos;d love to tell your story. Drop us a message.
          </p>
          <Button href="/contact" variant="outline" size="lg">
            Get in touch →
          </Button>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
