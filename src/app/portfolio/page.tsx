'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolioProjects, getCategoryStats } from '@/data/portfolio'
import { PortfolioFilterState, Project } from '@/types/portfolio'
import PortfolioFilters from '@/components/PortfolioFilters'
import PortfolioGrid from '@/components/PortfolioGrid'
import ProjectModal from '@/components/ProjectModal'

export default function Portfolio() {
  const [filterState, setFilterState] = useState<PortfolioFilterState>({
    category: 'all',
    searchTerm: '',
    tags: []
  })
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categoryStats = getCategoryStats()

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

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
        ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-moss-100 via-sage-100 to-forest-100 py-20 md:py-32 overflow-hidden">
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
              Services Showcase
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-forest-700 leading-relaxed max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Explore our biophilic design capabilities and discover how we can transform your space with nature-inspired solutions
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-forest-600"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-800">3</div>
                <div className="text-sm">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-800">5</div>
                <div className="text-sm">Design Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-800">100%</div>
                <div className="text-sm">Nature Integration</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <PortfolioFilters
                  filterState={filterState}
                  onFilterChange={setFilterState}
                  categories={categoryStats}
                />
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="lg:col-span-3">
              <PortfolioGrid
                projects={portfolioProjects}
                filterState={filterState}
                onProjectClick={handleProjectClick}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
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
              Featured Capabilities
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Discover our design expertise and how we bring nature into urban spaces
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {portfolioProjects
              .filter(project => project.featured)
              .slice(0, 3)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={project.thumbnail.src}
                        alt={project.thumbnail.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white text-forest-700 px-6 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Concept
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-forest-700 text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-forest-600 mb-4 leading-relaxed text-sm">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs text-forest-700 bg-forest-50 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              Metrics that reflect our expertise in creating healthier, nature-connected spaces
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "3", label: "Service Categories", description: "Comprehensive biophilic design solutions" },
              { number: "100%", label: "Nature Integration", description: "Every design connects you with nature" },
              { number: "40%", label: "Air Quality Improvement", description: "Plants naturally purify indoor environments" },
              { number: "25%", label: "Wellness Enhancement", description: "Nature exposure boosts mental well-being" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-forest-700 mb-2 group-hover:text-forest-800 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-forest-900 mb-2">{stat.label}</div>
                <div className="text-forest-600 text-sm leading-relaxed">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-50 mb-4">
              Ready to Create Your Own Transformation?
            </h2>
            <p className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto">
              Let's work together to design a space that reflects your values and enhances your daily life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-sage-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="/services"
                className="bg-transparent text-sage-50 px-8 py-3 rounded-lg font-medium border-2 border-sage-50 hover:bg-sage-50 hover:text-forest-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  )
}