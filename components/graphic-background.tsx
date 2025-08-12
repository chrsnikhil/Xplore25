"use client"

interface GraphicBackgroundProps {
  src?: string
  size?: number // tile size in px
  opacity?: number // 0..1
  overlayColor?: string // rgba()
}

export function GraphicBackground({
  src = "/grass.png",
  size = 64,
  opacity = 0.25,
  overlayColor = "rgba(0,0,0,0.15)",
}: GraphicBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${size}px ${size}px`,
          opacity,
          imageRendering: "pixelated",
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
    </div>
  )
}


