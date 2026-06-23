'use client'

import { useState, FormEvent } from 'react'
import { SITE } from '@/lib/constants'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormProps {
  formType?: 'contact' | 'website'
}

export default function ContactForm({ formType = 'contact' }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')

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
        <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
          <span className="text-green-400 text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-3">
          {formType === 'website' ? 'Request received!' : 'Message sent!'}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {formType === 'website'
            ? 'We\'ll start building your site and send you a live preview link within 3–5 business days.'
            : 'We usually respond within one business day. Check your inbox — or your spam just in case.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Hidden field to identify form type in Formspree inbox */}
      <input type="hidden" name="_form_type" value={formType} />

      {/* Name */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
          Your name <span className="text-brand">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Jane Smith"
          className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-brand/60 transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
          Email address <span className="text-brand">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@yourbusiness.com"
          className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-brand/60 transition-colors"
        />
      </div>

      {/* WhatsApp (optional) */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
          WhatsApp number <span className="text-slate-700">(optional — include country code)</span>
        </label>
        <input
          type="tel"
          name="whatsapp"
          placeholder="+44 7700 000000"
          className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-brand/60 transition-colors"
        />
      </div>

      {/* Business type — shown for website requests */}
      {formType === 'website' && (
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
            What best describes your business? <span className="text-brand">*</span>
          </label>
          <select
            name="business_type"
            required
            defaultValue=""
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand/60 transition-colors appearance-none"
          >
            <option value="" disabled className="text-slate-700">Select one</option>
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
        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
          Current website URL <span className="text-slate-700">(if you have one)</span>
        </label>
        <input
          type="url"
          name="current_website"
          placeholder="https://yoursite.com"
          className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-brand/60 transition-colors"
        />
      </div>

      {/* Message / Brief */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
          {formType === 'website'
            ? 'Tell us about your business and what you want the site to do'
            : 'What do you want to work on?'}{' '}
          <span className="text-brand">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={
            formType === 'website'
              ? 'e.g. We sell skincare products. We want a Shopify redesign that improves our conversion rate. Current site is slow and doesn\'t convert mobile traffic well.'
              : 'Tell us what you\'re working on, what\'s not working, and what you\'d like help with.'
          }
          className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-brand/60 transition-colors resize-none"
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-red-400 text-xs">
          Something went wrong. Try emailing us directly at{' '}
          <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gradient-brand text-white font-bold py-4 rounded-xl text-sm shadow-btn hover:shadow-btn-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'submitting'
          ? 'Sending...'
          : formType === 'website'
            ? 'Request my free website →'
            : 'Send message →'}
      </button>

      <p className="text-xs text-slate-700 text-center">
        No spam. We respond within one business day.
      </p>
    </form>
  )
}
