import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-white">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <>
              <Link 
                href={item.href} 
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
              <ChevronRight size={16} className="text-white/60" />
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}