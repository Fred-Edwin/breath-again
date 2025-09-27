'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectPageProps } from '@/types/portfolio'

export default function ProjectDetailPage({ project }: ProjectPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageFilter, setImageFilter] = useState<
    'all' | 'before' | 'after' | 'main' | 'detail'
  >('all')

  const filteredImages = project.images.filter(
    (image) => imageFilter === 'all' || image.type === imageFilter
  )

  const images = filteredImages.length > 0 ? filteredImages : project.images

  const getCategoryColor = (category: string) => {
    const colors = {
      residential: 'from-sage-500 to-forest-600',
      commercial: 'from-forest-500 to-moss-600',
      hospitality: 'from-moss-500 to-sage-600',
      wellness: 'from-earth-500 to-stone-600',
      landscape: 'from-stone-500 to-sage-600',
    }
    return (
      colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative py-20 md:py-32 bg-gradient-to-br ${getCategoryColor(project.category)} text-white overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                    Featured Project
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-xl md:text-2xl font-light mb-6 text-white/90">
                {project.subtitle}
              </p>

              <div className="flex items-center space-x-6 text-white/80 mb-8">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
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
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z"
                    />
                  </svg>
                  <span>{project.year}</span>
                </div>
                {project.client && (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{project.client}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-forest-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-forest-600 leading-relaxed mb-8">
                  {project.details.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-4">
                      The Challenge
                    </h3>
                    <p className="text-forest-600 leading-relaxed">
                      {project.details.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-4">
                      Our Solution
                    </h3>
                    <p className="text-forest-600 leading-relaxed">
                      {project.details.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project Info Sidebar */}
            <div>
              <motion.div
                className="bg-sage-25 rounded-2xl p-6 sticky top-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-forest-900 mb-6">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-forest-700 mb-1">
                      Timeline
                    </h4>
                    <p className="text-forest-600">
                      {project.details.timeline}
                    </p>
                  </div>

                  {project.details.budget && (
                    <div>
                      <h4 className="text-sm font-semibold text-forest-700 mb-1">
                        Investment
                      </h4>
                      <p className="text-forest-600">
                        {project.details.budget}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-forest-700 mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.details.features
                        .slice(0, 4)
                        .map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm text-forest-600 flex items-start"
                          >
                            <svg
                              className="w-4 h-4 text-sage-500 mr-2 mt-0.5 flex-shrink-0"
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
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-forest-700 mb-2">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-sage-100 text-forest-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-sage-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Explore the transformation through our detailed project
              photography
            </p>
          </motion.div>

          {/* Image Filters */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 bg-white rounded-lg p-2">
              {[
                { value: 'all', label: 'All Photos' },
                { value: 'before', label: 'Before' },
                { value: 'after', label: 'After' },
                { value: 'detail', label: 'Details' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setImageFilter(filter.value as any)
                    setCurrentImageIndex(0)
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    imageFilter === filter.value
                      ? 'bg-forest-700 text-white'
                      : 'text-forest-600 hover:bg-sage-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Image Display */}
          <div className="relative aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image
              src={images[currentImageIndex]?.src || project.thumbnail.src}
              alt={images[currentImageIndex]?.alt || project.thumbnail.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-forest-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-forest-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}

            {/* Image Type Badge */}
            {images[currentImageIndex]?.type && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-forest-700 text-sm font-semibold rounded-full">
                  {images[currentImageIndex].type.charAt(0).toUpperCase() +
                    images[currentImageIndex].type.slice(1)}
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail Grid */}
          {images.length > 1 && (
            <div className="flex flex-wrap gap-3 justify-center">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'border-forest-500 ring-2 ring-forest-200'
                      : 'border-sage-200 hover:border-sage-300'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Outcomes/Results */}
      {project.details.outcomes.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-forest-900 mb-4">
                Project Impact
              </h2>
              <p className="text-lg text-forest-600 max-w-2xl mx-auto">
                Measurable results that demonstrate the success of our biophilic
                design approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.details.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-sage-25 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-forest-700 mb-2">
                    {outcome.value}
                  </div>
                  <div className="text-lg font-semibold text-forest-900 mb-2">
                    {outcome.metric}
                  </div>
                  <div className="text-forest-600 text-sm">
                    {outcome.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.details.testimonial && (
        <section className="py-20 bg-forest-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-2xl md:text-3xl text-sage-100 font-light leading-relaxed mb-8">
                &quot;{project.details.testimonial.quote}&quot;
              </blockquote>
              <div className="text-sage-200">
                <div className="font-semibold text-lg">
                  {project.details.testimonial.author}
                </div>
                <div className="text-sage-300">
                  {project.details.testimonial.role}
                </div>
                {project.details.testimonial.company && (
                  <div className="text-sage-300">
                    {project.details.testimonial.company}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-sage-25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-forest-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-forest-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together. Get in touch to
              discuss your biophilic design project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-forest-700 text-sage-50 px-8 py-4 rounded-xl font-semibold hover:bg-forest-800 transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-forest-700 px-8 py-4 rounded-xl font-semibold hover:bg-sage-50 transition-colors border border-sage-200"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
