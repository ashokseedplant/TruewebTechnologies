import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = generateMetadata({
  title: "Get Free Quote | Request Custom Digital Marketing Solutions",
  description: "Get a free, customized quote for your digital marketing needs. Our experts will provide tailored solutions for SEO, PPC, web design, and more.",
  keywords: "free quote, digital marketing quote, SEO pricing, web design quote, custom solutions",
  pathname: "/get-quote",
})

export default function GetQuotePage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-16 pt-24 md:pt-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <nav className="mb-6">
              <ol className="flex items-center justify-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-white hover:text-blue-200 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white">&gt;</li>
                <li className="text-white font-semibold">Get Quote</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get a customized quote tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Tell Us About Your Project
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and our experts will get back to you within 24 hours with a detailed quote.
                </p>
              </div>

              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Services Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Services Needed * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'SEO Services',
                      'PPC Advertising',
                      'Social Media Marketing',
                      'Web Design',
                      'Web Development',
                      'Content Marketing',
                      'Email Marketing',
                      'Brand Identity',
                      'E-commerce Solutions'
                    ].map((service) => (
                      <label key={service} className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="50000-plus">$50,000+</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                </div>

                {/* Project Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="2-3-months">2-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-plus-months">6+ Months</option>
                    <option value="flexible">I'm Flexible</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-y"
                    placeholder="Please describe your project, goals, target audience, and any specific requirements..."
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Website URL (if applicable)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="https://www.yourwebsite.com"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-md transition-colors shadow-lg"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    * We'll respond within 24 hours with a detailed proposal
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose TrueWeb Technologies?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver results-driven digital solutions that help businesses grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Proven Results",
                description: "Track record of delivering measurable results for our clients"
              },
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality"
              },
              {
                icon: "💡",
                title: "Custom Solutions",
                description: "Tailored strategies that fit your unique business needs"
              },
              {
                icon: "📈",
                title: "ROI Focused",
                description: "Every strategy is designed to maximize your return on investment"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
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

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Have Questions? Let's Talk!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300">info@truewebtechnologies.com</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}