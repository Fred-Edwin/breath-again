import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesShowcase from '@/components/ServicesShowcase'
import HomeFeatures from '@/components/HomeFeatures'
import { generateMetadata as generateSEOMetadata, pageSEO } from '@/lib/seo'
import { servicesData } from '@/data/services'

export const metadata: Metadata = generateSEOMetadata(pageSEO.home)

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesShowcase services={servicesData.slice(0, 3)} />
      <HomeFeatures />
    </div>
  )
}