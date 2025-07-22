import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Digital Marketing Services",
  description: "Comprehensive digital marketing services including SEO, social media marketing, PPC, content marketing, and email campaigns to boost your online presence.",
  keywords: "digital marketing, SEO, social media marketing, PPC, content marketing, email marketing",
  pathname: "/expertise/digital-marketing",
})

export default function DigitalMarketingPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Digital Marketing Services</h1>
      
      <p className="text-lg mb-8">
        Our comprehensive digital marketing solutions are designed to increase your online visibility, 
        drive targeted traffic, and convert visitors into customers. We create customized strategies 
        that align with your business goals and deliver measurable results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Service 1 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Search Engine Optimization (SEO)</h2>
          <p>
            Improve your website's visibility in search engine results with our proven SEO techniques. 
            We focus on technical optimization, content strategy, and link building to help you rank 
            higher for relevant keywords.
          </p>
        </div>
        
        {/* Service 2 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Social Media Marketing (SMO)</h2>
          <p>
            Build your brand presence and engage with your audience through strategic social media 
            marketing. We create compelling content, manage your profiles, and run targeted campaigns 
            across all major platforms.
          </p>
        </div>
        
        {/* Service 3 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Pay-Per-Click Advertising (PPC)</h2>
          <p>
            Drive immediate traffic and conversions with expertly managed PPC campaigns. We handle 
            keyword research, ad creation, bid management, and performance optimization to maximize 
            your return on investment.
          </p>
        </div>
        
        {/* Service 4 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Content Marketing</h2>
          <p>
            Engage your audience with valuable, relevant content that establishes your expertise and 
            builds trust. Our content marketing strategies include blog posts, articles, infographics, 
            videos, and more.
          </p>
        </div>
        
        {/* Service 5 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Email Marketing</h2>
          <p>
            Connect with your customers directly through personalized email campaigns. We handle list 
            management, email design, automation, and performance analysis to nurture leads and drive 
            conversions.
          </p>
        </div>
        
        {/* Service 6 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Analytics & Reporting</h2>
          <p>
            Track and measure the performance of your digital marketing efforts with comprehensive 
            analytics and custom reports. We provide actionable insights to continuously improve your 
            results.
          </p>
        </div>
      </div>
      
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Digital Marketing Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Research & Strategy</h3>
            <p className="mb-4">
              We begin with thorough market research, competitor analysis, and audience targeting to 
              develop a customized digital marketing strategy aligned with your business objectives.
            </p>
            
            <h3 className="text-xl font-medium mb-2">2. Implementation</h3>
            <p>
              Our team executes the strategy across chosen channels, creating optimized campaigns, 
              content, and assets designed to engage your target audience and drive conversions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">3. Monitoring & Optimization</h3>
            <p className="mb-4">
              We continuously monitor campaign performance, making data-driven adjustments to 
              improve results and maximize your return on investment.
            </p>
            
            <h3 className="text-xl font-medium mb-2">4. Reporting & Analysis</h3>
            <p>
              Receive regular, transparent reports on your campaign performance, with actionable 
              insights and recommendations for ongoing improvement and growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
