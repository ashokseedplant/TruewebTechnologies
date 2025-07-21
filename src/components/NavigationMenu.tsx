"use client"

import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'
import MobileMenu from './MobileMenu'

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white dark:bg-gray-900'}`}>
      {/* Top Header - Only show on desktop and not scrolled */}
      {!isScrolled && <TopHeader />}
      
      {/* Main Header */}
      <MainHeader 
        isScrolled={isScrolled} 
        onMobileMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
      />
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  )
}

export default NavigationMenu
