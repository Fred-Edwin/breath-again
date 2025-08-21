'use client'

import { ReactNode, CSSProperties } from 'react'
import { useParallax } from '@/hooks/useParallax'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ParallaxContainerProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  style?: CSSProperties
}

export default function ParallaxContainer({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
  style = {}
}: ParallaxContainerProps) {
  const prefersReducedMotion = useReducedMotion()
  const { transform } = useParallax({ 
    speed, 
    direction, 
    disabled: prefersReducedMotion 
  })

  return (
    <div
      className={className}
      style={{
        transform,
        willChange: prefersReducedMotion ? 'auto' : 'transform',
        ...style
      }}
    >
      {children}
    </div>
  )
}