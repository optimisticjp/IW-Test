'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
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
      <section
        className="relative overflow-hidden pt-28 pb-20 px-5 text-center"
        style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

        {/* Glow blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[640px] aspect-square rounded-full blur-3xl pointer-events-none animate-glow-pulse"
          style={{ background: `${data.accentColor}18` }}
        />

        <div className="relative max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 text-xs text-slate-600">
            <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-500">{data.pillarLabel}</span>
          </div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase mb-5"
            style={{ color: '#82adf5' }}
          >
            {data.icon} {data.pillarLabel}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-100 text-[clamp(30px,5.5vw,58px)] mb-5"
          >
            {data.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8ba3c0] text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[560px] mx-auto mb-10"
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
            <Button href="/website" variant="ghost" size="lg">Or start with a free website</Button>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              What&apos;s included
            </p>
            <h2 className="text-ink">
              Every {data.pillarLabel.toLowerCase()} service we offer
            </h2>
          </div>

          {/* Service cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {data.services.map((svc) => (
              <motion.div
                key={svc.name}
                variants={fadeUp}
                className="bg-white border-[1.5px] border-slate-200 rounded-2xl p-6 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Accent dot */}
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ background: data.accentColor }}
                />

                {/* Name */}
                <h3 className="text-[17px] text-ink mb-2">{svc.name}</h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{svc.desc}</p>

                {/* Bullets */}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONNECTS TO ──────────────────────────────────────── */}
      <section className="bg-snow py-[clamp(48px,6vw,72px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-2">
              Part of a bigger system
            </p>
            <h2 className="text-[clamp(24px,4vw,36px)] text-ink">
              {data.pillarLabel} pairs well with
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.connectsTo.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-white border-[1.5px] border-slate-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{c.icon}</span>
                  <span className="text-sm font-bold text-ink group-hover:text-brand transition-colors">
                    {c.label}
                  </span>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">{c.desc}</p>
                <span className="inline-block mt-3 text-xs font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  See {c.label} services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <FinalCTA />
    </>
  )
}
