import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Web Development Services",
  description: "Professional web development services including custom website development, e-commerce solutions, and content management systems.",
  keywords: "web development, website development, e-commerce website, CMS development, custom website development",
  pathname: "/expertise/web-development",
})

export default function WebDevelopmentPage() {
  return (
    <main className="container mx-auto pt-24 md:pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-6">Web Development Services</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Website Development</h2>
        <p className="text-lg mb-4">
          We build custom websites tailored to your specific business needs. Our development team 
          creates responsive, user-friendly, and performance-optimized websites that provide an 
          exceptional user experience across all devices.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h2>
        <p className="text-lg mb-4">
          Transform your business with our robust e-commerce solutions. We develop secure, 
          scalable online stores with intuitive navigation, streamlined checkout processes, 
          and comprehensive inventory management systems.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Content Management Systems</h2>
        <p className="text-lg mb-4">
          Our CMS development services empower you to manage your website content effortlessly. 
          Whether you need a custom CMS or solutions built on WordPress, Magento, or other platforms, 
          we deliver systems that are easy to use and maintain.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>React.js and Next.js for modern web applications</li>
          <li>PHP and Laravel for robust backend systems</li>
          <li>WordPress for content-focused websites</li>
          <li>Magento for comprehensive e-commerce solutions</li>
          <li>Node.js for scalable server-side applications</li>
          <li>.NET for enterprise-grade web applications</li>
        </ul>
      </section>
    </main>
  )
}
