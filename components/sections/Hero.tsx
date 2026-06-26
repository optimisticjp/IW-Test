'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MonitorIcon, ChartBarIcon, UsersIcon, SearchIcon, FunnelIcon, MailIcon, ArrowRightIcon } from '@/components/ui/Icons'

const PILLARS = [
  { label: 'Websites & Stores', Icon: MonitorIcon,   style: 'top-0 left-0',      delay: 0,   float: 'animate-float'      },
  { label: 'Paid Growth',       Icon: ChartBarIcon,  style: 'top-4 right-0',     delay: 100, float: 'animate-float-slow' },
  { label: 'Social Growth',     Icon: UsersIcon,     style: 'top-48 left-10',    delay: 200, float: 'animate-float'      },
  { label: 'SEO & AI Search',   Icon: SearchIcon,    style: 'top-44 right-8',    delay: 300, float: 'animate-float-slow' },
  { label: 'Funnels',           Icon: FunnelIcon,    style: 'bottom-24 left-0',  delay: 400, float: 'animate-float'      },
  { label: 'Email & CRM',       Icon: MailIcon,      style: 'bottom-20 right-4', delay: 500, float: 'animate-float-slow' },
]

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay: delay / 1000, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">

      {/* Blobs */}
      <div aria-hidden="true">
        <div className="blob animate-blob absolute w-[700px] h-[600px] -top-48 -left-32 bg-brand-200/40" />
        <div className="blob animate-blob-delayed absolute w-[500px] h-[500px] top-0 -right-24 bg-accent/15" />
        <div className="blob animate-blob absolute w-[600px] h-[400px] -bottom-24 left-1/3 bg-brand-300/20" style={{ animationDelay: '8s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
                ✦ No setup fee &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Results-based
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(100)}
              className="font-display font-extrabold tracking-[-0.035em] leading-[1.02] mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-gradient block">Get more customers online</span>
              <span className="text-slate-900 block">starting with a free website.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(200)}
              className="font-sans text-lg text-slate-500 leading-relaxed max-w-xl mb-8"
            >
              We build your site first — at no cost to you. Then we run the ads, SEO, funnels
              and social growth that turn it into a real customer machine.
            </motion.p>

            <motion.div {...fadeUp(300)} className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/website"
                className="inline-flex items-center gap-2 justify-center bg-gradient-brand text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-btn hover:shadow-btn-lg hover:scale-[1.02] active:scale-[0.99] transition-all duration-150 min-h-[48px]"
              >
                Get my free website <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 justify-center border border-slate-200 text-slate-700 font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 min-h-[48px]"
              >
                See our services
              </Link>
            </motion.div>

            <motion.div {...fadeUp(400)} className="flex flex-wrap gap-6 text-sm text-slate-400">
              {['No upfront cost', 'No long contracts', 'We only win when you do'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-brand-500">✓</span> {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — floating mini-cards */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[520px]">
              {/* Soft glow */}
              <div className="absolute inset-8 bg-brand-200/25 rounded-full blur-3xl -z-10" />

              {PILLARS.map(({ label, Icon, style, delay, float }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay / 1000, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute glass rounded-2xl p-4 w-[175px] shadow-glass ${style}`}
                >
                  <div className={float}>
                    <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-3">
                      <Icon size={18} />
                    </div>
                    <p className="font-display font-bold text-sm text-slate-900">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
