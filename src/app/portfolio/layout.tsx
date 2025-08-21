import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, pageSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata(pageSEO.portfolio)

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}