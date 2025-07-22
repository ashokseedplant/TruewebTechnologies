import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Email Marketing Services India | Email Campaign Management - TrueWeb Technologies",
  description: "Professional email marketing services in India. Our email marketing experts create engaging campaigns that drive results. Get high open rates and conversions.",
  keywords: "email marketing, email campaign, email marketing services, email automation, email templates, newsletter marketing",
  pathname: "/expertise/digital-marketing/email-marketing",
})

export default function EmailMarketingPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/email-marketing.jpg"
            alt="Email Marketing Hero Background"
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
                  { label: "Email Marketing" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Email Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Engage your audience with targeted email campaigns that drive results
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
                src="/images/emmar-left.jpg"
                alt="Email Marketing Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  E-mail <span className="text-blue-600">Marketing</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Want to see optimum engagement of your prospects or clients? If you are nodding your head for yes, Trueweb Technologies will cater your needs well. We build and manage branded e-mail blasts to your prospective customers or clients.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe it calls for great content, catchy headlines and enticing graphics to get your mail noticed in client's e-mail inbox. Our experts create HTML based e-mails with subject lines that convert. Being a worthy e-mail marketing consultants, we consistently achieve above average open rates, click through and are there to build up your subscription based e-mail list.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our e-mail marketing strategies are tried and true that brings life into campaigns and ensures optimum engagement of targeted customers or clients. Beware, posting a blog post alone does not mean your audience gets the message that it's live rather an RSS-fed e-mail sent at the optimal time will assure that your message is noticed.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Just program your ESP (E-mail service provider) to work automatically, set it and half of the battle is won. With this, you can make your e-mail marketing smarter than ever. We are there to help you harness these advanced functionalities and let the process go smooth.
                </p>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our e-mail marketing experts optimize your lists, weed out duplicates or inactive subscribers and craft well-designed and engaging e-mails, test subject lines to find the best ones. We try our level best that all the back-end functionality and automations are functioning well. Professionals with us measure, analyze, adjust and use that information to get expected results.
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
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  In today's e-mail and marketing automation world, lead nurture is another trending topic. Our skilled professionals will help you create the content, build up strategy and do e-mail marketing automation that takes your strategy to the top.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  No matter, you are looking forward to promote an offer or bringing your brand into notice again, Trueweb Technologies will help you create an out-of-the-box e-mail marketing and automation strategies that will integrate with your website and brand. Our e-mail marketing services includes but are not restricted to-
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We believe content marketing contributes a lot to online, digital and SEO marketing success. Our content marketing services includes:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    HTML e-mail designs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automated marketing and lead nurture
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    RSS-fed e-mails
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom e-mail templates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Subscription based list building
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reporting and analysis
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/emmar-right.jpg"
                alt="Email Marketing Strategy"
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
              Our Email Marketing Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive email marketing strategies that engage your audience and drive conversions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Planning",
                description: "We develop tailored email marketing strategies aligned with your business goals",
                icon: "📊"
              },
              {
                title: "List Management",
                description: "We help you build, segment, and maintain high-quality email lists for better targeting",
                icon: "📋"
              },
              {
                title: "Content Creation",
                description: "Our team creates compelling email content that resonates with your audience",
                icon: "✍️"
              },
              {
                title: "Design & Development",
                description: "We create visually appealing, responsive email templates that work across devices",
                icon: "🎨"
              },
              {
                title: "Automation & Workflows",
                description: "Set up automated email sequences to nurture leads and drive conversions",
                icon: "⚙️"
              },
              {
                title: "Analytics & Optimization",
                description: "We continuously monitor, analyze, and optimize campaigns for better results",
                icon: "📈"
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
              LOOKING FOR AN EMAIL MARKETING?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to boost your business with effective email marketing campaigns? Let's start a conversation today.
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