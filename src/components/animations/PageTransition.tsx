'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { useAnimationConfig } from '@/hooks/useReducedMotion'
import LoadingSpinner from './LoadingSpinner'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const animationConfig = useAnimationConfig()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: animationConfig.enabled ? 20 : 0,
      scale: animationConfig.enabled ? 0.98 : 1
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: animationConfig.enabled ? -20 : 0,
      scale: animationConfig.enabled ? 1.02 : 1
    }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: animationConfig.enabled ? 0.4 : 0.01
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

interface RouteLoadingProps {
  isLoading: boolean
}

export function RouteLoading({ isLoading }: RouteLoadingProps) {
  const animationConfig = useAnimationConfig()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-sage-50/80 dark:bg-forest-900/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: animationConfig.enabled ? 0.2 : 0.01 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ 
              duration: animationConfig.enabled ? 0.3 : 0.01,
              delay: animationConfig.enabled ? 0.1 : 0
            }}
          >
            <LoadingSpinner variant="organic" size="lg" className="text-forest-600 dark:text-sage-400" />
            <p className="text-sm text-forest-600 dark:text-sage-400 font-medium">
              Loading...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface SectionTransitionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function SectionTransition({ 
  children, 
  delay = 0,
  className = '' 
}: SectionTransitionProps) {
  const animationConfig = useAnimationConfig()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: animationConfig.enabled ? 30 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: animationConfig.enabled ? 0.6 : 0.01,
        delay: animationConfig.enabled ? delay : 0,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

interface SlideTransitionProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
  duration?: number
  delay?: number
  className?: string
}

export function SlideTransition({
  children,
  direction = 'left',
  distance = 100,
  duration = 0.6,
  delay = 0,
  className = ''
}: SlideTransitionProps) {
  const animationConfig = useAnimationConfig()

  const getInitialPosition = () => {
    if (!animationConfig.enabled) return { opacity: 1 }
    
    switch (direction) {
      case 'left': return { opacity: 0, x: -distance }
      case 'right': return { opacity: 0, x: distance }
      case 'up': return { opacity: 0, y: -distance }
      case 'down': return { opacity: 0, y: distance }
      default: return { opacity: 0, x: -distance }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: animationConfig.enabled ? duration : 0.01,
        delay: animationConfig.enabled ? delay : 0,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}