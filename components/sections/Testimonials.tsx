'use client'

import { TESTIMONIALS } from '@/lib/constants'

type Testimonial = typeof TESTIMONIALS[number]

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white border border-border rounded-card-xl p-6 w-[340px] shrink-0 flex flex-col">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, j) => (
          <span key={j} className="text-amber-400 text-sm">★</span>
        ))}
      </div>
      <p className="text-[14px] text-slate-700 leading-[1.7] italic mb-5 flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-extrabold text-sm shrink-0">
          {t.initial}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{t.name}</div>
          <div className="text-xs text-slate-400">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className="flex overflow-hidden gap-5">
      <div
        className={`flex gap-5 ${reverse ? 'animate-marquee-slow' : 'animate-marquee'}`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
        aria-hidden={reverse}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const extra: Testimonial[] = [
    {
      quote:   'The Local SEO work alone brought us ten new enquiries in the first week. The Google Business Profile setup was a game changer.',
      name:    'Tom B.',
      role:    'Owner',
      company: 'Trades Business, UK',
      initial: 'T',
    },
    {
      quote:   'We had tried two agencies before. Infinite Weblinks were the first to actually explain what they were doing and why it would work.',
      name:    'Aisha R.',
      role:    'Founder',
      company: 'DTC Brand, US',
      initial: 'A',
    },
    {
      quote:   'Our Instagram went from 800 followers to 11k in four months using their growth strategy. Leads from social are now our number two channel.',
      name:    'Leo F.',
      role:    'Creator',
      company: 'Content Creator, CA',
      initial: 'L',
    },
  ]

  const row1 = [...TESTIMONIALS, ...extra]
  const row2 = [...extra, ...TESTIMONIALS].reverse()

  return (
    <section className="bg-surface-soft py-[clamp(60px,8vw,96px)] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-5">
        <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
          Client results
        </div>
        <h2 className="text-slate-900">
          What our clients <span className="gradient-text">say</span>
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="space-y-5">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <p className="text-center text-xs text-slate-400 mt-8 italic px-5">
        Placeholder testimonials — replace with real client quotes in{' '}
        <code className="font-mono text-slate-500">lib/constants.ts</code>
      </p>
    </section>
  )
}
