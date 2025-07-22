import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "PPC Services India | Pay-Per-Click Management - TrueWeb Technologies",
  description: "Professional PPC services in India. Our pay-per-click experts manage Google Ads, Bing Ads, and social advertising campaigns to maximize ROI and drive targeted traffic.",
  keywords: "PPC services, pay per click, Google Ads, Bing Ads, PPC management, paid advertising, digital marketing, ROI optimization",
  pathname: "/expertise/digital-marketing/ppc",
})

export default function PPCPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ppc.jpg"
            alt="PPC Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <div className="flex justify-center mb-6">
              <Breadcrumb 
                items={[
                  { label: "Home", href: "/" },
                  { label: "Digital Marketing", href: "/expertise/digital-marketing" },
                  { label: "PPC" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pay-Per-Click (PPC)
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Maximize your ROI with targeted PPC campaigns that drive qualified traffic and conversions
            </p>
            <Link 
              href="/get-quote" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <Image
                src="/images/ppc.jpeg"
                alt="PPC Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Pay-per-click <span className="text-blue-600">(PPC)</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  From a wide range of services that lies under the umbrella of internet marketing and promotions, our pay per click solutions at Trueweb Technologies will help you achieve your goals. We let you acquire the potential customers who are in the prowl for services you provide or either the goods you want to sell.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We carry all the burden of our client's promotional needs and render them a hassle-free advertising and marketing plan. Our dedicated and sincere team of PPC professionals is capable enough to handle everything from basics like PPC account set up to advanced services like entire PPC Bid management. Not only this, we also manage PPC services across major platforms like Google, Yahoo, MSN Facebook and Bing.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Right placement of your online ads
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Focused promotion over web
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Immense traffic directed to your website
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Get paid with every click
                  </li>
                </ul>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We know platforms like Google Adwords and Bing ads can do a lot for your businesses. At Trueweb Technologies, we can help take your accounts to the next level with our PPC marketing expertise. Our professionals customize strategies and reporting as per your needs.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Be it maximizing return on investment, increasing leads or driving brand awareness, we render desired support and guidance to let you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              LET'S TALK
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              We'd love to answer any questions you may have. Contact us and discuss your business objectives & we will let you know how we can help along
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors">
                Get Free Quote
              </Link>
              <Link href="/contact-us" className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our PPC management services includes but are restricted to :
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>PPC Audits</strong> : The process begins with understanding your audit objective, coverage and leading to data analysis.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Social Advertising</strong> : Trueweb Technologies can help you with paid social campaigns which drive your target audience towards much targeted desired actions.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Google Adwords</strong> : We facilitate you the benefit of a full-time Adwords expert.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Bing Advertising</strong> : This is an advertising service which guides corporation to reach the 129 million incomparable searchers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Display advertising</strong> : Display ads will target the audience who has already showed interest in your products or services.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Remarketing and Retargeting</strong> : We improve your ROI and increase conversions by marketing to people who have are.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  True web Technologies caters your PPC marketing needs well with the following solutions :
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Keyword research and selection.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    PPC search campaign strategy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ad creative development.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bid management and ROI tracking.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Landing page optimization and development.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Campaign management and analysis.
                  </li>
                </ul>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We always analyze and scrutinize your websites to offer state-of-the-art PPC solutions at Trueweb Technologies. Our team values your investment in PPC campaigns and renders facility for test.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/ppcright.jpg"
                alt="PPC Strategy"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our PPC Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We implement comprehensive PPC strategies across multiple platforms to maximize your return on investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Ads Management",
                description: "Expert management of Google Ads campaigns for maximum visibility and ROI",
                icon: "🎯"
              },
              {
                title: "Bing Ads",
                description: "Tap into Bing's unique audience with targeted advertising campaigns",
                icon: "🔍"
              },
              {
                title: "Social Advertising",
                description: "Facebook, Instagram, LinkedIn, and other social platform advertising",
                icon: "📱"
              },
              {
                title: "Display Advertising",
                description: "Eye-catching display ads that target interested audiences",
                icon: "🖼️"
              },
              {
                title: "Remarketing",
                description: "Re-engage visitors who have shown interest in your products or services",
                icon: "🔄"
              },
              {
                title: "Performance Analytics",
                description: "Detailed reporting and optimization based on campaign performance data",
                icon: "📊"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              LOOKING FOR A PPC SERVICES?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to drive targeted traffic and maximize your ROI with expertly managed PPC campaigns? Let's start optimizing your advertising investment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
                Get Free Quote
              </Link>
              <Link href="/contact-us" className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}