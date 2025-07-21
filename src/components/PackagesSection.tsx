"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Check, 
  Star,
  ArrowRight,
  Search,
  Share2,
  MousePointer,
  Code,
  ShoppingCart,
  Smartphone
} from 'lucide-react'

const PackagesSection = () => {
  const [activeCategory, setActiveCategory] = useState('seo')

  const categories = [
    { id: 'seo', label: 'SEO Services', icon: Search },
    { id: 'smo', label: 'SMO Services', icon: Share2 },
    { id: 'ppc', label: 'PPC Services', icon: MousePointer },
    { id: 'web', label: 'Web Design', icon: Code },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ]

  const packages = {
    seo: [
      {
        name: "Basic SEO",
        price: "$149",
        period: "/month",
        description: "Perfect for small businesses starting their SEO journey",
        features: [
          "5 Keywords Optimization",
          "On-Page SEO",
          "Google Analytics Setup",
          "Monthly Reports",
          "Basic Link Building",
          "Meta Tags Optimization"
        ],
        popular: false,
        color: "from-blue-500 to-cyan-500"
      },
      {
        name: "Professional SEO",
        price: "$299",
        period: "/month",
        description: "Comprehensive SEO solution for growing businesses",
        features: [
          "15 Keywords Optimization",
          "Technical SEO Audit",
          "Content Optimization",
          "Local SEO Setup",
          "Advanced Link Building",
          "Competitor Analysis",
          "Social Media Integration",
          "24/7 Support"
        ],
        popular: true,
        color: "from-green-500 to-emerald-500"
      },
      {
        name: "Enterprise SEO",
        price: "$599",
        period: "/month",
        description: "Advanced SEO package for large enterprises",
        features: [
          "Unlimited Keywords",
          "Advanced Technical SEO",
          "Content Strategy",
          "Multi-Location SEO",
          "Premium Link Building",
          "Custom Reporting",
          "Dedicated Account Manager",
          "Priority Support"
        ],
        popular: false,
        color: "from-purple-500 to-pink-500"
      }
    ],
    smo: [
      {
        name: "Social Starter",
        price: "$175",
        period: "/month",
        description: "Get started with social media marketing",
        features: [
          "3 Social Platforms",
          "Daily Posts",
          "Content Creation",
          "Basic Analytics",
          "Community Management"
        ],
        popular: false,
        color: "from-pink-500 to-rose-500"
      },
      {
        name: "Social Pro",
        price: "$375",
        period: "/month",
        description: "Complete social media marketing solution",
        features: [
          "5+ Social Platforms",
          "Custom Content",
          "Paid Advertising",
          "Influencer Outreach",
          "Advanced Analytics",
          "Strategy Development"
        ],
        popular: true,
        color: "from-indigo-500 to-purple-500"
      }
    ],
    ppc: [
      {
        name: "PPC Starter",
        price: "$149",
        period: "/month",
        description: "Basic pay-per-click advertising management",
        features: [
          "Google Ads Setup",
          "Keyword Research",
          "Ad Creation",
          "Basic Optimization",
          "Monthly Reports"
        ],
        popular: false,
        color: "from-orange-500 to-red-500"
      },
      {
        name: "PPC Professional",
        price: "$399",
        period: "/month",
        description: "Advanced PPC management with multiple platforms",
        features: [
          "Multi-Platform Ads",
          "Advanced Targeting",
          "A/B Testing",
          "Conversion Tracking",
          "Landing Page Optimization",
          "Dedicated Manager"
        ],
        popular: true,
        color: "from-red-500 to-pink-500"
      }
    ],
    web: [
      {
        name: "Basic Website",
        price: "$199",
        period: "one-time",
        description: "Simple website for small businesses",
        features: [
          "5 Pages Website",
          "Responsive Design",
          "Basic SEO",
          "Contact Form",
          "1 Year Support"
        ],
        popular: false,
        color: "from-teal-500 to-cyan-500"
      },
      {
        name: "Business Website",
        price: "$499",
        period: "one-time",
        description: "Professional website with advanced features",
        features: [
          "10+ Pages",
          "Custom Design",
          "CMS Integration",
          "Blog Setup",
          "Analytics Integration",
          "Social Media Integration"
        ],
        popular: true,
        color: "from-blue-500 to-indigo-500"
      }
    ],
    ecommerce: [
      {
        name: "E-commerce Starter",
        price: "$699",
        period: "one-time",
        description: "Basic online store setup",
        features: [
          "Product Catalog",
          "Shopping Cart",
          "Payment Gateway",
          "Order Management",
          "Mobile Responsive"
        ],
        popular: false,
        color: "from-green-500 to-teal-500"
      },
      {
        name: "E-commerce Pro",
        price: "$1299",
        period: "one-time",
        description: "Advanced e-commerce solution",
        features: [
          "Unlimited Products",
          "Advanced Features",
          "Multi-Currency",
          "Inventory Management",
          "Marketing Tools",
          "Custom Integration"
        ],
        popular: true,
        color: "from-purple-500 to-indigo-500"
      }
    ],
    mobile: [
      {
        name: "Mobile App Basic",
        price: "$999",
        period: "one-time",
        description: "Simple mobile app for your business",
        features: [
          "Single Platform",
          "Basic Features",
          "App Store Submission",
          "3 Months Support"
        ],
        popular: false,
        color: "from-amber-500 to-orange-500"
      },
      {
        name: "Mobile App Pro",
        price: "$2499",
        period: "one-time",
        description: "Advanced mobile app with custom features",
        features: [
          "Cross-Platform",
          "Custom Features",
          "Backend Integration",
          "Push Notifications",
          "Analytics",
          "1 Year Support"
        ],
        popular: true,
        color: "from-violet-500 to-purple-500"
      }
    ]
  }

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
            Our <span className="text-primary">Packages</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With more than hundred partners all over the world, we offer customized services and packages 
            for our clients. Choose the perfect plan that fits your business needs.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary hover:text-white shadow-md'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{category.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages[activeCategory as keyof typeof packages].map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative ${pkg.popular ? 'lg:scale-110' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
              }`}>
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group ${pkg.popular ? '' : 'variant-outline'}`}
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't see what you're looking for? We create custom packages tailored to your specific business needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PackagesSection
