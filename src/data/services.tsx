import { Service } from '@/types/services'

export const servicesData: Service[] = [
  {
    id: 'balcony-indoor-outdoor',
    title: 'Balcony, Indoor & Outdoor Biophilic Designs',
    subtitle: 'Affordable Plant Modules for Urban Living',
    description:
      'Affordable, easy-to-maintain plant modules including planters, vertical gardens, and rooftop greens designed for small to medium households and apartments.',
    shortDescription:
      'Affordable plant modules for urban apartments and homes.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 5v14l4-2 4 2V5L8 5z"
        />
      </svg>
    ),
    href: '/services/balcony-indoor-outdoor',
    category: 'residential',
    featured: true,
    color: {
      primary: 'from-sage-500 to-forest-600',
      secondary: 'bg-sage-50',
      accent: 'text-sage-600',
    },
    details: {
      overview:
        'Our plant module service brings nature to urban apartments and homes through affordable, easy-to-maintain vertical gardens, planters, and rooftop installations. Perfect for small to medium households looking to enhance their living spaces with greenery.',
      approach:
        'We assess your space, light conditions, and maintenance preferences to design custom plant modules that thrive in your specific environment. Our climate-resilient plant selections ensure long-lasting beauty with minimal upkeep.',
      benefits: [
        'Reduced stress and anxiety levels',
        'Improved air quality and health',
        'Enhanced sleep quality and recovery',
        'Increased property value',
        'Better connection with nature',
        'Improved focus and creativity',
      ],
      features: [
        {
          id: 'living-walls',
          title: 'Living Walls & Green Installations',
          description:
            'Custom vertical gardens and plant installations that purify air and create stunning focal points.',
        },
        {
          id: 'natural-materials',
          title: 'Natural Material Selection',
          description:
            "Carefully curated wood, stone, and organic materials that bring nature's textures indoors.",
        },
        {
          id: 'lighting-design',
          title: 'Natural Lighting Optimization',
          description:
            'Strategic lighting design that mimics natural light patterns and supports circadian rhythms.',
        },
        {
          id: 'water-features',
          title: 'Water Feature Integration',
          description:
            'Soothing water elements that add tranquility and improve air humidity naturally.',
        },
      ],
      process: [
        {
          id: 'consultation',
          step: 1,
          title: 'Initial Consultation',
          description:
            'We meet to understand your vision, lifestyle, and space requirements.',
          duration: '1-2 hours',
          deliverables: [
            'Space assessment',
            'Needs analysis',
            'Initial recommendations',
          ],
        },
        {
          id: 'design-development',
          step: 2,
          title: 'Design Development',
          description:
            'Our team creates detailed design plans and 3D visualizations.',
          duration: '2-3 weeks',
          deliverables: [
            'Concept designs',
            '3D renderings',
            'Material selections',
          ],
        },
        {
          id: 'planning',
          step: 3,
          title: 'Planning & Sourcing',
          description: 'We finalize plans and source all materials and plants.',
          duration: '1-2 weeks',
          deliverables: [
            'Final plans',
            'Material sourcing',
            'Timeline schedule',
          ],
        },
        {
          id: 'implementation',
          step: 4,
          title: 'Implementation',
          description:
            'Professional installation and setup of all biophilic elements.',
          duration: '1-4 weeks',
          deliverables: [
            'Complete installation',
            'Plant care guide',
            'Maintenance plan',
          ],
        },
      ],
      pricing: {
        startingPrice: 'KSH 2,500',
        priceRange: 'KSH 2,500 - 13,000/M²',
        factors: [
          'Type of installation (Vertical: KSH 2,500-13,000/M², Rooftop: KSH 5,000-10,000/M², Indoor: KSH 6,500-12,000/M²)',
          'Plant selections',
          'Module complexity',
          'Installation requirements',
        ],
      },
    },
  },
  {
    id: 'design-consultation',
    title: 'Design Consultation',
    subtitle: 'Professional Guidance for Urban Real Estate Projects',
    description:
      'Guidance on integrating nature into urban real estate and community projects. Perfect for residential units and small commercial spaces.',
    shortDescription:
      'Professional guidance for integrating nature into urban projects.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    href: '/services/design-consultation',
    category: 'consultation',
    featured: true,
    color: {
      primary: 'from-forest-500 to-moss-600',
      secondary: 'bg-forest-50',
      accent: 'text-forest-600',
    },
    details: {
      overview:
        'Our consultation service provides expert guidance for integrating biophilic design into urban real estate and community projects. We help you create nature-friendly spaces that enhance property value and resident wellbeing.',
      approach:
        'We assess your project requirements, space constraints, and goals to provide practical recommendations for incorporating nature into your development. Our focus is on cost-effective, sustainable solutions.',
      benefits: [
        'Increased property value through biophilic design',
        'Enhanced resident satisfaction and wellbeing',
        'Cost-effective nature integration strategies',
        'Sustainable development guidance',
        'Climate-resilient design recommendations',
        'Professional expertise and planning support',
      ],
      features: [
        {
          id: 'biophilic-zones',
          title: 'Biophilic Work Zones',
          description:
            'Dedicated areas with natural elements for focused work and collaboration.',
        },
        {
          id: 'living-architecture',
          title: 'Living Architecture',
          description:
            'Integrated plant systems that improve air quality and create natural boundaries.',
        },
        {
          id: 'wellness-spaces',
          title: 'Employee Wellness Areas',
          description:
            'Relaxation zones with natural elements for stress relief and rejuvenation.',
        },
        {
          id: 'sustainable-systems',
          title: 'Sustainable Systems',
          description:
            'Eco-friendly solutions that reduce environmental impact and operating costs.',
        },
      ],
      process: [
        {
          id: 'assessment',
          step: 1,
          title: 'Workplace Assessment',
          description:
            'Comprehensive analysis of your space, culture, and employee needs.',
          duration: '1 week',
          deliverables: [
            'Space audit',
            'Employee surveys',
            'Workflow analysis',
          ],
        },
        {
          id: 'strategy',
          step: 2,
          title: 'Design Strategy',
          description:
            'Development of biophilic design strategy aligned with business goals.',
          duration: '2-3 weeks',
          deliverables: [
            'Strategic plan',
            'Design concepts',
            'ROI projections',
          ],
        },
        {
          id: 'detailed-design',
          step: 3,
          title: 'Detailed Design',
          description:
            'Complete design development with technical specifications.',
          duration: '3-4 weeks',
          deliverables: [
            'Technical drawings',
            'Material specs',
            'Implementation timeline',
          ],
        },
        {
          id: 'implementation',
          step: 4,
          title: 'Phased Implementation',
          description: 'Careful installation with minimal business disruption.',
          duration: '4-12 weeks',
          deliverables: [
            'Phased installation',
            'Employee training',
            'Maintenance program',
          ],
        },
      ],
      pricing: {
        startingPrice: 'KSH 3,500',
        priceRange: 'KSH 3,500 - 16,500',
        factors: [
          'Project size and complexity',
          'Consultation duration',
          'Site visits required',
          'Documentation needs',
        ],
      },
    },
  },
  {
    id: 'biophilic-installations',
    title: 'Biophilic Concept Installations',
    subtitle: 'Small-Scale Public Green Spaces',
    description:
      'Small-scale public or semi-public biophilic monuments and green spaces for schools, cafés, restaurants, and wellness spaces.',
    shortDescription:
      'Small-scale biophilic installations for public and commercial spaces.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    href: '/services/biophilic-installations',
    category: 'wellness',
    featured: true,
    color: {
      primary: 'from-moss-500 to-sage-600',
      secondary: 'bg-moss-50',
      accent: 'text-moss-600',
    },
    details: {
      overview:
        'We create small-scale biophilic installations and green monuments for public and semi-public spaces. Perfect for schools, cafés, restaurants, and wellness centers looking to enhance their environment with meaningful nature connections.',
      approach:
        'We design and install custom biophilic features that serve as focal points and gathering spaces. Each installation is tailored to the specific context, user needs, and maintenance capabilities of the space.',
      benefits: [
        'Enhanced public space aesthetics',
        'Community gathering and wellness focus',
        'Low-maintenance sustainable design',
        'Climate-resilient plant selections',
        'Custom design for unique spaces',
        'Professional installation and setup',
      ],
      features: [
        {
          id: 'strategic-planning',
          title: 'Strategic Planning Sessions',
          description:
            'Comprehensive planning for large-scale biophilic design implementations.',
        },
        {
          id: 'space-assessment',
          title: 'Space Assessment & Analysis',
          description:
            "Detailed evaluation of your space's biophilic potential and opportunities.",
        },
        {
          id: 'design-guidance',
          title: 'Design Guidance & Review',
          description:
            'Expert review of existing plans and guidance for improvement.',
        },
        {
          id: 'implementation-support',
          title: 'Implementation Support',
          description:
            'Ongoing support during the implementation phase of your project.',
        },
      ],
      process: [
        {
          id: 'intake',
          step: 1,
          title: 'Project Intake',
          description:
            'Understanding your goals, constraints, and consultation needs.',
          duration: '30 minutes',
          deliverables: [
            'Needs assessment',
            'Consultation plan',
            'Resource recommendations',
          ],
        },
        {
          id: 'consultation',
          step: 2,
          title: 'Consultation Session(s)',
          description:
            'In-depth consultation based on your specific requirements.',
          duration: '1-4 hours',
          deliverables: ['Expert advice', 'Recommendations', 'Action plan'],
        },
        {
          id: 'documentation',
          step: 3,
          title: 'Documentation & Resources',
          description:
            'Comprehensive documentation of recommendations and next steps.',
          duration: '1-2 days',
          deliverables: [
            'Consultation report',
            'Resource list',
            'Implementation guide',
          ],
        },
        {
          id: 'follow-up',
          step: 4,
          title: 'Follow-up Support',
          description:
            'Optional follow-up sessions to address questions and progress.',
          duration: '30-60 minutes',
          deliverables: [
            'Progress review',
            'Additional guidance',
            'Course corrections',
          ],
        },
      ],
      pricing: {
        startingPrice: 'KSH 4,000',
        priceRange: 'KSH 4,000 - 12,000',
        factors: [
          'Installation size and complexity',
          'Plant selections and materials',
          'Site preparation requirements',
          'Maintenance setup',
        ],
      },
    },
  },
]

export const generalProcess = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery & Assessment',
    description:
      'We begin by understanding your vision, needs, and space to create a foundation for design.',
    duration: '1-2 weeks',
  },
  {
    id: 'design',
    step: 2,
    title: 'Design Development',
    description:
      'Our team creates detailed concepts and visualizations tailored to your specific requirements.',
    duration: '2-4 weeks',
  },
  {
    id: 'planning',
    step: 3,
    title: 'Planning & Coordination',
    description:
      'We finalize designs, source materials, and coordinate all aspects of implementation.',
    duration: '1-3 weeks',
  },
  {
    id: 'implementation',
    step: 4,
    title: 'Implementation & Support',
    description:
      'Professional installation with ongoing support to ensure your space thrives long-term.',
    duration: '2-8 weeks',
  },
]
