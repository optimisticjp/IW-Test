'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import MeshGradient from '@/components/ui/MeshGradient'
import GlassCard from '@/components/ui/GlassCard'
import FinalCTA from '@/components/sections/FinalCTA'
import type { ServicePageData } from '@/lib/service-pages'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

interface Props {
  data: ServicePageData
}

export default function ServicePageTemplate({ data }: Props) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-5 text-center bg-surface-soft">
        <MeshGradient intensity="low" />
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

        <div className="relative max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-500">{data.pillarLabel}</span>
          </div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5"
          >
            {data.icon} {data.pillarLabel}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-900 text-[clamp(30px,5.5vw,58px)] mb-5"
          >
            {data.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[560px] mx-auto mb-10"
          >
            {data.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 justify-center flex-wrap"
          >
            <Button href="/contact" size="lg">Get started →</Button>
            <Button href="/website" variant="outline" size="lg">Or start with a free website</Button>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              What&apos;s included
            </p>
            <h2 className="text-slate-900">
              Every {data.pillarLabel.toLowerCase()} service we offer
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {data.services.map((svc) => (
              <motion.div key={svc.name} variants={fadeUp}>
                <GlassCard hover className="p-6 h-full">
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ background: data.accentColor }}
                  />
                  <h3 className="text-[17px] text-slate-900 mb-2">{svc.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[12px] text-slate-500">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: data.accentColor }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONNECTS TO ──────────────────────────────────────── */}
      <section className="bg-surface-soft py-[clamp(48px,6vw,72px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-2">
              Part of a bigger system
            </p>
            <h2 className="text-[clamp(24px,4vw,36px)] text-slate-900">
              {data.pillarLabel} pairs well with
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.connectsTo.map((c) => (
              <Link key={c.href} href={c.href} className="group">
                <GlassCard hover className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{c.icon}</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {c.label}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{c.desc}</p>
                  <span className="inline-block mt-3 text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    See {c.label} services →
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
