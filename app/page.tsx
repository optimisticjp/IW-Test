import type { Metadata } from 'next'

import Hero         from '@/components/sections/Hero'
import ProofStrip   from '@/components/sections/ProofStrip'
import WhoWeHelp    from '@/components/sections/WhoWeHelp'
import Pillars      from '@/components/sections/Pillars'
import FreeWebsite  from '@/components/sections/FreeWebsite'
import HowItWorks   from '@/components/sections/HowItWorks'
import StatsStrip   from '@/components/sections/StatsStrip'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA     from '@/components/sections/FinalCTA'
import ArcDivider   from '@/components/ui/ArcDivider'

export const metadata: Metadata = {
  title:       'Infinite Weblinks — Growth Agency for Ecommerce, Creators & Startups',
  description: 'We build your website first — no upfront fee. Then we run the ads, funnels, social growth and AI search that turn it into your best salesperson.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />

      <WhoWeHelp />

      <ArcDivider fill="#F8FAFF" className="bg-white" />
      <Pillars />

      <ArcDivider fill="#054d94" className="bg-surface-soft" />
      <FreeWebsite />

      <ArcDivider fill="#ffffff" className="bg-brand-700" />
      <HowItWorks />

      <ArcDivider fill="#022852" className="bg-white" />
      <StatsStrip />

      <ArcDivider fill="#F8FAFF" className="bg-brand-900" />
      <Testimonials />

      <ArcDivider fill="#011a3d" className="bg-surface-soft" />
      <FinalCTA />
    </>
  )
}
