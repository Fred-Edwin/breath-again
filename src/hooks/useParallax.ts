'use client'

import { useEffect, useState } from 'react'

interface ParallaxOptions {
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  disabled?: boolean
}

export function useParallax({
  speed = 0.5,
  direction = 'up',
  disabled = false,
}: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (disabled) return

    const handleScroll = () => {
      const scrollY = window.pageYOffset
      const newOffset = scrollY * speed

      setOffset(newOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, disabled])

  const getTransform = () => {
    if (disabled) return 'none'

    switch (direction) {
      case 'up':
        return `translateY(-${offset}px)`
      case 'down':
        return `translateY(${offset}px)`
      case 'left':
        return `translateX(-${offset}px)`
      case 'right':
        return `translateX(${offset}px)`
      default:
        return `translateY(-${offset}px)`
    }
  }

  return {
    transform: getTransform(),
    offset,
  }
}
