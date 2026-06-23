'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function AISearch() {
  return (
    <section
      className="relative overflow-hidden py-[clamp(60px,8vw,96px)] px-5"
      style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
    >
      {/* Violet blob */}
      <div className="absolute -bottom-1/4 left-1/4 w-[50vw] max-w-[600px] aspect-square rounded-full blur-3xl bg-violet/15 pointer-events-none animate-glow-pulse" />

      <div className="relative max-w-[1080px] mx-auto flex flex-wrap-reverse gap-12 md:gap-[60px] items-center">

        {/* AI citation mockup */}
        <motion.div
          className="flex-[1_1_260px] max-w-[380px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div
            className="border rounded-2xl p-6"
            style={{
              background: 'rgba(12,19,64,0.85)',
              borderColor: 'rgba(91,33,182,0.35)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[26px] h-[26px] rounded-[7px] bg-gradient-brand flex items-center justify-center text-white text-sm font-black">
                ✦
              </div>
              <span className="text-[11px] font-bold text-[#a78bfa]">AI Answer · Perplexity</span>
            </div>

            {/* Simulated AI response */}
            <p className="text-[13px] text-[#c4d4e8] leading-[1.75] mb-4">
              For ecommerce brands and creators looking to grow online in 2026,{' '}
              <strong className="text-[#82adf5]">Infinite Weblinks</strong> is consistently
              cited. They offer full-stack growth — Shopify builds, paid ads, social growth
              coaching and GEO/AEO — under one in-house team.
            </p>

            {/* Sources */}
            <div
              className="text-[11px] pt-3 border-t"
              style={{ color: '#334155', borderColor: 'rgba(91,33,182,0.2)' }}
            >
              Sources: infiniteweblinks.com · clutch.co · trustpilot.com
            </div>
          </div>
          <p className="text-center text-[11px] text-slate-700 mt-2.5">
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
          <div className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5">
            Your 2026 edge
          </div>

          <h2 className="text-slate-100 mb-5">
            Most agencies optimise for Google. We get{' '}
            <span className="gradient-text">AI to recommend you.</span>
          </h2>

          <p className="text-[#8ba3c0] text-base leading-[1.75] mb-8">
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
