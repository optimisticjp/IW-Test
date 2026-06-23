import { MARKETS } from '@/lib/constants'

export default function ProofStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-4 px-5 overflow-hidden">
      <div className="max-w-[1080px] mx-auto flex items-center justify-center gap-4 md:gap-8 flex-wrap">
        <span className="text-xs font-bold text-slate-400 whitespace-nowrap uppercase tracking-wider">
          Serving brands in
        </span>
        {MARKETS.map((m) => (
          <span key={m.name} className="text-sm text-slate-500 font-medium whitespace-nowrap">
            {m.flag} {m.name}
          </span>
        ))}
      </div>
    </div>
  )
}
