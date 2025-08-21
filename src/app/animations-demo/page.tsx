'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import ParallaxContainer from '@/components/animations/ParallaxContainer'
import { 
  AnimatedButton, 
  AnimatedCard, 
  FloatingElement, 
  PulseElement, 
  StaggeredList 
} from '@/components/animations/MicroInteractions'
import LoadingSpinner from '@/components/animations/LoadingSpinner'
import ThemeToggle from '@/components/ThemeToggle'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function AnimationsDemo() {
  const cardData = [
    { title: "Smooth Scrolling", description: "Elements animate as they enter the viewport" },
    { title: "Parallax Effects", description: "Background elements move at different speeds" },
    { title: "Micro Interactions", description: "Subtle animations on hover and click" },
    { title: "Theme Transitions", description: "Smooth color transitions between themes" },
    { title: "Loading States", description: "Organic loading animations" },
    { title: "Accessibility", description: "Respects prefers-reduced-motion" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-forest-900 transition-colors duration-500">
      {/* Hero Section with Biophilic Background */}
      <section className="relative min-h-screen flex items-center justify-center nature-gradient floating-particles">
        <div className="leaf-pattern absolute inset-0" />
        
        {/* Parallax Background Elements */}
        <ParallaxContainer speed={0.2} className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-sage-400/30 organic-shape" />
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-forest-400/20 organic-shape" />
        </ParallaxContainer>

        <ParallaxContainer speed={0.4} className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-moss-400/40 organic-shape" />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-earth-400/30 organic-shape" />
        </ParallaxContainer>

        {/* Floating Elements */}
        <FloatingElement delay={0} amplitude={20} duration={4} className="absolute top-1/4 left-1/6">
          <div className="w-12 h-12 bg-sage-500/20 organic-shape" />
        </FloatingElement>
        
        <FloatingElement delay={2} amplitude={15} duration={5} className="absolute top-1/2 right-1/4">
          <div className="w-8 h-8 bg-forest-500/30 organic-shape" />
        </FloatingElement>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest-900 dark:text-sage-100 mb-6 heading-nature">
              Animation Showcase
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-forest-700 dark:text-sage-300 mb-8 leading-relaxed">
              Experience the power of biophilic design enhanced with smooth, accessible animations
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                variant="lift"
                className="bg-forest-700 dark:bg-sage-600 text-sage-50 px-8 py-4 rounded-xl font-semibold hover:bg-forest-800 dark:hover:bg-sage-700 transition-colors focus:outline-none focus:ring-4 focus:ring-forest-300 dark:focus:ring-sage-400"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </AnimatedButton>
              
              <ThemeToggle variant="button" showLabel size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Loading Spinners Demo */}
      <section className="py-20 bg-sage-25 dark:bg-forest-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 text-center mb-12 heading-nature">
              Loading Animations
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['default', 'organic', 'dots', 'wave'].map((variant, index) => (
              <ScrollReveal key={variant} direction="up" delay={index * 0.1}>
                <div className="bg-white dark:bg-forest-700 p-8 rounded-2xl text-center shadow-organic transition-colors duration-500">
                  <h3 className="text-lg font-semibold text-forest-900 dark:text-sage-100 mb-4 capitalize">
                    {variant}
                  </h3>
                  <div className="flex justify-center mb-4">
                    <LoadingSpinner variant={variant as any} size="lg" className="text-forest-600 dark:text-sage-400" />
                  </div>
                  <p className="text-sm text-forest-600 dark:text-sage-400">
                    {variant === 'organic' ? 'Nature-inspired' : `${variant} style`}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Cards Grid */}
      <section id="features" className="py-20 bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 text-center mb-12 heading-nature">
              Interactive Elements
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <AnimatedCard
                  variant="lift"
                  className="bg-sage-25 dark:bg-forest-800 p-8 rounded-2xl border border-sage-200 dark:border-forest-600 hover:border-sage-400 dark:hover:border-sage-500 transition-all duration-300 cursor-pointer"
                  onClick={() => console.log(`Clicked ${card.title}`)}
                >
                  <h3 className="text-xl font-semibold text-forest-900 dark:text-sage-100 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-forest-600 dark:text-sage-300">
                    {card.description}
                  </p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Staggered Animation Demo */}
      <section className="py-20 bg-sage-25 dark:bg-forest-800 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 text-center mb-12 heading-nature">
              Staggered Animations
            </h2>
          </ScrollReveal>
          
          <StaggeredList staggerDelay={0.2} direction="up">
            {[
              "🌿 Biophilic design principles",
              "🎨 Smooth scroll animations",
              "🌙 Dark mode transitions", 
              "📱 Mobile-first responsive design",
              "♿ Accessibility-focused interactions",
              "⚡ Performance-optimized animations"
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-forest-700 p-6 rounded-xl mb-4 shadow-sm border border-sage-200 dark:border-forest-600 transition-colors duration-300">
                <p className="text-lg text-forest-800 dark:text-sage-200">
                  {item}
                </p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Pulsing Elements */}
      <section className="py-20 bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 mb-8 heading-nature">
              Pulsing Highlights
            </h2>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <PulseElement scale={[1, 1.1]} duration={2}>
              <div className="w-20 h-20 bg-sage-400 dark:bg-sage-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
            </PulseElement>
            
            <PulseElement scale={[1, 1.15]} duration={2.5}>
              <div className="w-24 h-24 bg-forest-400 dark:bg-forest-600 rounded-full flex items-center justify-center">
                <span className="text-3xl">🌿</span>
              </div>
            </PulseElement>
            
            <PulseElement scale={[1, 1.08]} duration={3}>
              <div className="w-20 h-20 bg-moss-400 dark:bg-moss-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍃</span>
              </div>
            </PulseElement>
          </div>
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-forest-600 dark:text-sage-400">
              Subtle pulsing draws attention to key elements
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter with Animation Variants */}
      <section className="py-20 bg-sage-25 dark:bg-forest-800 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <NewsletterSignup variant="default" showInterests={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* Button Variants Demo */}
      <section className="py-20 bg-white dark:bg-forest-900 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 mb-12 heading-nature">
              Button Animations
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['lift', 'scale', 'glow', 'float'].map((variant, index) => (
              <ScrollReveal key={variant} direction="up" delay={index * 0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-forest-800 dark:text-sage-200 capitalize">
                    {variant}
                  </h3>
                  <AnimatedButton
                    variant={variant as any}
                    className="bg-forest-600 dark:bg-sage-600 text-sage-50 px-6 py-3 rounded-lg font-medium hover:bg-forest-700 dark:hover:bg-sage-700 transition-colors focus:outline-none focus:ring-4 focus:ring-forest-300 dark:focus:ring-sage-400"
                    onClick={() => console.log(`${variant} button clicked`)}
                  >
                    {variant} Button
                  </AnimatedButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Note */}
      <section className="py-16 bg-sage-50 dark:bg-forest-850 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <div className="bg-white dark:bg-forest-700 p-8 rounded-2xl shadow-organic border border-sage-200 dark:border-forest-600 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-forest-900 dark:text-sage-100 mb-4">
                ♿ Accessibility First
              </h3>
              <p className="text-forest-600 dark:text-sage-400 leading-relaxed">
                All animations respect the <code className="bg-sage-100 dark:bg-forest-600 px-2 py-1 rounded text-sm">prefers-reduced-motion</code> setting. 
                Users who prefer reduced motion will see minimal or no animations while maintaining full functionality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}