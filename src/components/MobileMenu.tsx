"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null)

  const toggleSubmenu = (menuId: string) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId)
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-2"
            >
              <X size={20} />
            </Button>
          </div>

          <ul className="space-y-2">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => toggleSubmenu('about')}
                >
                  <span>About Us</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeSubmenu === 'about' ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeSubmenu === 'about' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    <li>
                      <Link
                        href="/about-us/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolios/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/seo-casestudy/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        SEO Case Study
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </div>
            </li>

            {/* Services */}
            <li>
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => toggleSubmenu('services')}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeSubmenu === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeSubmenu === 'services' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    <li>
                      <Link
                        href="/services/web-development/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/seo/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/digital-marketing/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/ecommerce/"
                        className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        E-commerce
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </div>
            </li>

            {/* Blog */}
            <li>
              <Link
                href="/blog/"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact-us/"
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  )
}

export default MobileMenu
