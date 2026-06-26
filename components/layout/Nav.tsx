'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { SITE } from '@/lib/constants'

const SERVICES_MENU = {
  featured: {
    name:        'Websites & Stores',
    description: 'We build your website first. No setup fee, no upfront cost. You approve before anything goes live.',
    href:        '/services/build',
  },
  items: [
    { name: 'Paid Growth',             desc: 'Google, Meta and TikTok ads managed for you.',  href: '/services/paid-ads'      },
    { name: 'Social & Creator Growth', desc: 'Build an audience that converts to revenue.',    href: '/services/social-growth' },
    { name: 'SEO & AI Search',         desc: 'Rank in Google and AI tools like ChatGPT.',     href: '/services/ai-search'     },
    { name: 'Funnels & Conversion',    desc: 'Turn website visitors into paying customers.',   href: '/services/funnels'       },
    { name: 'Email & CRM',             desc: 'Automation, retention and loyalty systems.',     href: '/services/retain-scale'  },
  ],
}

const AUDIENCE_MENU = [
  { name: 'Ecommerce & Shopify', desc: 'More sales, better conversions.',   href: '/for/ecommerce', emoji: '🛍️' },
  { name: 'Creators & Coaches',  desc: 'Turn followers into customers.',     href: '/for/creators',  emoji: '🎯' },
  { name: 'Startups',            desc: 'Launch fast, grow smart.',           href: '/for/startups',  emoji: '🚀' },
  { name: 'Local Businesses',    desc: 'More local leads and bookings.',     href: '/for/local',     emoji: '📍' },
]

type MenuKey = 'services' | 'audience' | null

export default function Nav() {
  const pathname                        = usePathname()
  const [scrolled, setScrolled]         = useState(false)
  const [activeMenu, setActiveMenu]     = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileAudience, setMobileAudience] = useState(false)
  const closeTimer                      = useRef<ReturnType<typeof setTimeout>>()

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMenu  = (key: MenuKey) => { clearTimeout(closeTimer.current); setActiveMenu(key) }
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 160) }
  const cancelClose   = () => clearTimeout(closeTimer.current)

  return (
    <>
      {/* ── NAV BAR ──────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 font-display font-extrabold text-[19px] tracking-tight focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:outline-none rounded"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-slate-900">Infinite</span>
            <span className="text-gradient">Weblinks</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {/* Services trigger */}
            <li
              onMouseEnter={() => openMenu('services')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeMenu === 'services' ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={activeMenu === 'services'}
                aria-haspopup="true"
              >
                Services
                <ChevronDownIcon
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`}
                />
              </button>
            </li>

            {/* For Your Business trigger */}
            <li
              onMouseEnter={() => openMenu('audience')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeMenu === 'audience' ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={activeMenu === 'audience'}
                aria-haspopup="true"
              >
                For Your Business
                <ChevronDownIcon
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === 'audience' ? 'rotate-180' : ''}`}
                />
              </button>
            </li>

            {[
              { label: 'Free Website', href: '/website', accent: true },
              { label: 'Results',      href: '/results', accent: false },
              { label: 'About',        href: '/about',   accent: false },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:outline-none ${
                    link.accent
                      ? 'text-brand-600 font-semibold hover:bg-brand-50'
                      : pathname === link.href
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/website"
              className="inline-flex items-center gap-1.5 bg-gradient-brand text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-btn hover:shadow-btn-lg hover:scale-[1.02] active:scale-[0.99] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Get a free website
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:outline-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      {/* ── MEGA MENU PANELS ─────────────────────────────────── */}
      {activeMenu && (
        <div
          className="fixed top-16 left-0 right-0 z-40 shadow-mega"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-8 py-8">

              {/* SERVICES panel */}
              {activeMenu === 'services' && (
                <div className="flex gap-8">
                  {/* Featured (left 1/3) */}
                  <Link
                    href={SERVICES_MENU.featured.href}
                    className="group flex-shrink-0 w-72 bg-brand-50 rounded-2xl p-6 border border-brand-100 hover:border-brand-200 hover:bg-brand-50 transition-colors"
                    onClick={() => setActiveMenu(null)}
                  >
                    <span className="inline-flex text-xs bg-brand-100 text-brand-700 font-semibold px-2.5 py-1 rounded-full">
                      Start here — free
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 mt-3">
                      {SERVICES_MENU.featured.name}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      {SERVICES_MENU.featured.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-brand-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Get started free <ArrowRightIcon size={14} />
                    </span>
                  </Link>

                  {/* Service links (right 2/3) */}
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICES_MENU.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="font-display font-semibold text-sm text-slate-900 group-hover:text-brand-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 mt-5 pt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Not sure where to start?</span>
                      <Link
                        href="/website"
                        className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                        onClick={() => setActiveMenu(null)}
                      >
                        Get a free website — no cost to start <ArrowRightIcon size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* AUDIENCE panel */}
              {activeMenu === 'audience' && (
                <div className="grid grid-cols-4 gap-3">
                  {AUDIENCE_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-5 rounded-xl hover:bg-slate-50 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="text-3xl leading-none">{item.emoji}</span>
                      <div className="font-display font-semibold text-sm text-slate-900 mt-3 group-hover:text-brand-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE DRAWER ────────────────────────────────────── */}
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 shrink-0">
          <Link
            href="/"
            className="font-display font-extrabold text-[18px] tracking-tight flex items-center gap-1"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-slate-900">Infinite</span>
            <span className="text-gradient">Weblinks</span>
          </Link>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto px-5 py-3">

          {/* Services accordion */}
          <div className="border-b border-slate-100">
            <button
              className="flex items-center justify-between w-full py-4 text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
              onClick={() => setMobileServices((s) => !s)}
            >
              Services
              <ChevronDownIcon size={16} className={`transition-transform duration-200 text-slate-400 ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="pb-3 space-y-0.5">
                <Link
                  href={SERVICES_MENU.featured.href}
                  className="flex items-center gap-2 py-2.5 pl-3 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <ChevronRightIcon size={14} />
                  {SERVICES_MENU.featured.name}
                </Link>
                {SERVICES_MENU.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 py-2.5 pl-3 text-sm text-slate-500 hover:text-brand-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <ChevronRightIcon size={14} />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* For Your Business accordion */}
          <div className="border-b border-slate-100">
            <button
              className="flex items-center justify-between w-full py-4 text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
              onClick={() => setMobileAudience((s) => !s)}
            >
              For Your Business
              <ChevronDownIcon size={16} className={`transition-transform duration-200 text-slate-400 ${mobileAudience ? 'rotate-180' : ''}`} />
            </button>
            {mobileAudience && (
              <div className="pb-3 space-y-0.5">
                {AUDIENCE_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 py-2.5 pl-3 text-sm text-slate-500 hover:text-brand-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.emoji}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'Free Website', href: '/website', bold: true },
            { label: 'Results',      href: '/results', bold: false },
            { label: 'About',        href: '/about',   bold: false },
            { label: 'Contact',      href: '/contact', bold: false },
          ].map((link) => (
            <div key={link.href} className="border-b border-slate-100">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-4 text-base font-bold transition-colors ${
                  link.bold ? 'text-brand-600 hover:text-brand-700' : 'text-slate-900 hover:text-brand-600'
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-5 border-t border-slate-100 shrink-0 space-y-3">
          <Link
            href="/website"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-btn hover:shadow-btn-lg transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Get a free website <ArrowRightIcon size={16} />
          </Link>
          <p className="text-center text-xs text-slate-400">
            No upfront cost · No long-term contracts
          </p>
        </div>
      </div>
    </>
  )
}
