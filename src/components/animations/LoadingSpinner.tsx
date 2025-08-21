'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'organic' | 'dots' | 'wave'
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
}

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'organic',
  className = '' 
}: LoadingSpinnerProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="w-full h-full border-2 border-current border-t-transparent rounded-full opacity-60" />
      </div>
    )
  }

  const renderSpinner = () => {
    switch (variant) {
      case 'default':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full ${className}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )

      case 'organic':
        return (
          <div className={`${sizeClasses[size]} relative ${className}`}>
            <motion.div
              className="absolute inset-0 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-1 border border-current border-b-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        )

      case 'dots':
        const dotSize = size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-1.5 h-1.5' : size === 'lg' ? 'w-2 h-2' : 'w-3 h-3'
        return (
          <div className={`flex space-x-1 ${className}`}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className={`${dotSize} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        )

      case 'wave':
        const barHeight = size === 'sm' ? 'h-3' : size === 'md' ? 'h-4' : size === 'lg' ? 'h-5' : 'h-6'
        return (
          <div className={`flex items-end space-x-0.5 ${className}`}>
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                className={`w-0.5 bg-current rounded-full ${barHeight}`}
                animate={{
                  scaleY: [1, 0.3, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return renderSpinner()
}