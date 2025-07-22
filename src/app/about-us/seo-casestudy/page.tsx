import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "SEO Case Studies",
  description: "Explore our SEO case studies showcasing how we've helped businesses improve their online visibility and increase organic traffic.",
  keywords: "SEO case studies, SEO results, search engine optimization success, organic traffic improvement",
  pathname: "/about-us/seo-casestudy",
})

export default function SEOCaseStudyPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Add Breadcrumb here */}
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "SEO Case Studies" }
              ]}
              variant="light"
            />
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                SEO Case Studies
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Discover how our SEO strategies have transformed businesses' online visibility and 
                helped them achieve their digital marketing goals. These case studies highlight our 
                approach, implementation, and the measurable results we've delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Spain - VLC Parking */}
          <div className="mb-12 overflow-x-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Spain - Airport Parking</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border p-3" colSpan={4}>Country: Spain | Website: vlcparking.com</th>
                  </tr>
                  <tr className="bg-blue-500 text-white">
                    <th className="border p-3">Sr. No</th>
                    <th className="border p-3">Keywords</th>
                    <th className="border p-3">Current Ranking (Apr 2024)</th>
                    <th className="border p-3">Initial Ranking (Sep 2023)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 dark:text-gray-100">
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border p-3">1</td>
                    <td className="border p-3">Low cost parking aeropuerto valencia</td>
                    <td className="border p-3 text-green-600 font-bold">3</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                  <tr>
                    <td className="border p-3">2</td>
                    <td className="border p-3">Aparcamiento low cost aeropuerto valencia</td>
                    <td className="border p-3 text-green-600 font-bold">3</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border p-3">3</td>
                    <td className="border p-3">Mejor parking aeropuerto de valencia</td>
                    <td className="border p-3 text-green-600 font-bold">6</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                  <tr>
                    <td className="border p-3">4</td>
                    <td className="border p-3">Parking barato aeropuerto Valencia</td>
                    <td className="border p-3 text-green-600 font-bold">6</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* USA - Electrical Services */}
          <div className="mb-12 overflow-x-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">USA - Electrical Services</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border p-3" colSpan={4}>Country: USA | Website: ytelectrical.com</th>
                  </tr>
                  <tr className="bg-blue-500 text-white">
                    <th className="border p-3">Sr. No</th>
                    <th className="border p-3">Keywords</th>
                    <th className="border p-3">Current Ranking (Apr 2024)</th>
                    <th className="border p-3">Initial Ranking (May 2022)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 dark:text-gray-100">
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border p-3">1</td>
                    <td className="border p-3">local electrician in new jersey</td>
                    <td className="border p-3 text-green-600 font-bold">4</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                  <tr>
                    <td className="border p-3">2</td>
                    <td className="border p-3">fully licensed electricians in bronx</td>
                    <td className="border p-3 text-green-600 font-bold">2</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border p-3">3</td>
                    <td className="border p-3">commercial electrician in bronx</td>
                    <td className="border p-3 text-green-600 font-bold">3</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                  <tr>
                    <td className="border p-3">4</td>
                    <td className="border p-3">electrical services new york city</td>
                    <td className="border p-3 text-green-600 font-bold">7</td>
                    <td className="border p-3 text-red-600">Not in Rank</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Canada - Label Printing */}
          <div className="mb-12 overflow-x-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Canada - Label Printing</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border p-3" colSpan={4}>Country: Canada | Website: alllabels.com</th>
                  </tr>
                  <tr className="bg-blue-500 text-white">
                    <th className="border p-3">Sr. No</th>
                    <th className="border p-3">Keywords</th>
                    <th className="border p-3">Current Ranking (Apr 2024)</th>
                    <th className="border p-3">Initial Ranking (Mar 2023)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 dark:text-gray-100">
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border p-3">1</td>
                    <td className="border p-3">Label Printing Vancouver</td>
                    <td className="border p-3 text-green-600 font-bold">1</td>
                    <td className="border p-3 text-orange-600">21</td>
                  </tr>
                  <tr>
                    <td className="border p-3">2</td>
                    <td className="border p-3">label printing service</td>
                    <td className="border p-3 text-green-600 font-bold">1</td>
                    <td className="border p-3 text-orange-600">39</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border p-3">3</td>
                    <td className="border p-3">Custom Label Printing</td>
                    <td className="border p-3 text-green-600 font-bold">2</td>
                    <td className="border p-3 text-orange-600">56</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">175%</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Traffic Increase</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                E-commerce store saw massive organic traffic growth within 6 months
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">Spain Project</div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">#1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Top Rankings</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Multiple keywords achieved #1 position on Google search results
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">Canada Project</div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Revenue Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Local business increased revenue through improved search visibility
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">USA Project</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help transform your business with our proven SEO strategies and digital marketing expertise.
            </p>
            <Link href="/contact-us" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors">
              Get Your Free SEO Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}