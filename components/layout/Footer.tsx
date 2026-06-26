import Link from 'next/link'
import { SITE, FOOTER_COLUMNS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-brand-800">
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 pt-16 md:pt-20 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-[240px_repeat(4,1fr)] gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-base font-black leading-none">
                ∞
              </div>
              <span className="text-sm font-extrabold text-slate-100 tracking-tighter3">
                {SITE.name}
              </span>
            </div>
            <p className="text-sm text-brand-300/70 leading-relaxed max-w-[220px] mb-5">
              Growth systems for ecommerce brands, creators and startups across global markets.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-800 border border-brand-700 flex items-center justify-center text-[11px] font-bold text-brand-300 hover:text-white hover:border-brand-500 focus-visible:text-white transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-800 border border-brand-700 flex items-center justify-center text-[11px] font-bold text-brand-300 hover:text-white hover:border-brand-500 focus-visible:text-white transition-colors"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-black text-slate-100 tracking-widest2 uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-brand-300 hover:text-white focus-visible:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-brand-400/60">
            &copy; {new Date().getFullYear()} {SITE.name}. Working remotely with teams across global markets.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-xs text-brand-400/60 hover:text-brand-300 focus-visible:text-brand-300 transition-colors"
          >
            {SITE.email}
          </a>
        </div>

      </div>
    </footer>
  )
}
