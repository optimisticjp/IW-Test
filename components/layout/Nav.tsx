'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/constants'
import Button from '@/components/ui/Button'

const SERVICES_LINKS = [
  { label: '🌐 Build',          href: '/services/build'         },
  { label: '📢 Paid Ads',       href: '/services/paid-ads'      },
  { label: '📈 Social Growth',  href: '/services/social-growth' },
  { label: '🤖 AI & Search',    href: '/services/ai-search'     },
  { label: '🔧 Funnels & CRO',  href: '/services/funnels'       },
  { label: '📧 Retain & Scale', href: '/services/retain-scale'  },
]

const WHO_LINKS = [
  { label: '🛒 Ecommerce & Shopify', href: '/for/ecommerce' },
  { label: '🎨 Creators & Coaches',  href: '/for/creators'  },
  { label: '🚀 Startups',            href: '/for/startups'  },
]

// ── Hamburger icon ────────────────────────────────────────────
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-5 h-[14px] flex flex-col justify-between">
      <span
        className={cn(
          'block h-0.5 bg-current transition-all duration-300 origin-center rounded-full',
          isOpen && 'rotate-45 translate-y-[6px]'
        )}
      />
      <span
        className={cn(
          'block h-0.5 bg-current transition-all duration-300 rounded-full',
          isOpen && 'opacity-0 scale-x-0'
        )}
      />
      <span
        className={cn(
          'block h-0.5 bg-current transition-all duration-300 origin-center rounded-full',
          isOpen && '-rotate-45 -translate-y-[6px]'
        )}
      />
    </div>
  )
}

// ── Accordion section for mobile nav ─────────────────────────
function NavAccordion({
  label,
  links,
  isOpen,
  onToggle,
  onLinkClick,
}: {
  label:       string
  links:       { label: string; href: string }[]
  isOpen:      boolean
  onToggle:    () => void
  onLinkClick: () => void
}) {
  return (
    <div className="border-b border-ink-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-sm font-bold text-slate-300 hover:text-white transition-colors"
      >
        {label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-600 text-xs"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onLinkClick}
                  className="block py-2.5 pl-3 text-sm text-slate-500 hover:text-slate-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Main Nav component ────────────────────────────────────────
export default function Nav() {
  const pathname                      = usePathname()
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [openSection, setOpenSection] = useState<'services' | 'who' | null>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setOpenSection(null)
  }, [pathname])

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenSection(null)
  }

  const toggleSection = (section: 'services' | 'who') => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || menuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80'
            : 'bg-snow/60 backdrop-blur-sm border-b border-transparent'
        )}
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 flex items-center justify-between h-[66px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" onClick={closeMenu}>
            <div className="w-9 h-9 rounded-[9px] bg-gradient-brand flex items-center justify-center text-white text-lg font-black leading-none select-none">
              ∞
            </div>
            <span className="text-[15px] font-extrabold text-ink tracking-tighter3 hidden sm:block">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {[
              { label: 'Services',    href: '/services'      },
              { label: 'Who We Help', href: '/for/ecommerce' },
              { label: 'Results',     href: '/results'       },
              { label: 'About',       href: '/about'         },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-150',
                    pathname === link.href ? 'text-ink font-bold' : 'text-slate-500 hover:text-ink'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side — desktop CTAs + mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Button href="/website" variant="outline" size="sm">
                Free Website
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile: show just primary CTA + hamburger */}
            <Button href="/website" variant="outline" size="sm" className="sm:hidden text-xs px-3 py-2">
              Free Site
            </Button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden ml-1 p-2 text-ink hover:text-brand transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <HamburgerIcon isOpen={menuOpen} />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
              onClick={closeMenu}
            />

            {/* Slide-down panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-[66px] left-0 right-0 z-40 bg-ink border-b border-ink-border shadow-2xl lg:hidden max-h-[calc(100vh-66px)] overflow-y-auto"
            >
              <div className="max-w-[480px] mx-auto px-5 py-4 pb-8">

                {/* Services accordion */}
                <NavAccordion
                  label="Services"
                  links={SERVICES_LINKS}
                  isOpen={openSection === 'services'}
                  onToggle={() => toggleSection('services')}
                  onLinkClick={closeMenu}
                />

                {/* Who We Help accordion */}
                <NavAccordion
                  label="Who We Help"
                  links={WHO_LINKS}
                  isOpen={openSection === 'who'}
                  onToggle={() => toggleSection('who')}
                  onLinkClick={closeMenu}
                />

                {/* Direct links */}
                {[
                  { label: 'Results',     href: '/results' },
                  { label: 'About',       href: '/about'   },
                ].map((link) => (
                  <div key={link.href} className="border-b border-ink-border">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-4 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}

                {/* CTA buttons */}
                <div className="mt-6 space-y-3">
                  <Button
                    href="/website"
                    variant="outline"
                    size="lg"
                    className="w-full justify-center"
                    onClick={closeMenu}
                  >
                    Get a free website
                  </Button>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={closeMenu}
                  >
                    Get Started →
                  </Button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
