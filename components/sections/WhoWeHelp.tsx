'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AUDIENCES } from '@/lib/constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WhoWeHelp() {
  return (
    <section className="bg-surface-soft py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
            Who we work with
          </div>
          <h2 className="text-slate-900">One agency. Three kinds of growth.</h2>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          {AUDIENCES.map((a) => (
            <motion.div
              key={a.label}
              variants={card}
              className="bg-white/75 backdrop-blur-xl border border-white/80 shadow-glass rounded-2xl p-7 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Accent bar */}
              <div
                className="h-1 w-full rounded-full mb-6"
                style={{ background: a.accentColor }}
              />

              {/* Label */}
              <p
                className="text-[10px] font-black tracking-widest2 uppercase mb-3"
                style={{ color: a.accentColor }}
              >
                {a.label}
              </p>

              {/* Title */}
              <h3 className="text-[clamp(17px,2.5vw,20px)] text-slate-900 mb-3">{a.title}</h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{a.desc}</p>

              {/* Services list */}
              <ul className="mb-6 space-y-0">
                {a.services.map((svc) => (
                  <li
                    key={svc}
                    className="text-[13px] text-slate-500 py-1.5 border-b border-slate-100 last:border-0 flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: a.accentColor }}
                    />
                    {svc}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={a.href}
                className="text-sm font-bold transition-opacity hover:opacity-70"
                style={{ color: a.accentColor }}
              >
                {a.cta} →
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
