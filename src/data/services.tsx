import { Service } from '@/types/services'

export const servicesData: Service[] = [
  {
    id: 'residential-design',
    title: 'Residential Design',
    subtitle: 'Transform Your Home into a Natural Sanctuary',
    description: 'Create harmonious living spaces that blend natural elements with modern comfort, promoting wellness and tranquility in your daily life.',
    shortDescription: 'Nature-inspired home design that promotes wellness and tranquility.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l4-2 4 2V5L8 5z" />
      </svg>
    ),
    href: '/services/residential-design',
    category: 'residential',
    featured: true,
    color: {
      primary: 'from-sage-500 to-forest-600',
      secondary: 'bg-sage-50',
      accent: 'text-sage-600'
    },
    details: {
      overview: 'Our residential biophilic design service transforms your home into a healing sanctuary that connects you with nature. We integrate natural materials, living elements, and organic forms to create spaces that reduce stress, improve air quality, and enhance your overall well-being.',
      approach: 'We begin with a comprehensive assessment of your lifestyle, preferences, and space. Our team then develops a customized design plan that seamlessly integrates biophilic elements while maintaining functionality and aesthetic appeal.',
      benefits: [
        'Reduced stress and anxiety levels',
        'Improved air quality and health',
        'Enhanced sleep quality and recovery',
        'Increased property value',
        'Better connection with nature',
        'Improved focus and creativity'
      ],
      features: [
        {
          id: 'living-walls',
          title: 'Living Walls & Green Installations',
          description: 'Custom vertical gardens and plant installations that purify air and create stunning focal points.'
        },
        {
          id: 'natural-materials',
          title: 'Natural Material Selection',
          description: 'Carefully curated wood, stone, and organic materials that bring nature\'s textures indoors.'
        },
        {
          id: 'lighting-design',
          title: 'Natural Lighting Optimization',
          description: 'Strategic lighting design that mimics natural light patterns and supports circadian rhythms.'
        },
        {
          id: 'water-features',
          title: 'Water Feature Integration',
          description: 'Soothing water elements that add tranquility and improve air humidity naturally.'
        }
      ],
      process: [
        {
          id: 'consultation',
          step: 1,
          title: 'Initial Consultation',
          description: 'We meet to understand your vision, lifestyle, and space requirements.',
          duration: '1-2 hours',
          deliverables: ['Space assessment', 'Needs analysis', 'Initial recommendations']
        },
        {
          id: 'design-development',
          step: 2,
          title: 'Design Development',
          description: 'Our team creates detailed design plans and 3D visualizations.',
          duration: '2-3 weeks',
          deliverables: ['Concept designs', '3D renderings', 'Material selections']
        },
        {
          id: 'planning',
          step: 3,
          title: 'Planning & Sourcing',
          description: 'We finalize plans and source all materials and plants.',
          duration: '1-2 weeks',
          deliverables: ['Final plans', 'Material sourcing', 'Timeline schedule']
        },
        {
          id: 'implementation',
          step: 4,
          title: 'Implementation',
          description: 'Professional installation and setup of all biophilic elements.',
          duration: '1-4 weeks',
          deliverables: ['Complete installation', 'Plant care guide', 'Maintenance plan']
        }
      ],
      pricing: {
        startingPrice: '$5,000',
        priceRange: '$5,000 - $50,000+',
        factors: ['Room size and complexity', 'Material selections', 'Custom features', 'Installation requirements']
      }
    }
  },
  {
    id: 'commercial-spaces',
    title: 'Commercial Spaces',
    subtitle: 'Boost Productivity with Nature-Inspired Workplaces',
    description: 'Design productive, healthy work environments that reduce employee stress, increase creativity, and improve overall workplace satisfaction.',
    shortDescription: 'Nature-inspired workplace design that boosts productivity and wellness.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: '/services/commercial-spaces',
    category: 'commercial',
    featured: true,
    color: {
      primary: 'from-forest-500 to-moss-600',
      secondary: 'bg-forest-50',
      accent: 'text-forest-600'
    },
    details: {
      overview: 'Transform your workplace into a thriving environment that enhances employee well-being, productivity, and creativity through scientifically-backed biophilic design principles.',
      approach: 'We work closely with your team to understand your company culture, workflow, and goals. Our designs integrate natural elements that support collaboration, focus, and employee satisfaction while maintaining professional aesthetics.',
      benefits: [
        'Increased employee productivity by up to 25%',
        'Reduced absenteeism and sick days',
        'Enhanced creativity and problem-solving',
        'Improved employee retention',
        'Better air quality and acoustics',
        'Strengthened company culture and brand'
      ],
      features: [
        {
          id: 'biophilic-zones',
          title: 'Biophilic Work Zones',
          description: 'Dedicated areas with natural elements for focused work and collaboration.'
        },
        {
          id: 'living-architecture',
          title: 'Living Architecture',
          description: 'Integrated plant systems that improve air quality and create natural boundaries.'
        },
        {
          id: 'wellness-spaces',
          title: 'Employee Wellness Areas',
          description: 'Relaxation zones with natural elements for stress relief and rejuvenation.'
        },
        {
          id: 'sustainable-systems',
          title: 'Sustainable Systems',
          description: 'Eco-friendly solutions that reduce environmental impact and operating costs.'
        }
      ],
      process: [
        {
          id: 'assessment',
          step: 1,
          title: 'Workplace Assessment',
          description: 'Comprehensive analysis of your space, culture, and employee needs.',
          duration: '1 week',
          deliverables: ['Space audit', 'Employee surveys', 'Workflow analysis']
        },
        {
          id: 'strategy',
          step: 2,
          title: 'Design Strategy',
          description: 'Development of biophilic design strategy aligned with business goals.',
          duration: '2-3 weeks',
          deliverables: ['Strategic plan', 'Design concepts', 'ROI projections']
        },
        {
          id: 'detailed-design',
          step: 3,
          title: 'Detailed Design',
          description: 'Complete design development with technical specifications.',
          duration: '3-4 weeks',
          deliverables: ['Technical drawings', 'Material specs', 'Implementation timeline']
        },
        {
          id: 'implementation',
          step: 4,
          title: 'Phased Implementation',
          description: 'Careful installation with minimal business disruption.',
          duration: '4-12 weeks',
          deliverables: ['Phased installation', 'Employee training', 'Maintenance program']
        }
      ],
      pricing: {
        startingPrice: '$15,000',
        priceRange: '$15,000 - $200,000+',
        factors: ['Office size and layout', 'Complexity of installations', 'Custom features', 'Phasing requirements']
      }
    }
  },
  {
    id: 'consultation',
    title: 'Design Consultation',
    subtitle: 'Expert Guidance for Your Biophilic Journey',
    description: 'Get professional advice and strategic planning to implement biophilic design principles in any space, with flexible consultation options.',
    shortDescription: 'Professional guidance and strategic planning for biophilic design.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services/consultation',
    category: 'consultation',
    featured: true,
    color: {
      primary: 'from-moss-500 to-sage-600',
      secondary: 'bg-moss-50',
      accent: 'text-moss-600'
    },
    details: {
      overview: 'Our consultation service provides expert guidance for implementing biophilic design principles in your space. Whether you\'re planning a major renovation or looking for simple improvements, we offer flexible consultation options to meet your needs.',
      approach: 'We provide personalized advice based on your specific space, budget, and goals. Our consultations can range from strategic planning sessions to hands-on design guidance, all tailored to your unique situation.',
      benefits: [
        'Expert guidance from certified professionals',
        'Cost-effective design solutions',
        'Flexible consultation formats',
        'Customized recommendations',
        'Implementation roadmap',
        'Ongoing support and advice'
      ],
      features: [
        {
          id: 'strategic-planning',
          title: 'Strategic Planning Sessions',
          description: 'Comprehensive planning for large-scale biophilic design implementations.'
        },
        {
          id: 'space-assessment',
          title: 'Space Assessment & Analysis',
          description: 'Detailed evaluation of your space\'s biophilic potential and opportunities.'
        },
        {
          id: 'design-guidance',
          title: 'Design Guidance & Review',
          description: 'Expert review of existing plans and guidance for improvement.'
        },
        {
          id: 'implementation-support',
          title: 'Implementation Support',
          description: 'Ongoing support during the implementation phase of your project.'
        }
      ],
      process: [
        {
          id: 'intake',
          step: 1,
          title: 'Project Intake',
          description: 'Understanding your goals, constraints, and consultation needs.',
          duration: '30 minutes',
          deliverables: ['Needs assessment', 'Consultation plan', 'Resource recommendations']
        },
        {
          id: 'consultation',
          step: 2,
          title: 'Consultation Session(s)',
          description: 'In-depth consultation based on your specific requirements.',
          duration: '1-4 hours',
          deliverables: ['Expert advice', 'Recommendations', 'Action plan']
        },
        {
          id: 'documentation',
          step: 3,
          title: 'Documentation & Resources',
          description: 'Comprehensive documentation of recommendations and next steps.',
          duration: '1-2 days',
          deliverables: ['Consultation report', 'Resource list', 'Implementation guide']
        },
        {
          id: 'follow-up',
          step: 4,
          title: 'Follow-up Support',
          description: 'Optional follow-up sessions to address questions and progress.',
          duration: '30-60 minutes',
          deliverables: ['Progress review', 'Additional guidance', 'Course corrections']
        }
      ],
      pricing: {
        startingPrice: '$250',
        priceRange: '$250 - $2,500',
        factors: ['Consultation duration', 'Complexity of project', 'Documentation requirements', 'Follow-up sessions needed']
      }
    }
  }
]

export const generalProcess = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery & Assessment',
    description: 'We begin by understanding your vision, needs, and space to create a foundation for design.',
    duration: '1-2 weeks'
  },
  {
    id: 'design',
    step: 2,
    title: 'Design Development',
    description: 'Our team creates detailed concepts and visualizations tailored to your specific requirements.',
    duration: '2-4 weeks'
  },
  {
    id: 'planning',
    step: 3,
    title: 'Planning & Coordination',
    description: 'We finalize designs, source materials, and coordinate all aspects of implementation.',
    duration: '1-3 weeks'
  },
  {
    id: 'implementation',
    step: 4,
    title: 'Implementation & Support',
    description: 'Professional installation with ongoing support to ensure your space thrives long-term.',
    duration: '2-8 weeks'
  }
]