import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/data/portfolio'

const baseUrl = 'https://breatheagain.design' // Update with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/animations-demo`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3
    }
  ]

  // Service pages
  const servicePages = [
    'residential-design',
    'commercial-spaces', 
    'wellness-consultation'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Portfolio project pages
  const portfolioPages = portfolioProjects.map(project => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.year, 0, 1), // Use project year as last modified
    changeFrequency: 'yearly' as const,
    priority: 0.6
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioPages
  ]
}