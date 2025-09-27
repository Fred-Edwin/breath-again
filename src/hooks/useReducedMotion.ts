'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)
    
    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion()
  
  return {
    duration: prefersReducedMotion ? 0.01 : 0.6,
    delay: prefersReducedMotion ? 0 : 0.1,
    enabled: !prefersReducedMotion,
    transition: {
      type: 'tween' as const,
      duration: prefersReducedMotion ? 0.01 : 0.6,
      ease: [0, 0, 0.2, 1] as [number, number, number, number]
    }
  }
}