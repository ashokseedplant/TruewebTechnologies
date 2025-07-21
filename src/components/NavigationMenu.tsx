"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ChevronDown, 
  Phone, 
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
  Search,
  Target,
  Palette,
  Code,
  Smartphone,
  PenTool,
  Server,
  ShoppingCart,
  FileText,
  Cloud,
  Wrench,
  BarChart3,
  Globe,
  Star,
  Package,
  Users,
  Mail as EmailIcon,
  PhoneCall
} from 'lucide-react'

interface MenuItem {
  title: string
  href: string
  icon: any
  description: string
  submenu?: MenuItem[]
}

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      href: "#home",
      icon: Globe,
      description: "Welcome to TrueWeb Technologies"
    },
    {
      title: "About Us",
      href: "#about",
      icon: Users,
      description: "Learn about our company",
      submenu: [
        {
          title: "About Us",
          href: "#about",
          icon: Users,
          description: "Our company story and vision"
        },
        {
          title: "Portfolio",
          href: "#portfolio",
          icon: Star,
          description: "Showcase of our best work"
        },
        {
          title: "SEO Case Study",
          href: "#case-study",
          icon: BarChart3,
          description: "Real results and success stories"
        }
      ]
    },
    {
      title: "Our Expertise",
      href: "#services",
      icon: Target,
      description: "Comprehensive digital solutions",
      submenu: [
        {
          title: "Digital Marketing",
          href: "#digital-marketing",
          icon: Target,
          description: "Boost your online presence",
          submenu: [
            {
              title: "Content Marketing",
              href: "#content-marketing",
              icon: PenTool,
              description: "Engaging content strategies"
            },
            {
              title: "Email Marketing",
              href: "#email-marketing",
              icon: EmailIcon,
              description: "Direct customer engagement"
            },
            {
              title: "SEO",
              href: "#seo",
              icon: Search,
              description: "Search engine optimization"
            },
            {
              title: "SMO",
              href: "#smo",
              icon: MessageSquare,
              description: "Social media optimization"
            },
            {
              title: "PPC",
              href: "#ppc",
              icon: Target,
              description: "Pay-per-click advertising"
            }
          ]
        },
        {
          title: "Web Designing",
          href: "#web-designing",
          icon: Palette,
          description: "Beautiful, functional designs",
          submenu: [
            {
              title: "Graphic Design",
              href: "#graphic-design",
              icon: Palette,
              description: "Visual brand identity"
            },
            {
              title: "Logo Design",
              href: "#logo-design",
              icon: Star,
              description: "Professional logo creation"
            },
            {
              title: "Mobile Website Design",
              href: "#mobile-design",
              icon: Smartphone,
              description: "Mobile-first approach"
            },
            {
              title: "Responsive Web Design",
              href: "#responsive-design",
              icon: Globe,
              description: "All device compatibility"
            },
            {
              title: "Web Page Design",
              href: "#webpage-design",
              icon: FileText,
              description: "Custom page layouts"
            }
          ]
        },
        {
          title: "Web Development",
          href: "#web-development",
          icon: Code,
          description: "Robust web solutions",
          submenu: [
            {
              title: "PHP Development",
              href: "#php-development",
              icon: Code,
              description: "Dynamic web applications"
            },
            {
              title: "WordPress Development",
              href: "#wordpress-development",
              icon: Globe,
              description: "CMS solutions"
            },
            {
              title: "Magento Development",
              href: "#magento-development",
              icon: ShoppingCart,
              description: "E-commerce platforms"
            },
            {
              title: "E-commerce Website",
              href: "#ecommerce",
              icon: ShoppingCart,
              description: "Online store development"
            },
            {
              title: "Dot Net Development",
              href: "#dotnet-development",
              icon: Server,
              description: "Microsoft technologies"
            },
            {
              title: "Static Web Development",
              href: "#static-development",
              icon: FileText,
              description: "Fast, secure websites"
            }
          ]
        },
        {
          title: "Other Services",
          href: "#other-services",
          icon: Wrench,
          description: "Additional support services",
          submenu: [
            {
              title: "Content Writing",
              href: "#content-writing",
              icon: PenTool,
              description: "Professional copywriting"
            },
            {
              title: "Hosting Domain",
              href: "#hosting",
              icon: Cloud,
              description: "Reliable hosting solutions"
            },
            {
              title: "Mobile App Development",
              href: "#app-development",
              icon: Smartphone,
              description: "iOS & Android apps"
            },
            {
              title: "Software Updates",
              href: "#software-updates",
              icon: Wrench,
              description: "Maintenance & updates"
            },
            {
              title: "Website Maintenance",
              href: "#maintenance",
              icon: Wrench,
              description: "Ongoing support"
            }
          ]
        }
      ]
    },
    {
      title: "Our Package",
      href: "#packages",
      icon: Package,
      description: "Affordable pricing plans",
      submenu: [
        {
          title: "SEO Packages",
          href: "#seo-packages",
          icon: Search,
          description: "Search optimization plans"
        },
        {
          title: "SMO Packages",
          href: "#smo-packages",
          icon: MessageSquare,
          description: "Social media packages"
        },
        {
          title: "PPC Packages",
          href: "#ppc-packages",
          icon: Target,
          description: "Advertising campaigns"
        },
        {
          title: "ASO Plan",
          href: "#aso-plan",
          icon: Smartphone,
          description: "App store optimization"
        },
        {
          title: "WordPress Development",
          href: "#wordpress-packages",
          icon: Globe,
          description: "WordPress solutions"
        },
        {
          title: "E-commerce Development",
          href: "#ecommerce-packages",
          icon: ShoppingCart,
          description: "Online store packages"
        }
      ]
    },
    {
      title: "Contact Us",
      href: "#contact",
      icon: PhoneCall,
      description: "Get in touch with us"
    }
  ]

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:+918010355718" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Phone size={16} />
                <span>+91 801 035 5718 | +91 120 454 0354</span>
              </a>
              <a href="mailto:sales@truewebtechnologies.com" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Mail size={16} />
                <span>sales@truewebtechnologies.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/truewebtechnologies" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/truewebservices" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/trueweb-technologies/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="skype:abhi.win2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="#home" className="flex-shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="TrueWeb Technologies" 
                width={223} 
                height={81}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition-colors duration-300 py-6"
                  >
                    <item.icon size={18} />
                    <span>{item.title}</span>
                    {item.submenu && <ChevronDown size={16} className="ml-1" />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.submenu && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-2xl border-t-4 border-primary rounded-b-lg z-50"
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    >
                      <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.title} className="group">
                              <Link
                                href={subItem.href}
                                className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                              >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                  <subItem.icon size={20} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                                    {subItem.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>

                              {/* Third Level Menu */}
                              {subItem.submenu && (
                                <div className="ml-4 mt-2 space-y-2">
                                  {subItem.submenu.map((thirdItem) => (
                                    <Link
                                      key={thirdItem.title}
                                      href={thirdItem.href}
                                      className="flex items-center space-x-2 p-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded transition-colors duration-300"
                                    >
                                      <thirdItem.icon size={16} />
                                      <span>{thirdItem.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Need Help Choosing?</h4>
                              <p className="text-sm text-gray-600">Contact our experts for personalized recommendations</p>
                            </div>
                            <Link
                              href="#contact"
                              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                            >
                              Get Free Consultation
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col space-y-1 p-2"
            >
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </Link>
                  {item.submenu && (
                    <div className="ml-6 space-y-2 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <subItem.icon size={16} />
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="space-y-2">
                <a href="tel:+918010355718" className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>+91 801 035 5718</span>
                </a>
                <a href="mailto:sales@truewebtechnologies.com" className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>sales@truewebtechnologies.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default NavigationMenu
