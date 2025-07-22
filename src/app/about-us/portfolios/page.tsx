import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Our Portfolio",
  description: "Explore our portfolio of web development, design, and digital marketing projects that showcase our expertise and successful client collaborations.",
  keywords: "portfolio, case studies, web development projects, client work, website examples",
  pathname: "/about-us/portfolios",
})

export default function PortfoliosPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
      
      <p className="text-lg mb-8">
        Browse through our collection of successful projects across various industries. 
        Each project demonstrates our commitment to quality, innovation, and delivering 
        results that help our clients achieve their business goals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Portfolio Item 1 */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="h-48 bg-gray-200">
            {/* Portfolio image placeholder */}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p className="mb-4">A custom e-commerce solution for a fashion retailer with inventory management, payment processing, and customer accounts.</p>
            <div className="text-sm text-gray-600">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">E-Commerce</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">React</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">Node.js</span>
            </div>
          </div>
        </div>
        
        {/* Portfolio Item 2 */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="h-48 bg-gray-200">
            {/* Portfolio image placeholder */}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Corporate Website Redesign</h3>
            <p className="mb-4">A complete website overhaul for a financial services company, improving user experience and mobile responsiveness.</p>
            <div className="text-sm text-gray-600">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">Web Design</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">WordPress</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">SEO</span>
            </div>
          </div>
        </div>
        
        {/* Portfolio Item 3 */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="h-48 bg-gray-200">
            {/* Portfolio image placeholder */}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Healthcare Mobile App</h3>
            <p className="mb-4">A patient management mobile application for a healthcare provider, featuring appointment scheduling and medical records.</p>
            <div className="text-sm text-gray-600">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">Mobile App</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">React Native</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">API Integration</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
