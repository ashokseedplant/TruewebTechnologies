import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Web Designing Services India | Custom Website Design - TrueWeb Technologies",
  description: "Professional web designing services in India. Our expert designers create responsive, user-friendly, and SEO-optimized custom websites that deliver superior user experience.",
  keywords: "web designing, website design, responsive design, custom website design, UI/UX design, web development, India",
  pathname: "/expertise/web-designing",
})

export default function WebDesigningPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/web-designing.jpg"
            alt="Web Designing Hero Background"
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
                  { label: "Web Designing" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web Designing Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Create stunning, responsive websites that deliver exceptional user experiences across all devices
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
                src="/images/web.jpeg"
                alt="Web Design Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Greater Efficiency to deliver <span className="text-blue-600">custom-made Website Designs</span>
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Great User Experience With our team of passionate designers, we create amazing websites that offer superior user experience on multiple web browsers and platforms.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Responsive Designs <span className="text-orange-500">Implementation</span>
                </h3>
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our website layouts are responsive to suit the times of Desktops, mobiles, tablets and iPad usage. Websites designed by us are highly adaptive to the endless new resolutions and devices.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  User-Centric <span className="text-blue-600">Design</span>
                </h3>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our designs are woven to please users and search engines too. We build professional-looking layouts with industry specifics and attention building trends on your website.
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
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Strive for <span className="text-orange-500">Simplicity</span>
                </h3>
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our websites are built to meet your online goals and vision. We design to "keep it elegant and simple" which also favor the Search Engine Dynamics and User Experience.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What Makes Us <span className="text-blue-600">Different?</span>
                </h3>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  An average visitor spends only 3-4 seconds in that first glimpse on your website who may turn quickly to the competitors' sites available out there. And you're going to have a tough challenge. No worries! We are here to help.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Trueweb Technologies is a Website designing Company, with a pool of expert designers, who works towards building unique, user-friendly and search engine-friendly websites to create your online presence. By combining our 8+ years of industry experience and creative thinking, we help you to get the best website layout that will compel your competitors, and visitors say "WOW!"
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/web2.jpeg"
                alt="Web Design Process"
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
              Our Web Design Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine creativity with technical expertise to deliver websites that not only look great but perform exceptionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Design",
                description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes",
                icon: "📱"
              },
              {
                title: "User Experience (UX)",
                description: "Intuitive navigation and user-friendly interfaces that keep visitors engaged",
                icon: "👥"
              },
              {
                title: "SEO Optimized",
                description: "Search engine friendly designs that help improve your website's visibility",
                icon: "🔍"
              },
              {
                title: "Fast Loading",
                description: "Optimized code and images for lightning-fast page load speeds",
                icon: "⚡"
              },
              {
                title: "Cross-Browser Compatible",
                description: "Consistent performance across all major web browsers",
                icon: "🌐"
              },
              {
                title: "Custom Solutions",
                description: "Tailored designs that reflect your brand identity and business goals",
                icon: "🎨"
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

      {/* Design Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Design Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to launch, we follow a structured approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business, goals, and target audience"
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating wireframes, sitemaps, and design strategies"
              },
              {
                step: "03",
                title: "Design",
                description: "Crafting beautiful, functional designs that align with your brand"
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, optimization, and successful website deployment"
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

      {/* Final Call to Action */}
      <section className="py-16 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              LOOKING FOR A WEB DESIGNING?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to create a stunning website that captures your brand essence and engages your audience? Let's bring your vision to life with our expert web design services.
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