import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  variant?: 'light' | 'dark'
}

export function Breadcrumb({ 
  items, 
  className = "", 
  variant = 'light' 
}: BreadcrumbProps) {
  const textColor = variant === 'light' 
    ? 'text-gray-600 dark:text-gray-300' 
    : 'text-white'
  
  const hoverColor = variant === 'light'
    ? 'hover:text-primary dark:hover:text-primary'
    : 'hover:text-blue-200'

  return (
    <nav className={`mb-6 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap space-x-2 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <li className={textColor} aria-hidden="true">
                <ChevronRight size={16} />
              </li>
            )}
            <li>
              {index === items.length - 1 || !item.href ? (
                <span className={`${textColor} font-semibold`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className={`${textColor} ${hoverColor} transition-colors`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}