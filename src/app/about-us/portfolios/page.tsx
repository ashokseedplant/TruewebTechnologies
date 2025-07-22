import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = generateMetadata({
  title: "Our Portfolio",
  description: "Explore our portfolio of web development, design, and digital marketing projects that showcase our expertise and successful client collaborations.",
  keywords: "portfolio, case studies, web development projects, client work, website examples",
  pathname: "/about-us/portfolios",
})

export default function PortfoliosPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Portfolio
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Browse through our collection of successful projects across various industries. 
                Each project demonstrates our commitment to quality, innovation, and delivering 
                results that help our clients achieve their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                {/* You can replace this with an actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">E-Commerce Platform</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A custom e-commerce solution for a fashion retailer with inventory management,
                  payment processing, and customer accounts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">E-Commerce</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">React</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">Node.js</span>
                </div>
              </div>
            </div>
            
            {/* Portfolio Item 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Corporate Website Redesign</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A complete website overhaul for a financial services company, improving user experience
                  and mobile responsiveness.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">Web Design</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">WordPress</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">SEO</span>
                </div>
              </div>
            </div>
            
            {/* Portfolio Item 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Healthcare Mobile App</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A patient management mobile application for a healthcare provider, featuring appointment
                  scheduling and medical records.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">Mobile App</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">React Native</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">API Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help transform your business with our web development and digital marketing expertise.
            </p>
            <Link href="/contact-us" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
