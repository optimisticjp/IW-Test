interface MeshGradientProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

const opacityMap = { low: 0.6, medium: 1, high: 1.5 }

export default function MeshGradient({ className, intensity = 'low' }: MeshGradientProps) {
  const m = opacityMap[intensity]
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* Blob 1 — top-left, brand blue */}
      <div
        className="absolute animate-float-slow animate-gradient-shift"
        style={{
          top: '-15%',
          left: '-10%',
          width: 600,
          height: 400,
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          background: `rgba(7, 90, 170, ${0.10 * m})`,
          filter: 'blur(60px)',
        }}
      />
      {/* Blob 2 — top-right, indigo */}
      <div
        className="absolute animate-float-slow animate-gradient-shift"
        style={{
          top: '5%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
          background: `rgba(99, 102, 241, ${0.08 * m})`,
          filter: 'blur(70px)',
          animationDelay: '2s',
        }}
      />
      {/* Blob 3 — bottom-center, sky blue */}
      <div
        className="absolute animate-float-slow animate-gradient-shift"
        style={{
          bottom: '-20%',
          left: '20%',
          width: 700,
          height: 300,
          borderRadius: '50% 50% 60% 40% / 40% 50% 50% 60%',
          background: `rgba(7, 90, 170, ${0.07 * m})`,
          filter: 'blur(80px)',
          animationDelay: '4s',
        }}
      />
    </div>
  )
}
