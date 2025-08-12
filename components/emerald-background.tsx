"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

interface EmeraldParticle {
  id: number
  xPercent: number
  yPercent: number
  sizePx: number
  delay: number
  duration: number
}

interface EmeraldBackgroundProps {
  count?: number
  minSize?: number
  maxSize?: number
  opacity?: number
  imageSrc?: string
}

export function EmeraldBackground({ count = 24, minSize = 16, maxSize = 36, opacity = 0.6, imageSrc = "/emerald.png" }: EmeraldBackgroundProps) {
  const [particles, setParticles] = useState<EmeraldParticle[]>([])

  const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min
  const seed = useMemo(() => Math.random(), [])

  useEffect(() => {
    const items: EmeraldParticle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      xPercent: Math.random() * 100,
      yPercent: Math.random() * 100,
      sizePx: Math.round(randomBetween(minSize, maxSize)),
      delay: randomBetween(0, 2),
      duration: randomBetween(6, 12),
    }))
    setParticles(items)
  }, [count, minSize, maxSize, seed])

  return (
    <div className="pointer-events-none fixed inset-0 -z-5 overflow-hidden">
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={imageSrc}
          alt="emerald"
          width={p.sizePx}
          height={p.sizePx}
          initial={{ x: `${p.xPercent}vw`, y: `${p.yPercent}vh`, opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{
            y: [`${p.yPercent}vh`, `${p.yPercent - 20}vh`, `${p.yPercent}vh`],
            x: [`${p.xPercent}vw`, `${p.xPercent + 2}vw`, `${p.xPercent}vw`],
            rotate: [0, 15, -10, 0],
            opacity: [0, opacity, opacity, 0.9 * opacity],
            scale: [0.9, 1, 0.95, 1],
          }}
          transition={{ duration: p.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: p.delay }}
          style={{ imageRendering: "pixelated" }}
          className="select-none"
        />
      ))}
    </div>
  )
}


