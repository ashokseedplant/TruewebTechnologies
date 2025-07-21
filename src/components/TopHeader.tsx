"use client"

import React from 'react'
import { Phone, Mail, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react'

const TopHeader = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+918010355718" 
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span>+91 801 035 5718 +91 120 454 0354</span>
            </a>
            <a 
              href="mailto:sales@truewebtechnologies.com" 
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>sales@truewebtechnologies.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/truewebtechnologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://twitter.com/truewebservices" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/trueweb-technologies/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="skype:abhi.win2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="Skype"
            >
              <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
