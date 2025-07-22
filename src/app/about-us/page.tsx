import { generateMetadata } from "@/components/SEO"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "About Us",
  description: "Learn more about TrueWeb Technologies, our mission, values, and expert team dedicated to helping businesses succeed online.",
  keywords: "about TrueWeb Technologies, web development company, digital marketing team, IT services",
  pathname: "/about-us",
})

export default function AboutPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">About TrueWeb Technologies</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At TrueWeb Technologies, our mission is to help businesses of all sizes establish a strong online presence 
          and achieve their digital goals through innovative web solutions and strategic digital marketing.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-lg mb-4">
          We believe in a client-first approach, focusing on understanding your unique business needs 
          and crafting customized solutions that drive results. Our team combines technical expertise 
          with creative thinking to deliver projects that exceed expectations.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg">
          Our team of experienced developers, designers, and digital marketers are passionate about 
          staying ahead of industry trends and implementing the latest technologies and strategies 
          to ensure your business thrives in the digital landscape.
        </p>
      </section>
    </main>
  )
}
