import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/Breadcrumb"

export const metadata: Metadata = generateMetadata({
  title: "Graphic Design Services India | Creative Design Solutions - TrueWeb Technologies",
  description: "Professional graphic design services in India. Our creative designers deliver custom graphic solutions including visual branding, identity design, and marketing materials.",
  keywords: "graphic design, visual branding, identity design, creative design, custom graphics, logo design, marketing materials, India",
  pathname: "/expertise/web-designing/graphic-design",
})

export default function GraphicDesignPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-16 pt-24 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/graphic-dessgin.jpg"
            alt="Graphic Design Hero Background"
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
                  { label: "Graphic Design" }
                ]}
                variant="dark"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Graphic Design Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Creative visual solutions that enhance your brand identity and communication through stunning graphic design
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
                src="/images/gd-left.jpg"
                alt="Graphic Design Services"
                width={557}
                height={634}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Graphic Design
                </h2>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We at True Web Technologies understand the requirements of the client and provide them with exact solution. With the booming e-commerce industry, graphic design has started playing a very important role in the development of custom websites. At True Web Technologies, our team uses HTML and for creating high end and customizable graphic design to meet the requirements of the users.
                </p>
              </div>

              <div className="mb-8">
                <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Visual branding and identity is also an integral part of graphic design. Our clients can choose from wide range of packages such as small business and start-up packages through which once can opt for custom built graphic designs which will act as a catalyst for marketing and advertising. Dedicated developers can be hired from our team and they can provide you the best solutions when it comes to custom graphic designs.
                </p>
              </div>

              <div>
                <div className="w-32 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  However if you opt for companies which provide custom graphic solutions, you might have to pay extra price but it comes with several benefits such as discussion of initial stages of development , mockups and easy payment schedules. Moreover, you will also not face reliability or time issues if you opt for our services. Graphic design is a very complicated task and one should make sure that they have opted for a reliable coder and developer to pull it off and this is where the involvement of our team becomes extremely important.
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Graphic Design Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive visual design solutions to enhance your brand presence and communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Identity Design",
                description: "Creating cohesive visual identities including logos, color schemes, and brand guidelines",
                icon: "🎨"
              },
              {
                title: "Marketing Materials",
                description: "Designing brochures, flyers, banners, and promotional materials for your business",
                icon: "📊"
              },
              {
                title: "Web Graphics",
                description: "Custom graphics, icons, and visual elements optimized for web and digital platforms",
                icon: "💻"
              },
              {
                title: "Print Design",
                description: "Business cards, letterheads, posters, and other print-ready graphic materials",
                icon: "🖨️"
              },
              {
                title: "Social Media Graphics",
                description: "Eye-catching graphics designed specifically for social media platforms and campaigns",
                icon: "📱"
              },
              {
                title: "Packaging Design",
                description: "Creative packaging solutions that make your products stand out on shelves",
                icon: "📦"
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

      {/* Design Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Design Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional graphic design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Brief & Research",
                description: "Understanding your brand, target audience, and design requirements"
              },
              {
                step: "02",
                title: "Concept Development",
                description: "Creating initial concepts and design directions based on your brief"
              },
              {
                step: "03",
                title: "Design & Refinement",
                description: "Developing chosen concepts with attention to detail and brand consistency"
              },
              {
                step: "04",
                title: "Final Delivery",
                description: "Delivering final designs in all required formats and providing ongoing support"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Graphic Design Services?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional advantages that set us apart in the graphic design industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Custom Solutions",
                  description: "Tailored graphic designs that perfectly match your brand identity and business needs"
                },
                {
                  title: "Professional Quality",
                  description: "High-end designs created by experienced professionals using industry-standard tools"
                },
                {
                  title: "Flexible Packages",
                  description: "Various packages for small businesses and startups with scalable design solutions"
                },
                {
                  title: "Dedicated Support",
                  description: "Reliable timeline adherence and ongoing support throughout your project"
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
                    <div className="text-6xl mb-4">🎨</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Creative Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Delivering stunning visuals that captivate and convert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Visual Identity?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Let our creative team bring your vision to life with professional graphic design services that make your brand stand out from the competition.
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