import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/service-pages'

const data = SERVICE_PAGES['retain-scale']

export const metadata: Metadata = {
  title:       data.seoTitle,
  description: data.seoDesc,
}

export default function RetainScalePage() {
  return <ServicePageTemplate data={data} />
}
