'use client'

import { motion } from 'framer-motion'
import CountUp from '@/components/ui/CountUp'

const STATS = [
  { end: 12, suffix: '+', label: 'Countries we serve' },
  { end: 98, suffix: '%', label: 'Client retention rate' },
  { end: 3,  suffix: '×', label: 'Average traffic growth' },
  { static: '£0',         label: 'Upfront cost to start' },
]

export default function StatsStrip() {
  return (
    <section className="bg-brand-900 text-white section-pad">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ end, suffix, static: staticVal, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display font-extrabold text-6xl lg:text-7xl text-white leading-none tracking-[-0.04em]">
                {staticVal ? staticVal : <CountUp end={end!} suffix={suffix} />}
              </div>
              <p className="font-sans text-sm font-medium uppercase tracking-widest text-brand-300 mt-3">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
