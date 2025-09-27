'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ProjectInquiryForm from '@/components/ProjectInquiryForm'
import NewsletterSignup from '@/components/NewsletterSignup'

type ActiveForm = 'contact' | 'inquiry'

export default function Contact() {
  const [activeForm, setActiveForm] = useState<ActiveForm>('contact')
  const [showInquiryModal, setShowInquiryModal] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-100 to-sage-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-forest-300 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-16 w-48 h-48 bg-sage-300 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-moss-200 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest-900 mb-6"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-forest-700 leading-relaxed max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Ready to transform your space with biophilic design? Let&apos;s
              start the conversation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <button
                onClick={() => setActiveForm('contact')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === 'contact'
                    ? 'bg-forest-700 text-sage-50 shadow-lg'
                    : 'bg-white text-forest-700 border border-forest-200 hover:bg-sage-50'
                }`}
              >
                Quick Contact
              </button>
              <button
                onClick={() => setShowInquiryModal(true)}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === 'inquiry'
                    ? 'bg-forest-700 text-sage-50 shadow-lg'
                    : 'bg-white text-forest-700 border border-forest-200 hover:bg-sage-50'
                }`}
              >
                Detailed Project Inquiry
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-lg text-forest-600 leading-relaxed mb-8">
                  We&apos;re here to help you create spaces that nurture your
                  well-being and connect you with nature. Reach out to us
                  through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-900 mb-1">
                      Service Area
                    </h3>
                    <p className="text-forest-600">
                      Nakuru & surrounding areas
                      <br />
                      Kenya-wide consultations available
                      <br />
                      <span className="text-sm text-forest-500">
                        Remote consultations available
                      </span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-moss-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-forest-600">
                      <a
                        href="tel:+254702700247"
                        className="hover:text-forest-800 transition-colors"
                      >
                        +254 702 700 247
                      </a>
                    </p>
                    <p className="text-sm text-forest-500 mt-1">
                      Mon-Fri: 9AM-6PM EAT
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-forest-600">
                      <a
                        href="mailto:breatheagain001@gmail.com"
                        className="hover:text-forest-800 transition-colors"
                      >
                        breatheagain001@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-forest-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="bg-sage-50 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-forest-900 mb-3">
                  Free Consultation
                </h3>
                <p className="text-forest-600 mb-4">
                  Book a complimentary 30-minute consultation to discuss your
                  project and learn how biophilic design can transform your
                  space.
                </p>
                <Link
                  href="#"
                  className="inline-block bg-forest-700 text-sage-50 px-6 py-2 rounded-lg font-medium hover:bg-forest-800 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and Location Section */}
      <section className="py-20 bg-sage-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Ready to bring nature into your space? Reach out through any of
              these channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              className="bg-gradient-to-br from-sage-200 to-forest-200 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center text-forest-700">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-lg font-medium">Follow Us on Social Media</p>
                <p className="text-sm opacity-75">
                  @breatheagain_01 on Instagram
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/20 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
            </motion.div>

            {/* Business Hours and Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-forest-900 mb-4">
                  Response Times
                </h3>
                <div className="space-y-3 text-forest-600">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Email responses within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Phone calls Mon-Fri 9AM-6PM EAT</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Social media messages same day</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-forest-900 mb-4">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🌱', text: 'Free initial consultations' },
                    { icon: '💡', text: 'Custom design solutions' },
                    { icon: '🏗️', text: 'Affordable pricing' },
                    { icon: '📚', text: 'Climate-resilient plants' },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-forest-700">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-forest-900 mb-3">
                  How We Work
                </h3>
                <ul className="space-y-2 text-forest-600">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Site visits throughout Kenya
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Remote consultations available
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Flexible meeting arrangements
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="default" showInterests={true} />
        </div>
      </section>

      {/* Project Inquiry Modal */}
      {showInquiryModal && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInquiryModal(false)}
            />

            <motion.div
              className="relative z-10 w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectInquiryForm onClose={() => setShowInquiryModal(false)} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
