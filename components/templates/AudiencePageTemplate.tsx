'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import type { AudiencePageData } from '@/lib/audience-pages'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

interface Props {
  data: AudiencePageData
}

export default function AudiencePageTemplate({ data }: Props) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-5 text-center"
        style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[640px] aspect-square rounded-full blur-3xl pointer-events-none animate-glow-pulse"
          style={{ background: `${data.accentColor}18` }}
        />

        <div className="relative max-w-[760px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 text-xs text-slate-600">
            <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-500">{data.label}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5"
          >
            Built for {data.label}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-100 text-[clamp(30px,5.5vw,58px)] mb-5"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8ba3c0] text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[580px] mx-auto mb-10"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 justify-center flex-wrap"
          >
            <Button href="/website" size="lg">Get your free website →</Button>
            <Button href="/contact" variant="ghost" size="lg">Book a growth call</Button>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────── */}
      <section className="bg-ink-mid border-b border-ink-border py-12 px-5">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-extrabold tracking-widest uppercase text-slate-600 mb-6">
            Sound familiar?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.painPoints.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 bg-ink-card border border-ink-border rounded-xl px-4 py-3.5 text-left"
              >
                <span className="text-slate-600 mt-0.5 shrink-0">✗</span>
                <span className="text-[13px] text-slate-500 leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-6">
            We fix all of this — and we build your website first so you can see how before you commit.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              Your growth stack
            </p>
            <h2 className="text-ink">
              What we do for {data.label.toLowerCase()}
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {data.services.map((svc) => (
              <motion.div key={svc.name} variants={fadeUp}>
                <Link
                  href={svc.href}
                  className="group block bg-white border-[1.5px] border-slate-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{svc.icon}</span>
                    <h3 className="text-[16px] text-ink group-hover:text-brand transition-colors">
                      {svc.name}
                    </h3>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-3">{svc.desc}</p>
                  <span
                    className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: data.accentColor }}
                  >
                    See full service →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="bg-snow py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              The journey
            </p>
            <h2 className="text-ink">How it typically works</h2>
          </div>

          <div className="space-y-4">
            {data.journey.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-5 md:gap-8 items-start bg-white border-[1.5px] border-slate-200 rounded-2xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-extrabold shrink-0"
                  style={{ background: data.accentColor }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[17px] text-ink mb-1.5">{step.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULT / TESTIMONIAL ─────────────────────────── */}
      <section
        className="py-[clamp(48px,7vw,80px)] px-5"
        style={{ background: `linear-gradient(135deg, ${data.accentColor}12 0%, ${data.accentColor}06 100%)` }}
      >
        <div className="max-w-[680px] mx-auto text-center">
          <div
            className="text-[clamp(40px,7vw,64px)] font-black tracking-tightest mb-1"
            style={{ color: data.accentColor }}
          >
            {data.result.stat}
          </div>
          <p className="text-sm text-slate-500 mb-8">{data.result.context}</p>

          <blockquote className="text-[clamp(16px,2.5vw,19px)] text-slate-600 leading-[1.7] italic mb-6">
            &ldquo;{data.result.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
              style={{ background: data.accentColor }}
            >
              {data.result.name[0]}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-ink">{data.result.name}</div>
              <div className="text-xs text-slate-400">{data.result.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE WEBSITE CTA ─────────────────────────────── */}
      <section className="bg-white py-16 px-5 border-b border-slate-100">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,38px)] text-ink mb-4">
            Start with a free website. <br className="hidden sm:block" />
            See it before you pay anything.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            We build your new site on a live link and you tell us what to change.
            You only continue — and pay — if you love what you see.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/website" size="lg">Get your free website →</Button>
            <Button href="/contact" variant="outline" size="lg">Talk to us first</Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
