'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PILLARS } from '@/lib/constants'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as number[] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}

export default function Pillars() {
  return (
    <section className="bg-surface-soft py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
            What we do
          </div>
          <h2 className="text-slate-900">Six ways to grow your business</h2>
          <p className="text-slate-500 text-base max-w-[440px] mx-auto mt-4">
            Start with what you need. Add more when you&apos;re ready.
          </p>
        </div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {PILLARS.map((p, i) => {
            const isFeatured = i === 0 || i === 3
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className={isFeatured ? 'sm:col-span-2' : ''}
              >
                <Link
                  href={p.href}
                  className={`group flex flex-col h-full rounded-card-lg p-6 border transition-all duration-200 hover:-translate-y-0.5 ${
                    i === 0
                      ? 'bg-gradient-to-br from-brand-600 to-brand-800 text-white border-brand-700 hover:shadow-glow-sm'
                      : i === 3
                      ? 'bg-gradient-to-br from-slate-900 to-brand-950 text-white border-slate-800 hover:shadow-glow-sm'
                      : 'bg-white border-border hover:border-brand-300 hover:shadow-card-md'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[28px] leading-none ${i === 0 || i === 3 ? 'brightness-110' : ''}`}>
                      {p.icon}
                    </span>
                    <span className={`text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity ${i === 0 || i === 3 ? 'text-white/70' : 'text-brand-600'}`}>
                      Explore →
                    </span>
                  </div>

                  <h3 className={`text-[17px] mb-2 ${i === 0 || i === 3 ? 'text-white' : 'text-slate-900'}`}>
                    {p.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed flex-1 ${i === 0 || i === 3 ? 'text-white/75' : 'text-slate-500'}`}>
                    {p.desc}
                  </p>

                  {isFeatured && (
                    <ul className="mt-4 pt-4 border-t border-white/20 flex flex-wrap gap-2">
                      {p.services.slice(0, 3).map((svc) => (
                        <li
                          key={svc}
                          className="text-[11px] font-medium bg-white/15 rounded-full px-2.5 py-1 text-white/90"
                        >
                          {svc}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
