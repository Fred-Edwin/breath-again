export type ProjectCategory = 'residential' | 'commercial' | 'hospitality' | 'wellness' | 'landscape'

export interface ProjectImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  type?: 'before' | 'after' | 'main' | 'detail'
}

export interface ProjectOutcome {
  metric: string
  value: string
  description: string
  icon?: React.ReactNode
}

export interface ProjectDetails {
  overview: string
  challenge: string
  solution: string
  outcomes: ProjectOutcome[]
  features: string[]
  timeline: string
  budget?: string
  team?: string[]
  awards?: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company?: string
  }
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  shortDescription: string
  category: ProjectCategory
  tags: string[]
  featured: boolean
  year: number
  location: string
  client?: string
  images: ProjectImage[]
  thumbnail: ProjectImage
  details: ProjectDetails
  slug: string
  href: string
}

export interface PortfolioFilterState {
  category: ProjectCategory | 'all'
  searchTerm: string
  tags: string[]
}

export interface PortfolioGridProps {
  projects: Project[]
  filterState: PortfolioFilterState
  onProjectClick?: (project: Project) => void
  className?: string
}

export interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export interface ProjectCardProps {
  project: Project
  onClick?: (project: Project) => void
  variant?: 'masonry' | 'grid' | 'list'
  showDetails?: boolean
  className?: string
}

export interface PortfolioFiltersProps {
  filterState: PortfolioFilterState
  onFilterChange: (filterState: PortfolioFilterState) => void
  categories: { value: ProjectCategory | 'all'; label: string; count: number }[]
  className?: string
}

export interface ProjectPageProps {
  project: Project
}