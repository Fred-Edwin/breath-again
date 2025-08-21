'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ServicesShowcase from '@/components/ServicesShowcase'

export default function Home() {
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] // cubic-bezier for easeOut
      }
    })
  }

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Wellness-Focused",
      description: "Designs that promote mental health, reduce stress, and enhance overall well-being through natural elements.",
      bgColor: "bg-sage-100",
      hoverBgColor: "group-hover:bg-sage-200"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Sustainable",
      description: "Eco-friendly materials and practices that minimize environmental impact while maximizing beauty.",
      bgColor: "bg-moss-100",
      hoverBgColor: "group-hover:bg-moss-200"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Innovative",
      description: "Cutting-edge biophilic design principles combined with timeless natural aesthetics.",
      bgColor: "bg-earth-100",
      hoverBgColor: "group-hover:bg-earth-200"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaborative",
      description: "Working closely with clients to create personalized spaces that reflect their unique vision and needs.",
      bgColor: "bg-stone-100",
      hoverBgColor: "group-hover:bg-stone-200"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              We believe in creating spaces that nurture both people and planet through thoughtful, nature-inspired design.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-sage-25 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-sage-100"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 ${feature.hoverBgColor} transition-colors`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">{feature.title}</h3>
                <p className="text-forest-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-sage-50 to-moss-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-6">
                The Science Behind Biophilic Design
              </h2>
              <p className="text-lg text-forest-600 mb-6 leading-relaxed">
                Research shows that incorporating natural elements into our living and working spaces can reduce stress by up to 60%, 
                increase productivity by 25%, and improve overall well-being significantly.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduced stress and anxiety levels",
                  "Enhanced creativity and focus",
                  "Improved air quality and health",
                  "Better sleep and recovery",
                  "Increased connection to nature"
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    className="flex items-center text-forest-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <svg className="w-5 h-5 text-sage-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-forest-200 to-sage-200 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-forest-800 mb-2">60%</div>
                  <div className="text-forest-700 font-medium">Stress Reduction</div>
                  <div className="text-sm text-forest-600 mt-2">Average improvement in workplace wellness</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-moss-700">25%</div>
                  <div className="text-moss-600 text-sm">Productivity Boost</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-forest-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-sage-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s work together to create a space that connects you with nature and enhances your daily life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact"
              className="inline-block bg-sage-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}