export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: ProjectType
  budgetRange: BudgetRange
  message: string
}

export interface ProjectInquiryData {
  name: string
  email: string
  phone: string
  projectType: ProjectType
  budgetRange: BudgetRange
  timeline: Timeline
  spaceSize: string
  spaceType: SpaceType
  currentChallenges: string[]
  designGoals: string[]
  sustainability: boolean
  accessibilityNeeds: string
  inspirationImages: boolean
  previousExperience: string
  additionalInfo: string
}

export interface NewsletterData {
  email: string
  firstName?: string
  interests: string[]
}

export type ProjectType =
  | 'residential'
  | 'commercial'
  | 'hospitality'
  | 'wellness'
  | 'landscape'
  | 'consultation'

export type BudgetRange =
  | 'under-10k'
  | '10k-25k'
  | '25k-50k'
  | '50k-100k'
  | '100k-250k'
  | '250k-plus'
  | 'consultation'

export type Timeline =
  | 'asap'
  | '1-3months'
  | '3-6months'
  | '6-12months'
  | '12months-plus'
  | 'flexible'

export type SpaceType =
  | 'home-office'
  | 'living-room'
  | 'bedroom'
  | 'kitchen'
  | 'entire-home'
  | 'office-space'
  | 'retail'
  | 'restaurant'
  | 'hotel'
  | 'healthcare'
  | 'other'

export interface FormErrors {
  [key: string]: string
}

export interface FormState {
  isLoading: boolean
  isSuccess: boolean
  errors: FormErrors
  message: string
}
