'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import PackagesSection from '@/components/PackagesSection'
// import Portfolio from '@/components/Portfolio'
// import Testimonials from '@/components/Testimonials'
// import CaseStudy from '@/components/CaseStudy'
// import Footer from '@/components/Footer'

export default function Home() {
  return (
    <motion.main 
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PackagesSection />
      {/* <Portfolio />
      <Testimonials />
      <CaseStudy />
      <Footer /> */}
    </motion.main>
  )
}
