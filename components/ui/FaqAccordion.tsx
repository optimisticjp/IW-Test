'use client'

import { useState } from 'react'
import GlassCard from '@/components/ui/GlassCard'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <GlassCard key={item.q} className="overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 rounded-2xl"
            aria-expanded={open === i}
          >
            <span className="text-[15px] font-bold text-slate-900">{item.q}</span>
            <span
              className="text-brand-600 text-xl font-light shrink-0 transition-transform duration-200"
              aria-hidden="true"
              style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-[13px] text-slate-500 leading-relaxed">{item.a}</p>
            </div>
          )}
        </GlassCard>
      ))}
    </div>
  )
}
