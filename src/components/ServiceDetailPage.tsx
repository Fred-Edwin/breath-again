'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Service } from '@/types/services'
import ProcessOverview from './ProcessOverview'

interface ServiceDetailPageProps {
  service: Service
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0, 0, 0.2, 1]
      }
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-20 md:py-32 bg-gradient-to-br ${service.color.primary} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white scale-125">
                {service.icon}
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
              variants={itemVariants}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {service.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="bg-white text-forest-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sage-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Examples
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-6">
                Service Overview
              </h2>
              <p className="text-lg text-forest-600 leading-relaxed mb-8">
                {service.details.overview}
              </p>
              <p className="text-lg text-forest-600 leading-relaxed">
                {service.details.approach}
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {service.details.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <svg className="w-6 h-6 text-sage-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-forest-700 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sage-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures every aspect of your space contributes to your well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.details.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-sage-100"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-serif font-bold text-forest-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessOverview
        title={`${service.title} Process`}
        subtitle="Our detailed workflow ensures exceptional results and a smooth experience"
        steps={service.details.process}
      />

      {/* Pricing Section */}
      {service.details.pricing && (
        <section className="py-20 bg-forest-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-6">
                Investment & Pricing
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 mb-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-forest-800 mb-2">
                    {service.details.pricing.priceRange}
                  </div>
                  <div className="text-lg text-forest-600">
                    Starting from {service.details.pricing.startingPrice}
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold text-forest-900 mb-4">
                    Pricing factors include:
                  </h4>
                  <ul className="space-y-2">
                    {service.details.pricing.factors?.map((factor, index) => (
                      <li key={index} className="flex items-center text-forest-600">
                        <svg className="w-4 h-4 text-sage-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-forest-600 mb-8">
                Every project is unique. Contact us for a personalized quote based on your specific needs and vision.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center bg-forest-700 text-sage-50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-forest-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Quote
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-50 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can enhance your environment and well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-sage-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sage-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="bg-transparent text-sage-50 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-sage-50 hover:bg-sage-50 hover:text-forest-900 transition-all duration-300"
              >
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}