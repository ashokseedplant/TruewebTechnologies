"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
  const offices = [
    {
      country: "India",
      address: "E-38, 2nd Floor, Sector 63, Noida, Uttar Pradesh 201301",
      phone: "+91-8010-355-718",
      email: "sales@truewebtechnologies.com"
    },
    {
      country: "Kenya",
      address: "Mirage Towers building 7th Floor, Tower 2 Nairobi Kenya",
      phone: "+254-722-945-687",
      email: "kenya@truewebtechnologies.com"
    },
    {
      country: "France",
      address: "Ultimate Concept Sarl 91 Rue du Faubourg Saint Honoré 75008 Paris",
      phone: "",
      email: "france@truewebtechnologies.com"
    },
    {
      country: "Canada",
      address: "5625 Boileau Brossard, QC J4Z 1V4",
      phone: "",
      email: "canada@truewebtechnologies.com"
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Quick Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Quick links</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-3 text-gray-200">
              <li><Link href="/about-us" className="text-gray-200 hover:text-primary transition-colors">- ABOUT US</Link></li>
              <li><Link href="/our-expertise" className="text-gray-200 hover:text-primary transition-colors">- OUR EXPERTISE</Link></li>
              <li><Link href="/our-package" className="text-gray-200 hover:text-primary transition-colors">- OUR PACKAGE</Link></li>
              <li><Link href="/contact-us" className="text-gray-200 hover:text-primary transition-colors">- CONTACT US</Link></li>
              <li><Link href="/refund-policy" className="text-gray-200 hover:text-primary transition-colors">- Refund Policy</Link></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">OUR SERVICES</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-3 text-gray-200">
              <li><Link href="/digital-marketing" className="text-gray-200 hover:text-primary transition-colors">- Digital Marketing</Link></li>
              <li><Link href="/web-designing" className="text-gray-200 hover:text-primary transition-colors">- Web Designing</Link></li>
              <li><Link href="/web-development" className="text-gray-200 hover:text-primary transition-colors">- Web Development</Link></li>
              <li><Link href="/other-services" className="text-gray-200 hover:text-primary transition-colors">- Other Services</Link></li>
            </ul>
          </div>
          
          {/* Our Package */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">OUR PACKAGE</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-3 text-gray-200">
              <li><Link href="/aso-plan" className="text-gray-200 hover:text-primary transition-colors">- ASO Plan</Link></li>
              <li><Link href="/seo-packages" className="text-gray-200 hover:text-primary transition-colors">- SEO Packages</Link></li>
              <li><Link href="/ppc-packages" className="text-gray-200 hover:text-primary transition-colors">- PPC Packages</Link></li>
              <li><Link href="/smo-packages" className="text-gray-200 hover:text-primary transition-colors">- SMO Packages</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">RESOURCES</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-3 text-gray-200">
              <li><Link href="/make-payment" className="text-gray-200 hover:text-primary transition-colors">- MAKE PAYMENT</Link></li>
              <li><Link href="/contact-us" className="text-gray-200 hover:text-primary transition-colors">- CONTACT US</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-200 hover:text-primary transition-colors">- Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-200 hover:text-primary transition-colors">- Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-700">
          {/* India Office */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Head Office</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                <span>{offices[0].address}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-primary flex-shrink-0" size={18} />
                <Link href={`mailto:${offices[0].email}`} className="text-gray-200 hover:text-primary transition-colors">
                  {offices[0].email}
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary flex-shrink-0" size={18} />
                <Link href={`tel:${offices[0].phone}`} className="text-gray-200 hover:text-primary transition-colors">
                  {offices[0].phone}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Kenya Office */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Our Kenya office</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                <span>{offices[1].address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary flex-shrink-0" size={18} />
                <Link href={`tel:${offices[1].phone}`} className="text-gray-200 hover:text-primary transition-colors">
                  {offices[1].phone}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* France Office */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Our France Office</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                <span>{offices[2].address}</span>
              </li>
            </ul>
            
            <h5 className="text-xl font-semibold mb-4 mt-8 text-white">Canada Office</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                <span>{offices[3].address}</span>
              </li>
            </ul>
          </div>
          
          {/* Payment Options */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">PAYMENT METHODS</h5>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <ul className="space-y-4 text-gray-200">
              <li>
                <Link href="/make-payment" className="block">
                  <Image 
                    src="/images/payment/paypal.png" 
                    alt="PayPal" 
                    width={150} 
                    height={50}
                    className="bg-white p-2 rounded hover:opacity-90 transition-opacity"
                  />
                </Link>
              </li>
              <li>
                <Link href="/upi-payment" className="block">
                  <Image 
                    src="/images/payment/upi.png" 
                    alt="UPI" 
                    width={150} 
                    height={50}
                    className="bg-white p-2 rounded hover:opacity-90 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info & Social */}
        <div className="pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-200">
            <Link href="tel:+911204564025" className="flex items-center text-gray-200 hover:text-primary transition-colors">
              <Phone size={20} className="mr-2" /> +91 120 4564025
            </Link>
            <Link href="tel:+918010355718" className="flex items-center text-gray-200 hover:text-primary transition-colors">
              <Phone size={20} className="mr-2" /> +91 801 035 5718
            </Link>
            <Link href="mailto:sales@truewebtechnologies.com" className="flex items-center text-gray-200 hover:text-primary transition-colors">
              <Mail size={20} className="mr-2" /> sales@truewebtechnologies.com
            </Link>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <Link href="https://www.facebook.com/truewebtechnologies" target="_blank" rel="noopener noreferrer" 
              className="bg-primary hover:bg-secondary text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com/TrueWebTechnol1" target="_blank" rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
              <Twitter size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/trueweb-technologies/" target="_blank" rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
              <Linkedin size={20} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
              <Youtube size={20} />
            </Link>
          </div>
          
          <Link href="/faq" className="inline-block text-gray-200 hover:text-primary transition-colors">
            FAQ
          </Link>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-sm opacity-80 text-gray-300">
            <p>© {new Date().getFullYear()} TrueWeb Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
