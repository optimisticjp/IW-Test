import Link from 'next/link'
import { PILLARS } from '@/lib/constants'

export default function ServicesGrid() {
  return (
    <section className="bg-surface-soft border-t border-slate-100 py-[clamp(60px,8vw,96px)] px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
            The full picture
          </p>
          <h2 className="text-slate-900">Everything we do</h2>
          <p className="text-slate-500 text-sm mt-3 max-w-[400px] mx-auto">
            75+ services across 6 growth pillars. All delivered in-house.
          </p>
        </div>

        {/* 3-column grid of pillar sections */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {PILLARS.map((pillar) => (
            <div key={pillar.title}>

              {/* Pillar header */}
              <Link
                href={pillar.href}
                className="group flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
              >
                <span className="text-lg">{pillar.icon}</span>
                <span className="text-sm font-extrabold text-slate-900 group-hover:text-brand transition-colors">
                  {pillar.title}
                </span>
                <span className="text-xs text-slate-400 ml-auto hidden sm:block">→</span>
              </Link>

              {/* Service names */}
              <ul className="space-y-2">
                {pillar.services.map((svc) => (
                  <li
                    key={svc}
                    className="text-[12px] text-slate-500 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                    {svc}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            Not sure which services you need? We&apos;ll tell you honestly.
          </p>
          <Link
            href="/contact"
            className="text-sm font-bold text-brand hover:opacity-70 transition-opacity"
          >
            Book a free call →
          </Link>
        </div>

      </div>
    </section>
  )
}
