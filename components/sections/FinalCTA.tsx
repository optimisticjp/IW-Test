import Link from 'next/link'
import { ArrowRightIcon } from '@/components/ui/Icons'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-950 section-pad min-h-[70vh] flex items-center">

      {/* Blobs */}
      <div aria-hidden="true">
        <div className="blob animate-blob absolute w-[600px] h-[600px] -top-32 -left-32 bg-brand-800/50" />
        <div className="blob animate-blob-delayed absolute w-[500px] h-[500px] -bottom-24 -right-16 bg-accent/15" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 w-full">
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 mb-8 text-sm font-medium text-white/70">
          The easiest first step you'll take today
        </div>

        <h2 className="font-display font-extrabold tracking-tight text-white mb-6 text-5xl lg:text-6xl leading-[1.05]">
          Ready to grow your business?
          <span className="block text-4xl text-white/60 mt-2 font-bold">
            Let&apos;s start with your website.
          </span>
        </h2>

        <p className="font-sans text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Fill in a 2-minute brief. We design, build and launch your website.
          Then we grow it together.
        </p>

        <Link
          href="/website"
          className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-lg px-10 py-4 rounded-xl hover:bg-brand-50 shadow-[0_4px_32px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_48px_rgba(255,255,255,0.18)] transition-all duration-200"
        >
          Get my free website <ArrowRightIcon size={18} />
        </Link>

        <p className="text-white/30 text-sm mt-6">
          Trusted by businesses in 12+ countries · No upfront cost
        </p>
      </div>

    </section>
  )
}
