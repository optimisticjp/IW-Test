import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/service-pages'

const data = SERVICE_PAGES.funnels

export const metadata: Metadata = {
  title:       data.seoTitle,
  description: data.seoDesc,
  alternates:  { canonical: 'https://infiniteweblinks.com/services/funnels' },
}

export default function FunnelsPage() {
  return <ServicePageTemplate data={data} />
}
