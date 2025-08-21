import { Metadata } from 'next'
import { servicesData } from '@/data/services'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Biophilic Design Consultation - Breathe Again',
  description: 'Get expert guidance for your biophilic design journey. Professional advice and strategic planning with flexible consultation options.',
  keywords: ['design consultation', 'biophilic design advice', 'design planning', 'expert consultation']
})

export default function ConsultationPage() {
  const service = servicesData.find(s => s.id === 'consultation')
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}