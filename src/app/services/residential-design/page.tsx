import { servicesData } from '@/data/services'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Residential Design - Breathe Again',
  description: 'Transform your home into a natural sanctuary with our biophilic residential design services. Create harmonious living spaces that promote wellness and tranquility.',
}

export default function ResidentialDesignPage() {
  const service = servicesData.find(s => s.id === 'residential-design')
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}