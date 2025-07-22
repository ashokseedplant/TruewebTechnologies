import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  BarChart, 
  PenTool, 
  Code, 
  Smartphone,
  Zap,
  Clock,
  Shield,
  Users,
  Lightbulb,
  DollarSign
} from "lucide-react"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "About TrueWeb Technologies Company | Web Development & Digital Marketing Agency",
  description: "Learn more about TrueWeb Technologies, a leading web development and digital marketing agency focused on innovation, quality and speed.",
  keywords: "about TrueWeb Technologies, web development company, digital marketing agency, app development, web design",
  pathname: "/about-us/company",
})

export default function CompanyPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Add Breadcrumb here */}
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Company" }
              ]}
              variant="light"
            />
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                WHO WE ARE
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                With complete focus on innovation, quality and speed; Trueweb Technologies has
                been growing as a finest design agency. We put together the latest technologies
                to help our clients' business grow. Trueweb Technologies boasts off with its work
                ethics, honesty and deliverable. Throughout the years, Trueweb Technologies has
                emerged as an agency that creates world-class, award-winning designs in various
                verticals enabling our clients to achieve excellent online presence.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We aim to be the agency that clients look upon for getting the most appealing
                and hassle-free websites. Our mission is to give a platform to all the businesses
                where they can expect to get a website, which is free from high price tag and
                comes with excellent after-sales-service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  DIGITAL MARKETING
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Today, the whole world is becoming digital. Whether it's your business or work,
                  everything is sitting on the same boat of digitalization. Under this umbrella,
                  the marketing of products and services which are mainly done on the internet is
                  known as Digital Marketing.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services/digital-marketing" 
                    className="inline-block px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Web Designing */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <PenTool className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  WEB DESIGNING
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  An average visitor spends only 3-4 seconds in that first glimpse on your website
                  who may turn quickly to the competitors' sites available out there. And you're
                  going to have a tough challenge. No worries! We are here to help.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services/web-designing" 
                    className="inline-block px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  WEB DEVELOPMENT
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  When it comes to website development, PHP is one of the most widely used
                  language. Software developers at our organization are more inclined towards the use of
                  this language since it is an open source language and can be easily integrated
                  with CMS and database.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services/development" 
                    className="inline-block px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  APP DEVELOPMENT
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Mobile apps have been ruling the roost in the smart phone market. True Web
                  Technologies is rated very high when it comes to mobile app development India.
                  Our team has the expertise to work on all types of apps such as android, iOS,
                  Blackberry, Windows and Facebook.
                </p>
                <div className="text-center">
                  <Link 
                    href="/services/development/mobile-app-development" 
                    className="inline-block px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We are committed to providing high-quality services that exceed expectations and help our clients achieve their business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">Expertise & Experience</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Our team consists of seasoned professionals with deep knowledge in their respective fields, ensuring top-notch service delivery.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">Timely Delivery</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                We understand the importance of time in business. We commit to deadlines and ensure projects are delivered on schedule.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">Quality Assurance</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Every project undergoes rigorous quality checks to ensure it meets the highest standards before delivery to clients.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">Customer Support</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                We provide excellent after-sales support to ensure your digital assets continue to perform optimally.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">Competitive Pricing</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                We offer high-quality services at competitive rates, ensuring excellent value for your investment.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">Innovative Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                We stay at the forefront of technology trends to provide innovative solutions that give your business a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business grow with our digital solutions.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
