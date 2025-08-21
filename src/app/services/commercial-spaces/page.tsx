import { servicesData } from '@/data/services'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Commercial Spaces - Breathe Again',
  description: 'Boost productivity with nature-inspired workplace design. Create healthy work environments that reduce stress and increase employee satisfaction.',
}

export default function CommercialSpacesPage() {
  const service = servicesData.find(s => s.id === 'commercial-spaces')
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}