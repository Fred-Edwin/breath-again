'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectInquiryData } from '@/types/contact'
import { validateProjectInquiry } from '@/utils/validation'
import { useForm } from '@/hooks/useForm'

const initialData: ProjectInquiryData = {
  name: '',
  email: '',
  phone: '',
  projectType: 'residential',
  budgetRange: 'consultation',
  timeline: 'flexible',
  spaceSize: '',
  spaceType: 'entire-home',
  currentChallenges: [],
  designGoals: [],
  sustainability: false,
  accessibilityNeeds: '',
  inspirationImages: false,
  previousExperience: '',
  additionalInfo: '',
}

const mockSubmit = async (data: ProjectInquiryData): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log('Project inquiry submitted:', data)
}

const challenges = [
  'Poor air quality',
  'Lack of natural light',
  'High stress levels',
  'Low productivity',
  'Disconnection from nature',
  'Noise pollution',
  'Monotonous environment',
  'Health concerns',
]

const designGoals = [
  'Improve air quality',
  'Increase natural lighting',
  'Reduce stress and anxiety',
  'Boost productivity',
  'Create connection to nature',
  'Enhance well-being',
  'Improve aesthetics',
  'Increase property value',
]

interface ProjectInquiryFormProps {
  onClose?: () => void
}

export default function ProjectInquiryForm({
  onClose,
}: ProjectInquiryFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const { data, state, updateField, handleArrayField, submitForm } = useForm({
    initialData,
    validate: validateProjectInquiry,
    onSubmit: mockSubmit,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm()
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep
                  ? 'bg-forest-700 text-white'
                  : 'bg-sage-200 text-sage-600'
              }`}
            >
              {step}
            </div>
            {step < 4 && (
              <div
                className={`h-1 w-20 mx-2 ${
                  step < currentStep ? 'bg-forest-700' : 'bg-sage-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 text-sm text-forest-600 text-center">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  )

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-forest-900">
          Detailed Project Inquiry
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-sage-100 rounded-lg transition-colors"
            aria-label="Close form"
          >
            <svg
              className="w-6 h-6 text-forest-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {renderStepIndicator()}

      {state.message && (
        <motion.div
          className={`mb-6 p-4 rounded-lg ${
            state.isSuccess
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {state.message}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-semibold text-forest-900 mb-4">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                    state.errors.name ? 'border-red-300' : 'border-sage-200'
                  }`}
                  placeholder="Your full name"
                />
                {state.errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                    state.errors.email ? 'border-red-300' : 'border-sage-200'
                  }`}
                  placeholder="your@email.com"
                />
                {state.errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Project Type *
                </label>
                <select
                  value={data.projectType}
                  onChange={(e) => updateField('projectType', e.target.value)}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="wellness">Wellness Space</option>
                  <option value="landscape">Landscape</option>
                  <option value="consultation">Consultation Only</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-semibold text-forest-900 mb-4">
              Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Space Size *
                </label>
                <input
                  type="text"
                  value={data.spaceSize}
                  onChange={(e) => updateField('spaceSize', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 ${
                    state.errors.spaceSize
                      ? 'border-red-300'
                      : 'border-sage-200'
                  }`}
                  placeholder="e.g., 1,200 sq ft, 15x20 room"
                />
                {state.errors.spaceSize && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.spaceSize}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Space Type *
                </label>
                <select
                  value={data.spaceType}
                  onChange={(e) => updateField('spaceType', e.target.value)}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="home-office">Home Office</option>
                  <option value="living-room">Living Room</option>
                  <option value="bedroom">Bedroom</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="entire-home">Entire Home</option>
                  <option value="office-space">Office Space</option>
                  <option value="retail">Retail</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Budget Range
                </label>
                <select
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
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Timeline
                </label>
                <select
                  value={data.timeline}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="asap">ASAP</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="12months-plus">12+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Challenges and Goals */}
        {currentStep === 3 && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-semibold text-forest-900 mb-4">
              Challenges & Goals
            </h3>

            <div>
              <label className="block text-sm font-medium text-forest-700 mb-3">
                Current Challenges * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {challenges.map((challenge) => (
                  <label
                    key={challenge}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={data.currentChallenges.includes(challenge)}
                      onChange={(e) =>
                        handleArrayField(
                          'currentChallenges',
                          challenge,
                          e.target.checked
                        )
                      }
                      className="w-4 h-4 text-forest-600 bg-white border-sage-300 rounded focus:ring-forest-500 focus:ring-2"
                    />
                    <span className="text-forest-700">{challenge}</span>
                  </label>
                ))}
              </div>
              {state.errors.currentChallenges && (
                <p className="mt-2 text-sm text-red-600">
                  {state.errors.currentChallenges}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-700 mb-3">
                Design Goals * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {designGoals.map((goal) => (
                  <label
                    key={goal}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={data.designGoals.includes(goal)}
                      onChange={(e) =>
                        handleArrayField('designGoals', goal, e.target.checked)
                      }
                      className="w-4 h-4 text-forest-600 bg-white border-sage-300 rounded focus:ring-forest-500 focus:ring-2"
                    />
                    <span className="text-forest-700">{goal}</span>
                  </label>
                ))}
              </div>
              {state.errors.designGoals && (
                <p className="mt-2 text-sm text-red-600">
                  {state.errors.designGoals}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.sustainability}
                  onChange={(e) =>
                    updateField('sustainability', e.target.checked)
                  }
                  className="w-4 h-4 text-forest-600 bg-white border-sage-300 rounded focus:ring-forest-500 focus:ring-2"
                />
                <span className="text-forest-700">
                  Sustainability and eco-friendly materials are important to me
                </span>
              </label>
            </div>
          </motion.div>
        )}

        {/* Step 4: Additional Information */}
        {currentStep === 4 && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-semibold text-forest-900 mb-4">
              Additional Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-forest-700 mb-2">
                Accessibility Needs
              </label>
              <textarea
                value={data.accessibilityNeeds}
                onChange={(e) =>
                  updateField('accessibilityNeeds', e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                placeholder="Please describe any specific accessibility requirements..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-700 mb-2">
                Previous Experience with Biophilic Design
              </label>
              <textarea
                value={data.previousExperience}
                onChange={(e) =>
                  updateField('previousExperience', e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                placeholder="Have you worked with biophilic design before? What did you like or dislike?"
              />
            </div>

            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.inspirationImages}
                  onChange={(e) =>
                    updateField('inspirationImages', e.target.checked)
                  }
                  className="w-4 h-4 text-forest-600 bg-white border-sage-300 rounded focus:ring-forest-500 focus:ring-2"
                />
                <span className="text-forest-700">
                  I have inspiration images to share
                </span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-700 mb-2">
                Additional Information
              </label>
              <textarea
                value={data.additionalInfo}
                onChange={(e) => updateField('additionalInfo', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200"
                placeholder="Anything else you'd like us to know about your project, preferences, or concerns?"
              />
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-sage-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 text-forest-700 bg-sage-100 rounded-lg hover:bg-sage-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-forest-700 text-white rounded-lg hover:bg-forest-800 transition-all duration-200"
            >
              Next
            </button>
          ) : (
            <motion.button
              type="submit"
              disabled={state.isLoading}
              className="px-6 py-2 bg-forest-700 text-white rounded-lg hover:bg-forest-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              whileHover={{ scale: state.isLoading ? 1 : 1.02 }}
              whileTap={{ scale: state.isLoading ? 1 : 0.98 }}
            >
              {state.isLoading ? 'Submitting...' : 'Submit Inquiry'}
            </motion.button>
          )}
        </div>
      </form>
    </motion.div>
  )
}
