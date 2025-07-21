import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: 'TrueWeb Technologies - Digital Marketing & Web Development',
    template: '%s | TrueWeb Technologies'
  },
  description: 'Leading digital marketing and web development agency offering SEO, web design, mobile apps, and comprehensive digital solutions to help your business grow online.',
  keywords: [
    'digital marketing',
    'web development', 
    'web design',
    'SEO services',
    'mobile app development',
    'e-commerce development',
    'social media marketing',
    'PPC advertising',
    'content marketing',
    'responsive web design'
  ],
  authors: [{ name: 'TrueWeb Technologies' }],
  creator: 'TrueWeb Technologies',
  publisher: 'TrueWeb Technologies',
  metadataBase: new URL('https://truewebtechnologies.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://truewebtechnologies.com',
    siteName: 'TrueWeb Technologies',
    title: 'TrueWeb Technologies - Digital Marketing & Web Development',
    description: 'Leading digital marketing and web development agency offering comprehensive digital solutions to help your business grow online.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueWeb Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@truewebtech',
    creator: '@truewebtech',
    title: 'TrueWeb Technologies - Digital Marketing & Web Development',
    description: 'Leading digital marketing and web development agency offering comprehensive digital solutions.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
