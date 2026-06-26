'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@/components/ui/Icons'

const AUDIENCES = [
  {
    emoji: '🛍️',
    title: 'Ecommerce & Shopify',
    description: 'You have a store. We make it convert better, bring in more traffic, and keep customers coming back.',
    href: '/for/ecommerce',
  },
  {
    emoji: '🎯',
    title: 'Creators & Coaches',
    description: 'You have an audience. We help you turn it into a business with a proper website, funnels and email system.',
    href: '/for/creators',
  },
  {
    emoji: '🚀',
    title: 'Startups',
    description: 'You have a big idea. We give you a credible website, tracking, ads and the growth foundations to launch properly.',
    href: '/for/startups',
  },
  {
    emoji: '📍',
    title: 'Local Businesses',
    description: 'You have a local service. We make sure people in your area find you, contact you and book with you.',
    href: '/for/local',
  },
]

export default function WhoWeHelp() {
  return (
    <section className="bg-white section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight text-slate-900 mb-5">
            Built for businesses that{' '}
            <span className="text-gradient">want to grow</span>
          </h2>
          <p className="font-sans text-slate-500 text-lg max-w-2xl mx-auto">
            Whatever your model, whatever your size — we have a proven system for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {AUDIENCES.map(({ emoji, title, description, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={href}
                className="group relative block rounded-3xl p-8 border border-slate-200 bg-white hover:border-brand-200 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-50/60 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-5xl leading-none">{emoji}</span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mt-5 mb-3">{title}</h3>
                  <p className="text-slate-500 leading-relaxed text-base mb-6 max-w-sm">{description}</p>
                  <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm">
                    Get started
                    <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
