"use client"

import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
