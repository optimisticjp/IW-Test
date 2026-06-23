import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title:       'Get a Free Website — See It Before You Pay | Infinite Weblinks',
  description: 'We design and build your website first. You preview it live on a real link, request changes, and only pay once you love it. No upfront fee. 100% yours.',
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
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-5 text-center"
        style={{ background: 'linear-gradient(160deg, #070e1c 0%, #0c1340 55%, #070e1c 100%)' }}
      >
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[640px] aspect-square rounded-full blur-3xl bg-brand/15 pointer-events-none animate-glow-pulse" />

        <div className="relative max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-[#82adf5] mb-5">
            The Infinite Weblinks offer
          </div>
          <h1 className="text-slate-100 text-[clamp(32px,5.5vw,58px)] mb-5">
            We build your website first.{' '}
            <span className="gradient-text">You decide after.</span>
          </h1>
          <p className="text-[#8ba3c0] text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[540px] mx-auto">
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
          <div className="flex-[1_1_340px]">
            <div className="bg-ink border border-ink-border rounded-3xl p-7 md:p-8">
              <h3 className="text-[20px] font-extrabold text-slate-100 mb-2">
                Request your free website
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Two minutes to fill in. We&apos;ll come back with a live site.
              </p>
              <ContactForm formType="website" />
            </div>
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
              <div key={item.q} className="bg-snow border border-slate-100 rounded-xl p-6">
                <h3 className="text-[15px] font-bold text-ink mb-2">{item.q}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
