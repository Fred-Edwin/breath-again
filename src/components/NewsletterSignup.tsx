'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { NewsletterData } from '@/types/contact'
import { validateNewsletter } from '@/utils/validation'
import { useForm } from '@/hooks/useForm'

const initialData: NewsletterData = {
  email: '',
  firstName: '',
  interests: []
}

const mockSubmit = async (data: NewsletterData): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('Newsletter subscription:', data)
  // Here you would integrate with your email service
  // Example: await EmailService.subscribeNewsletter(data)
}

const interestOptions = [
  'Residential Design',
  'Commercial Spaces',
  'Wellness Design',
  'Sustainable Materials',
  'Plant Care Tips',
  'Design Trends'
]

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'sidebar'
  showInterests?: boolean
}

export default function NewsletterSignup({ 
  variant = 'default', 
  showInterests = true 
}: NewsletterSignupProps) {
  const [showFullForm, setShowFullForm] = useState(false)

  const { data, state, updateField, handleArrayField, submitForm } = useForm({
    initialData,
    validate: validateNewsletter,
    onSubmit: mockSubmit
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm()
  }

  const containerClasses = {
    default: 'bg-gradient-to-br from-sage-50 to-moss-50 rounded-2xl p-8',
    compact: 'bg-white border border-sage-200 rounded-xl p-6',
    sidebar: 'bg-forest-900 text-white rounded-xl p-6'
  }

  const textClasses = {
    default: 'text-forest-900',
    compact: 'text-forest-900',
    sidebar: 'text-sage-50'
  }

  const inputClasses = {
    default: 'w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 bg-white',
    compact: 'w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200',
    sidebar: 'w-full px-4 py-3 border border-sage-600 bg-sage-800 text-white rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-200 placeholder-sage-300'
  }

  return (
    <motion.div
      className={containerClasses[variant]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-6">
        <h3 className={`text-xl md:text-2xl font-serif font-bold mb-3 ${textClasses[variant]}`}>
          Stay Connected with Nature
        </h3>
        <p className={`text-sm md:text-base leading-relaxed ${
          variant === 'sidebar' ? 'text-sage-200' : 'text-forest-600'
        }`}>
          Get weekly insights on biophilic design, plant care tips, and sustainable living directly to your inbox.
        </p>
      </div>

      {state.message && (
        <motion.div
          className={`mb-6 p-4 rounded-lg ${
            state.isSuccess 
              ? variant === 'sidebar' 
                ? 'bg-green-800 text-green-100 border border-green-600'
                : 'bg-green-50 text-green-800 border border-green-200' 
              : variant === 'sidebar'
                ? 'bg-red-800 text-red-100 border border-red-600'
                : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            {state.isSuccess ? (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            )}
            {state.message}
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!showFullForm && variant === 'compact' ? (
          /* Compact email-only form */
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`${inputClasses[variant]} ${
                  state.errors.email ? 'border-red-300' : ''
                }`}
                placeholder="Enter your email address"
                required
              />
              {state.errors.email && (
                <motion.p
                  className="mt-1 text-sm text-red-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {state.errors.email}
                </motion.p>
              )}
            </div>
            <motion.button
              type="submit"
              disabled={state.isLoading}
              className="px-6 py-3 bg-forest-700 text-white rounded-lg hover:bg-forest-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: state.isLoading ? 1 : 1.02 }}
              whileTap={{ scale: state.isLoading ? 1 : 0.98 }}
            >
              {state.isLoading ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </div>
        ) : (
          /* Full form */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  variant === 'sidebar' ? 'text-sage-200' : 'text-forest-700'
                }`}>
                  First Name (Optional)
                </label>
                <input
                  type="text"
                  value={data.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className={inputClasses[variant]}
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  variant === 'sidebar' ? 'text-sage-200' : 'text-forest-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={`${inputClasses[variant]} ${
                    state.errors.email ? 'border-red-300' : ''
                  }`}
                  placeholder="your@email.com"
                  required
                />
                {state.errors.email && (
                  <motion.p
                    className="mt-1 text-sm text-red-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {state.errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            {showInterests && (
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  variant === 'sidebar' ? 'text-sage-200' : 'text-forest-700'
                }`}>
                  Interests (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={data.interests.includes(interest)}
                        onChange={(e) => handleArrayField('interests', interest, e.target.checked)}
                        className={`w-4 h-4 rounded focus:ring-2 ${
                          variant === 'sidebar'
                            ? 'text-sage-500 bg-sage-700 border-sage-600 focus:ring-sage-400'
                            : 'text-forest-600 bg-white border-sage-300 focus:ring-forest-500'
                        }`}
                      />
                      <span className={`text-sm ${
                        variant === 'sidebar' ? 'text-sage-200' : 'text-forest-700'
                      }`}>
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={state.isLoading}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                variant === 'sidebar'
                  ? 'bg-sage-600 text-white hover:bg-sage-700 focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900'
                  : 'bg-forest-700 text-sage-50 hover:bg-forest-800 focus:ring-2 focus:ring-forest-500 focus:ring-offset-2'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={{ scale: state.isLoading ? 1 : 1.02 }}
              whileTap={{ scale: state.isLoading ? 1 : 0.98 }}
            >
              {state.isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </div>
              ) : (
                'Subscribe to Newsletter'
              )}
            </motion.button>
          </div>
        )}

        {variant === 'compact' && !showFullForm && (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowFullForm(true)}
              className="text-sm text-forest-600 hover:text-forest-800 underline"
            >
              Customize your preferences
            </button>
          </div>
        )}
      </form>

      <div className={`mt-4 text-xs text-center ${
        variant === 'sidebar' ? 'text-sage-300' : 'text-forest-500'
      }`}>
        We respect your privacy. Unsubscribe at any time.
      </div>
    </motion.div>
  )
}