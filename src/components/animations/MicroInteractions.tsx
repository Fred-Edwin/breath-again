'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'
import { useAnimationConfig } from '@/hooks/useReducedMotion'

interface AnimatedButtonProps extends MotionProps {
  children: ReactNode
  variant?: 'lift' | 'scale' | 'glow' | 'float' | 'ripple'
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = 'lift', className = '', disabled = false, ...props }, ref) => {
    const animationConfig = useAnimationConfig()

    if (!animationConfig.enabled) {
      return (
        <button ref={ref} className={className} disabled={disabled} {...(props as any)}>
          {children}
        </button>
      )
    }

    const getVariants = () => {
      switch (variant) {
        case 'lift':
          return {
            hover: { y: -2, scale: 1.02 },
            tap: { y: 0, scale: 0.98 }
          }
        case 'scale':
          return {
            hover: { scale: 1.05 },
            tap: { scale: 0.95 }
          }
        case 'glow':
          return {
            hover: { 
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              scale: 1.02
            },
            tap: { scale: 0.98 }
          }
        case 'float':
          return {
            hover: { y: -4 },
            tap: { y: -2 }
          }
        default:
          return {
            hover: { scale: 1.02 },
            tap: { scale: 0.98 }
          }
      }
    }

    return (
      <motion.button
        ref={ref}
        className={className}
        disabled={disabled}
        variants={getVariants()}
        whileHover={disabled ? {} : 'hover'}
        whileTap={disabled ? {} : 'tap'}
        transition={animationConfig.transition}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

interface AnimatedCardProps extends MotionProps {
  children: ReactNode
  variant?: 'lift' | 'tilt' | 'glow' | 'border-glow'
  className?: string
  onClick?: () => void
}

export function AnimatedCard({ 
  children, 
  variant = 'lift', 
  className = '',
  onClick,
  ...props 
}: AnimatedCardProps) {
  const animationConfig = useAnimationConfig()

  if (!animationConfig.enabled) {
    return (
      <div className={className} onClick={onClick} {...(props as any)}>
        {children}
      </div>
    )
  }

  const getVariants = () => {
    switch (variant) {
      case 'lift':
        return {
          hover: { 
            y: -10,
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }
        }
      case 'tilt':
        return {
          hover: { 
            rotateX: 5,
            rotateY: 5,
            scale: 1.02
          }
        }
      case 'glow':
        return {
          hover: {
            boxShadow: '0 0 30px rgba(135, 169, 107, 0.3)',
            borderColor: 'rgba(135, 169, 107, 0.5)'
          }
        }
      case 'border-glow':
        return {
          hover: {
            borderColor: 'rgba(135, 169, 107, 1)',
            boxShadow: '0 0 20px rgba(135, 169, 107, 0.2)'
          }
        }
      default:
        return {
          hover: { y: -5 }
        }
    }
  }

  return (
    <motion.div
      className={className}
      onClick={onClick}
      variants={getVariants()}
      whileHover="hover"
      transition={animationConfig.transition}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  amplitude?: number
  duration?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  amplitude = 10,
  duration = 3,
  className = ''
}: FloatingElementProps) {
  const animationConfig = useAnimationConfig()

  if (!animationConfig.enabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude/2, amplitude/2, -amplitude/2]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

interface PulseElementProps {
  children: ReactNode
  scale?: [number, number]
  duration?: number
  className?: string
}

export function PulseElement({
  children,
  scale = [1, 1.05],
  duration = 2,
  className = ''
}: PulseElementProps) {
  const animationConfig = useAnimationConfig()

  if (!animationConfig.enabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        scale: [scale[0], scale[1], scale[0]]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredListProps {
  children: ReactNode[]
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function StaggeredList({
  children,
  staggerDelay = 0.1,
  direction = 'up',
  className = ''
}: StaggeredListProps) {
  const animationConfig = useAnimationConfig()

  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: 30 }
      case 'down': return { y: -30 }
      case 'left': return { x: 30 }
      case 'right': return { x: -30 }
      default: return { y: 30 }
    }
  }

  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, ...getInitialOffset() }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            ...animationConfig.transition,
            delay: index * (animationConfig.enabled ? staggerDelay : 0)
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}