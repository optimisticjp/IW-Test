'use client'

// TODO: Replace FOUNDER_NAME and FOUNDED_YEAR with real values before going live.

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import { SITE, MARKETS } from '@/lib/constants'
import MeshGradient from '@/components/ui/MeshGradient'

// TODO: replace with real founder name
const FOUNDER_NAME       = '[Founder Name]'
// TODO: replace with real founding year
const FOUNDED_YEAR       = '[Year]'
const FOUNDER_BACKGROUND = 'background in digital marketing and web development'
const FOUNDER_STORY = `I started Infinite Weblinks after watching too many good businesses get burned by agencies that charged upfront, delivered slow, and moved on to the next client. The free website model came from a simple belief: if we build it first, you can judge the work before committing to anything. That flips the usual agency dynamic on its head, and it turns out businesses respond well to being shown rather than sold.`

const DIFFERENTIATORS = [
  {
    icon:  '🏗️',
    title: 'We build before you pay',
    desc:  'The free website model isn\'t a gimmick — it\'s how we prove value. You see real work before money changes hands. Most agencies pitch; we build.',
  },
  {
    icon:  '👥',
    title: 'Everything in-house',
    desc:  '7+ specialists on the team, no outsourcing. When you work with us, the people you talk to are the people doing the work.',
  },
  {
    icon:  '🌍',
    title: 'Remote-first, global reach',
    desc:  'Based remotely, working with brands across the US, UK, Canada, Australia, New Zealand and Europe. No geographic limits on who we help.',
  },
  {
    icon:  '🤖',
    title: 'AI-forward, not AI-gimmicky',
    desc:  'GEO and AEO were part of our offer before most agencies could spell them. We use AI to work faster and help clients get found in the places their buyers actually search.',
  },
]

const VALUES = [
  {
    title: 'Build first, prove value, then grow together',
    desc:  'We\'d rather show you something real than sell you a promise. The free website is the clearest expression of that. If we can\'t impress you without taking your money first, we haven\'t earned your business.',
  },
  {
    title: 'Honest advice beats what you want to hear',
    desc:  'If you need Google Ads, we\'ll say so. If you need to fix your site first, we\'ll say that instead — even if it costs us a short-term sale. Long-term relationships are built on honest calls, not flattery.',
  },
  {
    title: 'One team means one direction',
    desc:  'Everything under one roof — website, ads, SEO, social, funnels, email — means every channel pulls in the same direction. The biggest waste in digital marketing isn\'t budget: it\'s agencies that don\'t talk to each other.',
  },
  {
    title: 'Results in the language of the business',
    desc:  'Revenue, repeat customers, users, bookings. Not impressions, reach or follower counts. We measure what the business actually cares about, and we report on it plainly.',
  },
]

const TEAM_FACTS = [
  { number: '7+',  label: 'In-house specialists'    },
  { number: '6',   label: 'Countries we serve'      },
  { number: '75+', label: 'Services we deliver'     },
  { number: '0',   label: 'Outsourced work'         },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-5 text-center bg-surface-soft">
        <MeshGradient intensity="low" />

        <div className="relative max-w-[680px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5"
          >
            Who we are
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-900 text-[clamp(32px,5.5vw,58px)] mb-5"
          >
            Built to grow businesses,{' '}
            <span className="gradient-text">not just build websites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[500px] mx-auto"
          >
            A remote team of specialists who believe the website is the beginning,
            not the deliverable. We build it first — then everything that makes it work.
          </motion.p>
        </div>
      </section>

      {/* ── FOUNDER STORY ─────────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto flex flex-wrap gap-12 md:gap-16 items-start">

          {/* Story */}
          <div className="flex-[1_1_320px]">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-5">
              The story
            </p>
            <h2 className="text-[clamp(24px,4vw,38px)] text-ink mb-5">
              Started by {FOUNDER_NAME}
            </h2>
            <p className="text-slate-500 text-base leading-[1.8] mb-5">
              {FOUNDER_STORY.trim()}
            </p>
            <p className="text-slate-500 text-base leading-[1.8]">
              Founded in {FOUNDED_YEAR} with a {FOUNDER_BACKGROUND}, {SITE.name} has grown
              into a full-stack growth agency serving ecommerce brands, creators, coaches
              and startups across six global markets.
            </p>
          </div>

          {/* Team facts */}
          <div className="flex-[0_1_220px]">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-5">
              By the numbers
            </p>
            <div className="space-y-5">
              {TEAM_FACTS.map(({ number, label }) => (
                <div key={label}>
                  <div className="text-[clamp(32px,5vw,44px)] font-black tracking-tightest gradient-text leading-none">
                    {number}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ───────────────────────── */}
      <section className="bg-snow py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              How we work
            </p>
            <h2 className="text-ink">What makes us different</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {DIFFERENTIATORS.map((d) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                className="bg-white border-[1.5px] border-slate-200 rounded-2xl p-7 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="text-[18px] text-ink mb-2">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ───────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              Our values
            </p>
            <h2 className="text-ink">What we believe</h2>
          </div>

          <div className="space-y-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex gap-5 md:gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand/[0.08] border border-brand/15 flex items-center justify-center text-brand text-xs font-black shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-[17px] text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE WORK ─────────────────────────────────── */}
      <section className="py-[clamp(48px,6vw,72px)] px-5 bg-brand-900">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-xs font-extrabold tracking-widest uppercase text-brand-300 mb-5">
            Remote-first · Global reach
          </p>
          <h2 className="text-slate-100 text-[clamp(24px,4vw,38px)] mb-5">
            We work with brands everywhere
          </h2>
          <p className="text-slate-300 text-base leading-[1.7] max-w-[520px] mx-auto mb-10">
            No office. No geographic limits. Everything happens over email, WhatsApp
            and shared links — which means we can take on the best clients,
            not just the nearest ones.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {MARKETS.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2"
              >
                <span className="text-base">{m.flag}</span>
                <span className="text-xs font-medium text-brand-300">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-16 px-5 border-b border-slate-100">
        <div className="max-w-[580px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] text-ink mb-4">
            Ready to work together?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            Start with a free website — no upfront cost, no obligation.
            See what we build, then decide if you want to continue.
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
