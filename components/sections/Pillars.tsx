'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PILLARS } from '@/lib/constants'

export default function Pillars() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand/[0.07] border border-brand/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand mb-5">
            What we do
          </div>
          <h2 className="text-ink">Six ways to grow your business</h2>
          <p className="text-slate-500 text-base max-w-[440px] mx-auto mt-4">
            Start with what you need. Add more when you&apos;re ready.
          </p>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={p.title}
                layout
                className="bg-white border-[1.5px] border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-brand/40 hover:-translate-y-0.5 hover:bg-blue-50/30 transition-all duration-200"
                onClick={() => toggle(i)}
              >
                {/* Top row */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[30px] leading-none">{p.icon}</span>
                  <span className="text-xs text-slate-400 font-semibold mt-1">
                    {isOpen ? '▲' : '▼'}
                  </span>
                </div>

                {/* Title + desc */}
                <h3 className="text-[18px] text-ink mb-2">{p.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{p.desc}</p>

                {/* Expanded services list */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                        {p.services.map((svc) => (
                          <li key={svc} className="flex items-center gap-2 text-[13px] text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                            {svc}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={p.href}
                        className="inline-block mt-4 text-[13px] font-bold text-brand hover:opacity-70 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        See all {p.title.toLowerCase()} services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
