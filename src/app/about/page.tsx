import { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as generateSEOMetadata, pageSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata(pageSEO.about)

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sage-100 to-moss-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-6">
            About Breathe Again
          </h1>
          <p className="text-xl text-forest-700 leading-relaxed">
            We&apos;re passionate about creating spaces that bridge the gap between modern living and our innate connection to nature.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-forest-600 mb-4 leading-relaxed">
                In today&apos;s fast-paced world, we&apos;ve become increasingly disconnected from the natural environment that sustains us. 
                Our mission is to reintegrate nature into our daily lives through thoughtful, biophilic design that promotes health, 
                well-being, and environmental sustainability.
              </p>
              <p className="text-lg text-forest-600 leading-relaxed">
                Every space we design is an opportunity to create a sanctuary—a place where you can truly breathe again, 
                reconnect with your natural rhythms, and find peace in the harmony between built and natural environments.
              </p>
            </div>
            <div className="bg-sage-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">Well-being First</h3>
                    <p className="text-forest-600">Designs that prioritize mental and physical health through natural elements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">Sustainable Practice</h3>
                    <p className="text-forest-600">Eco-conscious materials and methods that respect our planet.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">Innovation</h3>
                    <p className="text-forest-600">Cutting-edge biophilic principles meet timeless natural beauty.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-sage-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              A passionate group of designers, architects, and sustainability experts dedicated to creating beautiful, healthy spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & Lead Designer",
                description: "With over 15 years in biophilic design, Sarah brings nature to life in every space she touches.",
              },
              {
                name: "Marcus Johnson",
                role: "Sustainability Director",
                description: "Marcus ensures every project meets the highest environmental standards while maintaining aesthetic excellence.",
              },
              {
                name: "Elena Rodriguez",
                role: "Wellness Consultant",
                description: "Elena specializes in creating spaces that promote mental health and overall well-being through natural design.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-sage-200 to-moss-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-forest-900 text-center mb-2">{member.name}</h3>
                <p className="text-sage-600 text-center font-medium mb-3">{member.role}</p>
                <p className="text-forest-600 text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-50 mb-4">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto">
            Ready to transform your space into a natural sanctuary? We&apos;d love to hear about your vision.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-sage-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-forest-900"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}