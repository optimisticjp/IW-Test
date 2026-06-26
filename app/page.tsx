import type { Metadata } from 'next'

import Hero        from '@/components/sections/Hero'
import ProofStrip  from '@/components/sections/ProofStrip'
import WhoWeHelp   from '@/components/sections/WhoWeHelp'
import Pillars     from '@/components/sections/Pillars'
import FreeWebsite from '@/components/sections/FreeWebsite'
import StatsStrip  from '@/components/sections/StatsStrip'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA    from '@/components/sections/FinalCTA'
import ArcDivider  from '@/components/ui/ArcDivider'

export const metadata: Metadata = {
  title:       'Infinite Weblinks — Growth Agency for Ecommerce, Creators & Startups',
  description: 'We build your website first — no upfront fee. Then we run the ads, funnels, social growth and AI search that turn it into your best salesperson.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — bg-white */}
      <Hero />

      {/* 2. Proof Strip — bg-white (seamless with hero) */}
      <ProofStrip />

      {/* white → surface-soft */}
      <ArcDivider fill="#F8FAFF" className="bg-white" />

      {/* 3. Who We Help — bg-surface-soft */}
      <WhoWeHelp />

      {/* 4. Pillars — bg-surface-soft (same, no divider) */}
      <Pillars />

      {/* surface-soft → brand gradient (FreeWebsite is brand-600→brand-800) */}
      <ArcDivider fill="#075aaa" className="bg-surface-soft" />

      {/* 5. Free Website — bg-gradient brand-600→brand-800 */}
      <FreeWebsite />

      {/* 6. Stats Strip — bg-brand-600 (seamless with FreeWebsite dark section) */}
      <StatsStrip />

      {/* brand-600 → surface-soft */}
      <ArcDivider fill="#F8FAFF" className="bg-brand-600" />

      {/* 7. Testimonials — bg-surface-soft */}
      <Testimonials />

      {/* surface-soft → brand-900 */}
      <ArcDivider fill="#022852" className="bg-surface-soft" />

      {/* 8. Final CTA — bg-brand-900 */}
      <FinalCTA />
    </>
  )
}
