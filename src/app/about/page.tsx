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
            We&apos;re passionate about creating spaces that bridge the gap
            between modern living and our innate connection to nature.
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
                Breathe Again was founded to address the lack of accessible,
                restorative green spaces in African cities. Starting as a
                fellowship project under BeVisioneers: The Mercedes-Benz
                Fellowship, it aims to bring scalable biophilic solutions into
                homes, communities, and public spaces.
              </p>
              <p className="text-lg text-forest-600 leading-relaxed">
                To make nature an accessible, affordable, and integral part of
                urban living through innovative, climate-resilient biophilic
                solutions.
              </p>
            </div>
            <div className="bg-sage-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Growth
                    </h3>
                    <p className="text-forest-600">
                      Continuous improvement and expansion of our biophilic
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Sustainability
                    </h3>
                    <p className="text-forest-600">
                      Climate-resilient plants and sustainable materials for
                      lasting impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Community
                    </h3>
                    <p className="text-forest-600">
                      Building stronger communities through shared green spaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Creativity
                    </h3>
                    <p className="text-forest-600">
                      Innovative approaches to integrating nature in urban
                      environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-forest-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      Wellbeing
                    </h3>
                    <p className="text-forest-600">
                      Prioritizing mental and physical health through natural
                      design.
                    </p>
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
              Founded by Purity Wanjira Waweru, a passionate advocate for
              accessible biophilic design in urban Africa.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 max-w-md">
              <div className="w-20 h-20 bg-gradient-to-br from-sage-200 to-moss-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-forest-900 text-center mb-2">
                Purity Wanjira Waweru
              </h3>
              <p className="text-sage-600 text-center font-medium mb-3">
                Founder & CEO
              </p>
              <p className="text-forest-600 text-center leading-relaxed">
                Passionate advocate for accessible biophilic design in urban
                Africa, bringing nature-based solutions to cities through the
                BeVisioneers Fellowship program.
              </p>
            </div>
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
            Ready to transform your space into a natural sanctuary? We&apos;d
            love to hear about your vision.
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
