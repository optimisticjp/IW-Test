import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/service-pages'

const data = SERVICE_PAGES['paid-ads']

export const metadata: Metadata = {
  title:       data.seoTitle,
  description: data.seoDesc,
}

export default function PaidAdsPage() {
  return <ServicePageTemplate data={data} />
}
