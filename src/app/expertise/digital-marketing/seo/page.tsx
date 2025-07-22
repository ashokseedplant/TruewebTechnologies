import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "SEO Services",
  description: "Professional SEO services to improve your website's visibility in search engines and drive organic traffic to your business.",
  keywords: "SEO services, search engine optimization, organic traffic, keyword ranking, local SEO, technical SEO",
  pathname: "/expertise/digital-marketing/seo",
})

export default function SEOPage() {
  return (
    <main className="container mx-auto pt-24 md:pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-6">Search Engine Optimization (SEO) Services</h1>
      
      <p className="text-lg mb-8">
        Our comprehensive SEO services are designed to improve your website's visibility in search 
        engine results, drive targeted organic traffic, and increase conversions. We use proven, 
        ethical techniques to achieve sustainable long-term results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* SEO Service 1 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">On-Page SEO</h2>
          <p className="mb-4">
            We optimize all on-page elements including meta tags, headings, content, internal linking, 
            and URL structure to improve your website's relevance for target keywords.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keyword research and implementation</li>
            <li>Content optimization</li>
            <li>Meta tags and heading structure</li>
            <li>Image optimization</li>
            <li>Internal linking strategy</li>
          </ul>
        </div>
        
        {/* SEO Service 2 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical SEO</h2>
          <p className="mb-4">
            We ensure your website's technical foundation supports strong search performance by 
            addressing issues that affect crawling, indexing, and ranking.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Site architecture optimization</li>
            <li>Page speed improvements</li>
            <li>Mobile optimization</li>
            <li>Schema markup implementation</li>
            <li>XML sitemap creation</li>
            <li>Robots.txt configuration</li>
          </ul>
        </div>
        
        {/* SEO Service 3 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Off-Page SEO</h2>
          <p className="mb-4">
            We build your website's authority through high-quality backlink acquisition, brand 
            mentions, and social signals to improve your domain authority.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Link building strategies</li>
            <li>Content outreach</li>
            <li>Guest posting opportunities</li>
            <li>Online reputation management</li>
            <li>Social media integration</li>
          </ul>
        </div>
        
        {/* SEO Service 4 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Local SEO</h2>
          <p className="mb-4">
            We help local businesses improve visibility in local search results and Google Maps 
            to attract more customers from your service area.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Business Profile optimization</li>
            <li>Local citation building</li>
            <li>Local keyword targeting</li>
            <li>Review management</li>
            <li>Local content strategy</li>
          </ul>
        </div>
      </div>
      
      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our SEO Process</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Comprehensive SEO Audit</h3>
            <p>
              We begin with a thorough analysis of your website's current SEO performance, identifying 
              strengths, weaknesses, and opportunities for improvement.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">2. Competitor Analysis</h3>
            <p>
              We research your top competitors to understand their strategies and identify opportunities 
              to gain a competitive advantage in search results.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">3. Keyword Research & Strategy</h3>
            <p>
              We identify the most valuable keywords for your business based on search volume, 
              competition, and user intent, then develop a strategy to target them effectively.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">4. On-Page & Technical Optimization</h3>
            <p>
              We implement on-page and technical SEO improvements to enhance your website's 
              relevance and crawlability for search engines.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">5. Content Development</h3>
            <p>
              We create and optimize high-quality, relevant content that satisfies user intent 
              and establishes your authority in your industry.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">6. Link Building</h3>
            <p>
              We develop and execute a strategy to acquire high-quality backlinks from reputable 
              websites to boost your domain authority.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">7. Monitoring & Reporting</h3>
            <p>
              We continuously track your rankings, traffic, and conversions, providing detailed 
              reports and making ongoing adjustments to improve results.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
