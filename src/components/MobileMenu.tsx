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
  const [activeSubSubmenu, setActiveSubSubmenu] = React.useState<string | null>(null)

  const toggleSubmenu = (menuId: string) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId)
    setActiveSubSubmenu(null) // Reset sub-submenu when toggling main submenu
  }

  const toggleSubSubmenu = (menuId: string) => {
    setActiveSubSubmenu(activeSubSubmenu === menuId ? null : menuId)
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
        className="fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-xl z-50 lg:hidden overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Menu</h2>
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
                className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
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
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolios/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/seo-casestudy/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        SEO Case Study
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </div>
            </li>

            {/* Our Expertise */}
            <li>
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={() => toggleSubmenu('expertise')}
                >
                  <span>Our Expertise</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeSubmenu === 'expertise' ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeSubmenu === 'expertise' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    <li>
                      <Link
                        href="/our-expertise/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Our Expertise
                      </Link>
                    </li>
                    {/* Digital Marketing Submenu */}
                    <li>
                      <div>
                        <button
                          className="w-full flex items-center justify-between py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          onClick={() => toggleSubSubmenu('digital-marketing')}
                        >
                          <span>Digital Marketing</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${activeSubSubmenu === 'digital-marketing' ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {activeSubSubmenu === 'digital-marketing' && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            <li><Link href="/digital-marketing/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Digital Marketing</Link></li>
                            <li><Link href="/content-marketing/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Content Marketing</Link></li>
                            <li><Link href="/email-marketing/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Email Marketing</Link></li>
                            <li><Link href="/seo/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>SEO</Link></li>
                            <li><Link href="/smo/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>SMO</Link></li>
                            <li><Link href="/ppc/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>PPC</Link></li>
                          </motion.ul>
                        )}
                      </div>
                    </li>
                    {/* Web Designing Submenu */}
                    <li>
                      <div>
                        <button
                          className="w-full flex items-center justify-between py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          onClick={() => toggleSubSubmenu('web-designing')}
                        >
                          <span>Web Designing</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${activeSubSubmenu === 'web-designing' ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {activeSubSubmenu === 'web-designing' && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            <li><Link href="/web-designing/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Web Designing</Link></li>
                            <li><Link href="/graphic-design/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Graphic Design</Link></li>
                            <li><Link href="/logo-design/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Logo Design</Link></li>
                            <li><Link href="/mobile-website-design/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Mobile Website Design</Link></li>
                            <li><Link href="/responsive-website-design/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Responsive Web Design</Link></li>
                            <li><Link href="/web-page-design/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Web Page Design</Link></li>
                          </motion.ul>
                        )}
                      </div>
                    </li>
                    {/* Web Development Submenu */}
                    <li>
                      <div>
                        <button
                          className="w-full flex items-center justify-between py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          onClick={() => toggleSubSubmenu('web-development')}
                        >
                          <span>Web Development</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${activeSubSubmenu === 'web-development' ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {activeSubSubmenu === 'web-development' && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            <li><Link href="/web-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Web Development</Link></li>
                            <li><Link href="/php-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>PHP Development</Link></li>
                            <li><Link href="/wordpress-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>WordPress Development</Link></li>
                            <li><Link href="/magento-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Magento Development</Link></li>
                            <li><Link href="/e-commerce-website/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>E-commerce Website</Link></li>
                            <li><Link href="/dot-net-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Dot Net Development</Link></li>
                            <li><Link href="/static-website-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Static Web Development</Link></li>
                          </motion.ul>
                        )}
                      </div>
                    </li>
                    {/* Other Services Submenu */}
                    <li>
                      <div>
                        <button
                          className="w-full flex items-center justify-between py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          onClick={() => toggleSubSubmenu('other-services')}
                        >
                          <span>Other Services</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${activeSubSubmenu === 'other-services' ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {activeSubSubmenu === 'other-services' && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            <li><Link href="/other-services/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Other Services</Link></li>
                            <li><Link href="/content-writing/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Content Writing</Link></li>
                            <li><Link href="/hosting-domain/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Hosting Domain</Link></li>
                            <li><Link href="/mobile-app-development/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Mobile App Development</Link></li>
                            <li><Link href="/software-updates/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Software Updates</Link></li>
                            <li><Link href="/website-maintenance/" className="block py-1 px-3 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 rounded transition-colors" onClick={() => setIsOpen(false)}>Website Maintenance</Link></li>
                          </motion.ul>
                        )}
                      </div>
                    </li>
                  </motion.ul>
                )}
              </div>
            </li>

            {/* Our Package */}
            <li>
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={() => toggleSubmenu('packages')}
                >
                  <span>Our Package</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeSubmenu === 'packages' ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeSubmenu === 'packages' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    <li>
                      <Link
                        href="/our-package/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Our Package
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/seo-packages/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        SEO Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/smo-packages/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        SMO Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ppc-packages/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        PPC Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/aso-plan/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        ASO Plan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/wordpress-development-2/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        WordPress Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/e-commerce-development/"
                        className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        E-Commerce Development
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </div>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact-us/"
                className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
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
