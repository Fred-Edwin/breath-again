import { Metadata } from 'next'
import { servicesData } from '@/data/services'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Commercial Biophilic Design - Breathe Again',
  description: 'Boost productivity with nature-inspired workplace design. Create healthy work environments that reduce stress and increase employee satisfaction.',
  keywords: ['commercial design', 'workplace biophilic design', 'office wellness', 'productive work environments']
})

export default function CommercialSpacesPage() {
  const service = servicesData.find(s => s.id === 'commercial-spaces')
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}