import Link from 'next/link'

const SERVICES = [
  { label: 'Websites & Stores',    href: '/services/build'        },
  { label: 'Paid Growth',          href: '/services/paid-ads'     },
  { label: 'Social & Creator',     href: '/services/social-growth'},
  { label: 'SEO & AI Search',      href: '/services/ai-search'    },
  { label: 'Funnels & Conversion', href: '/services/funnels'      },
  { label: 'Email & CRM',          href: '/services/retain-scale' },
]

const COMPANY = [
  { label: 'About',        href: '/about'   },
  { label: 'Results',      href: '/results' },
  { label: 'Free Website', href: '/website' },
  { label: 'Contact',      href: '/contact' },
]

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl text-white">Infinite</span>
              <span className="font-display font-extrabold text-xl text-brand-400">Weblinks</span>
            </Link>
            <p className="text-brand-500 text-sm mt-2 leading-relaxed max-w-[200px]">
              Grow your business digitally.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { label: 'Instagram', href: '#', Icon: InstagramIcon },
                { label: 'LinkedIn',  href: '#', Icon: LinkedInIcon  },
                { label: 'X',         href: '#', Icon: XIcon         },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-brand-900 border border-brand-800 flex items-center justify-center text-brand-400 hover:text-white hover:bg-brand-800 hover:border-brand-700 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-400 text-sm hover:text-white transition-colors py-0.5 block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-400 text-sm hover:text-white transition-colors py-0.5 block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get Started */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-5">Start today</h4>
            <p className="text-brand-400 text-sm leading-relaxed mt-1">
              Your free website is one conversation away.
            </p>
            <Link
              href="/website"
              className="mt-5 w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors text-center block"
            >
              Get a free website →
            </Link>
            <p className="text-brand-600 text-xs mt-3 text-center">No upfront cost · No long contracts</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-900 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-700 text-xs">
            &copy; 2026 Infinite Weblinks Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-brand-700 text-xs hover:text-brand-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms"           className="text-brand-700 text-xs hover:text-brand-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
