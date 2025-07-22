import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Mobile Website Design Services India | Responsive Mobile Web Development - TrueWeb Technologies",
  description: "Professional mobile website design services in India. Our expert developers create responsive, mobile-optimized websites using modern technologies for smartphones and tablets.",
  keywords: "mobile website design, responsive web design, mobile web development, smartphone website, tablet optimization, mobile-first design, India",
  pathname: "/expertise/web-designing/mobile-website-design",
})

export default function MobileWebsiteDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mobile-website.jpg"
            alt="Mobile Website Design Hero Background"
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
                  { label: "Web Designing", href: "/expertise/web-designing" },
                  { label: "Mobile Website Design" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mobile Website Design Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Create responsive, mobile-optimized websites that deliver exceptional user experiences across all devices
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
                src="/images/mobile-website-left.jpg"
                alt="Mobile Website Design Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Mobile Website <span className="text-blue-600">Design</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mobile Web designing has been prevalent since the advent if internet, the growth in this technology was constrained. Today, Mobile Website Designers at True Web Technologies are considered as one of the most important gateways to high end and reliable website development. Business have become more dependent of mobile websites with the rise in sale of smartphones and tablets. We at True Web Technologies have designed and developed our 600 mobile website using CSS3 and HTML. Web designing is done in a number of languages but one of the most important languages used in the development of websites is PHP. One of the most important reasons for wide use of PHP by our core team of developers is its flexibility. We at True Web Technologies have a strong expertise on static as well as dynamic website development. Besides PHP developers also use Java and .NET languages for mobile website development.
                </p>
              </div>

              <div>
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We at True Web Technologies not only provide consultation in web development but also provide a comprehensive solution when it comes to realizing the business needs of the clients. The highly experienced team at True Web Technologies develops the web designs as per the needs and demands of the clients. A major advantage of using mobile website design is that users can access the website on their mobiles and tablets.
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

      {/* Mobile Design Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mobile Website Design Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive mobile website solutions that engage users and drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Design",
                description: "Websites that automatically adapt to all screen sizes and devices",
                icon: "📱"
              },
              {
                title: "Fast Loading Speed",
                description: "Optimized mobile sites that load quickly on all network connections",
                icon: "⚡"
              },
              {
                title: "Touch-Friendly Interface",
                description: "User-friendly interfaces designed specifically for touch interactions",
                icon: "👆"
              },
              {
                title: "Cross-Platform Compatibility",
                description: "Seamless performance across iOS, Android, and other mobile platforms",
                icon: "🔄"
              },
              {
                title: "Mobile SEO Optimized",
                description: "Search engine optimized for better mobile search rankings",
                icon: "🔍"
              },
              {
                title: "Progressive Web Apps",
                description: "Advanced mobile web applications with native app-like features",
                icon: "📲"
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

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern technologies and frameworks for superior mobile website development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "HTML5 & CSS3",
                description: "Modern markup and styling for responsive layouts",
                icon: "🌐"
              },
              {
                title: "JavaScript Frameworks",
                description: "React, Vue.js, and Angular for dynamic interactions",
                icon: "⚛️"
              },
              {
                title: "PHP Development",
                description: "Server-side scripting with flexibility and performance",
                icon: "🔧"
              },
              {
                title: "Java & .NET",
                description: "Enterprise-level mobile web applications",
                icon: "☕"
              }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Design Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mobile Design Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to creating exceptional mobile web experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Mobile Strategy",
                description: "Analyzing user behavior and mobile requirements for your business"
              },
              {
                step: "02",
                title: "Responsive Design",
                description: "Creating adaptive layouts that work perfectly on all devices"
              },
              {
                step: "03",
                title: "Development",
                description: "Building mobile-optimized websites using modern technologies"
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "Comprehensive testing across devices and successful deployment"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Mobile Website Design?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The advantages of having a mobile-optimized website in today's digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Increased Mobile Traffic",
                  description: "Capture the growing number of mobile users with optimized experiences"
                },
                {
                  title: "Better User Engagement",
                  description: "Keep visitors engaged with fast, intuitive mobile interfaces"
                },
                {
                  title: "Improved Search Rankings",
                  description: "Google prioritizes mobile-friendly websites in search results"
                },
                {
                  title: "Higher Conversion Rates",
                  description: "Convert more visitors with streamlined mobile user journeys"
                },
                {
                  title: "Competitive Advantage",
                  description: "Stay ahead with superior mobile web experiences"
                },
                {
                  title: "Cost-Effective Solution",
                  description: "One responsive website serves all devices efficiently"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Mobile-First Approach
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Designing for mobile users from the ground up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mobile Development Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proven track record in mobile website development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "600+",
                label: "Mobile Websites Developed",
                description: "Successfully delivered mobile-optimized websites"
              },
              {
                number: "8+",
                label: "Years Experience",
                description: "Years of expertise in mobile web development"
              },
              {
                number: "100%",
                label: "Responsive Design",
                description: "All websites are fully responsive and mobile-ready"
              },
              {
                number: "24/7",
                label: "Support Available",
                description: "Continuous support for all our mobile websites"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
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
              Ready to Go Mobile?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Transform your online presence with our professional mobile website design services. Reach more customers and improve user experience across all devices.
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