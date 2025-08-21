'use client'

import { motion } from 'framer-motion'
import { ContactFormData } from '@/types/contact'
import { validateContactForm } from '@/utils/validation'
import { useForm } from '@/hooks/useForm'

const initialData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: 'residential',
  budgetRange: 'consultation',
  message: ''
}

const submitContactForm = async (data: ContactFormData): Promise<void> => {
  // For demo purposes, we'll simulate the API call
  // In production, uncomment the line below to use the EmailService
  // await EmailService.sendContactForm(data)
  
  // Simulate API call for demo
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('Contact form submitted:', data)
}

export default function ContactForm() {
  const { data, state, updateField, submitForm } = useForm({
    initialData,
    validate: validateContactForm,
    onSubmit: submitContactForm
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm()
  }

  return (
    <motion.div
      className="bg-sage-25 rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">
        Start Your Project
      </h2>
      
      {state.message && (
        <motion.div
          className={`mb-6 p-4 rounded-lg ${
            state.isSuccess 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={data.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                state.errors.name ? 'border-red-300' : 'border-sage-200'
              }`}
              placeholder="Your full name"
              aria-describedby={state.errors.name ? 'name-error' : undefined}
            />
            {state.errors.name && (
              <motion.p
                id="name-error"
                className="mt-1 text-sm text-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {state.errors.name}
              </motion.p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={data.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                state.errors.email ? 'border-red-300' : 'border-sage-200'
              }`}
              placeholder="your@email.com"
              aria-describedby={state.errors.email ? 'email-error' : undefined}
            />
            {state.errors.email && (
              <motion.p
                id="email-error"
                className="mt-1 text-sm text-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {state.errors.email}
              </motion.p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-forest-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                state.errors.phone ? 'border-red-300' : 'border-sage-200'
              }`}
              placeholder="(555) 123-4567"
              aria-describedby={state.errors.phone ? 'phone-error' : undefined}
            />
            {state.errors.phone && (
              <motion.p
                id="phone-error"
                className="mt-1 text-sm text-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {state.errors.phone}
              </motion.p>
            )}
          </div>
          
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-forest-700 mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={data.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                state.errors.projectType ? 'border-red-300' : 'border-sage-200'
              }`}
              aria-describedby={state.errors.projectType ? 'projectType-error' : undefined}
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="hospitality">Hospitality</option>
              <option value="wellness">Wellness Space</option>
              <option value="landscape">Landscape</option>
              <option value="consultation">Consultation Only</option>
            </select>
            {state.errors.projectType && (
              <motion.p
                id="projectType-error"
                className="mt-1 text-sm text-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {state.errors.projectType}
              </motion.p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-forest-700 mb-2">
            Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={data.budgetRange}
            onChange={(e) => updateField('budgetRange', e.target.value)}
            className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
          >
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-250k">$100,000 - $250,000</option>
            <option value="250k-plus">$250,000+</option>
            <option value="consultation">Consultation to discuss</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={data.message}
            onChange={(e) => updateField('message', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
              state.errors.message ? 'border-red-300' : 'border-sage-200'
            }`}
            placeholder="Tell us about your space, vision, and what you hope to achieve with biophilic design..."
            aria-describedby={state.errors.message ? 'message-error' : undefined}
          ></textarea>
          {state.errors.message && (
            <motion.p
              id="message-error"
              className="mt-1 text-sm text-red-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {state.errors.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={state.isLoading}
          className="w-full bg-forest-700 text-sage-50 py-3 px-6 rounded-lg font-medium hover:bg-forest-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2 focus:ring-offset-sage-25"
          whileHover={{ scale: state.isLoading ? 1 : 1.02 }}
          whileTap={{ scale: state.isLoading ? 1 : 0.98 }}
        >
          {state.isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </div>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}