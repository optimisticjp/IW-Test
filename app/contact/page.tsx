import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Contact Us — Infinite Weblinks',
  description: 'Get in touch to start your free website, book a growth call or ask us anything. We respond within one business day.',
}

const CONTACT_OPTIONS = [
  {
    icon:  '🌐',
    title: 'Free website request',
    desc:  'Want us to build your site first? Go to the dedicated page.',
    link:  { label: 'Request a free website →', href: '/website' },
  },
  {
    icon:  '💬',
    title: 'WhatsApp',
    desc:  'Prefer to chat? Message us directly on WhatsApp.',
    link:  { label: 'Open WhatsApp →', href: `https://wa.me/${SITE.email.replace(/\D/g,'')}` },
  },
  {
    icon:  '📧',
    title: 'Email us directly',
    desc:  'Rather send an email? We check it daily.',
    link:  { label: SITE.email, href: `mailto:${SITE.email}` },
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-5 text-center"
        style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55vw] max-w-[600px] aspect-square rounded-full blur-3xl bg-brand/15 pointer-events-none animate-glow-pulse" />

        <div className="relative max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5">
            Get in touch
          </div>
          <h1 className="text-slate-100 text-[clamp(32px,5.5vw,56px)] mb-5">
            Let&apos;s talk about{' '}
            <span className="gradient-text">your growth</span>
          </h1>
          <p className="text-[#8ba3c0] text-[clamp(15px,2vw,17px)] leading-[1.7] max-w-[480px] mx-auto">
            Tell us what you&apos;re working on and we&apos;ll come back with an honest view on
            what your business actually needs — no pitch, no pressure.
          </p>
        </div>
      </section>

      {/* Contact options + form */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1020px] mx-auto flex flex-wrap gap-10 md:gap-16 items-start">

          {/* Left: options + what to expect */}
          <div className="flex-[1_1_260px]">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-6">
              Ways to reach us
            </p>

            <div className="space-y-4 mb-10">
              {CONTACT_OPTIONS.map((opt) => (
                <div key={opt.title} className="bg-snow border border-slate-100 rounded-xl p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xl">{opt.icon}</span>
                    <span className="text-sm font-bold text-ink">{opt.title}</span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{opt.desc}</p>
                  <Link
                    href={opt.link.href}
                    className="text-[12px] font-bold text-brand hover:opacity-70 transition-opacity"
                    {...(opt.link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {opt.link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="bg-snow border border-slate-100 rounded-xl p-5">
              <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-4">
                What to expect
              </p>
              <ul className="space-y-3">
                {[
                  'We respond within one business day',
                  'No sales call required to get started',
                  'We\'ll be honest if we\'re not the right fit',
                  'Free website requests take 3–5 business days',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[12px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-[1_1_340px]">
            <div className="bg-ink border border-ink-border rounded-3xl p-7 md:p-8">
              <h3 className="text-[20px] font-extrabold text-slate-100 mb-2">
                Send us a message
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Tell us what you&apos;re working on and what you need help with.
              </p>
              <ContactForm formType="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
