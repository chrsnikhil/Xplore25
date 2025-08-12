"use client"

import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"

interface MinecraftBubbleProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  biome?: "nether" | "cherry" | "grassland" | "desert" | "ice" | "barren" | "caves"
  size?: "sm" | "md" | "lg"
  floating?: boolean
}

const biomeStyles = {
  nether: "bg-red-600/80 border-red-400 text-red-100",
  cherry: "bg-pink-400/80 border-pink-200 text-pink-900",
  grassland: "bg-green-500/80 border-green-300 text-green-100",
  desert: "bg-yellow-500/80 border-yellow-300 text-yellow-900",
  ice: "bg-blue-400/80 border-blue-200 text-blue-900",
  barren: "bg-gray-500/80 border-gray-300 text-gray-100",
  caves: "bg-stone-600/80 border-stone-400 text-stone-100",
}

const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-6 py-4 text-lg",
}

const MinecraftBubble = forwardRef<HTMLDivElement, MinecraftBubbleProps>(
  ({ className, biome = "grassland", size = "md", floating = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: floating ? [0, -10, 0] : 0,
        }}
        transition={{
          duration: 0.3,
          y: floating ? { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" } : undefined,
        }}
        className={cn(
          "inline-block border-3 font-mono font-bold rounded-none",
          "antialiased-off shadow-lg",
          biomeStyles[biome],
          sizeStyles[size],
          className,
        )}
        style={{ imageRendering: "pixelated" }}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)

MinecraftBubble.displayName = "MinecraftBubble"

export { MinecraftBubble }
