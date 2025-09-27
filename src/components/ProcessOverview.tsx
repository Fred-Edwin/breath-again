'use client'

import { motion } from 'framer-motion'
import { ProcessOverviewProps } from '@/types/services'
import { generalProcess } from '@/data/services'

export default function ProcessOverview({
  title = "Our Design Process",
  subtitle = "A collaborative approach that ensures every project reflects your vision while maximizing the benefits of biophilic design",
  steps = generalProcess,
  className = ""
}: ProcessOverviewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1]
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1]
      }
    }
  }

  const connectionLineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest-900 mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connection Line - Desktop */}
          <motion.div
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-300 via-forest-300 to-moss-300 transform origin-left"
            variants={connectionLineVariants}
            style={{ top: '5rem' }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative group"
                variants={stepVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Card */}
                <div className="bg-sage-25 rounded-2xl p-6 border border-sage-100 hover:border-sage-200 transition-all duration-300 hover:shadow-lg">
                  {/* Step Number */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-forest-600 to-sage-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-serif font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-forest-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {step.duration && (
                      <div className="inline-flex items-center text-sm text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.duration}
                      </div>
                    )}
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-moss-400 to-sage-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </div>

                {/* Arrow Connection - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="lg:hidden flex justify-center mt-6 mb-2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
                  >
                    <svg className="w-6 h-6 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-forest-600 mb-6">
            Ready to start your biophilic design journey?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-forest-600 to-sage-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-forest-700 hover:to-sage-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Project
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}