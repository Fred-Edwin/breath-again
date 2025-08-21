'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { PortfolioGridProps, Project } from '@/types/portfolio'
import ProjectCard from './ProjectCard'

export default function PortfolioGrid({
  projects,
  filterState,
  onProjectClick,
  className = ""
}: PortfolioGridProps) {
  const [viewMode, setViewMode] = useState<'masonry' | 'grid' | 'list'>('masonry')

  // Filter projects based on filter state
  const filteredProjects = projects.filter(project => {
    // Category filter
    if (filterState.category !== 'all' && project.category !== filterState.category) {
      return false
    }

    // Search filter
    if (filterState.searchTerm) {
      const searchTerm = filterState.searchTerm.toLowerCase()
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.shortDescription.toLowerCase().includes(searchTerm) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        project.location.toLowerCase().includes(searchTerm) ||
        project.client?.toLowerCase().includes(searchTerm)
      
      if (!matchesSearch) return false
    }

    return true
  })

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

  const getGridClasses = () => {
    switch (viewMode) {
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
      case 'list':
        return 'flex flex-col space-y-6'
      default:
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
    }
  }

  const ViewToggle = () => (
    <div className="flex items-center space-x-1 bg-sage-50 p-1 rounded-lg">
      {[
        { mode: 'masonry' as const, icon: '⊞', label: 'Masonry' },
        { mode: 'grid' as const, icon: '⊡', label: 'Grid' },
        { mode: 'list' as const, icon: '☰', label: 'List' }
      ].map(({ mode, icon, label }) => (
        <button
          key={mode}
          onClick={() => setViewMode(mode)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            viewMode === mode
              ? 'bg-white text-forest-700 shadow-sm'
              : 'text-forest-500 hover:text-forest-700 hover:bg-white/50'
          }`}
          aria-label={`Switch to ${label} view`}
          title={label}
        >
          <span className="text-base">{icon}</span>
        </button>
      ))}
    </div>
  )

  return (
    <div className={className}>
      {/* Header with Results Count and View Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.h2
            className="text-xl font-semibold text-forest-900"
            key={filteredProjects.length} // Re-animate when count changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length === 0 ? (
              'No projects found'
            ) : filteredProjects.length === 1 ? (
              '1 project'
            ) : (
              `${filteredProjects.length} projects`
            )}
          </motion.h2>
          
          {filterState.searchTerm && (
            <motion.span
              className="text-sm text-forest-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              for "{filterState.searchTerm}"
            </motion.span>
          )}
        </div>
        
        <ViewToggle />
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-forest-900 mb-2">No projects found</h3>
          <p className="text-forest-600 mb-6">
            Try adjusting your search terms or category filters to see more results.
          </p>
          <motion.button
            onClick={() => window.location.reload()}
            className="bg-forest-700 text-sage-50 px-6 py-2 rounded-lg font-medium hover:bg-forest-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Filters
          </motion.button>
        </motion.div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 && (
        <motion.div
          className={getGridClasses()}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${viewMode}-${filterState.category}-${filterState.searchTerm}`} // Re-animate when filters change
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.25, 0.25, 0.25, 0.75]
                }}
                className={viewMode === 'masonry' ? 'break-inside-avoid' : ''}
              >
                <ProjectCard
                  project={project}
                  onClick={onProjectClick}
                  variant={viewMode}
                  showDetails={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Load More Button (if needed) */}
      {filteredProjects.length > 0 && filteredProjects.length >= 12 && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="bg-sage-100 text-forest-700 px-8 py-3 rounded-xl font-medium hover:bg-sage-200 transition-all duration-300 border border-sage-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}