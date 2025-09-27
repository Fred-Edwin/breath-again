'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { useAnimationConfig } from '@/hooks/useReducedMotion'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

const getVariants = (direction: string, distance: number) => {
  const variants: Record<string, any> = {
    up: {
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -distance },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  }

  return variants[direction] || variants.up
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration,
  distance = 50,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-10% 0px',
  })

  const animationConfig = useAnimationConfig()
  const variants = getVariants(direction, distance)

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        ...animationConfig.transition,
        duration: duration || animationConfig.duration,
        delay: delay + animationConfig.delay,
      }}
    >
      {children}
    </motion.div>
  )
}
