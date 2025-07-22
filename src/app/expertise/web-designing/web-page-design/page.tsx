import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Web Page Design Services India | Custom Website Page Design - TrueWeb Technologies",
  description: "Professional web page design services in India. Our expert designers create custom, dynamic web pages with modern functionality and responsive layouts for optimal user experience.",
  keywords: "web page design, custom web pages, dynamic web design, website page development, PHP, WordPress, Joomla, Magento, India",
  pathname: "/expertise/web-designing/web-page-design",
})

export default function WebPageDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about.jpg"
            alt="Web Page Design Hero Background"
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
                  { label: "Web Page Design" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web Page Design Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Create custom, dynamic web pages with modern functionality and responsive layouts
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
                src="/images/web-page-left-1.jpg"
                alt="Web Page Design Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Web Page <span className="text-blue-600">Design</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Website development has gone to a completely different level in the recent years. A number of new technologies have come into existence due to which web page design has seen a tremendous change. Clients can hire local or outsource developers from a strong team at True Web Technologies webpage solutions to create a custom built web page. Most web pages today are coded using dynamic functionality so that making changes in them becomes easier in the due course. We at True Web Technologies also offer money back guarantee if the client is not satisfied with our work. You can also request our team to provide mock ups at the initial stage of coding so that necessary changes can be made before integration of design in the code. Apart from this users also have the options to choose from wide range of web design template so that they can choose the one that suits their needs. PHP, Joomla, Magento and WordPress are some of the most widely used technologies used in the creation of websites at our esteemed organizations. These languages are compatible with all type of designs which makes the process of integration much easier for the developer. The new types of web page design also comes with printable art files and pages. Rapid tweaks in the design of the web page is also possible with the latest templates developed by the team at True Web Technologies software solutions.
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

      {/* Modern Web Page Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Modern Web Page Design Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced features that make our web pages stand out in today's digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dynamic Functionality",
                description: "Interactive web pages with dynamic content management for easy updates",
                icon: "⚡"
              },
              {
                title: "Custom Built Solutions",
                description: "Tailor-made web pages designed specifically for your business needs",
                icon: "🎨"
              },
              {
                title: "Mock-up Previews",
                description: "Initial design previews to ensure perfect alignment with your vision",
                icon: "👁️"
              },
              {
                title: "Template Library",
                description: "Wide range of professional templates to choose from and customize",
                icon: "📚"
              },
              {
                title: "Printable Designs",
                description: "Web pages with printable art files and print-friendly layouts",
                icon: "🖨️"
              },
              {
                title: "Rapid Modifications",
                description: "Quick design tweaks and updates using our modern template system",
                icon: "🔧"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
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

      {/* Technologies We Use */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies compatible with all types of designs for seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PHP Development",
                description: "Flexible server-side scripting for dynamic web page functionality",
                icon: "🔧",
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "WordPress",
                description: "User-friendly CMS for easy content management and updates",
                icon: "📝",
                color: "from-blue-500 to-green-500"
              },
              {
                title: "Joomla",
                description: "Powerful CMS platform for complex web page structures",
                icon: "🏗️",
                color: "from-green-500 to-yellow-500"
              },
              {
                title: "Magento",
                description: "E-commerce focused platform for online business web pages",
                icon: "🛒",
                color: "from-yellow-500 to-red-500"
              }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl text-white">{tech.icon}</span>
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

      {/* Design Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Web Page Design Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to creating exceptional web pages that meet your business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Understanding your business needs and target audience"
              },
              {
                step: "02",
                title: "Mock-up Creation",
                description: "Initial design previews for feedback and approval"
              },
              {
                step: "03",
                title: "Development & Coding",
                description: "Building dynamic functionality with chosen technology stack"
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "Thorough testing and successful deployment of your web page"
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

      {/* Why Choose Our Web Page Design */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose True Web Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The advantages that set our web page design services apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Money Back Guarantee",
                  description: "We offer a satisfaction guarantee - if you're not happy, you get your money back"
                },
                {
                  title: "Expert Team",
                  description: "Strong team of experienced developers and designers at your service"
                },
                {
                  title: "Modern Technologies",
                  description: "Latest web development technologies for cutting-edge functionality"
                },
                {
                  title: "Template Variety",
                  description: "Extensive library of professional templates to suit every business need"
                },
                {
                  title: "Easy Integration",
                  description: "Seamless compatibility between all design types and chosen technologies"
                },
                {
                  title: "Rapid Updates",
                  description: "Quick modifications and updates with our modern development approach"
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
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Next-Level Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Modern web page design at its finest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Service Options
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Flexible engagement models to suit your project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Development Team",
                description: "Work directly with our in-house team of expert designers and developers",
                icon: "🏢",
                features: ["Direct communication", "Local support", "Face-to-face meetings", "Quick response times"]
              },
              {
                title: "Outsourced Solutions",
                description: "Cost-effective development with our experienced offshore team",
                icon: "🌐",
                features: ["Cost savings", "24/7 development", "Scalable resources", "Global expertise"]
              },
              {
                title: "Custom Templates",
                description: "Choose from our extensive library of professional web page templates",
                icon: "📋",
                features: ["Ready-to-use designs", "Easy customization", "Quick deployment", "Professional layouts"]
              }
            ].map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Web Design Evolution
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              How web page design has transformed with new technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                From Static to Dynamic
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Traditional Static Pages",
                    description: "Basic HTML pages with limited functionality and difficult updates"
                  },
                  {
                    title: "Dynamic Functionality",
                    description: "Interactive pages with easy content management and real-time updates"
                  },
                  {
                    title: "Modern CMS Integration",
                    description: "Powerful content management systems for effortless page management"
                  },
                  {
                    title: "Responsive Design",
                    description: "Pages that adapt perfectly to all devices and screen sizes"
                  }
                ].map((evolution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {evolution.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {evolution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Modernize?</h3>
              <p className="mb-6">
                Transform your web presence with our modern web page design solutions. From concept to completion, we'll create pages that engage your audience and drive results.
              </p>
              <Link 
                href="/get-quote" 
                className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                Start Your Project
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
              Ready to Create Amazing Web Pages?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Let's build web pages that not only look great but also deliver exceptional functionality and user experience. Contact us today to get started.
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