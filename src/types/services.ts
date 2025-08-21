export interface ServiceFeature {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  duration?: string
  deliverables?: string[]
}

export interface ServiceDetails {
  overview: string
  approach: string
  benefits: string[]
  features: ServiceFeature[]
  process: ProcessStep[]
  pricing?: {
    startingPrice?: string
    priceRange?: string
    factors?: string[]
  }
  gallery?: {
    images: string[]
    alt: string
  }[]
  testimonials?: {
    id: string
    name: string
    role: string
    company?: string
    quote: string
    rating?: number
  }[]
}

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  shortDescription: string
  icon: React.ReactNode
  href: string
  category: 'residential' | 'commercial' | 'consultation' | 'wellness' | 'landscape'
  featured: boolean
  color: {
    primary: string
    secondary: string
    accent: string
  }
  details: ServiceDetails
}

export interface ServicesShowcaseProps {
  title?: string
  subtitle?: string
  services: Service[]
  showAllLink?: boolean
  maxDisplayed?: number
  className?: string
}

export interface ServiceCardProps {
  service: Service
  index?: number
  variant?: 'default' | 'featured' | 'compact'
  showDescription?: boolean
  className?: string
}

export interface ProcessOverviewProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
  className?: string
}