import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Logo Design Services India | Professional Brand Identity Design - TrueWeb Technologies",
  description: "Professional logo design services in India. Our expert designers create distinctive brand identities and corporate logos that communicate your values and competitive edge.",
  keywords: "logo design, brand identity, corporate logo, branding services, visual identity, logo creation, brand design, India",
  pathname: "/expertise/web-designing/logo-design",
})

export default function LogoDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/logo-design.jpg"
            alt="Logo Design Hero Background"
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
                  { label: "Logo Design" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Logo Design Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Create a distinctive brand identity with professional logo designs that make lasting first impressions
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
                src="/images/logo-design.jpeg"
                alt="Logo Design Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Logo <span className="text-blue-600">Design</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  First impression always last and logo is the first piece of information, your customers visualize about your company. Every online business needs a distinct identity or professional logo that helps company to instantly communicate their objectives, vision and corporate style to prospective audiences.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The expertise designers at True Web Technologies analyze your brand's potential users, needs, market trends and strategically design the logo to empower your business with a distinct brand identity. We give your business, a corporate, polished and consistent look that actually expresses your values, personality and competitive edge.
                </p>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  True Web Technologies, a logo design and branding company, offer high-class services economically and efficiently to clients from round the world. It mainly focuses on developing dynamic, active brand awareness via visual consistency.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The logo design and branding services of True Web Technologies are well-renowned for its influential and compelling execution.
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

      {/* Second Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Why choose True Web Technologies's Logo Design and Branding Services?
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Truly understands client's business requirements and objectives.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Competitor analysis and legal brand protection.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Render a customized corporate logo.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Compelling, communicative professional logo design.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cost effective and reliable solution.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    100% customer satisfaction.
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
                    True Web Technologies Branding Services.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Corporate logo identity design.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Brand consulting services.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Brand creation.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Brand development.
                  </li>
                </ul>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  True Web Technologies is a certified offshore logo design and branding company that helps you stand ahead in the crowd.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/logo-right.jpg"
                alt="Logo Design Process"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Logo Design Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A strategic approach to creating memorable and impactful brand identities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Brand Analysis",
                description: "Understanding your business, target audience, and competitive landscape"
              },
              {
                step: "02",
                title: "Concept Creation",
                description: "Developing initial logo concepts based on brand strategy and market research"
              },
              {
                step: "03",
                title: "Design Refinement",
                description: "Refining chosen concepts with attention to scalability and versatility"
              },
              {
                step: "04",
                title: "Final Delivery",
                description: "Delivering final logo files in multiple formats with brand guidelines"
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

      {/* Logo Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Types of Logos We Create
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From wordmarks to emblems, we design various logo types to suit your brand needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wordmark Logos",
                description: "Text-based logos that focus on typography to represent your brand name",
                icon: "🔤"
              },
              {
                title: "Symbol/Icon Logos",
                description: "Graphic symbols that represent your brand without using text",
                icon: "🎨"
              },
              {
                title: "Combination Logos",
                description: "Combining text and symbols to create comprehensive brand marks",
                icon: "🔀"
              },
              {
                title: "Emblem Logos",
                description: "Traditional designs with text enclosed within symbols or badges",
                icon: "🛡️"
              },
              {
                title: "Lettermark Logos",
                description: "Monogram-style logos using initials or abbreviations",
                icon: "📝"
              },
              {
                title: "Mascot Logos",
                description: "Character-based logos that represent your brand personality",
                icon: "🎭"
              }
            ].map((type, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {type.description}
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
              Why Professional Logo Design Matters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The impact of professional logo design on your business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Brand Recognition",
                description: "Creates instant brand recognition and memorability",
                icon: "👁️"
              },
              {
                title: "Professional Image",
                description: "Establishes credibility and professional appearance",
                icon: "💼"
              },
              {
                title: "Competitive Edge",
                description: "Differentiates your brand from competitors",
                icon: "🏆"
              },
              {
                title: "Customer Trust",
                description: "Builds customer confidence and brand loyalty",
                icon: "🤝"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
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
              LOOKING FOR A LOGO DESIGN?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to create a distinctive brand identity that makes a lasting impression? Let our expert designers craft the perfect logo for your business.
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