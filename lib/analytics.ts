declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackCTA(label: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_clicked', { cta_text: label, cta_location: location })
  }
}

export function trackFormStart() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_started')
  }
}

export function trackFormSubmit(formType: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submitted', { form_type: formType })
  }
}
