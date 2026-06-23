'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const STEPS = [
  {
    step:  'Audit',
    icon:  '🔎',
    desc:  'We review your accounts, content and competitors to find exactly where growth is being left on the table.',
  },
  {
    step:  'Strategy',
    icon:  '🗺️',
    desc:  'A clear 90-day roadmap — topics, formats, posting rhythm and the hooks that will actually stop the scroll.',
  },
  {
    step:  'Coaching',
    icon:  '📞',
    desc:  'Regular calls and content feedback while you execute. You stay in control; we make sure you\'re doing the right things.',
  },
  {
    step:  'Growth Sprint',
    icon:  '🚀',
    desc:  'Focused 30/60/90-day push — follower growth, reach and engagement all moving in the same direction.',
  },
]

const PLATFORMS = [
  { name: 'Instagram', icon: '📸', services: ['Reels strategy', 'Hook frameworks', 'Hashtag & SEO', 'Profile optimisation', 'Growth sprints'] },
  { name: 'YouTube',   icon: '▶️', services: ['Channel strategy', 'YouTube SEO', 'Title & thumbnail', 'Shorts strategy', 'Subscriber growth'] },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

export default function SocialGrowthSpotlight() {
  return (
    <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="max-w-[620px] mb-14">
          <div className="inline-flex items-center gap-1.5 bg-violet/[0.07] border border-violet/20 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-violet mb-5">
            📈 Social Growth
          </div>
          <h2 className="text-ink mb-4">
            Instagram and YouTube growth that&apos;s actually a strategy,{' '}
            <span className="gradient-text">not a posting schedule</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Viral reel frameworks, YouTube SEO, content coaching and scripts that build
            real audiences — not just follower counts. We focus on Instagram and YouTube
            because that&apos;s where your buyers actually are in 2026.
          </p>
        </div>

        {/* Platform cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {PLATFORMS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="bg-snow border-[1.5px] border-slate-200 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="text-[19px] text-ink">{p.name}</h3>
              </div>
              <ul className="space-y-2.5">
                {p.services.map((svc) => (
                  <li key={svc} className="flex items-center gap-2.5 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                    {svc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 4-step process */}
        <div className="mb-12">
          <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-8 text-center">
            How it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                className="relative bg-snow border-[1.5px] border-slate-200 rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-slate-200 z-10" />
                )}
                <div className="text-2xl mb-3">{s.icon}</div>
                <div
                  className="text-[10px] font-extrabold tracking-widest uppercase mb-1"
                  style={{ color: '#5b21b6' }}
                >
                  Step {i + 1}
                </div>
                <h3 className="text-[15px] text-ink mb-2">{s.step}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/services/social-growth" size="lg">
            See social growth services →
          </Button>
          <p className="text-xs text-slate-400 mt-4">
            Instagram growth sprints · YouTube strategy · Viral reel coaching · Content calendars
          </p>
        </div>

      </div>
    </section>
  )
}
