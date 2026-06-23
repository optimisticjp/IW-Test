'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/94 backdrop-blur-md border-b border-slate-200/80'
          : 'bg-snow/60 backdrop-blur-sm border-b border-transparent',
      )}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-10 flex items-center justify-between h-[66px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-[9px] bg-gradient-brand flex items-center justify-center text-white text-lg font-black leading-none select-none">
            ∞
          </div>
          <span className="text-[15px] font-extrabold text-ink tracking-tighter3 hidden sm:block">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          <Button href="/website" variant="outline" size="sm">
            Free Website
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Get Started
          </Button>
        </div>

      </div>
    </nav>
  )
}
