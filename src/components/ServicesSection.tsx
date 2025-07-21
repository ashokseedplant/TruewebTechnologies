"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  Palette, 
  Code, 
  Smartphone,
  TrendingUp,
  Globe,
  ShoppingCart,
  PenTool,
  ArrowRight
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, SMO, PPC, content marketing and email marketing to boost your online presence and drive results.",
      features: ["Search Engine Optimization", "Social Media Marketing", "Pay-Per-Click Advertising", "Content Strategy"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Palette,
      title: "Web Designing",
      description: "Creative and responsive web designs that captivate your audience. We create user-friendly interfaces that convert visitors into customers.",
      features: ["Responsive Design", "UI/UX Design", "Logo Design", "Mobile-First Approach"],
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Robust and scalable web development using modern technologies like PHP, WordPress, Magento, and more to build powerful websites.",
      features: ["PHP Development", "WordPress Sites", "E-commerce Solutions", "Custom Applications"],
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
      color: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ]

  const additionalServices = [
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Engaging and SEO-optimized content that tells your brand story and drives conversions.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Hosting & Domain",
      description: "Reliable hosting solutions and domain registration services for your online presence.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Software Updates",
      description: "Keep your systems running smoothly with our software maintenance and update services.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: ShoppingCart,
      title: "Website Maintenance",
      description: "Ongoing website maintenance to ensure optimal performance and security.",
      color: "from-amber-500 to-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions to help your business grow online. 
            From digital marketing to web development, we've got you covered.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: service.delay }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                        <IconComponent size={32} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-800 group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full group"
                      variant="outline"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Additional <span className="text-primary">Services</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We also offer specialized services to support your complete digital ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-800 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardDescription className="text-gray-600 text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals and grow your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
