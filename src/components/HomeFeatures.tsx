'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TRANSITIONS } from '../utils/animations'

export default function HomeFeatures() {
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        ...TRANSITIONS.medium,
      },
    }),
  }

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-forest-700 dark:text-sage-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: 'Wellness-Focused',
      description:
        'Designs that promote mental health, reduce stress, and enhance overall well-being through natural elements.',
      bgColor: 'bg-sage-100 dark:bg-sage-900/20',
      hoverBgColor: 'group-hover:bg-sage-200 dark:group-hover:bg-sage-800/30',
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-forest-700 dark:text-sage-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
      title: 'Sustainable',
      description:
        'Eco-friendly materials and practices that minimize environmental impact while maximizing beauty.',
      bgColor: 'bg-moss-100 dark:bg-moss-900/20',
      hoverBgColor: 'group-hover:bg-moss-200 dark:group-hover:bg-moss-800/30',
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-forest-700 dark:text-sage-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: 'Science-Based',
      description:
        'Evidence-driven design principles backed by research in environmental psychology and human well-being.',
      bgColor: 'bg-earth-100 dark:bg-earth-900/20',
      hoverBgColor: 'group-hover:bg-earth-200 dark:group-hover:bg-earth-800/30',
    },
  ]

  return (
    <>
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-forest-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 mb-4 heading-nature">
              Why Choose Biophilic Design?
            </h2>
            <p className="text-lg text-forest-600 dark:text-sage-300 max-w-2xl mx-auto">
              Our approach combines ancient wisdom with modern science to create
              spaces that nurture both you and the planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage-50 to-moss-50 dark:from-forest-800 dark:to-sage-900 p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 ${feature.bgColor} opacity-50 transition-all duration-300 ${feature.hoverBgColor}`}
                />
                <div className="relative">
                  <div className="w-12 h-12 bg-white dark:bg-forest-700 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-forest-900 dark:text-sage-100 mb-4 group-hover:text-forest-700 dark:group-hover:text-sage-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-forest-600 dark:text-sage-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900 dark:bg-forest-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-50 mb-6 heading-nature">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s create an environment that nurtures your well-being and
              connects you with the healing power of nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900 shadow-lg transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent text-sage-50 px-8 py-3 rounded-lg font-medium border-2 border-sage-50 hover:bg-sage-50 hover:text-forest-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
