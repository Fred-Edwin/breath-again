import { Metadata } from 'next'
import { servicesData } from '@/data/services'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Residential Biophilic Design Services - Breathe Again',
  description:
    'Transform your home into a natural sanctuary with our biophilic residential design services. Create harmonious living spaces that promote wellness and tranquility.',
  keywords: [
    'residential design',
    'biophilic design',
    'home design',
    'natural living spaces',
    'wellness home design',
  ],
})

export default function ResidentialDesignPage() {
  const service = servicesData.find((s) => s.id === 'residential-design')

  if (!service) {
    notFound()
  }

  return <ServiceDetailPage service={service} />
}
