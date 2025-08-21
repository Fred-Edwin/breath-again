import { getProjectBySlug } from '@/data/portfolio'
import ProjectDetailPage from '@/components/ProjectDetailPage'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Urban Oasis Apartment - Breathe Again Portfolio',
  description: 'A downtown apartment transformed into a green sanctuary with living walls and natural elements. Discover our biophilic design transformation.',
}

export default function UrbanOasisApartmentPage() {
  const project = getProjectBySlug('urban-oasis-apartment')
  
  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}