import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Content Marketing Services India | Content Marketing Agency - TrueWeb Technologies",
  description: "Content Marketing services India - we are a leading Content Marketing Agency in India extending high-quality digital content writing services to clients all over the world.",
  keywords: "content marketing, content marketing services, content marketing agency, digital marketing, SEO content, blog writing, content strategy",
  pathname: "/expertise/digital-marketing/content-marketing",
})

export default function ContentMarketingPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-banner.jpg"
            alt="Content Marketing Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Digital Marketing", href: "/expertise/digital-marketing" },
                { label: "Content Marketing" }
              ]}
              variant="dark"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Content Marketing Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Build brand awareness and engage your audience with compelling content strategies
            </p>
            {/* Update Link component - remove the <a> tag wrapper */}
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
                src="/images/content-marketing-left.jpg"
                alt="Content Marketing Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Content <span className="text-blue-600">Marketing</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Digital marketing has many forms but content marketing is indeed a powerful tool which aims at building brand awareness in a unique way. With this marketing approach, we set up your brand as an interesting and trusted authority before your customers.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What is <span className="text-blue-600">Content Marketing?</span>
                </h3>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We help you create awareness among people about how your business and its values fit into their lives and cater their needs. Our experts even create quality and informational content which draws the attention of search engines towards your business and get you to the top list of search engine rankings as an established industry leader.
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
              Our Content Marketing Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We have in-depth understanding of different aspects of content marketing along with the taste of audience. Our skilled content marketing experts focus on quality and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Blog Content Writing",
                description: "Creating high quality blog posts that engage and inform your audience",
                icon: "📝"
              },
              {
                title: "E-books",
                description: "Comprehensive digital publications to establish thought leadership",
                icon: "📚"
              },
              {
                title: "Copywriting",
                description: "Persuasive copy that converts visitors into customers",
                icon: "✍️"
              },
              {
                title: "Press Release",
                description: "Professional press releases to announce your news and updates",
                icon: "📰"
              },
              {
                title: "Email Marketing Templates",
                description: "Engaging email content that nurtures leads and drives conversions",
                icon: "📧"
              },
              {
                title: "Social Media Content",
                description: "Compelling social media content that builds community and engagement",
                icon: "📱"
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
                  Why Content Marketing <span className="text-blue-600">Is Important?</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We are there to help you win customer's trust and loyalty with our state-of-the-art content marketing strategies. Of course, it takes time but continuous commitment and right approach will make you win the heart of your prospective audiences.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Content marketing is considered as the base of any worthy social media, SEO, keyword and other digital marketing strategy. Be it your blog posts, landing pages, press releases or SEO, experts at Trueweb Technologies know how to write, build, design and develop your content marketing strategy so that you achieve expected results.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Content Marketing <span className="text-blue-600">Approach</span>
                </h3>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our company is well-equipped with all the necessary content marketing tools. We have content marketing retainers that tie them all together with an easy-to-understand and holistic content marketing strategy. Our skilled content marketing experts focus on:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Qualitative Content</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Qualitative and customer-centric information that resonates with your audience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">High-Quality Blog Posts</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Creating high quality blog posts that engage readers and drive organic traffic.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Brand Messaging</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Thinking of the line that go a long way and creates an ever-lasting impression.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Customer Relationships</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Continuous commitment to build up strong relationship with customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/content-marketing-right.jpg"
                alt="Content Marketing Strategy"
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
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how our content marketing expertise can help build your brand authority and engage your target audience effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Update these Link components */}
              <Link 
                href="/get-quote" 
                className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact-us" 
                className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}