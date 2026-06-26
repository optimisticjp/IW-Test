import Link from 'next/link'
import { CheckIcon } from '@/components/ui/Icons'

const INCLUDED = [
  'Custom design built for your industry',
  'Mobile-first, fast-loading, modern',
  'SEO foundations from day one',
  'Contact forms + WhatsApp notifications',
  'Lead capture and booking integration',
  'Hosted and maintained — we handle it',
]

export default function FreeWebsite() {
  return (
    <section className="relative overflow-hidden bg-brand-700 section-pad">

      {/* Blobs */}
      <div aria-hidden="true">
        <div className="blob absolute w-96 h-96 -top-24 -right-12 bg-white/5" />
        <div className="blob absolute w-72 h-72 -bottom-12 left-8 bg-white/5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">
              The free website offer
            </p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-6">
              Your free website is ready to be built.
            </h2>
            <p className="font-sans text-brand-100 text-lg leading-relaxed mb-8">
              No setup fee. No upfront payment. No contracts.
              We design, build and launch your website — you only pay once you&apos;re growing with us.
            </p>
            <Link
              href="/website"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-base px-8 py-4 rounded-xl hover:bg-brand-50 shadow-lg hover:shadow-xl transition-all"
            >
              Claim your free website →
            </Link>
            <p className="text-brand-300 text-sm mt-4">
              Builds in 7–14 days · You approve before going live
            </p>
          </div>

          {/* Right — glass checklist card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8">
            <h3 className="font-display font-bold text-xl text-white mb-6">What&apos;s included</h3>
            <ul className="space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-brand-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
