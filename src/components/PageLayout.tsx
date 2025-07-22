"use client"

import NavigationMenu from '@/components/NavigationMenu'
import Footer from '@/components/Footer'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavigationMenu />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
