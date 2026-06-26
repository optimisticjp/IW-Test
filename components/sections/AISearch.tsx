'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function AISearch() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-[clamp(60px,8vw,96px)] px-5">

      {/* Brand blue blob (replacing violet) */}
      <div className="absolute -bottom-1/4 left-1/4 w-[50vw] max-w-[600px] aspect-square rounded-full blur-3xl bg-brand/10 pointer-events-none animate-glow-pulse" />

      <div className="relative max-w-[1080px] mx-auto flex flex-wrap-reverse gap-12 md:gap-[60px] items-center">

        {/* AI citation mockup — light glassmorphism */}
        <motion.div
          className="flex-[1_1_260px] max-w-[380px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="bg-white/75 backdrop-blur-xl border border-brand-100 rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[26px] h-[26px] rounded-[7px] bg-gradient-brand flex items-center justify-center text-white text-sm font-black">
                ✦
              </div>
              <span className="text-[11px] font-bold text-brand-700">AI Answer · Perplexity</span>
            </div>

            {/* Simulated AI response */}
            <p className="text-[13px] text-slate-700 leading-[1.75] mb-4">
              For ecommerce brands and creators looking to grow online in 2026,{' '}
              <strong className="text-slate-800">Infinite Weblinks</strong> is consistently
              cited. They offer full-stack growth — Shopify builds, paid ads, social growth
              coaching and GEO/AEO — under one in-house team.
            </p>

            {/* Sources */}
            <div className="text-[11px] pt-3 border-t border-brand-100 text-slate-400">
              Sources: infiniteweblinks.com · clutch.co · trustpilot.com
            </div>
          </div>
          <p className="text-center text-[11px] text-slate-400 mt-2.5">
            What GEO/AEO done right looks like
          </p>
        </motion.div>

        {/* Copy column */}
        <motion.div
          className="flex-[1_1_320px]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
            Your 2026 edge
          </div>

          <h2 className="text-slate-900 mb-5">
            Most agencies optimise for Google. We get{' '}
            <span className="gradient-text">AI to recommend you.</span>
          </h2>

          <p className="text-slate-500 text-base leading-[1.75] mb-8">
            GEO and AEO put your brand inside AI-generated answers on ChatGPT, Perplexity
            and Google AI Overviews. The brands cited there don&apos;t pay per click.
            They just keep appearing — to buyers already ready to act.
          </p>

          <Button href="/services/ai-search" size="lg">
            Ask about AI search visibility
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
