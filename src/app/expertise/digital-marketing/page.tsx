import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = generateMetadata({
  title: "Digital Marketing Services | Expert Online Marketing Solutions",
  description: "Transform your business with our comprehensive digital marketing services including SEO, PPC, social media marketing, and more. Drive growth and increase online visibility.",
  keywords: "digital marketing, online marketing, SEO, PPC, social media marketing, digital marketing services",
  pathname: "/expertise/digital-marketing",
})

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/digital-marketing-hero.jpg"
            alt="Digital Marketing Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-white hover:text-blue-200 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white">&gt;</li>
                <li className="text-white font-semibold">Digital Marketing</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Transform your business with our comprehensive digital marketing solutions
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
            <div className="order-2 lg:order-1">
              <Image
                src="/images/digital-marketing-left.jpg"
                alt="Digital Marketing Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Digital <span className="text-blue-600">Marketing</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, the whole world is becoming digital. Whether it's your business or work, everything is sitting on the same boat of digitalization. Under this umbrella, the marketing of products and services which are mainly done on the internet is known as Digital Marketing. This medium is now getting popular across the world. Since 1990s and 2000s it has started, however now the Digital marketing technology has become so prominent that now no business can be thought without this.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What is <span className="text-blue-600">Digital Marketing?</span>
                </h3>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mainly, Digital marketing is just the promotion of business through various ways like social media, websites, television, radio and mobile phones etc. In other words, the more simple definition is that any marketing which is done with the help of electronic media aid comes under digital marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business grow online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Search Engine Optimization",
                description: "Improve your website's visibility and ranking in search engine results",
                icon: "🔍"
              },
              {
                title: "Pay-Per-Click Advertising",
                description: "Get instant traffic and leads with targeted advertising campaigns",
                icon: "💰"
              },
              {
                title: "Social Media Marketing",
                description: "Build your brand presence across all major social media platforms",
                icon: "📱"
              },
              {
                title: "Content Marketing",
                description: "Engage your audience with valuable and relevant content strategies",
                icon: "📝"
              },
              {
                title: "Email Marketing",
                description: "Nurture leads and maintain customer relationships through email",
                icon: "📧"
              },
              {
                title: "Analytics & Reporting",
                description: "Track performance and optimize campaigns with detailed insights",
                icon: "📊"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Digital Marketing <span className="text-blue-600">Is Important?</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Today in this digital world, it is very commonly said that if a company exists physically then it must exist digitally as well. For any business nowadays, marketing is one feature which is a must for all. So when we talk about marketing, today the digital marketing is the only key to success. Many a times, a business face huge challenges while getting established, but when it gets effective digital marketing then there is no chance of any disestablishment.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  How it <span className="text-blue-600">is done?</span>
                </h3>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We all know that, digital marketing is done digitally with the help of electronic media aids. There are various digital marketing tools –
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SEO</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      SEO or Search Engine Optimization is just a technique, to find out where your website stands in various search engines. Also it helps in comparing with other millions of websites and improving the site ranking.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">PPC</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      PPC or Pay Per Click is just a way of marketing in which you get traffic when you needed. In other words, in PPC the advertisers pay a fee when their ads are clicked.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/digital-marketing-process.jpg"
                alt="Digital Marketing Process"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how our digital marketing expertise can help grow your business and reach your target audience effectively.
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
    </div>
  )
}
