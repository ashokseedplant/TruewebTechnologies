"use client"

import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <MainHeader 
        isScrolled={isScrolled} 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
