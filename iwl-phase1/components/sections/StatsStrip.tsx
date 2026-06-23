import { SITE_STATS } from '@/lib/constants'

export default function StatsStrip() {
  return (
    <div className="bg-ink-mid border-y border-ink-border py-10 md:py-12 px-5">
      <div className="max-w-[1080px] mx-auto flex flex-wrap justify-around gap-6">
        {SITE_STATS.map(({ number, label }) => (
          <div key={label} className="text-center px-4">
            <div className="text-[clamp(28px,4.5vw,40px)] font-black tracking-tightest gradient-text">
              {number}
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
