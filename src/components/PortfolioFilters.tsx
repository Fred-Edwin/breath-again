'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PortfolioFiltersProps } from '@/types/portfolio'

export default function PortfolioFilters({
  filterState,
  onFilterChange,
  categories,
  className = ""
}: PortfolioFiltersProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  const handleCategoryChange = (category: any) => {
    onFilterChange({
      ...filterState,
      category
    })
  }

  const handleSearchChange = (searchTerm: string) => {
    onFilterChange({
      ...filterState,
      searchTerm
    })
  }

  const clearFilters = () => {
    onFilterChange({
      category: 'all',
      searchTerm: '',
      tags: []
    })
    setIsSearchExpanded(false)
  }

  const hasActiveFilters = filterState.category !== 'all' || filterState.searchTerm || filterState.tags.length > 0

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-sage-100 p-6 ${className}`}>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <motion.div
            className="flex items-center"
            layout
          >
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search services..."
                value={filterState.searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
                className="w-full pl-12 pr-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 text-forest-900 placeholder-forest-400"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              {filterState.searchTerm && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest-400 hover:text-forest-600 transition-colors"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-forest-900 mb-4 uppercase tracking-wide">
          Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filterState.category === category.value
                  ? 'bg-forest-700 text-sage-50 shadow-md'
                  : 'bg-sage-50 text-forest-700 hover:bg-sage-100 border border-sage-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.label}</span>
              <span className={`ml-2 text-xs ${
                filterState.category === category.value
                  ? 'text-sage-200'
                  : 'text-forest-500'
              }`}>
                ({category.count})
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Active Filters & Clear Button */}
      {hasActiveFilters && (
        <motion.div
          className="flex items-center justify-between pt-4 border-t border-sage-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center space-x-2 text-sm text-forest-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filters active</span>
          </div>
          
          <motion.button
            onClick={clearFilters}
            className="text-sm text-forest-600 hover:text-forest-800 underline underline-offset-2 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Clear all
          </motion.button>
        </motion.div>
      )}

      {/* Quick Filter Tags */}
      <div className="mt-6">
        <h4 className="text-xs font-semibold text-forest-700 mb-3 uppercase tracking-wide">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            'living walls',
            'productivity',
            'wellness',
            'sustainable',
            'luxury',
            'small spaces'
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => handleSearchChange(tag)}
              className="px-3 py-1 text-xs bg-sage-50 text-forest-600 rounded-full hover:bg-sage-100 transition-colors border border-sage-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}