'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import MeshGradient from '@/components/ui/MeshGradient'
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
      <section className="relative overflow-hidden pt-28 pb-20 px-5 text-center bg-surface-soft">
        <MeshGradient intensity="low" />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative max-w-[760px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-500">{data.label}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5"
          >
            Built for {data.label}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-900 text-[clamp(30px,5.5vw,58px)] mb-5"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[580px] mx-auto mb-10"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 justify-center flex-wrap"
          >
            <Button href="/website" size="lg">Get your free website</Button>
            <Button href="/contact" variant="outline" size="lg">Book a growth call</Button>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────── */}
      <section className="bg-white py-12 px-5 border-b border-slate-100">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-6">
            Sound familiar?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.painPoints.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-left"
              >
                <span className="text-red-400 mt-0.5 shrink-0 font-bold text-sm">x</span>
                <span className="text-[13px] text-slate-600 leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6 leading-relaxed">
            We fix all of this, and we build your website first so you can see how before you commit.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="bg-surface-soft py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              Your growth stack
            </p>
            <h2 className="text-slate-900">
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
                  className="group block bg-white border-[1.5px] border-slate-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{svc.icon}</span>
                    <h3 className="text-[16px] text-slate-900 group-hover:text-brand-600 transition-colors">
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
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              The journey
            </p>
            <h2 className="text-slate-900">How it typically works</h2>
          </div>

          <div className="space-y-4">
            {data.journey.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-5 md:gap-8 items-start bg-surface-soft border-[1.5px] border-slate-200 rounded-2xl p-6"
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
                  <h3 className="text-[17px] text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULT / TESTIMONIAL ─────────────────────────── */}
      <section
        className="py-[clamp(48px,7vw,80px)] px-5 bg-surface-soft"
        style={{ borderTop: '1.5px solid #e2e8f0' }}
      >
        <div className="max-w-[680px] mx-auto text-center">
          <div
            className="text-[clamp(40px,7vw,64px)] font-black tracking-tightest mb-1"
            style={{ color: data.accentColor }}
          >
            {data.result.stat}
          </div>
          <p className="text-sm text-slate-500 mb-8">{data.result.context}</p>

          <GlassCard className="p-8 text-left">
            <blockquote className="text-[clamp(15px,2.5vw,17px)] text-slate-600 leading-[1.7] italic mb-6">
              &ldquo;{data.result.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                style={{ background: data.accentColor }}
              >
                {data.result.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{data.result.name}</div>
                <div className="text-xs text-slate-400">{data.result.role}</div>
              </div>
            </div>
          </GlassCard>

          <p className="text-xs text-slate-400 mt-4 italic">
            TODO: replace with real client testimonial when available.
          </p>
        </div>
      </section>

      {/* ── FREE WEBSITE CTA ─────────────────────────────── */}
      <section className="bg-white py-16 px-5 border-b border-slate-100">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,38px)] text-slate-900 mb-4">
            Start with a free website.{' '}
            <span className="gradient-text">See it before you pay anything.</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            We build your new site on a live link and you tell us what to change.
            You only continue, and pay, if you love what you see.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/website" size="lg">Get your free website</Button>
            <Button href="/contact" variant="outline" size="lg">Talk to us first</Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
