"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ChevronDown,
  Globe
} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Digital Marketing',
      items: ['SEO', 'SMO', 'PPC', 'Content Marketing', 'Email Marketing']
    },
    {
      title: 'Web Designing',
      items: ['Responsive Design', 'UI/UX Design', 'Logo Design', 'Graphic Design', 'Mobile Website Design']
    },
    {
      title: 'Web Development',
      items: ['PHP Development', 'WordPress Development', 'E-commerce Development', '.NET Development', 'Static Website Development']
    },
    {
      title: 'Other Services',
      items: ['Content Writing', 'Mobile App Development', 'Website Maintenance', 'Software Updates', 'Hosting & Domain']
    }
  ]

  const packages = [
    'SEO Packages',
    'SMO Packages', 
    'PPC Packages',
    'WordPress Development',
    'E-commerce Development',
    'ASO Plans'
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 801 035 5718</span>
                <span>+91 120 454 0354</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>sales@truewebtechnologies.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://facebook.com/truewebtechnologies" className="hover:opacity-80">
                <Facebook size={16} />
              </Link>
              <Link href="https://twitter.com/truewebservices" className="hover:opacity-80">
                <Twitter size={16} />
              </Link>
              <Link href="https://linkedin.com/company/trueweb-technologies" className="hover:opacity-80">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-800">TrueWeb</h1>
                    <p className="text-xs text-gray-600">Technologies</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium">
                  About Us <ChevronDown size={16} className="ml-1" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border py-2 min-w-[200px]"
                    >
                      <Link href="/about" className="block px-4 py-2 text-sm hover:bg-gray-50">About Us</Link>
                      <Link href="/portfolio" className="block px-4 py-2 text-sm hover:bg-gray-50">Portfolio</Link>
                      <Link href="/case-study" className="block px-4 py-2 text-sm hover:bg-gray-50">SEO Case Study</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium">
                  Our Expertise <ChevronDown size={16} className="ml-1" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border p-4 w-[800px]"
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {services.map((service, index) => (
                          <div key={index}>
                            <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                            <ul className="space-y-1">
                              {service.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Packages Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('packages')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium">
                  Our Packages <ChevronDown size={16} className="ml-1" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'packages' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border py-2 min-w-[250px]"
                    >
                      {packages.map((pkg, index) => (
                        <Link 
                          key={index}
                          href="#" 
                          className="block px-4 py-2 text-sm hover:bg-gray-50"
                        >
                          {pkg}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden border-t bg-white overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                    Home
                  </Link>
                  <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                    About Us
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                    Our Expertise
                  </Link>
                  <Link href="/packages" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                    Our Packages
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                    Contact Us
                  </Link>
                  <div className="px-4 pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <Phone size={16} />
                      <span>+91 801 035 5718</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                      <Mail size={16} />
                      <span>sales@truewebtechnologies.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}

export default Header
