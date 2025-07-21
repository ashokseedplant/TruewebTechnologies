"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, 
  Award, 
  Clock, 
  Globe,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb
} from 'lucide-react'

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "Projects Completed", value: "1000+", color: "from-green-500 to-emerald-500" },
    { icon: Clock, label: "Years Experience", value: "10+", color: "from-purple-500 to-pink-500" },
    { icon: Globe, label: "Countries Served", value: "25+", color: "from-orange-500 to-red-500" }
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions"
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Every project meets our high standards of excellence and attention to detail"
    },
    {
      icon: Lightbulb,
      title: "Expertise",
      description: "Our team brings years of experience and deep knowledge across all digital domains"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with clients as partners in their digital transformation journey"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Who <span className="text-primary">We Are</span>
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
              
              <motion.div 
                className="space-y-6 text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>
                  With complete focus on <strong className="text-gray-800">innovation, quality and speed</strong>, 
                  TrueWeb Technologies has been growing as the fastest digital marketing and web development agency.
                </p>
                <p>
                  We put together the latest technologies to help our clients' business grow. TrueWeb Technologies 
                  boasts of its work ethics, honesty and deliverables. Throughout the years, we have emerged as 
                  an agency that creates <strong className="text-gray-800">world-class, award-winning designs</strong> in 
                  various verticals enabling our clients to achieve excellent online presence.
                </p>
                <p>
                  Our team of experienced professionals is dedicated to delivering results that exceed expectations 
                  and drive meaningful business growth for our clients worldwide.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                      <CardContent className="p-0 space-y-4">
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                          <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white text-center"
            >
              <Award size={48} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Award-Winning Agency</h3>
              <p className="opacity-90">Recognized for excellence in digital marketing and web development</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-primary">Core Values</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group text-center">
                    <CardContent className="p-0 space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
