import type { Variants } from 'framer-motion'

// Standardized easing functions
export const EASING = {
  easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
  easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  anticipate: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  organic: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number],
} as const

// Standardized transitions
export const TRANSITIONS = {
  fast: {
    type: 'tween' as const,
    duration: 0.3,
    ease: EASING.easeOut,
  },
  medium: {
    type: 'tween' as const,
    duration: 0.6,
    ease: EASING.easeOut,
  },
  slow: {
    type: 'tween' as const,
    duration: 0.8,
    ease: EASING.easeOut,
  },
} as const

// Common animation variants
export const createFadeUpVariants = (duration: number = 0.6): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: EASING.easeOut,
    },
  },
})

export const createFadeVariants = (duration: number = 0.6): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: EASING.easeOut,
    },
  },
})

export const createScaleVariants = (duration: number = 0.6): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: EASING.easeOut,
    },
  },
})

export const createStaggerContainer = (
  staggerChildren: number = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.2,
    },
  },
})
