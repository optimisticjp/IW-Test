'use client'

import Script from 'next/script'
import ContactForm from '@/components/sections/ContactForm'
import MeshGradient from '@/components/ui/MeshGradient'
import GlassCard from '@/components/ui/GlassCard'
import { trackCTA } from '@/lib/analytics'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is the free website really free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design and build your website at no cost to you. You pay nothing upfront. After you see the site and decide you want to work with us further, you can add paid services. If you don't continue, you still keep the website." } },
    { "@type": "Question", "name": "How long does it take to build?", "acceptedAnswer": { "@type": "Answer", "text": "Most websites are ready for review within 5–10 business days. More complex builds take slightly longer." } },
    { "@type": "Question", "name": "Who owns the website?", "acceptedAnswer": { "@type": "Answer", "text": "You do. The domain, the code and the hosting are 100% yours." } },
    { "@type": "Question", "name": "Do I have to commit to any ongoing services?", "acceptedAnswer": { "@type": "Answer", "text": "No. The free website comes with no obligation to continue. Many clients do add growth services later, but that is always your choice." } },
    { "@type": "Question", "name": "What kind of businesses do you build websites for?", "acceptedAnswer": { "@type": "Answer", "text": "Ecommerce brands and Shopify stores, creators and coaches, startups and service businesses. If you have an audience or customers you want to reach online, we can build for you." } }
  ]
}

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell us about your business',
    desc:  'Fill in the form below — takes two minutes. No call required to get started.',
  },
  {
    step: '02',
    title: 'We design and build your site',
    desc:  'Our team builds a real, working website around your brand — not a template. Usually ready within 3–5 business days.',
  },
  {
    step: '03',
    title: 'You preview it live',
    desc:  'We send you a live link. You can see it on your phone, share it with your team and tell us exactly what to change.',
  },
  {
    step: '04',
    title: 'You keep it — and we grow it',
    desc:  'Love it? We connect your domain and hand it over. From there we can run the ads, SEO and funnels that fill it with customers.',
  },
]

const WHAT_YOU_GET = [
  { label: 'Setup fee',        value: '$0 to start'              },
  { label: 'Preview',          value: 'Live link before you pay' },
  { label: 'Revisions',        value: 'Unlimited until you love it' },
  { label: 'Ownership',        value: '100% yours — no lock-in' },
  { label: 'Mobile speed',     value: '90+ PageSpeed target'     },
  { label: 'What you pay for', value: 'Domain + hosting (yours)' },
]

const FAQ = [
  {
    q: 'Is this actually free?',
    a: 'Yes. We build your site before charging a setup fee, and you preview it live first. You only move forward if you\'re happy with what you see. You do cover your own domain and hosting — a few dollars a month — which stays in your name.',
  },
  {
    q: 'What\'s the catch?',
    a: 'We do this because most businesses who love their new site choose to work with us on marketing after. That\'s how we grow. But there\'s no obligation. If you decide not to continue, the site is still yours.',
  },
  {
    q: 'How long does it take?',
    a: 'We usually deliver a live preview within 3–5 business days of receiving your brief. Complex sites may take a little longer — we\'ll let you know upfront.',
  },
  {
    q: 'What if I already have a website?',
    a: 'We rebuild it, faster and more conversion-focused, and you compare the two side by side. Keep whichever one wins.',
  },
  {
    q: 'What happens after the site is live?',
    a: 'That\'s entirely up to you. We can run paid ads, SEO, social growth, email marketing and more — or you can take the site and manage everything yourself. No pressure either way.',
  },
]

export default function WebsitePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-5 text-center bg-surface-soft">
        <MeshGradient intensity="low" />

        <div className="relative max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
            The Infinite Weblinks offer
          </div>
          <h1 className="text-slate-900 text-[clamp(32px,5.5vw,58px)] mb-5">
            We build your website first.{' '}
            <span className="gradient-text">You decide after.</span>
          </h1>
          <p className="text-slate-500 text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[540px] mx-auto">
            See your new site live on a real link before anything changes hands.
            Request changes. Only pay once you love it.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">How it works</p>
            <h2 className="text-ink">Four steps, zero risk</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} className="bg-snow border border-slate-100 rounded-2xl p-6">
                <div className="text-[11px] font-extrabold tracking-widest text-brand mb-3 uppercase">{s.step}</div>
                <h3 className="text-[17px] text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get + Form */}
      <section className="bg-snow py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1020px] mx-auto flex flex-wrap gap-10 md:gap-16 items-start">

          {/* What you get */}
          <div className="flex-[1_1_280px]">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-6">What you get</p>
            <div className="space-y-0">
              {WHAT_YOU_GET.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3.5 border-b border-slate-200 last:border-0">
                  <span className="text-sm text-slate-500">{label}</span>
                  <span className="text-sm font-bold text-ink text-right ml-4">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand/[0.06] border border-brand/15 rounded-xl p-5">
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &ldquo;We&apos;d rather earn your business by showing you a website worth paying for than by talking you into one.&rdquo;
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-[1_1_340px]" onClick={() => trackCTA('Request your free website', 'website-form')}>
            <GlassCard className="p-7 md:p-8">
              <h3 className="text-[20px] font-extrabold text-ink mb-2">
                Request your free website
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Two minutes to fill in. We&apos;ll come back with a live site.
              </p>
              <ContactForm formType="website" />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">FAQ</p>
            <h2 className="text-ink">The honest answers</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <GlassCard key={item.q} className="p-6">
                <h3 className="text-[15px] font-bold text-ink mb-2">{item.q}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{item.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
