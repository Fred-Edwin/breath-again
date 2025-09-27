import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - Breathe Again',
  description:
    'The page you are looking for does not exist. Explore our biophilic design services and portfolio.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-moss-50 to-forest-100 dark:from-forest-950 dark:via-sage-950 dark:to-moss-950 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-center">
        {/* Floating organic shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage-300/20 dark:bg-sage-600/20 organic-shape animate-pulse" />
          <div
            className="absolute bottom-32 right-20 w-48 h-48 bg-forest-300/15 dark:bg-forest-600/15 organic-shape animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-moss-300/25 dark:bg-moss-600/25 organic-shape animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10">
          {/* 404 with nature-inspired styling */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-forest-900/10 dark:text-sage-100/10 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-7xl">🌿</div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 dark:text-sage-100 mb-4 heading-nature">
            Page Not Found
          </h2>

          <p className="text-lg text-forest-600 dark:text-sage-300 mb-8 max-w-md mx-auto leading-relaxed">
            Like a hidden garden path, this page seems to have grown over.
            Let&apos;s help you find your way back to nature.
          </p>

          {/* Navigation options */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-forest-700 dark:bg-sage-600 text-sage-50 px-8 py-3 rounded-lg font-medium hover:bg-forest-800 dark:hover:bg-sage-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-500 dark:focus:ring-sage-400 focus:ring-offset-2 shadow-lg transform hover:scale-105"
              >
                Return Home
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent text-forest-700 dark:text-sage-300 px-8 py-3 rounded-lg font-medium border-2 border-forest-300 dark:border-sage-600 hover:bg-forest-50 dark:hover:bg-sage-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-500 dark:focus:ring-sage-400 focus:ring-offset-2"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="border-t border-forest-200 dark:border-sage-700 pt-8">
            <p className="text-sm text-forest-500 dark:text-sage-400 mb-4">
              Or explore these popular sections:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/services"
                className="text-forest-600 dark:text-sage-400 hover:text-forest-800 dark:hover:text-sage-200 underline decoration-sage-300 dark:decoration-sage-600 hover:decoration-forest-500 dark:hover:decoration-sage-400 transition-colors"
              >
                Our Services
              </Link>
              <span className="text-forest-300 dark:text-sage-600">•</span>
              <Link
                href="/about"
                className="text-forest-600 dark:text-sage-400 hover:text-forest-800 dark:hover:text-sage-200 underline decoration-sage-300 dark:decoration-sage-600 hover:decoration-forest-500 dark:hover:decoration-sage-400 transition-colors"
              >
                About Us
              </Link>
              <span className="text-forest-300 dark:text-sage-600">•</span>
              <Link
                href="/contact"
                className="text-forest-600 dark:text-sage-400 hover:text-forest-800 dark:hover:text-sage-200 underline decoration-sage-300 dark:decoration-sage-600 hover:decoration-forest-500 dark:hover:decoration-sage-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
