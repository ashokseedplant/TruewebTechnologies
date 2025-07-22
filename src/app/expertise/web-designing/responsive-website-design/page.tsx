import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Responsive Website Design Services India | Mobile-First Web Development - TrueWeb Technologies",
  description: "Professional responsive website design services in India. Our expert developers create mobile-first, adaptive websites that work perfectly across all devices and screen sizes.",
  keywords: "responsive website design, mobile-first design, adaptive web design, cross-device compatibility, CSS3, HTML5, responsive templates, India",
  pathname: "/expertise/web-designing/responsive-website-design",
})

export default function ResponsiveWebsiteDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/responsive-websitedesign.jpg"
            alt="Responsive Website Design Hero Background"
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
                  { label: "Responsive Website Design" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Responsive Website Design Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Create adaptive websites that deliver exceptional experiences across all devices and screen sizes
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
                src="/images/responsive-websitedesign-left.jpg"
                alt="Responsive Website Design Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Responsive <span className="text-blue-600">Design</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The way trends of software and e-commerce industry are changing, one cannot deny the fact that responsive website design is not only necessary but a must for all types of business. More than 80% of internet users access online content on the devices which are either mobile phones or tablets and this is the reason why inclusion of responsive design becomes extremely important. The digital content of today is designed in such a manner so that it can be easily viewed on all types of devices with different screen sizes and different resolutions. We offer the cost effective and quick solutions when it comes to responsive website designs.
                </p>
              </div>

              <div>
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Developers and coders mostly at True Web Technologies use customized CSS 3 styles for designing responsive website. If a website was developed long time ago and is not responsive in nature, then also these developers can make it responsive by making few design and coding tweaks in the source code. However, it is highly advisable that if a website is more than five years old and not responsive, one must get is developed from ground zero as it will save time and money. Several responsive templates are developed by the team of True Web Technologies which can be easily customized according to the requirements of the users. Magneto or Joomla can be used as CMS is the website is being developed in PHP or WordPress and it can be easily integrated by our expert team.
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

      {/* Why Responsive Design Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Responsive Design is Essential
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Understanding the importance of responsive design in today's multi-device world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "80% Mobile Usage",
                description: "Over 80% of internet users access content on mobile devices and tablets",
                icon: "📱",
                stat: "80%"
              },
              {
                title: "Better SEO Rankings",
                description: "Google prioritizes mobile-friendly websites in search results",
                icon: "🚀",
                stat: "↗️"
              },
              {
                title: "Improved User Experience",
                description: "Seamless experience across all devices increases user engagement",
                icon: "⭐",
                stat: "⭐⭐⭐⭐⭐"
              },
              {
                title: "Cost-Effective Solution",
                description: "One website that works on all devices reduces development costs",
                icon: "💰",
                stat: "💲"
              },
              {
                title: "Future-Proof Design",
                description: "Adaptable layouts work with new devices and screen sizes",
                icon: "🔮",
                stat: "∞"
              },
              {
                title: "Higher Conversion Rates",
                description: "Better user experience leads to increased conversions and sales",
                icon: "📈",
                stat: "📊"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <div className="text-2xl font-bold text-blue-600">{feature.stat}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Responsive Design Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced features that make our responsive websites stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Fluid Grid Systems",
                  description: "Flexible layouts that adapt to any screen size using modern CSS Grid and Flexbox"
                },
                {
                  title: "Flexible Media",
                  description: "Images and videos that scale proportionally across all devices"
                },
                {
                  title: "Breakpoint Optimization",
                  description: "Strategic breakpoints for tablets, smartphones, and desktop screens"
                },
                {
                  title: "Touch-Friendly Navigation",
                  description: "Intuitive navigation designed specifically for touch interactions"
                },
                {
                  title: "Fast Loading Speed",
                  description: "Optimized code and assets for quick loading on all devices"
                },
                {
                  title: "Cross-Browser Compatibility",
                  description: "Consistent performance across all major web browsers"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
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
                    <div className="text-6xl mb-4">💻📱</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Multi-Device Ready
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Perfect performance across all screen sizes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern technologies and frameworks for superior responsive web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CSS3 & HTML5",
                description: "Modern standards with media queries and flexible layouts",
                icon: "🎨"
              },
              {
                title: "Bootstrap Framework",
                description: "Responsive grid system and pre-built components",
                icon: "🔧"
              },
              {
                title: "JavaScript Libraries",
                description: "Enhanced interactivity with responsive behavior",
                icon: "⚡"
              },
              {
                title: "CMS Integration",
                description: "WordPress, Joomla, and Magento responsive templates",
                icon: "⚙️"
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

      {/* Responsive Design Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Responsive Design Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to creating responsive websites that work flawlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis & Planning",
                description: "Analyzing target devices and planning responsive breakpoints"
              },
              {
                step: "02",
                title: "Design & Wireframing",
                description: "Creating adaptive designs for different screen sizes"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Building responsive layouts with thorough cross-device testing"
              },
              {
                step: "04",
                title: "Optimization & Launch",
                description: "Performance optimization and successful deployment"
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

      {/* Device Compatibility */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect Across All Devices
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our responsive websites work flawlessly on every device and screen size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Desktop & Laptops",
                description: "Full-featured experience with optimal layouts for large screens",
                icon: "💻",
                devices: ["1920px+", "1366px", "1024px"]
              },
              {
                title: "Tablets",
                description: "Touch-optimized interface perfect for tablet interactions",
                icon: "📱",
                devices: ["768px", "1024px", "Portrait/Landscape"]
              },
              {
                title: "Smartphones",
                description: "Mobile-first design ensuring perfect mobile user experience",
                icon: "📱",
                devices: ["320px", "375px", "414px"]
              }
            ].map((device, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">{device.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {device.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {device.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {device.devices.map((size, sizeIndex) => (
                    <span key={sizeIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Website Upgrade */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Upgrade Your Existing Website
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your non-responsive website into a modern, mobile-friendly experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Website Modernization Options
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Responsive Retrofit",
                    description: "Add responsive features to existing websites with minimal changes"
                  },
                  {
                    title: "Complete Redesign",
                    description: "Recommended for websites older than 5 years - saves time and money"
                  },
                  {
                    title: "Template Customization",
                    description: "Use our pre-built responsive templates customized to your needs"
                  },
                  {
                    title: "CMS Integration",
                    description: "Seamlessly integrate with WordPress, Joomla, or Magento"
                  }
                ].map((option, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Your Website Assessed</h3>
              <p className="mb-6">
                Not sure if your website is responsive? Our experts will analyze your current website and recommend the best approach for making it mobile-friendly.
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                Free Website Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Responsive?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join the millions of businesses that have enhanced their online presence with responsive website design. Start your journey to better user experience today.
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