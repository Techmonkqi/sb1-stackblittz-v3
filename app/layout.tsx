import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

// Enhanced metadata for SEO
export const metadata: Metadata = {
  title: {
    default: 'Magic City Tours Guyana',
    template: '%s | Magic City Tours Guyana'
  },
  description: 'Discover the magic of Guyana with authentic local experiences, guided tours, and cultural adventures.',
  keywords: ['Guyana tours', 'travel', 'tourism', 'local guides', 'adventures', 'Guyana tourism', 'eco-tourism'],
  authors: [{ name: 'Magic City Tours' }],
  creator: 'Magic City Tours',
  publisher: 'Magic City Tours',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://magiccitytoursguyana.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Magic City Tours Guyana',
    description: 'Discover the magic of Guyana with authentic local experiences',
    url: 'https://magiccitytoursguyana.com',
    siteName: 'Magic City Tours Guyana',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic City Tours Guyana',
    description: 'Discover the magic of Guyana with authentic local experiences',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}