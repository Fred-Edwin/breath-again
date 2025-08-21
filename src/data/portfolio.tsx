import { Project } from '@/types/portfolio'

export const portfolioProjects: Project[] = [
  {
    id: 'urban-oasis-apartment',
    title: 'Urban Oasis Apartment',
    subtitle: 'Downtown Living Transformed',
    description: 'A complete biophilic transformation of a 1,200 sq ft downtown apartment, featuring living walls, natural materials, and carefully curated plant installations that create a serene sanctuary in the heart of the city.',
    shortDescription: 'Downtown apartment transformed into a green sanctuary with living walls and natural elements.',
    category: 'residential',
    tags: ['living walls', 'air purification', 'urban living', 'small spaces', 'plants'],
    featured: true,
    year: 2023,
    location: 'Chicago, IL',
    client: 'Sarah & Michael Chen',
    slug: 'urban-oasis-apartment',
    href: '/portfolio/urban-oasis-apartment',
    thumbnail: {
      id: 'urban-thumb',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      alt: 'Urban Oasis Apartment living room with living wall',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'urban-1',
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
        alt: 'Living room with living wall feature',
        width: 1200,
        height: 800,
        type: 'main'
      },
      {
        id: 'urban-before',
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
        alt: 'Before: Standard apartment living room',
        width: 1200,
        height: 800,
        type: 'before'
      },
      {
        id: 'urban-after',
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
        alt: 'After: Biophilic living room transformation',
        width: 1200,
        height: 800,
        type: 'after'
      },
      {
        id: 'urban-2',
        src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&h=800&fit=crop',
        alt: 'Kitchen with herb wall and natural materials',
        width: 1200,
        height: 800,
        type: 'detail'
      }
    ],
    details: {
      overview: 'This downtown apartment transformation demonstrates how biophilic design can create a natural sanctuary even in the most urban environments. Through strategic use of living walls, natural materials, and carefully planned plant installations, we created a space that reduces stress and improves air quality.',
      challenge: 'Limited natural light, small space constraints, and urban pollution required creative solutions to bring nature indoors effectively.',
      solution: 'We implemented a comprehensive biophilic design strategy including a statement living wall, low-light plant selections, natural stone accents, and a custom herb garden in the kitchen.',
      outcomes: [
        {
          metric: 'Air Quality Improvement',
          value: '65%',
          description: 'Reduction in indoor air pollutants'
        },
        {
          metric: 'Stress Reduction',
          value: '40%',
          description: 'Client-reported stress level decrease'
        },
        {
          metric: 'Property Value',
          value: '+15%',
          description: 'Estimated increase in apartment value'
        }
      ],
      features: [
        'Custom living wall with automated irrigation',
        'Low-light plant species selection',
        'Natural stone and wood accents',
        'Kitchen herb garden',
        'Air-purifying plant placement'
      ],
      timeline: '6 weeks',
      budget: '$15,000 - $25,000',
      team: ['Sarah Chen (Lead Designer)', 'Michael Rodriguez (Plant Specialist)', 'Lisa Wang (Installation)'],
      testimonial: {
        quote: 'Our apartment went from feeling cramped and stressful to being our personal oasis. The living wall is not just beautiful—we can literally feel the difference in air quality.',
        author: 'Sarah Chen',
        role: 'Homeowner'
      }
    }
  },
  {
    id: 'wellness-corporate-office',
    title: 'Wellness Corporate Office',
    subtitle: 'Productivity Through Nature',
    description: 'A 15,000 sq ft corporate headquarters redesign that boosted employee productivity by 28% through strategic biophilic elements, including living architecture, natural lighting, and wellness zones.',
    shortDescription: 'Corporate office redesign that increased productivity through biophilic elements.',
    category: 'commercial',
    tags: ['productivity', 'employee wellness', 'living architecture', 'corporate', 'wellness zones'],
    featured: true,
    year: 2023,
    location: 'Austin, TX',
    client: 'TechFlow Solutions',
    slug: 'wellness-corporate-office',
    href: '/portfolio/wellness-corporate-office',
    thumbnail: {
      id: 'corporate-thumb',
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      alt: 'Modern office with living wall and natural elements',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'corporate-1',
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
        alt: 'Open office with living wall backdrop',
        width: 1200,
        height: 800,
        type: 'main'
      },
      {
        id: 'corporate-wellness',
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop',
        alt: 'Wellness zone with natural elements',
        width: 1200,
        height: 800,
        type: 'detail'
      }
    ],
    details: {
      overview: 'This corporate headquarters transformation showcases how biophilic design can dramatically improve workplace productivity and employee satisfaction while creating a distinctive brand environment.',
      challenge: 'High employee turnover, low productivity scores, and a sterile office environment that failed to attract top talent.',
      solution: 'Comprehensive biophilic redesign including living architecture, natural lighting systems, wellness zones, and integrated plant systems throughout the workspace.',
      outcomes: [
        {
          metric: 'Productivity Increase',
          value: '28%',
          description: 'Measured improvement in task completion'
        },
        {
          metric: 'Employee Satisfaction',
          value: '85%',
          description: 'Positive feedback on workspace improvements'
        },
        {
          metric: 'Sick Days Reduced',
          value: '35%',
          description: 'Decrease in employee sick leave'
        }
      ],
      features: [
        'Living architecture integration',
        'Natural lighting optimization',
        'Dedicated wellness zones',
        'Air-purifying plant systems',
        'Biophilic meeting spaces'
      ],
      timeline: '12 weeks',
      budget: '$75,000 - $125,000'
    }
  },
  {
    id: 'healing-garden-spa',
    title: 'Healing Garden Spa',
    subtitle: 'Therapeutic Sanctuary Design',
    description: 'A luxury spa featuring therapeutic gardens, water features, and natural stone elements designed to promote deep relaxation and healing through nature connection.',
    shortDescription: 'Luxury spa with therapeutic gardens and natural healing elements.',
    category: 'hospitality',
    tags: ['therapeutic design', 'water features', 'spa', 'healing', 'relaxation'],
    featured: true,
    year: 2022,
    location: 'Sedona, AZ',
    client: 'Desert Rose Wellness Resort',
    slug: 'healing-garden-spa',
    href: '/portfolio/healing-garden-spa',
    thumbnail: {
      id: 'spa-thumb',
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      alt: 'Spa treatment room with natural elements',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'spa-1',
        src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop',
        alt: 'Spa treatment room with stone and plants',
        width: 1200,
        height: 800,
        type: 'main'
      },
      {
        id: 'spa-garden',
        src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop',
        alt: 'Therapeutic garden with water feature',
        width: 1200,
        height: 800,
        type: 'detail'
      }
    ],
    details: {
      overview: 'This healing garden spa creates a therapeutic environment where guests can reconnect with nature while experiencing deep relaxation and rejuvenation.',
      challenge: 'Creating an authentic connection to the natural desert environment while providing luxury amenities and comfort.',
      solution: 'Integration of native desert plants, natural stone elements, water features, and therapeutic garden spaces that complement the spa services.',
      outcomes: [
        {
          metric: 'Guest Satisfaction',
          value: '95%',
          description: 'Exceptional guest experience ratings'
        },
        {
          metric: 'Booking Increase',
          value: '40%',
          description: 'Growth in spa reservations'
        },
        {
          metric: 'Award Recognition',
          value: '3',
          description: 'Industry design awards received'
        }
      ],
      features: [
        'Therapeutic desert garden',
        'Natural stone treatment rooms',
        'Water feature integration',
        'Native plant installations',
        'Sensory experience design'
      ],
      timeline: '16 weeks',
      awards: ['Best Spa Design 2023', 'Biophilic Excellence Award', 'Hospitality Design Award']
    }
  },
  {
    id: 'sustainable-family-home',
    title: 'Sustainable Family Home',
    subtitle: 'Modern Living in Harmony',
    description: 'A complete home renovation that seamlessly integrates indoor and outdoor living spaces using sustainable materials and biophilic design principles for a growing family.',
    shortDescription: 'Family home renovation integrating indoor-outdoor living with sustainable materials.',
    category: 'residential',
    tags: ['sustainable materials', 'family-friendly', 'indoor-outdoor', 'renovation', 'eco-friendly'],
    featured: false,
    year: 2023,
    location: 'Portland, OR',
    client: 'The Johnson Family',
    slug: 'sustainable-family-home',
    href: '/portfolio/sustainable-family-home',
    thumbnail: {
      id: 'family-thumb',
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      alt: 'Modern family home with natural materials',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'family-1',
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
        alt: 'Living area with natural materials and plants',
        width: 1200,
        height: 800,
        type: 'main'
      }
    ],
    details: {
      overview: 'This family home renovation creates a healthy, sustainable living environment that grows with the family while maintaining strong connections to the natural world.',
      challenge: 'Balancing the needs of a growing family with sustainable design principles and budget constraints.',
      solution: 'Strategic use of reclaimed materials, energy-efficient systems, and flexible spaces that adapt to family life while incorporating biophilic elements.',
      outcomes: [
        {
          metric: 'Energy Reduction',
          value: '45%',
          description: 'Decrease in energy consumption'
        },
        {
          metric: 'Indoor Air Quality',
          value: '60%',
          description: 'Improvement in air quality metrics'
        }
      ],
      features: [
        'Reclaimed wood features',
        'Energy-efficient systems',
        'Flexible family spaces',
        'Indoor-outdoor flow',
        'Sustainable materials'
      ],
      timeline: '10 weeks'
    }
  },
  {
    id: 'mindful-meditation-center',
    title: 'Mindful Meditation Center',
    subtitle: 'Tranquil Space for Inner Peace',
    description: 'A dedicated meditation and mindfulness center designed with natural textures, calming colors, and biophilic elements to support deep contemplation and stress relief.',
    shortDescription: 'Meditation center designed for tranquility with natural textures and calming elements.',
    category: 'wellness',
    tags: ['meditation', 'mindfulness', 'tranquility', 'stress relief', 'natural textures'],
    featured: false,
    year: 2022,
    location: 'Boulder, CO',
    client: 'Mountain Peace Center',
    slug: 'mindful-meditation-center',
    href: '/portfolio/mindful-meditation-center',
    thumbnail: {
      id: 'meditation-thumb',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Meditation space with natural elements',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'meditation-1',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        alt: 'Meditation hall with natural lighting',
        width: 1200,
        height: 800,
        type: 'main'
      }
    ],
    details: {
      overview: 'This meditation center creates an environment conducive to inner peace and mindfulness practice through careful attention to natural materials, lighting, and spatial flow.',
      challenge: 'Creating a space that supports various meditation practices while maintaining acoustic privacy and visual calm.',
      solution: 'Integration of natural sound dampening materials, carefully controlled natural lighting, and biophilic elements that support contemplative states.',
      outcomes: [
        {
          metric: 'User Satisfaction',
          value: '92%',
          description: 'Positive feedback on space quality'
        },
        {
          metric: 'Session Completion',
          value: '80%',
          description: 'Increase in full meditation sessions'
        }
      ],
      features: [
        'Natural acoustic materials',
        'Controlled lighting systems',
        'Contemplative plant selection',
        'Flexible meditation spaces',
        'Sensory calm design'
      ],
      timeline: '8 weeks'
    }
  },
  {
    id: 'rooftop-restaurant-garden',
    title: 'Rooftop Restaurant Garden',
    subtitle: 'Farm-to-Table Dining Experience',
    description: 'An innovative rooftop restaurant featuring living herb walls, sustainable growing systems, and biophilic design elements that enhance the farm-to-table dining experience.',
    shortDescription: 'Rooftop restaurant with living herb walls and sustainable growing systems.',
    category: 'hospitality',
    tags: ['farm-to-table', 'rooftop garden', 'herbs', 'restaurant', 'sustainable'],
    featured: true,
    year: 2023,
    location: 'San Francisco, CA',
    client: 'Garden Table Restaurant',
    slug: 'rooftop-restaurant-garden',
    href: '/portfolio/rooftop-restaurant-garden',
    thumbnail: {
      id: 'restaurant-thumb',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      alt: 'Rooftop restaurant with garden elements',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'restaurant-1',
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
        alt: 'Restaurant dining area with living walls',
        width: 1200,
        height: 800,
        type: 'main'
      }
    ],
    details: {
      overview: 'This rooftop restaurant transformation creates an immersive farm-to-table experience where diners can see their herbs and vegetables growing while enjoying their meal.',
      challenge: 'Creating a functional growing system in a rooftop environment while maintaining an elegant dining atmosphere.',
      solution: 'Custom herb wall systems, weather-resistant plantings, and integrated growing areas that serve both functional and aesthetic purposes.',
      outcomes: [
        {
          metric: 'Fresh Ingredients',
          value: '70%',
          description: 'Of herbs grown on-site'
        },
        {
          metric: 'Customer Satisfaction',
          value: '88%',
          description: 'Positive dining experience ratings'
        }
      ],
      features: [
        'Living herb walls',
        'On-site growing systems',
        'Weather-resistant design',
        'Farm-to-table integration',
        'Sustainable practices'
      ],
      timeline: '14 weeks'
    }
  },
  {
    id: 'co-working-nature-space',
    title: 'Co-working Nature Space',
    subtitle: 'Collaborative Work in Natural Environment',
    description: 'A modern co-working space that incorporates extensive biophilic design to boost creativity, reduce stress, and create an inspiring work environment for entrepreneurs and freelancers.',
    shortDescription: 'Co-working space with biophilic design to boost creativity and reduce stress.',
    category: 'commercial',
    tags: ['co-working', 'creativity', 'collaboration', 'entrepreneurs', 'stress reduction'],
    featured: false,
    year: 2022,
    location: 'Brooklyn, NY',
    client: 'GreenSpace Co-working',
    slug: 'co-working-nature-space',
    href: '/portfolio/co-working-nature-space',
    thumbnail: {
      id: 'coworking-thumb',
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      alt: 'Co-working space with plants and natural light',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'coworking-1',
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
        alt: 'Open co-working area with abundant plants',
        width: 1200,
        height: 800,
        type: 'main'
      }
    ],
    details: {
      overview: 'This co-working space demonstrates how biophilic design can create an inspiring and productive environment for creative professionals and entrepreneurs.',
      challenge: 'Creating distinct work zones while maintaining an open, collaborative feeling and managing plant maintenance in a shared space.',
      solution: 'Strategic plant placement, low-maintenance species selection, and natural elements that define spaces without creating barriers.',
      outcomes: [
        {
          metric: 'Member Satisfaction',
          value: '91%',
          description: 'Positive feedback on work environment'
        },
        {
          metric: 'Productivity Reports',
          value: '25%',
          description: 'Self-reported productivity increase'
        }
      ],
      features: [
        'Strategic plant placement',
        'Natural workspace division',
        'Low-maintenance systems',
        'Collaborative zones',
        'Creative inspiration areas'
      ],
      timeline: '6 weeks'
    }
  },
  {
    id: 'luxury-hotel-lobby',
    title: 'Luxury Hotel Lobby',
    subtitle: 'Grand Entrance with Natural Elegance',
    description: 'An elegant hotel lobby redesign featuring a stunning living wall installation, natural stone elements, and biophilic design that creates a memorable first impression for guests.',
    shortDescription: 'Elegant hotel lobby with living wall installation and natural stone elements.',
    category: 'hospitality',
    tags: ['luxury', 'hotel', 'living wall', 'natural stone', 'grand entrance'],
    featured: false,
    year: 2023,
    location: 'Miami, FL',
    client: 'Ocean Vista Resort',
    slug: 'luxury-hotel-lobby',
    href: '/portfolio/luxury-hotel-lobby',
    thumbnail: {
      id: 'hotel-thumb',
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      alt: 'Luxury hotel lobby with living wall',
      width: 800,
      height: 600,
      type: 'main'
    },
    images: [
      {
        id: 'hotel-1',
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop',
        alt: 'Grand hotel lobby with natural elements',
        width: 1200,
        height: 800,
        type: 'main'
      }
    ],
    details: {
      overview: 'This luxury hotel lobby creates an unforgettable first impression through the integration of a dramatic living wall, natural stone features, and carefully curated biophilic elements.',
      challenge: 'Creating a grand, luxurious feel while incorporating natural elements that require ongoing maintenance in a high-traffic environment.',
      solution: 'A dramatic living wall centerpiece, durable natural stone installations, and strategic plant placement that withstands heavy foot traffic.',
      outcomes: [
        {
          metric: 'Guest Ratings',
          value: '4.8/5',
          description: 'Average lobby experience rating'
        },
        {
          metric: 'Social Media',
          value: '300%',
          description: 'Increase in lobby photo shares'
        }
      ],
      features: [
        'Dramatic living wall centerpiece',
        'Natural stone installations',
        'High-traffic plant selection',
        'Luxury biophilic integration',
        'Instagram-worthy design'
      ],
      timeline: '10 weeks'
    }
  }
]

// Helper functions for filtering and searching
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return portfolioProjects
  return portfolioProjects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return portfolioProjects.filter(project => project.featured)
}

export const searchProjects = (searchTerm: string) => {
  const term = searchTerm.toLowerCase()
  return portfolioProjects.filter(
    project =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tags.some(tag => tag.toLowerCase().includes(term)) ||
      project.location.toLowerCase().includes(term)
  )
}

export const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find(project => project.slug === slug)
}

export const getCategoryStats = () => {
  const stats = portfolioProjects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return [
    { value: 'all' as const, label: 'All Projects', count: portfolioProjects.length },
    { value: 'residential' as const, label: 'Residential', count: stats.residential || 0 },
    { value: 'commercial' as const, label: 'Commercial', count: stats.commercial || 0 },
    { value: 'hospitality' as const, label: 'Hospitality', count: stats.hospitality || 0 },
    { value: 'wellness' as const, label: 'Wellness', count: stats.wellness || 0 },
  ]
}