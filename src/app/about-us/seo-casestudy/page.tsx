import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "SEO Case Studies",
  description: "Explore our SEO case studies showcasing how we've helped businesses improve their online visibility and increase organic traffic.",
  keywords: "SEO case studies, SEO results, search engine optimization success, organic traffic improvement",
  pathname: "/about-us/seo-casestudy",
})

export default function SEOCaseStudyPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">SEO Case Studies</h1>
      
      <p className="text-lg mb-8">
        Discover how our SEO strategies have transformed businesses' online visibility and 
        helped them achieve their digital marketing goals. These case studies highlight our 
        approach, implementation, and the measurable results we've delivered.
      </p>
      
      {/* Case Study 1 */}
      <section className="mb-12 p-8 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">E-Commerce Store Traffic Boost</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Challenge</h3>
            <p>
              An e-commerce store struggling with low organic traffic and poor product visibility 
              in search engines, resulting in low conversion rates and sales.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Strategy</h3>
            <p>
              Comprehensive keyword research, product page optimization, technical SEO improvements, 
              and content strategy focusing on seasonal buying patterns.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Results</h3>
            <p>
              175% increase in organic traffic, 210% improvement in conversion rate, and 
              250% growth in revenue from organic search within 6 months.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <blockquote className="italic">
            "TrueWeb's SEO expertise transformed our online store's performance. The results exceeded 
            our expectations and continue to drive significant growth for our business."
          </blockquote>
          <p className="mt-2 font-medium">— John Smith, CEO of Fashion Retailer</p>
        </div>
      </section>
      
      {/* Case Study 2 */}
      <section className="mb-12 p-8 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Local Business Map Pack Dominance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Challenge</h3>
            <p>
              A local service business unable to appear in Google's local map pack results, 
              missing out on valuable location-based searches from potential customers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Strategy</h3>
            <p>
              Google My Business optimization, local citation building, review management strategy, 
              and location-specific content creation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Results</h3>
            <p>
              Consistent top 3 map pack presence for 15 high-value keywords, 320% increase in 
              direction requests, and 85% growth in phone calls within 3 months.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <blockquote className="italic">
            "Our phone hasn't stopped ringing since TrueWeb Technologies optimized our local SEO. 
            We're now booked weeks in advance and have had to hire additional staff."
          </blockquote>
          <p className="mt-2 font-medium">— Sarah Johnson, Owner of Home Services Company</p>
        </div>
      </section>
    </main>
  )
}
