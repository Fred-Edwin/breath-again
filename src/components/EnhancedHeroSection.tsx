'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParallaxContainer from './animations/ParallaxContainer'
import { AnimatedButton, FloatingElement } from './animations/MicroInteractions'
import ScrollReveal from './animations/ScrollReveal'
import { useAnimationConfig } from '@/hooks/useReducedMotion'

interface CTAButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  ariaLabel?: string
}

interface HeroContent {
  headline: string
  subheading: string
  description: string
  ctaButtons: CTAButton[]
}

interface EnhancedHeroSectionProps {
  content?: HeroContent
  className?: string
}

const defaultContent: HeroContent = {
  headline: "Transform Your Space with Nature's Wisdom",
  subheading: "Biophilic Design That Heals & Inspires",
  description: "We create harmonious environments that reconnect you with nature, reduce stress, boost productivity, and enhance your overall well-being through scientifically-backed biophilic design principles.",
  ctaButtons: [
    {
      text: "Get Started",
      href: "/contact",
      variant: "primary",
      ariaLabel: "Start your biophilic design project"
    },
    {
      text: "View Portfolio",
      href: "/portfolio",
      variant: "secondary",
      ariaLabel: "Explore our biophilic design portfolio"
    }
  ]
}

export default function EnhancedHeroSection({ 
  content = defaultContent, 
  className = "" 
}: EnhancedHeroSectionProps) {
  const animationConfig = useAnimationConfig()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationConfig.enabled ? 0.2 : 0,
        delayChildren: animationConfig.enabled ? 0.3 : 0
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: animationConfig.enabled ? 30 : 0 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationConfig.enabled ? 0.8 : 0.01,
        ease: [0, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Enhanced Background with Biophilic Elements */}
      <div className="absolute inset-0 nature-gradient">
        <div className="floating-particles" />
        <div className="leaf-pattern" />
      </div>

      {/* Parallax Background Elements */}
      <ParallaxContainer speed={0.2} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-sage-300/40 to-moss-300/40 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-forest-300/30 to-sage-300/30 rounded-full blur-2xl" />
      </ParallaxContainer>

      <ParallaxContainer speed={0.4} className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-moss-400/50 to-forest-400/50 rounded-full blur-lg" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-sage-400/60 to-earth-400/60 rounded-full blur-md" />
      </ParallaxContainer>

      {/* Floating Organic Elements */}
      <FloatingElement delay={0} amplitude={15} duration={4} className="absolute top-1/4 left-1/6">
        <div className="w-8 h-8 bg-forest-500/20 organic-shape" />
      </FloatingElement>
      
      <FloatingElement delay={2} amplitude={20} duration={5} className="absolute top-1/2 right-1/4">
        <div className="w-12 h-12 bg-sage-500/30 organic-shape" />
      </FloatingElement>
      
      <FloatingElement delay={4} amplitude={12} duration={6} className="absolute bottom-1/3 left-1/2">
        <div className="w-6 h-6 bg-moss-500/40 organic-shape" />
      </FloatingElement>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-sage-100/80 dark:bg-forest-800/80 backdrop-blur-sm text-forest-700 dark:text-sage-300 text-sm font-medium rounded-full border border-sage-200/50 dark:border-forest-600/50">
              {content.subheading}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-forest-900 dark:text-sage-100 leading-tight"
          >
            <span className="heading-nature">
              {content.headline}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-forest-700 dark:text-sage-300 leading-relaxed max-w-4xl mx-auto"
          >
            {content.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            {content.ctaButtons.map((button, index) => (
              <AnimatedButton
                key={index}
                variant="lift"
                className={`
                  px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 transform
                  ${button.variant === 'primary'
                    ? 'bg-forest-700 dark:bg-sage-600 text-sage-50 hover:bg-forest-800 dark:hover:bg-sage-700 shadow-lg focus:ring-forest-300 dark:focus:ring-sage-400'
                    : 'bg-white/90 dark:bg-forest-800/90 backdrop-blur-sm text-forest-700 dark:text-sage-300 border-2 border-forest-300 dark:border-sage-600 hover:bg-sage-50 dark:hover:bg-forest-700 hover:border-forest-500 dark:hover:border-sage-400 focus:ring-sage-300 dark:focus:ring-sage-500'
                  }
                `}
                onClick={() => window.location.href = button.href}
                aria-label={button.ariaLabel}
              >
                {button.text}
              </AnimatedButton>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <motion.div
              className="mx-auto w-6 h-10 border-2 border-forest-400 dark:border-sage-500 rounded-full flex justify-center"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                className="w-1 h-3 bg-forest-400 dark:bg-sage-500 rounded-full mt-2"
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
            </motion.div>
            <p className="text-sm text-forest-600 dark:text-sage-400 mt-2 font-medium">
              Scroll to explore
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Organic SVG Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 dark:opacity-10">
        <svg className="absolute top-10 left-10 w-32 h-32 text-forest-600 dark:text-sage-400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 C70,25 85,45 75,65 C65,85 45,90 30,75 C15,60 10,40 25,25 C40,10 50,10 50,10 Z" />
        </svg>
        <svg className="absolute bottom-20 right-16 w-40 h-40 text-sage-600 dark:text-forest-400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20,50 C30,20 50,15 70,30 C90,45 85,65 70,80 C55,95 35,90 25,75 C15,60 10,50 20,50 Z" />
        </svg>
        <svg className="absolute top-1/2 left-4 w-24 h-24 text-moss-600 dark:text-sage-500" viewBox="0 0 100 100" fill="currentColor">
          <path d="M40,10 C60,15 80,30 75,50 C70,70 50,85 30,80 C10,75 5,55 15,35 C25,15 40,10 40,10 Z" />
        </svg>
      </div>
    </section>
  )
}