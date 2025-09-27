'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SkeletonLoaderProps {
  className?: string
  variant?: 'text' | 'avatar' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
  lines?: number
}

export default function SkeletonLoader({
  className = '',
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
  lines = 1,
}: SkeletonLoaderProps) {
  const prefersReducedMotion = useReducedMotion()

  const baseClasses =
    'bg-gradient-to-r from-sage-200 via-sage-100 to-sage-200 dark:from-forest-800 dark:via-forest-700 dark:to-forest-800'

  const variantClasses = {
    text: 'rounded-sm',
    avatar: 'rounded-full',
    rectangular: 'rounded-md',
    circular: 'rounded-full',
  }

  const pulseAnimation = prefersReducedMotion
    ? {}
    : {
        backgroundPosition: ['200% 0', '-200% 0'],
        transition: {
          duration: 2,
          repeat: Infinity,
          type: 'tween' as const,
          ease: [0, 0, 1, 1] as [number, number, number, number], // linear easing
        },
      }

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }, (_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${variantClasses.text}`}
            style={{
              width: index === lines - 1 ? '75%' : width,
              height: height,
              backgroundSize: '400% 100%',
            }}
            animate={pulseAnimation}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        width,
        height,
        backgroundSize: '400% 100%',
      }}
      animate={pulseAnimation}
    />
  )
}

// Pre-built skeleton components for common use cases
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white dark:bg-forest-800 rounded-2xl p-6 shadow-sm space-y-4">
      <SkeletonLoader variant="rectangular" height="200px" />
      <div className="space-y-3">
        <SkeletonLoader variant="text" width="60%" height="1.5rem" />
        <SkeletonLoader variant="text" lines={2} height="1rem" />
        <div className="flex gap-2">
          <SkeletonLoader variant="rectangular" width="60px" height="24px" />
          <SkeletonLoader variant="rectangular" width="80px" height="24px" />
        </div>
      </div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-sage-25 dark:bg-forest-800 rounded-2xl p-8 space-y-6">
      <SkeletonLoader variant="circular" width="48px" height="48px" />
      <div className="space-y-4">
        <SkeletonLoader variant="text" width="70%" height="1.5rem" />
        <SkeletonLoader variant="text" lines={3} height="1rem" />
      </div>
      <SkeletonLoader variant="rectangular" width="120px" height="40px" />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-moss-50 dark:from-forest-900 dark:to-sage-900">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <SkeletonLoader variant="text" width="80%" height="3rem" />
        <SkeletonLoader variant="text" lines={2} height="1.5rem" width="90%" />
        <div className="flex justify-center gap-4">
          <SkeletonLoader variant="rectangular" width="150px" height="48px" />
          <SkeletonLoader variant="rectangular" width="150px" height="48px" />
        </div>
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        {/* Header skeleton */}
        <div className="text-center space-y-4">
          <SkeletonLoader variant="text" width="60%" height="3rem" />
          <SkeletonLoader
            variant="text"
            lines={2}
            height="1.25rem"
            width="80%"
          />
        </div>

        {/* Content grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }, (_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
