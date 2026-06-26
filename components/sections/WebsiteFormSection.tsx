'use client'

import ContactForm from '@/components/sections/ContactForm'
import { trackCTA } from '@/lib/analytics'

export default function WebsiteFormSection() {
  return (
    <section
      id="claim-form"
      className="py-[clamp(60px,8vw,96px)] px-5"
      style={{ background: 'linear-gradient(135deg, #075aaa 0%, #0b3a6e 100%)' }}
    >
      <div className="max-w-[640px] mx-auto text-center">
        <p className="text-[11px] font-extrabold tracking-widest uppercase text-brand-200 mb-4">
          Get started
        </p>
        <h2 className="text-white text-[clamp(26px,4.5vw,42px)] mb-4">
          Tell us about your business
        </h2>
        <p className="text-brand-200 text-base leading-relaxed mb-10">
          Takes 2 minutes. We will be in touch within 1 business day.
        </p>

        <div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-10 text-left"
          onClick={() => trackCTA('Send my brief', 'form-section')}
        >
          <ContactForm formType="website" theme="dark" />
        </div>

        <p className="text-brand-300 text-sm mt-6">
          No upfront cost. No contracts. No pressure.
        </p>
      </div>
    </section>
  )
}
