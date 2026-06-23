import type { Metadata } from 'next'
import Hero         from '@/components/sections/Hero'
import ProofStrip   from '@/components/sections/ProofStrip'
import WhoWeHelp    from '@/components/sections/WhoWeHelp'
import Pillars      from '@/components/sections/Pillars'
import FreeWebsite  from '@/components/sections/FreeWebsite'
import AISearch     from '@/components/sections/AISearch'
import StatsStrip   from '@/components/sections/StatsStrip'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA     from '@/components/sections/FinalCTA'

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
      <Pillars />
      <FreeWebsite />
      <AISearch />
      <StatsStrip />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
