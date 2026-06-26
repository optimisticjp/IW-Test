import { MARKETS } from '@/lib/constants'

const BADGES = [
  ...MARKETS,
  { flag: '💼', name: '$0 upfront to start'      },
  { flag: '⚡', name: '90+ PageSpeed target'     },
  { flag: '🤝', name: 'No long-term contracts'   },
  { flag: '🌍', name: '7+ person in-house team'  },
  { flag: '📈', name: '75+ services available'   },
]

function MarqueeRow({ items, reverse }: { items: typeof BADGES; reverse?: boolean }) {
  const content = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex gap-6 md:gap-10 whitespace-nowrap ${reverse ? 'animate-marquee-slow' : 'animate-marquee'}`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
        aria-hidden={reverse}
      >
        {content.map((m, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium shrink-0">
            <span className="text-base">{m.flag}</span>
            {m.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProofStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-4 overflow-hidden">
      <div className="mb-3">
        <MarqueeRow items={BADGES} />
      </div>
      <MarqueeRow items={[...BADGES].reverse()} reverse />
    </div>
  )
}
