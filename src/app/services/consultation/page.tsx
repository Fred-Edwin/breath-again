import { servicesData } from '@/data/services'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Design Consultation - Breathe Again',
  description: 'Get expert guidance for your biophilic design journey. Professional advice and strategic planning with flexible consultation options.',
}

export default function ConsultationPage() {
  const service = servicesData.find(s => s.id === 'consultation')
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}