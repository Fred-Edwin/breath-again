import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'
import PageTransition from '@/components/animations/PageTransition'
import '../styles/globals.css'
import '../styles/design-system.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Breathe Again - Biophilic Design Studio',
    template: '%s | Breathe Again'
  },
  description: 'Transforming spaces with nature-inspired design for healthier, more sustainable living. We create biophilic environments that reconnect you with nature.',
  keywords: ['biophilic design', 'sustainable design', 'interior design', 'landscape architecture', 'wellness spaces', 'nature-inspired design'],
  authors: [{ name: 'Breathe Again Design Studio' }],
  creator: 'Breathe Again',
  publisher: 'Breathe Again',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://breatheagain.design',
    title: 'Breathe Again - Biophilic Design Studio',
    description: 'Transforming spaces with nature-inspired design for healthier, more sustainable living.',
    siteName: 'Breathe Again',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breathe Again - Biophilic Design Studio',
    description: 'Transforming spaces with nature-inspired design for healthier, more sustainable living.',
    creator: '@breatheagain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#87a96b" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2d4a3e" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} text-organic antialiased bg-sage-25 dark:bg-forest-900 text-forest-900 dark:text-sage-100 min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}