import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "SMO Services India | Social Media Optimization - TrueWeb Technologies",
  description: "Professional SMO services in India. Our social media optimization experts help build brand awareness, engage audiences, and drive traffic through social platforms.",
  keywords: "SMO services, social media optimization, social media marketing, brand awareness, social platforms, digital marketing",
  pathname: "/expertise/digital-marketing/smo",
})

export default function SMOPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/smo.jpg"
            alt="SMO Hero Background"
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
                  { label: "SMO" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Social Media Optimization
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Build your brand presence and engage with your audience across social media platforms
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
                src="/images/smo-left.jpg"
                alt="SMO Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Social Media Optimization <span className="text-blue-600">SMO</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Social media is a set of collaborative tools like blogs, social networking sites and forums. And social media optimization is a form of internet marketing where publicity about a site or product is generated through social media platforms. With the help of blogs and forums, we can let you find prospective customers who may be interested in your products.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We allow you to create blogs enticing details of your products and draw the attention of surfers. Our SMO services even include viral marketing where videos and articles promoting products are put on sites which involve similar issues and things.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Trueweb Technologies, our experts will increase the search tags adding more content to the site so that it features more searches made by visitors. We are there to update the pages regularly and add facilities of RSS feeds, bookmarks and newsletters.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Role of social media optimization services revolve around social networking sites like twitter, facebook, google+ and various others. Such platforms help in creating brand for any businesses, generating new leads and driving attention of potential audiences. We manage search engine optimization campaigns and render great visibilities to any business websites who desire to improve upon rankings in search engines.
                </p>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Trueweb Technologies aims to facilitate clients with state-of-the-art online marketing solutions that make them build up innovative ideas, products and business values. Our services will let your company get noticed with customer engagement and communicate regular updates to a set of targeted audience.
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
                  Our social media marketing experts are there to-
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Increase traffic on the website and footfall in retail stores. We convert prospective customers of businesses into regular clients.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Help you reach out potential customers conveniently and create a brand name for your businesses world-wide.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We at Trueweb Technologies offer out-of-the-box social media optimization services which include-
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Generating user-friendly, unique and original contents for your social media accounts and update it on regular basis.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Creating business identity on various social media websites to generate brand awareness.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Incorporating social media buttons on your business website for social networking sites like linkedin, facebook and twitter etc.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Creating different blogs and updating contents on it regularly.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Managing and optimizing profiles on varied social networking sites.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our sincere and dedicated professionals at Trueweb Technologies facilitate unbeatable social media optimization services. We leave no stone unturned to promote your products and services over social media platforms effectively. Approach us now.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/smoright.jpg"
                alt="SMO Strategy"
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
              Our SMO Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We implement comprehensive social media optimization strategies to enhance your brand presence and engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Content Creation",
                description: "Developing engaging, original content tailored for different social media platforms",
                icon: "📝"
              },
              {
                title: "Brand Identity",
                description: "Creating consistent brand presence across all social media channels",
                icon: "🎨"
              },
              {
                title: "Community Management",
                description: "Building and nurturing online communities around your brand",
                icon: "👥"
              },
              {
                title: "Social Integration",
                description: "Integrating social media buttons and feeds into your website",
                icon: "🔗"
              },
              {
                title: "Analytics & Reporting",
                description: "Tracking performance and providing insights for continuous improvement",
                icon: "📊"
              },
              {
                title: "Viral Marketing",
                description: "Creating shareable content that amplifies your brand reach organically",
                icon: "🚀"
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
              LOOKING FOR A SMO SERVICES?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to enhance your social media presence and engage with your target audience effectively? Let's start building your social media strategy today.
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