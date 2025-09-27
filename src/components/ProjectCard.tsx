'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectCardProps } from '@/types/portfolio'
import Link from 'next/link'
import { EASING, createScaleVariants } from '../utils/animations'

export default function ProjectCard({
  project,
  onClick,
  variant = 'masonry',
  showDetails = true,
  className = '',
}: ProjectCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(project)
    }
  }

  const cardVariants = createScaleVariants(0.6)

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'tween' as const,
        duration: 0.4,
        ease: EASING.easeOut,
      },
    },
  }

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      residential: 'bg-sage-500',
      commercial: 'bg-forest-500',
      hospitality: 'bg-moss-500',
      wellness: 'bg-earth-500',
      landscape: 'bg-stone-500',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      residential: 'Residential',
      commercial: 'Commercial',
      hospitality: 'Hospitality',
      wellness: 'Wellness',
      landscape: 'Landscape',
    }
    return labels[category as keyof typeof labels] || category
  }

  if (variant === 'list') {
    return (
      <motion.div
        className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sage-100 overflow-hidden ${className}`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}
              >
                {getCategoryLabel(project.category)}
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif font-bold text-forest-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-forest-600 mb-3 font-medium">
                {project.subtitle}
              </p>
              <p className="text-forest-600 text-sm leading-relaxed mb-4">
                {project.shortDescription}
              </p>
              <div className="flex items-center text-xs text-forest-500 mb-4">
                <svg
                  className="w-4 h-4 mr-1"
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
                {project.location} • {project.year}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-sage-50 text-forest-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-xs text-forest-400">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={handleClick}
                  className="p-2 bg-sage-100 text-forest-700 rounded-lg hover:bg-sage-200 transition-colors"
                  aria-label="Quick view"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
                <Link
                  href={project.href}
                  className="p-2 bg-forest-700 text-sage-50 rounded-lg hover:bg-forest-800 transition-colors"
                  aria-label="View full project"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Masonry/Grid variant
  return (
    <motion.div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-sage-100 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div variants={imageVariants}>
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20"
          variants={overlayVariants}
          initial="initial"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}
          >
            {getCategoryLabel(project.category)}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-white/90 text-forest-700 text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variants={overlayVariants}
        >
          <div className="flex space-x-3">
            <motion.button
              onClick={handleClick}
              className="p-3 bg-white/90 text-forest-700 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Quick view project"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </motion.button>

            <Link href={project.href}>
              <motion.div
                className="p-3 bg-forest-700 text-sage-50 rounded-full hover:bg-forest-800 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View full project"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      {showDetails && (
        <div className="p-6">
          <h3 className="text-lg font-serif font-bold text-forest-900 mb-2 group-hover:text-forest-700 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-forest-600 mb-3 font-medium">
            {project.subtitle}
          </p>

          <p className="text-forest-600 text-sm leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-forest-500 mb-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
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
              {project.location}
            </div>
            <span>{project.year}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-sage-50 text-forest-600 text-xs rounded transition-colors hover:bg-sage-100"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-forest-400 px-2 py-1">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}
