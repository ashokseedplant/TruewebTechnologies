import { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
  pathname?: string
}

/**
 * Generate metadata for SEO
 * Use this function in your page layouts to generate metadata
 */
export function generateMetadata({
  title = "TrueWeb Technologies - Web Development & Digital Marketing Company",
  description = "TrueWeb Technologies offers professional web development, digital marketing, SEO, and design services to help businesses grow online.",
  keywords = "web development, digital marketing, SEO, web design, TrueWeb Technologies",
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
  pathname,
}: SEOProps): Metadata {
  const baseUrl = "https://truewebtechnologies.com"
  const fullUrl = canonicalUrl || (pathname ? `${baseUrl}${pathname}` : undefined)
  
  const fullTitle = title.includes("TrueWeb Technologies") 
    ? title 
    : `${title} | TrueWeb Technologies`

  return {
    title: fullTitle,
    description: description,
    keywords: keywords,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: fullTitle,
      description: description,
      url: fullUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
      type: ogType,
      siteName: "TrueWeb Technologies",
    },
    twitter: {
      card: twitterCard as "summary_large_image" | "summary",
      title: fullTitle,
      description: description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
    },
  }
}

/**
 * This component is only for backwards compatibility
 * with pages router. Prefer using the generateMetadata function
 * with app router pages.
 */
const SEO = (props: SEOProps) => {
  // This component doesn't render anything in app router
  // It's just for backward compatibility
  return null
}

export default SEO
