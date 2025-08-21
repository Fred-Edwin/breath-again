import Link from 'next/link'

export const metadata = {
  title: 'Services - Breathe Again',
  description: 'Discover our biophilic design services including interior design, landscape architecture, and wellness consulting.',
}

export default function Services() {
  const services = [
    {
      title: "Interior Biophilic Design",
      description: "Transform indoor spaces with natural elements, living walls, natural lighting, and organic materials that promote well-being.",
      features: ["Living walls & green installations", "Natural lighting optimization", "Organic material selection", "Air quality improvement", "Stress-reducing layouts"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l4-2 4 2V5L8 5z" />
        </svg>
      )
    },
    {
      title: "Landscape Architecture",
      description: "Create outdoor spaces that seamlessly blend with natural ecosystems while providing peaceful retreats for daily life.",
      features: ["Native plant selection", "Sustainable water features", "Outdoor living spaces", "Wildlife-friendly gardens", "Seasonal design planning"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Wellness Space Design",
      description: "Specialized environments designed to reduce stress, improve focus, and enhance mental health through nature connection.",
      features: ["Meditation & yoga spaces", "Therapeutic gardens", "Sensory design elements", "Circadian lighting", "Sound & aromatherapy integration"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Sustainability Consulting",
      description: "Expert guidance on eco-friendly materials, energy efficiency, and sustainable design practices for any project.",
      features: ["Material lifecycle analysis", "Energy efficiency optimization", "Waste reduction strategies", "Carbon footprint assessment", "Green certification support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      )
    },
    {
      title: "Workplace Biophilia",
      description: "Boost productivity and employee well-being with nature-inspired office environments and collaborative spaces.",
      features: ["Productivity-focused layouts", "Natural break areas", "Improved air quality systems", "Biophilic meeting spaces", "Employee wellness programs"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Restoration & Retrofitting",
      description: "Breathe new life into existing spaces by incorporating biophilic elements and sustainable improvements.",
      features: ["Space assessment & planning", "Sustainable material upgrades", "Natural element integration", "Energy efficiency improvements", "Phased implementation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-100 to-sage-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-forest-700 leading-relaxed">
            Comprehensive biophilic design solutions that reconnect your spaces with the healing power of nature.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <article key={index} className="group bg-sage-25 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-forest-100 rounded-xl flex items-center justify-center text-forest-700 group-hover:bg-forest-200 transition-colors mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-forest-900">{service.title}</h2>
                </div>
                
                <p className="text-forest-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-forest-800 mb-3">What&apos;s Included:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-forest-600">
                        <svg className="w-5 h-5 text-sage-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-sage-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              A collaborative approach that ensures every project reflects your vision while maximizing the benefits of biophilic design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs, space, and vision through detailed consultation." },
              { step: "02", title: "Design", description: "Creating detailed plans that integrate natural elements with your lifestyle." },
              { step: "03", title: "Development", description: "Bringing designs to life with sustainable materials and expert craftsmanship." },
              { step: "04", title: "Delivery", description: "Final installation and ongoing support to ensure your space thrives." }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-forest-700 text-sage-50 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-forest-800 transition-colors">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">{process.title}</h3>
                <p className="text-forest-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-50 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can transform your space with the healing power of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-sage-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="bg-transparent text-sage-50 px-8 py-3 rounded-lg font-medium border-2 border-sage-50 hover:bg-sage-50 hover:text-forest-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}