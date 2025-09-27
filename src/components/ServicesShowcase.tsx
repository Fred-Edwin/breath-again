'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServicesShowcaseProps, ServiceCardProps } from '@/types/services'
import { servicesData } from '@/data/services'

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index = 0, 
  variant = 'default',
  showDescription = true,
  className = ""
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const backgroundVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] }
    }
  }

  return (
    <motion.div
      className={`group relative ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
    >
      <motion.div
        className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-sage-100"
        variants={backgroundVariants}
      >
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color.primary} text-white flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
            variants={iconVariants}
          >
            {service.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-serif font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Subtitle */}
          <p className="text-lg font-medium text-forest-600 mb-4 leading-relaxed">
            {service.subtitle}
          </p>

          {/* Description */}
          {showDescription && (
            <p className="text-forest-600 leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
          )}

          {/* Learn More Button */}
          <motion.div
            className="mt-auto"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={service.href}
              className="inline-flex items-center text-forest-700 font-semibold hover:text-forest-900 transition-colors duration-200 group/link"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More
              <motion.svg
                className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-br from-sage-100 to-moss-100 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesShowcase({
  title = "Our Services",
  subtitle = "Comprehensive biophilic design solutions tailored to your unique needs",
  services = servicesData.filter(service => service.featured),
  showAllLink = true,
  maxDisplayed = 3,
  className = ""
}: ServicesShowcaseProps) {
  const displayedServices = services.slice(0, maxDisplayed)

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

  return (
    <section className={`py-20 bg-gradient-to-br from-sage-25 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              className="h-full"
            />
          ))}
        </motion.div>

        {/* View All Services Link */}
        {showAllLink && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center bg-forest-700 text-sage-50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-forest-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              View All Services
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}