'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MonitorIcon, ChartBarIcon, UsersIcon, SearchIcon, FunnelIcon, MailIcon } from '@/components/ui/Icons'

const CARDS = [
  {
    id:       'websites',
    title:    'Websites & Stores',
    desc:     'The foundation of everything. We build your website first, with no upfront cost. Modern, fast and built to convert.',
    href:     '/services/build',
    hero:     true,
    Icon:     MonitorIcon,
    dark:     false,
  },
  {
    id:       'paid',
    title:    'Paid Growth',
    desc:     'Google, Meta and TikTok ads managed for you. We set up campaigns, test audiences and scale what works.',
    href:     '/services/paid-ads',
    Icon:     ChartBarIcon,
  },
  {
    id:       'social',
    title:    'Social & Creator',
    desc:     'Build an audience that converts to revenue. Content strategy, posting systems and creator partnerships.',
    href:     '/services/social-growth',
    Icon:     UsersIcon,
  },
  {
    id:       'seo',
    title:    'SEO & AI Search',
    desc:     'Show up in Google. Show up in ChatGPT, Perplexity and Claude. We handle both — technical SEO plus AI search visibility.',
    href:     '/services/ai-search',
    wide:     true,
    dark:     true,
    Icon:     SearchIcon,
  },
  {
    id:       'funnels',
    title:    'Funnels & Conversion',
    desc:     'Turn visitors into buyers. Landing pages, A/B tests, lead capture systems and checkout optimisation.',
    href:     '/services/funnels',
    Icon:     FunnelIcon,
  },
  {
    id:       'email',
    title:    'Email & CRM',
    desc:     'Automation, retention and loyalty systems. Welcome flows, abandoned cart, win-back and lifecycle journeys.',
    href:     '/services/retain-scale',
    tinted:   true,
    Icon:     MailIcon,
  },
]

export default function Pillars() {
  return (
    <section className="bg-surface-soft section-pad">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight text-slate-900 mb-5">
            Everything you need.{' '}
            <span className="text-gradient">One team.</span>{' '}
            No handoffs.
          </h2>
          <p className="font-sans text-slate-500 text-lg max-w-2xl mx-auto">
            Six core services, delivered by one team, under one strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map(({ id, title, desc, href, hero, wide, dark, tinted, Icon }, i) => {
            const colSpan = hero || wide ? 'lg:col-span-2' : ''

            let cardClass = ''
            if (hero)   cardClass = 'bg-gradient-brand text-white'
            else if (dark)   cardClass = 'bg-slate-900 text-white'
            else if (tinted) cardClass = 'bg-brand-50 border border-brand-100'
            else             cardClass = 'bg-white border border-slate-200'

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={colSpan}
              >
                <Link
                  href={href}
                  className={`group rounded-3xl p-6 lg:p-8 flex flex-col min-h-[220px] ${cardClass} ${
                    hero ? 'hover:scale-[1.01]' : 'hover:shadow-card-hover hover:-translate-y-1'
                  } transition-all duration-200 block`}
                >
                  {hero ? (
                    <>
                      <div className="flex items-center justify-between mb-auto">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                          <Icon size={20} />
                        </div>
                        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                          Start here — free
                        </span>
                      </div>
                      <div className="mt-6">
                        <h3 className="font-display font-extrabold text-2xl text-white mb-2">{title}</h3>
                        <p className="text-white/80 text-base leading-relaxed mb-4">{desc}</p>
                        <span className="text-white/60 text-sm font-medium">Learn more →</span>
                      </div>
                    </>
                  ) : dark ? (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-bold text-xl text-white mb-2 mt-0">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
                      <span className="text-brand-400 text-sm font-semibold mt-4">Learn more →</span>
                    </>
                  ) : (
                    <>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${tinted ? 'bg-brand-100 text-brand-600' : 'bg-brand-50 text-brand-600'}`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
                      <span className="text-brand-600 text-sm font-semibold mt-4">Learn more →</span>
                    </>
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
