'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import PackagesSection from '@/components/PackagesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudySection from '@/components/CaseStudySection'

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Add top spacing to account for fixed header */}
      <div className="pt-24 md:pt-28">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PackagesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CaseStudySection />
      </div>
    </motion.div>
  )
}
