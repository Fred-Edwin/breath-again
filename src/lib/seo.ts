import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  canonical?: string
}

const defaultSEO = {
  siteName: 'Breathe Again - Biophilic Design Studio',
  siteUrl: process.env.NODE_ENV === 'production' 
    ? 'https://breatheagain.design' 
    : 'http://localhost:3000',
  defaultTitle: 'Breathe Again - Biophilic Design Studio',
  defaultDescription: 'Transform your space with nature-inspired biophilic design. We create harmonious environments that reduce stress, boost productivity, and enhance well-being through sustainable, science-backed design principles.',
  defaultImage: '/images/og-image.jpg', // We'll create this
  defaultKeywords: [
    'biophilic design',
    'nature-inspired interior design',
    'sustainable architecture',
    'wellness spaces',
    'green building design',
    'living walls',
    'natural lighting',
    'stress reduction design',
    'productivity workspace',
    'eco-friendly interiors',
    'plant-based design',
    'organic architecture'
  ],
  author: 'Breathe Again Design Studio',
  twitterHandle: '@breatheagain', // Update with actual handle
  facebookAppId: '', // Add if available
  language: 'en-US',
  locale: 'en_US',
  country: 'US'
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  noindex = false,
  canonical
}: SEOProps = {}): Metadata {
  const seo = {
    title: title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.defaultTitle,
    description: description || defaultSEO.defaultDescription,
    keywords: [...defaultSEO.defaultKeywords, ...keywords].join(', '),
    image: image || defaultSEO.defaultImage,
    url: url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl,
    canonical: canonical || (url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl)
  }

  const metadata: Metadata = {
    // Basic Meta Tags
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: author || defaultSEO.author }],
    creator: defaultSEO.author,
    publisher: defaultSEO.author,
    
    // Language and Locale
    alternates: {
      canonical: seo.canonical,
      languages: {
        'en-US': seo.url
      }
    },
    
    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      type: type,
      siteName: defaultSEO.siteName,
      title: title || defaultSEO.defaultTitle,
      description: seo.description,
      url: seo.url,
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: title || defaultSEO.defaultTitle,
          type: 'image/jpeg'
        }
      ],
      locale: defaultSEO.locale,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags })
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: defaultSEO.twitterHandle,
      creator: defaultSEO.twitterHandle,
      title: title || defaultSEO.defaultTitle,
      description: seo.description,
      images: [seo.image]
    },

    // Additional Meta Tags
    other: {
      'theme-color': '#87a96b',
      'msapplication-TileColor': '#87a96b',
      'msapplication-TileImage': '/images/mstile-144x144.png',
      'application-name': defaultSEO.siteName,
      'apple-mobile-web-app-title': defaultSEO.siteName,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'mobile-web-app-capable': 'yes',
      'HandheldFriendly': 'True',
      'MobileOptimized': '320',
      'format-detection': 'telephone=no',
      'google-site-verification': '', // Add Google Search Console verification
      'facebook-domain-verification': '', // Add Facebook domain verification
      ...(defaultSEO.facebookAppId && { 'fb:app_id': defaultSEO.facebookAppId })
    }
  }

  return metadata
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Transform Your Space with Biophilic Design',
    description: 'Create harmonious environments that reconnect you with nature. Expert biophilic design services for residential, commercial, and wellness spaces. Reduce stress, boost productivity, enhance well-being.',
    keywords: ['biophilic design services', 'nature-inspired home design', 'wellness space design', 'sustainable interior design'],
    url: '/'
  },
  about: {
    title: 'About Our Biophilic Design Philosophy',
    description: 'Meet our team of biophilic design experts. Learn about our nature-inspired design philosophy and sustainable approach to creating healthier, more productive spaces.',
    keywords: ['biophilic design team', 'sustainable design philosophy', 'nature-inspired designers'],
    url: '/about'
  },
  services: {
    title: 'Biophilic Design Services - Residential, Commercial & Wellness',
    description: 'Professional biophilic design services including interior design, landscape architecture, and wellness space consultation. Transform any space with nature-inspired solutions.',
    keywords: ['biophilic interior design', 'commercial biophilic design', 'wellness space design', 'landscape architecture'],
    url: '/services'
  },
  portfolio: {
    title: 'Biophilic Design Portfolio - Completed Projects',
    description: 'Explore our portfolio of completed biophilic design projects. See how we\'ve transformed residential, commercial, and wellness spaces with nature-inspired design.',
    keywords: ['biophilic design portfolio', 'nature-inspired project gallery', 'sustainable design examples'],
    url: '/portfolio'
  },
  contact: {
    title: 'Contact Us - Start Your Biophilic Design Project',
    description: 'Ready to transform your space? Contact our biophilic design experts for a consultation. Serving residential, commercial, and wellness projects nationwide.',
    keywords: ['biophilic design consultation', 'contact nature designers', 'sustainable design services'],
    url: '/contact'
  }
}

// Structured Data Schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: defaultSEO.siteName,
  description: defaultSEO.defaultDescription,
  url: defaultSEO.siteUrl,
  logo: `${defaultSEO.siteUrl}/images/logo.png`,
  image: `${defaultSEO.siteUrl}${defaultSEO.defaultImage}`,
  sameAs: [
    'https://instagram.com/breatheagaindesign', // Update with actual URLs
    'https://facebook.com/breatheagaindesign',
    'https://linkedin.com/company/breatheagaindesign',
    'https://pinterest.com/breatheagaindesign'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567', // Update with actual phone
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Green Street',
    addressLocality: 'Nature District',
    addressRegion: 'ND',
    postalCode: '12345',
    addressCountry: 'US'
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47'
  }
}

export const serviceSchema = (service: {
  name: string
  description: string
  url: string
  price?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: defaultSEO.siteName,
    url: defaultSEO.siteUrl
  },
  url: `${defaultSEO.siteUrl}${service.url}`,
  ...(service.price && { price: service.price }),
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  }
})

export const projectSchema = (project: {
  name: string
  description: string
  image: string
  dateCompleted: string
  category: string
  location?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.description,
  image: project.image,
  dateCreated: project.dateCompleted,
  creator: {
    '@type': 'Organization',
    name: defaultSEO.siteName
  },
  genre: project.category,
  ...(project.location && { 
    locationCreated: {
      '@type': 'Place',
      name: project.location
    }
  })
})