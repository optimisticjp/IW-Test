'use client'

import { useState, FormEvent, useRef } from 'react'
import { SITE } from '@/lib/constants'
import { trackFormStart, trackFormSubmit } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormProps {
  formType?: 'contact' | 'website'
  theme?:    'light' | 'dark'
}

export default function ContactForm({ formType = 'contact', theme = 'light' }: ContactFormProps) {
  const [status, setStatus]     = useState<Status>('idle')
  const startedRef              = useRef(false)

  function handleFirstInteraction() {
    if (!startedRef.current) {
      startedRef.current = true
      trackFormStart()
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        trackFormSubmit(formType)
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <span className="text-green-600 text-2xl">✓</span>
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {formType === 'website' ? 'Request received!' : 'Message sent!'}
        </h3>
        <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-brand-200' : 'text-slate-500'}`}>
          {formType === 'website'
            ? "We'll start building your site and send you a live preview link within 3 to 5 business days."
            : "We usually respond within one business day. Check your inbox, or your spam just in case."}
        </p>
      </div>
    )
  }

  const inputClass = 'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-0 focus:border-brand-600 transition-colors min-h-[44px]'
  const labelClass = theme === 'dark'
    ? 'block text-xs font-bold text-brand-200 mb-1.5 uppercase tracking-wider'
    : 'block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider'

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className="space-y-4">
      <input type="hidden" name="_form_type" value={formType} />

      {/* Name */}
      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Your name <span className="text-brand-600" aria-hidden="true">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email address <span className="text-brand-600" aria-hidden="true">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="jane@yourbusiness.com"
          className={inputClass}
        />
      </div>

      {/* WhatsApp — required */}
      <div>
        <label htmlFor="cf-whatsapp" className={labelClass}>
          WhatsApp number <span className="text-brand-600" aria-hidden="true">*</span>
          <span className="text-slate-400 font-normal normal-case tracking-normal ml-1">(include country code)</span>
        </label>
        <input
          id="cf-whatsapp"
          type="tel"
          name="whatsapp"
          required
          autoComplete="tel"
          placeholder="+44 7700 000000"
          className={inputClass}
        />
      </div>

      {/* Business type — website requests only */}
      {formType === 'website' && (
        <div>
          <label htmlFor="cf-business-type" className={labelClass}>
            What best describes your business? <span className="text-brand-600" aria-hidden="true">*</span>
          </label>
          <select
            id="cf-business-type"
            name="business_type"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select one</option>
            <option value="ecommerce">Ecommerce / Shopify store</option>
            <option value="creator">Creator, coach or personal brand</option>
            <option value="startup">Startup or new business</option>
            <option value="local">Local or service business</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      {/* Current website */}
      <div>
        <label htmlFor="cf-website" className={labelClass}>
          Current website URL
          <span className="text-slate-400 font-normal normal-case tracking-normal ml-1">(if you have one)</span>
        </label>
        <input
          id="cf-website"
          type="url"
          name="current_website"
          autoComplete="url"
          placeholder="https://yoursite.com"
          className={inputClass}
        />
      </div>

      {/* Message / Brief */}
      <div>
        <label htmlFor="cf-message" className={labelClass}>
          {formType === 'website'
            ? 'Tell us about your business and what you want the site to do'
            : 'What do you want to work on?'}{' '}
          <span className="text-brand-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder={
            formType === 'website'
              ? "e.g. We sell skincare products. We want a Shopify redesign that improves our conversion rate."
              : "Tell us what you're working on, what's not working, and what you'd like help with."
          }
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-xs" role="alert">
          Something went wrong. Please try emailing us at{' '}
          <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gradient-brand text-white font-bold py-4 rounded-xl text-sm shadow-btn hover:shadow-btn-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:outline-none min-h-[44px]"
      >
        {status === 'submitting'
          ? 'Sending...'
          : formType === 'website'
            ? 'Request my free website →'
            : 'Send message →'}
      </button>

      <p className={`text-xs text-center ${theme === 'dark' ? 'text-brand-300' : 'text-slate-400'}`}>
        No spam. We respond within one business day.
      </p>
    </form>
  )
}
