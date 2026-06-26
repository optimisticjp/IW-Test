import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/service-pages'

const data = SERVICE_PAGES.build

export const metadata: Metadata = {
  title:       data.seoTitle,
  description: data.seoDesc,
  alternates:  { canonical: 'https://infiniteweblinks.com/services/build' },
}

export default function BuildPage() {
  return <ServicePageTemplate data={data} />
}
