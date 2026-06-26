'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { number: 12,  suffix: '+', label: 'Countries served'       },
  { number: 98,  suffix: '%', label: 'Client retention rate'  },
  { number: 3,   suffix: '×', label: 'Average traffic growth' },
  { number: 0,   prefix: '£', label: 'Upfront to start'       },
]

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [value, setValue]   = useState(0)
  const ref                 = useRef<HTMLSpanElement>(null)
  const hasRun              = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        const duration = 1800
        const start    = performance.now()
        const animate  = (now: number) => {
          const elapsed  = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased    = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section className="bg-brand-600 py-[clamp(48px,7vw,72px)] px-5">
      <div className="max-w-[1080px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {STATS.map(({ number, prefix, suffix, label }) => (
          <div key={label} className="text-center">
            <div className="font-display text-white font-black tracking-tightest text-[clamp(36px,5vw,56px)] leading-none mb-2">
              <CountUp target={number} prefix={prefix} suffix={suffix} />
            </div>
            <div className="text-brand-200 text-sm font-medium">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
