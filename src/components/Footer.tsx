import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Interior Design', href: '/services#interior' },
    { name: 'Landscape Architecture', href: '/services#landscape' },
    { name: 'Wellness Spaces', href: '/services#wellness' },
    { name: 'Sustainability Consulting', href: '/services#sustainability' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/breatheagain_01',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297L6.825 14.2c.555.555 1.325.902 2.172.902c1.706 0 3.092-1.386 3.092-3.092c0-.847-.347-1.617-.902-2.172l1.491-1.605c.807.881 1.297 2.032 1.297 3.329c0 2.696-2.188 4.884-4.884 4.884l.358.372zM16.988 8.449c0 1.297-.49 2.448-1.297 3.329L14.2 10.173c.555-.555.902-1.325.902-2.172c0-1.706-1.386-3.092-3.092-3.092c-.847 0-1.617.347-2.172.902L8.233 4.216c.881-.807 2.032-1.297 3.329-1.297c2.696 0 4.884 2.188 4.884 4.884l.372-.358z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: '#',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM12 16c-1.297 0-2.448-.49-3.329-1.297l.555-2.158c.151.281.472.516.844.516 1.108 0 1.858-.99 1.858-2.313 0-1.402-.721-2.418-1.858-2.418-.56 0-1.073.229-1.437.613-.151-.229-.273-.516-.273-.857 0-1.054.721-1.944 1.858-1.944s2.177.89 2.177 2.1c0 1.555-.775 2.878-1.858 2.878-.343 0-.66-.122-.928-.323z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-forest-900 text-sage-100" role="contentinfo">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Breathe Again Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-sage-50">
                  Breathe Again
                </h2>
                <span className="text-xs text-sage-300 font-light tracking-wide">
                  RECONNECTING CITIES WITH NATURE
                </span>
              </div>
            </div>
            <p className="text-sage-200 text-base leading-relaxed max-w-md mb-6">
              We create biophilic spaces that reconnect you with nature,
              promoting well-being, sustainability, and harmony in your everyday
              environment.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-sage-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="text-sage-200 text-sm not-italic">
                  Mawanga, Nakuru, Kenya 20100
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-sage-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+254702700247"
                  className="text-sage-200 text-sm hover:text-sage-50 transition-colors"
                >
                  +254 702 700 247
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-sage-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:breatheagain001@gmail.com"
                  className="text-sage-200 text-sm hover:text-sage-50 transition-colors"
                >
                  breatheagain001@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-sage-50 tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sage-200 hover:text-sage-50 text-sm transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-sage-50 tracking-wider uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sage-200 hover:text-sage-50 text-sm transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-sage-50 tracking-wider uppercase mb-6">
              Stay Connected
            </h3>
            <p className="text-sage-200 text-sm mb-4">
              Subscribe to our newsletter for design inspiration and tips.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-forest-800 border border-forest-700 rounded-lg text-sage-100 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="w-full bg-sage-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sage-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 focus:ring-offset-forest-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-forest-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <p className="text-sage-300 text-sm">
                © {currentYear} Breathe Again. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-2">
                <Link
                  href="/privacy"
                  className="text-sage-400 hover:text-sage-200 text-xs transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sage-400 hover:text-sage-200 text-xs transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/accessibility"
                  className="text-sage-400 hover:text-sage-200 text-xs transition-colors"
                >
                  Accessibility
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sage-400 hover:text-sage-50 transition-colors duration-200 transform hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
