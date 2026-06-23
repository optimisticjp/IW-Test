import { cn } from '@/lib/utils'

interface GlassCardProps {
  className?: string
  children:   React.ReactNode
  hover?:     boolean
}

export default function GlassCard({ className, children, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/75 backdrop-blur-xl border border-white/80 shadow-glass rounded-2xl',
        hover && 'hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200',
        className,
      )}
    >
      {children}
    </div>
  )
}
