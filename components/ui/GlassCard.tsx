import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function GlassCard({ className, children, hover = false, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/75 backdrop-blur-xl border border-white/80 shadow-glass rounded-2xl',
        hover && 'hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
