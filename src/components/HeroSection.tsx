'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  EASING,
  TRANSITIONS,
  createStaggerContainer,
  createFadeUpVariants,
} from '../utils/animations'

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

interface HeroSectionProps {
  content?: HeroContent
  className?: string
}

const defaultContent: HeroContent = {
  headline: 'Breathe Nature Back Into Your Space',
  subheading: 'Affordable Biophilic Solutions for Healthier Urban Living',
  description:
    'At Breathe Again, we design products and concepts that reconnect urban residents with nature—improving wellbeing, enhancing aesthetics, and making sustainability simple and accessible.',
  ctaButtons: [
    {
      text: 'Get Started',
      href: '/contact',
      variant: 'primary',
      ariaLabel: 'Start your biophilic design project',
    },
    {
      text: 'View Portfolio',
      href: '/portfolio',
      variant: 'secondary',
      ariaLabel: 'Explore our biophilic design portfolio',
    },
  ],
}

const FloatingElement: React.FC<{
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}> = ({ children, delay = 0, duration = 20, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: EASING.easeInOut,
      }}
    >
      {children}
    </motion.div>
  )
}

const ParallaxBackground: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-moss-50 to-forest-100" />

      {/* Parallax layers */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-sage-200/40 to-moss-200/40 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-forest-200/30 to-sage-200/30 rounded-full blur-2xl" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-30">
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-br from-moss-300/50 to-forest-300/50 rounded-full blur-lg" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-sage-300/60 to-earth-300/60 rounded-full blur-md" />
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-40">
        <FloatingElement
          delay={0}
          duration={15}
          className="absolute top-1/4 left-1/6"
        >
          <div className="w-8 h-8 bg-forest-400/30 rounded-full blur-sm" />
        </FloatingElement>
        <FloatingElement
          delay={2}
          duration={18}
          className="absolute top-1/2 right-1/4"
        >
          <div className="w-12 h-12 bg-sage-400/40 rounded-full blur-sm" />
        </FloatingElement>
        <FloatingElement
          delay={4}
          duration={22}
          className="absolute bottom-1/3 left-1/2"
        >
          <div className="w-6 h-6 bg-moss-400/50 rounded-full blur-sm" />
        </FloatingElement>
      </motion.div>

      {/* Organic shapes */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-10 left-10 w-24 h-24 text-forest-600"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50,10 C70,25 85,45 75,65 C65,85 45,90 30,75 C15,60 10,40 25,25 C40,10 50,10 50,10 Z" />
        </svg>
        <svg
          className="absolute bottom-20 right-16 w-32 h-32 text-sage-600"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M20,50 C30,20 50,15 70,30 C90,45 85,65 70,80 C55,95 35,90 25,75 C15,60 10,50 20,50 Z" />
        </svg>
      </div>
    </div>
  )
}

export default function HeroSection({
  content = defaultContent,
  className = '',
}: HeroSectionProps) {
  const containerVariants = createStaggerContainer(0.2)

  const itemVariants = createFadeUpVariants(0.8)

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ...TRANSITIONS.medium,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        ...TRANSITIONS.fast,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: 'tween' as const,
        duration: 0.1,
      },
    },
  }

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      role="banner"
      aria-label="Hero section"
    >
      <ParallaxBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-forest-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block">Breathe Nature Back</span>
            <span className="block text-transparent bg-gradient-to-r from-forest-700 via-sage-600 to-moss-600 bg-clip-text">
              Into Your Space
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-forest-700 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {content.subheading}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-forest-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            variants={itemVariants}
          >
            {content.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={itemVariants}
          >
            {content.ctaButtons.map((button, index) => (
              <motion.div
                key={button.text}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <Link
                  href={button.href}
                  className={`
                    inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg
                    focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-transparent
                    ${
                      button.variant === 'primary'
                        ? 'bg-forest-700 text-sage-50 hover:bg-forest-800 focus:ring-forest-500 shadow-forest-200 hover:shadow-forest-300'
                        : 'bg-white/90 text-forest-700 border-2 border-forest-700 hover:bg-forest-700 hover:text-sage-50 focus:ring-forest-500 shadow-sage-200 hover:shadow-sage-300 backdrop-blur-sm'
                    }
                    w-full sm:w-auto min-w-[200px]
                  `}
                  aria-label={button.ariaLabel || button.text}
                >
                  {button.text}
                  <motion.svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center text-forest-600"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium mb-2 tracking-wide">
                Discover More
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  )
}
