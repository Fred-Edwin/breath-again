'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActivePage = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="bg-white/95 dark:bg-forest-900/95 backdrop-blur-sm border-b border-sage-200 dark:border-forest-700 sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Breathe Again - Home"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-200 bg-white shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Breathe Again Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-forest-900 dark:text-sage-100 group-hover:text-forest-700 dark:group-hover:text-sage-200 transition-colors">
                  Breathe Again
                </h1>
                <span className="text-xs text-sage-600 dark:text-sage-400 font-light tracking-wide">
                  RECONNECTING CITIES WITH NATURE
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                    isActivePage(item.href)
                      ? 'text-forest-900 dark:text-sage-100 bg-sage-100 dark:bg-forest-700'
                      : 'text-forest-700 dark:text-sage-300 hover:text-forest-900 dark:hover:text-sage-100 hover:bg-sage-50 dark:hover:bg-forest-700'
                  }`}
                  aria-current={isActivePage(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-forest-600 dark:bg-sage-400 transition-all duration-200 group-hover:w-8 group-hover:-translate-x-1/2 ${
                    isActivePage(item.href) ? 'w-8 -translate-x-1/2' : ''
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle variant="icon" size="md" />
            <Link 
              href="/contact"
              className="bg-forest-700 dark:bg-sage-600 text-sage-50 px-6 py-2.5 rounded-lg font-medium hover:bg-forest-800 dark:hover:bg-sage-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forest-500 dark:focus:ring-sage-400 focus:ring-offset-2 shadow-sm"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button & theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle variant="icon" size="sm" />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-sage-50 dark:bg-forest-800 p-2.5 rounded-lg text-forest-700 dark:text-sage-300 hover:text-forest-900 dark:hover:text-sage-100 hover:bg-sage-100 dark:hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-500 dark:focus:ring-sage-400 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 pb-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="pt-4 pb-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActivePage(item.href)
                    ? 'text-forest-900 dark:text-sage-100 bg-sage-100 dark:bg-forest-700 border-l-4 border-forest-600 dark:border-sage-400'
                    : 'text-forest-700 dark:text-sage-300 hover:text-forest-900 dark:hover:text-sage-100 hover:bg-sage-50 dark:hover:bg-forest-700'
                }`}
                aria-current={isActivePage(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-forest-700 dark:bg-sage-600 text-sage-50 px-6 py-3 rounded-lg font-medium hover:bg-forest-800 dark:hover:bg-sage-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest-500 dark:focus:ring-sage-400"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}