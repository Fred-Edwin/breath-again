'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useAnimationConfig } from '@/hooks/useReducedMotion'

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'button' | 'switch' | 'icon'
  showLabel?: boolean
  className?: string
}

export default function ThemeToggle({
  size = 'md',
  variant = 'button',
  showLabel = false,
  className = ''
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  const animationConfig = useAnimationConfig()

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  }

  const renderIcon = (isDark: boolean) => {
    if (isDark) {
      return (
        <motion.svg
          key="moon"
          className="w-full h-full p-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={animationConfig.transition}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      )
    }

    return (
      <motion.svg
        key="sun"
        className="w-full h-full p-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={animationConfig.transition}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.svg>
    )
  }

  if (variant === 'switch') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {showLabel && (
          <span className="text-sm font-medium text-forest-700 dark:text-sage-300">
            {resolvedTheme === 'light' ? 'Light' : 'Dark'} Mode
          </span>
        )}
        
        <motion.button
          onClick={toggleTheme}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition-colors
            ${resolvedTheme === 'dark' 
              ? 'bg-forest-600' 
              : 'bg-sage-200'
            }
            focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2
          `}
          whileHover={{ scale: animationConfig.enabled ? 1.05 : 1 }}
          whileTap={{ scale: animationConfig.enabled ? 0.95 : 1 }}
        >
          <motion.span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition
              ${resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'}
            `}
            animate={{
              x: resolvedTheme === 'dark' ? 24 : 4
            }}
            transition={animationConfig.transition}
          />
        </motion.button>
      </div>
    )
  }

  if (variant === 'icon') {
    return (
      <motion.button
        onClick={toggleTheme}
        className={`
          ${sizeClasses[size]} 
          ${className}
          text-forest-700 dark:text-sage-300 
          hover:text-forest-900 dark:hover:text-sage-100
          focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2
          transition-colors duration-200
        `}
        whileHover={{ 
          scale: animationConfig.enabled ? 1.1 : 1,
          rotate: animationConfig.enabled ? 15 : 0 
        }}
        whileTap={{ scale: animationConfig.enabled ? 0.9 : 1 }}
        aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
      >
        <AnimatePresence mode="wait">
          {renderIcon(resolvedTheme === 'dark')}
        </AnimatePresence>
      </motion.button>
    )
  }

  // Default button variant
  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        bg-sage-100 dark:bg-forest-800
        text-forest-700 dark:text-sage-300
        border border-sage-200 dark:border-forest-600
        rounded-lg
        hover:bg-sage-200 dark:hover:bg-forest-700
        focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2
        transition-colors duration-200
        ${className}
      `}
      whileHover={{ scale: animationConfig.enabled ? 1.05 : 1 }}
      whileTap={{ scale: animationConfig.enabled ? 0.95 : 1 }}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        {renderIcon(resolvedTheme === 'dark')}
      </AnimatePresence>
      
      {showLabel && (
        <span className="ml-2 text-xs">
          {resolvedTheme === 'light' ? 'Dark' : 'Light'}
        </span>
      )}
    </motion.button>
  )
}