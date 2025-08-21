import { getProjectBySlug } from '@/data/portfolio'
import ProjectDetailPage from '@/components/ProjectDetailPage'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Wellness Corporate Office - Breathe Again Portfolio',
  description: 'Corporate office redesign that increased productivity through biophilic elements and living architecture.',
}

export default function WellnessCorporateOfficePage() {
  const project = getProjectBySlug('wellness-corporate-office')
  
  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}