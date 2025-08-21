import { ContactFormData, ProjectInquiryData, NewsletterData, FormErrors } from '@/types/contact'

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

export const validateContactForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Full name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email address is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type'
  }

  if (!data.message.trim()) {
    errors.message = 'Please describe your project'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Please provide more details (at least 20 characters)'
  }

  return errors
}

export const validateProjectInquiry = (data: ProjectInquiryData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Full name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email address is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type'
  }

  if (!data.spaceSize.trim()) {
    errors.spaceSize = 'Please specify the space size'
  }

  if (!data.spaceType) {
    errors.spaceType = 'Please select a space type'
  }

  if (data.currentChallenges.length === 0) {
    errors.currentChallenges = 'Please select at least one current challenge'
  }

  if (data.designGoals.length === 0) {
    errors.designGoals = 'Please select at least one design goal'
  }

  return errors
}

export const validateNewsletter = (data: NewsletterData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.email.trim()) {
    errors.email = 'Email address is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  return errors
}

export const hasErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0
}