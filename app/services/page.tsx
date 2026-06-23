'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import { PILLARS } from '@/lib/constants'

// Note: can't export metadata from a 'use client' component.
// Move metadata to a separate server component wrapper if needed.

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-5 text-center"
        style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[640px] aspect-square rounded-full blur-3xl bg-brand/15 pointer-events-none animate-glow-pulse" />

        <div className="relative max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5"
          >
            Everything we do
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-100 text-[clamp(32px,5.5vw,58px)] mb-5"
          >
            One team for your website and{' '}
            <span className="gradient-text">everything that grows it</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8ba3c0] text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[520px] mx-auto mb-10"
          >
            Start with what you need. Add more when you&apos;re ready. Every service
            is delivered by our in-house team — no outsourcing, no handoffs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 justify-center flex-wrap"
          >
            <Button href="/contact" size="lg">Get started →</Button>
            <Button href="/website" variant="ghost" size="lg">Start with a free website</Button>
          </motion.div>
        </div>
      </section>

      {/* All pillars */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {PILLARS.map((p) => (
              <motion.div key={p.title} variants={card}>
                <Link
                  href={p.href}
                  className="group block bg-white border-[1.5px] border-slate-200 rounded-2xl p-7 hover:border-brand/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 h-full"
                >
                  {/* Icon */}
                  <div className="text-3xl mb-4">{p.icon}</div>

                  {/* Title */}
                  <h2 className="text-[22px] text-ink mb-3 group-hover:text-brand transition-colors">
                    {p.title}
                  </h2>

                  {/* Desc */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{p.desc}</p>

                  {/* Services preview */}
                  <ul className="space-y-1.5 mb-5">
                    {p.services.slice(0, 4).map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-[12px] text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
                        {svc}
                      </li>
                    ))}
                    {p.services.length > 4 && (
                      <li className="text-[12px] text-slate-400 pl-3">
                        + {p.services.length - 4} more services
                      </li>
                    )}
                  </ul>

                  <span className="text-sm font-bold text-brand">
                    See {p.title.toLowerCase()} services →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Free website callout */}
      <section className="bg-snow py-16 px-5">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[11px] font-extrabold tracking-widest uppercase text-slate-400 mb-4">
            Not sure where to start?
          </p>
          <h2 className="text-[clamp(24px,4vw,38px)] text-ink mb-4">
            We build your website first — free.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            Most clients start with the free website. Once it&apos;s live and converting,
            we layer in the ads, SEO, funnels and retention that fill it.
          </p>
          <Button href="/website" size="lg">Get your free website</Button>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
