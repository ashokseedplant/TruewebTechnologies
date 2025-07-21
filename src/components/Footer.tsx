"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const offices = [
    {
      country: "India",
      address: "E-38, 2nd Floor, Sector 63, Noida, Uttar Pradesh 201301",
      phone: "+91-8882-300-600",
      email: "info@truewebtechnologies.com"
    },
    {
      country: "Kenya",
      address: "Mirage Towers, Tower 1, 8th Floor, Chiromo Road, Westlands, Nairobi",
      phone: "+254-700-000-000",
      email: "kenya@truewebtechnologies.com"
    },
    {
      country: "France",
      address: "91 Rue du Faubourg Saint Honoré, 75008 Paris",
      phone: "+33-1-40-00-0000",
      email: "france@truewebtechnologies.com"
    },
    {
      country: "Canada",
      address: "5625 Boileau, Brossard, Quebec J4W 1L4",
      phone: "+1-514-000-0000",
      email: "canada@truewebtechnologies.com"
    }
  ]

  const services = [
    { name: "SEO Services", href: "#seo" },
    { name: "Web Design", href: "#web-design" },
    { name: "Web Development", href: "#web-development" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "App Development", href: "#app-development" },
    { name: "E-commerce Solutions", href: "#ecommerce" }
  ]

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" }
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">TrueWeb Technologies</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With complete focus on innovation, quality and speed; TrueWeb Technologies has been growing as the fastest digital marketing and web development agency.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 flex items-center justify-center group"
                >
                  <social.icon size={18} className="text-white group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on digital marketing trends and web technologies.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-white"
              />
              <button className="px-6 py-2 bg-primary hover:bg-secondary transition-colors duration-300 rounded-r-lg">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <h4 className="text-2xl font-bold mb-8 text-center">Our Global Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
              >
                <h5 className="text-lg font-bold text-primary mb-4">{office.country}</h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-primary flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{office.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock size={20} className="text-primary" />
            <h5 className="text-lg font-semibold">Business Hours</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <p className="font-semibold text-white">India Office</p>
              <p>Mon - Sat: 9:00 AM - 8:00 PM IST</p>
            </div>
            <div>
              <p className="font-semibold text-white">International Support</p>
              <p>24/7 Available</p>
            </div>
            <div>
              <p className="font-semibold text-white">Emergency Support</p>
              <p>Available on Request</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 TrueWeb Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#sitemap" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
