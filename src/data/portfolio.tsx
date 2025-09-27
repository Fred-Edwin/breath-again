import { Project } from '@/types/portfolio'

export const portfolioProjects: Project[] = [
  {
    id: 'nairobi-apartment-vertical-garden',
    title: 'Vertical Garden Solutions',
    subtitle: 'Maximizing Green Space in Urban Environments',
    description:
      'Our vertical garden designs showcase how to transform any wall into a living ecosystem. Using modular systems and climate-resilient plants, we create stunning green features that thrive in Kenyan urban environments.',
    shortDescription:
      'Modular vertical garden systems for urban space transformation.',
    category: 'residential',
    tags: [
      'vertical gardens',
      'urban solutions',
      'modular design',
      'space optimization',
      'green walls',
    ],
    featured: true,
    year: 2025,
    location: 'Nairobi, Kenya',
    client: 'Capability Showcase',
    slug: 'nairobi-apartment-vertical-garden',
    href: '/portfolio/nairobi-apartment-vertical-garden',
    thumbnail: {
      id: 'concept-1-thumb',
      src: '/concept_1.jpg',
      alt: 'Colorful vertical garden with varied plant textures',
      width: 800,
      height: 600,
      type: 'main',
    },
    images: [
      {
        id: 'concept-1-main',
        src: '/concept_1.jpg',
        alt: 'Modular vertical garden with diverse plant selection',
        width: 1200,
        height: 800,
        type: 'main',
      },
      {
        id: 'concept-4-detail',
        src: '/concept_4.jpg',
        alt: 'Balcony vertical garden installation',
        width: 1200,
        height: 800,
        type: 'detail',
      },
    ],
    details: {
      overview:
        'Our vertical garden capability demonstrates how modular plant systems can transform any urban space into a green haven. We specialize in climate-resilient designs and efficient systems perfect for Kenyan urban environments.',
      challenge:
        'Urban spaces often lack room for traditional gardens, residents need low-maintenance solutions that can thrive in apartment conditions while staying affordable.',
      solution:
        'We design modular vertical garden panels with automated irrigation, select drought-resistant native plants, and create systems that maximize green coverage in minimal space.',
      outcomes: [
        {
          metric: 'Space Efficiency',
          value: '75%',
          description: 'More plants per square meter than traditional planters',
        },
        {
          metric: 'Water Savings',
          value: '60%',
          description: 'Reduction in water usage through efficient irrigation',
        },
        {
          metric: 'Cost Range',
          value: 'KSH 2,500-13,000/M²',
          description: 'Flexible pricing for different installation sizes',
        },
      ],
      features: [
        'Modular plant panel system',
        'Drip irrigation automation',
        'Climate-resilient plant selection',
        'Easy maintenance design',
        'Expandable modular framework',
      ],
      timeline: '2 weeks',
      budget: 'KSH 2,500 - 13,000 per M²',
      team: ['Purity Wanjira Waweru (Lead Designer)'],
      testimonial: {
        quote:
          'This type of vertical garden system would completely transform my apartment. The modular design makes it perfect for our space constraints.',
        author: 'Sarah Muthoni',
        role: 'Urban Resident',
      },
    },
  },
  {
    id: 'kisumu-residential-consultation',
    title: 'Design Consultation Services',
    subtitle: 'Expert Guidance for Biophilic Integration',
    description:
      'Our comprehensive design consultation service helps developers and property owners integrate biophilic elements effectively. We provide detailed guidance, planning, and implementation strategies that enhance property value and resident satisfaction.',
    shortDescription:
      'Professional biophilic design consultation and planning services.',
    category: 'commercial',
    tags: [
      'design consultation',
      'residential development',
      'urban planning',
      'property value',
      'community wellbeing',
    ],
    featured: true,
    year: 2025,
    location: 'Kisumu, Kenya',
    client: 'Service Showcase',
    slug: 'kisumu-residential-consultation',
    href: '/portfolio/kisumu-residential-consultation',
    thumbnail: {
      id: 'concept-2-thumb',
      src: '/concept_2.jpg',
      alt: 'Vertical garden installation with wooden framework',
      width: 800,
      height: 600,
      type: 'main',
    },
    images: [
      {
        id: 'concept-2-main',
        src: '/concept_2.jpg',
        alt: 'Modular wooden planter system for developments',
        width: 1200,
        height: 800,
        type: 'main',
      },
      {
        id: 'concept-3-detail',
        src: '/oncept_3.jpg',
        alt: 'Building facade with integrated vertical gardens',
        width: 1200,
        height: 800,
        type: 'detail',
      },
    ],
    details: {
      overview:
        'Our consultation service provides comprehensive biophilic design guidance for any development or property. We help integrate nature throughout spaces to enhance satisfaction and market value.',
      challenge:
        'Property owners and developers need expert guidance on cost-effective biophilic integration that increases value while staying within budget constraints.',
      solution:
        'We develop comprehensive biophilic master plans including facade gardens, communal green spaces, and custom garden systems with detailed implementation guidelines.',
      outcomes: [
        {
          metric: 'Property Value Increase',
          value: '18%',
          description: 'Projected increase in unit sales prices',
        },
        {
          metric: 'Sales Acceleration',
          value: '45%',
          description: 'Faster pre-sales due to biophilic features',
        },
        {
          metric: 'Service Cost',
          value: 'KSH 3,500-16,500',
          description: 'Consultation fee range based on scope',
        },
      ],
      features: [
        'Facade vertical garden planning',
        'Communal green space design',
        'Balcony garden system specifications',
        'Plant selection guidelines',
        'Maintenance protocol development',
      ],
      timeline: '4 weeks',
      budget: 'KSH 3,500 - 16,500',
    },
  },
  {
    id: 'nakuru-wellness-center-installation',
    title: 'Concept Installation Services',
    subtitle: 'Biophilic Features for Enhanced Wellbeing',
    description:
      'Our concept installation service creates stunning biophilic features using moss, living walls, and natural textures. We design calming focal points that promote mental health and create memorable spaces.',
    shortDescription:
      'Custom biophilic installations for wellness and ambiance.',
    category: 'wellness',
    tags: [
      'living wall',
      'wellness center',
      'community space',
      'moss installation',
      'mental health',
    ],
    featured: true,
    year: 2025,
    location: 'Nakuru, Kenya',
    client: 'Capability Demo',
    slug: 'nakuru-wellness-center-installation',
    href: '/portfolio/nakuru-wellness-center-installation',
    thumbnail: {
      id: 'concept-6-thumb',
      src: '/concept_6.jpg',
      alt: 'Dramatic moss wall installation in modern space',
      width: 800,
      height: 600,
      type: 'main',
    },
    images: [
      {
        id: 'concept-6-main',
        src: '/concept_6.jpg',
        alt: 'Large-scale moss wall with natural textures',
        width: 1200,
        height: 800,
        type: 'main',
      },
      {
        id: 'concept-5-detail',
        src: '/concept_5.jpg',
        alt: 'Living wall behind bathroom mirrors',
        width: 1200,
        height: 800,
        type: 'detail',
      },
    ],
    details: {
      overview:
        'Our concept installation capability transforms any space into a calming sanctuary, using preserved moss and natural textures to create stunning focal points that promote mental wellness and memorable experiences.',
      challenge:
        'Creating low-maintenance, high-impact installations that serve as both art pieces and functional wellness features in any space type.',
      solution:
        'We design dramatic moss wall installations with varied textures and natural patterns, incorporating sustainable materials and minimal maintenance requirements.',
      outcomes: [
        {
          metric: 'Visitor Engagement',
          value: '85%',
          description: 'Increase in center utilization and community visits',
        },
        {
          metric: 'Wellbeing Reports',
          value: '70%',
          description: 'Visitors reporting improved mood and stress relief',
        },
        {
          metric: 'Installation Range',
          value: 'KSH 4,000-12,000/M²',
          description: 'Pricing varies by design complexity and size',
        },
      ],
      features: [
        'Preserved moss wall system',
        'Natural texture integration',
        'Low-maintenance design',
        'Community focal point',
        'Mental wellness enhancement',
      ],
      timeline: '3 weeks',
      budget: 'KSH 4,000 - 12,000 per M²',
    },
  },
  {
    id: 'mombasa-cafe-installation',
    title: 'Commercial Space Enhancement',
    subtitle: 'Bringing Nature to Business Environments',
    description:
      'Our commercial enhancement service creates vibrant living walls featuring diverse plant textures and colors. We transform business spaces into green destinations that enhance customer experience and create unique atmospheres.',
    shortDescription:
      'Biophilic enhancements for commercial and business spaces.',
    category: 'wellness',
    tags: [
      'living wall',
      'commercial space',
      'café',
      'customer experience',
      'colorful plants',
    ],
    featured: false,
    year: 2025,
    location: 'Mombasa, Kenya',
    client: 'Commercial Showcase',
    slug: 'mombasa-cafe-installation',
    href: '/portfolio/mombasa-cafe-installation',
    thumbnail: {
      id: 'concept-7-thumb',
      src: '/concept_7.jpg',
      alt: 'Colorful living wall with diverse plant species',
      width: 800,
      height: 600,
      type: 'main',
    },
    images: [
      {
        id: 'concept-7-main',
        src: '/concept_7.jpg',
        alt: 'Vibrant living wall with purple and green plants',
        width: 1200,
        height: 800,
        type: 'main',
      },
    ],
    details: {
      overview:
        'Our commercial enhancement capability brings life and color to any business space, creating Instagram-worthy backdrops that enhance customer experience and establish businesses as unique destinations.',
      challenge:
        'Creating visually striking installations that thrive in commercial environments while being low-maintenance and cost-effective for business owners.',
      solution:
        'We design modular living wall systems with colorful, hardy plants that create visual interest while requiring minimal upkeep and fitting within business budgets.',
      outcomes: [
        {
          metric: 'Customer Dwell Time',
          value: '35%',
          description: 'Increase in average customer visit duration',
        },
        {
          metric: 'Social Media Engagement',
          value: '120%',
          description: 'Increase in café photo shares and tags',
        },
        {
          metric: 'Installation Cost',
          value: 'KSH 6,800',
          description: 'Total project cost for 8M² installation',
        },
      ],
      features: [
        'Colorful plant selection',
        'Modular installation system',
        'Low-maintenance species',
        'Customer photo backdrop',
        'Enhanced air quality',
      ],
      timeline: '2 weeks',
      budget: 'KSH 4,000 - 12,000 per M²',
    },
  },
]

// Helper functions for filtering and searching
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return portfolioProjects
  return portfolioProjects.filter((project) => project.category === category)
}

export const getFeaturedProjects = () => {
  return portfolioProjects.filter((project) => project.featured)
}

export const searchProjects = (searchTerm: string) => {
  const term = searchTerm.toLowerCase()
  return portfolioProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tags.some((tag) => tag.toLowerCase().includes(term)) ||
      project.location.toLowerCase().includes(term)
  )
}

export const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find((project) => project.slug === slug)
}

export const getCategoryStats = () => {
  const stats = portfolioProjects.reduce(
    (acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  return [
    {
      value: 'all' as const,
      label: 'All Services',
      count: portfolioProjects.length,
    },
    {
      value: 'residential' as const,
      label: 'Residential',
      count: stats.residential || 0,
    },
    {
      value: 'commercial' as const,
      label: 'Commercial',
      count: stats.commercial || 0,
    },
    {
      value: 'hospitality' as const,
      label: 'Hospitality',
      count: stats.hospitality || 0,
    },
    {
      value: 'wellness' as const,
      label: 'Wellness',
      count: stats.wellness || 0,
    },
  ]
}
