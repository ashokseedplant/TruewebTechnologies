"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

interface MainHeaderProps {
  isScrolled: boolean
  onMobileMenuToggle: () => void
}

const MainHeader = ({ isScrolled, onMobileMenuToggle }: MainHeaderProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="TrueWeb Technologies" 
              width={223} 
              height={81}
              className="h-12 w-auto dark:brightness-0 dark:invert"
              priority
            />
          </Link>

          {/* Desktop Navigation using ShadCN */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] md:w-[450px] lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 mb-3 no-underline outline-none focus:shadow-md"
                        href="/about-us/"
                      >
                        <div className="mb-2 text-lg font-medium">
                          About TrueWeb
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Leading web development and digital marketing company
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <ul className="grid gap-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/about-us/" title="About Us" icon="info">
                            Learn about our company and mission
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/about-us/portfolios/" title="Portfolio" icon="briefcase">
                            View our successful projects
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/about-us/seo-casestudy/" title="SEO Case Study" icon="bar-chart">
                            See our SEO success stories
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Expertise */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Expertise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="max-h-[85vh] overflow-y-auto w-[600px] grid gap-4 p-4 md:w-[900px] md:grid-cols-3 lg:w-[1000px] custom-scrollbar">
                    {/* Digital Marketing */}
                    <div className="flex flex-col">
                      <div className="mb-2 sticky top-0 bg-background z-10 pt-1 pb-2 shadow-sm border-b dark:border-gray-700">
                        <span className="block text-sm font-semibold text-primary">Digital Marketing</span>
                        <span className="block text-xs text-muted-foreground">Grow your business online</span>
                      </div>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/digital-marketing/" title="Digital Marketing" icon="megaphone">
                              Complete digital marketing solutions
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/digital-marketing/content-marketing/" title="Content Marketing" icon="file-text">
                              Engaging content strategies
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/digital-marketing/email-marketing/" title="Email Marketing" icon="mail">
                              Effective email campaigns
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/digital-marketing/seo/" title="SEO" icon="search">
                              Search engine optimization
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/digital-marketing/smo/" title="SMO" icon="users">
                              Social media optimization
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/digital-marketing/ppc/" title="PPC" icon="dollar-sign">
                              Pay-per-click advertising
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                    {/* Web Designing */}
                    <div className="flex flex-col">
                      <div className="mb-2 sticky top-0 bg-background z-10 pt-1 pb-2 shadow-sm border-b dark:border-gray-700">
                        <span className="block text-sm font-semibold text-primary">Web Designing</span>
                        <span className="block text-xs text-muted-foreground">Creative & modern designs</span>
                      </div>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/" title="Web Designing" icon="layout">
                              Creative web design solutions
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/graphic-design/" title="Graphic Design" icon="image">
                              Professional graphic design
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/logo-design/" title="Logo Design" icon="award">
                              Custom logo design
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/mobile-website-design/" title="Mobile Website Design" icon="smartphone">
                              Mobile-friendly designs
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/responsive-website-design/" title="Responsive Web Design" icon="monitor">
                              Responsive design solutions
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/web-page-design/" title="Web Page Design" icon="file">
                              Custom web page design
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/ui-ux-design/" title="UI/UX Design" icon="palette">
                              User interface & experience design
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-designing/banner-design/" title="Banner Design" icon="image">
                              Creative banner design
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                    {/* Development & More */}
                    <div className="flex flex-col">
                      <div className="mb-2 sticky top-0 bg-background z-10 pt-1 pb-2 shadow-sm border-b dark:border-gray-700">
                        <span className="block text-sm font-semibold text-primary">Development & More</span>
                        <span className="block text-xs text-muted-foreground">Web, eCommerce & more</span>
                      </div>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/" title="Web Development" icon="code">
                              Custom web development
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/php-development/" title="PHP Development" icon="terminal">
                              PHP web applications
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/wordpress-development/" title="WordPress Development" icon="globe">
                              WordPress websites
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/magento-development/" title="Magento Development" icon="shopping-cart">
                              E-commerce with Magento
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/e-commerce-website/" title="E-commerce Website" icon="shopping-bag">
                              Online store development
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/dot-net-development/" title=".NET Development" icon="cpu">
                              Microsoft .NET solutions
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/static-website-development/" title="Static Web Development" icon="file-code">
                              Fast static websites
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/custom-cms-development/" title="Custom CMS Development" icon="layers">
                              Tailored content management systems
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/api-development/" title="API Development" icon="link">
                              API & backend integration
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <ListItem href="/expertise/web-development/mobile-app-development/" title="Mobile App Development" icon="smartphone">
                              iOS & Android app solutions
                            </ListItem>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Other Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 mb-3 no-underline outline-none focus:shadow-md"
                        href="/other-services/"
                      >
                        <div className="mb-2 text-lg font-medium">
                          Other Services
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Additional services to complement your digital presence
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <ul className="grid gap-3 md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/content-writing/" title="Content Writing" icon="file-text">
                            Professional content writing
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/hosting-domain/" title="Hosting & Domain" icon="server">
                            Web hosting and domain services
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/mobile-app-development/" title="Mobile App Development" icon="smartphone">
                            iOS and Android apps
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/software-updates/" title="Software Updates" icon="refresh-cw">
                            Software maintenance and updates
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/website-maintenance/" title="Website Maintenance" icon="wrench">
                            Ongoing website maintenance
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Package */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Package</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/10 to-primary/5 p-4 mb-3 no-underline outline-none focus:shadow-md"
                        href="/our-package/"
                      >
                        <div className="mb-2 text-lg font-medium">
                          Service Packages
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Comprehensive packages tailored for your needs
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <ul className="grid gap-3 md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/seo-packages/" title="SEO Packages" icon="search">
                            Search engine optimization packages
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/smo-packages/" title="SMO Packages" icon="users">
                            Social media optimization packages
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/ppc-packages/" title="PPC Packages" icon="dollar-sign">
                            Pay-per-click advertising packages
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/aso-plan/" title="ASO Plan" icon="smartphone">
                            App store optimization plans
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/wordpress-development-2/" title="WordPress Development" icon="globe">
                            WordPress development packages
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <ListItem href="/e-commerce-development/" title="E-Commerce Development" icon="shopping-cart">
                            E-commerce development packages
                          </ListItem>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem>
                <Link href="/contact-us/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  )}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={onMobileMenuToggle}
                className="p-2"
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import {
  Info,
  Briefcase,
  BarChart,
  Megaphone,
  FileText,
  Mail,
  Search,
  Users,
  DollarSign,
  Layout,
  Image as ImageIcon,
  Award,
  Smartphone,
  Monitor,
  File,
  Code,
  Terminal,
  Globe,
  ShoppingCart,
  ShoppingBag,
  Cpu,
  FileCode,
  Palette,
  Layers,
  Link as LinkIcon,
  Server,
  RefreshCw,
  Wrench
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  info: Info,
  briefcase: Briefcase,
  "bar-chart": BarChart,
  megaphone: Megaphone,
  "file-text": FileText,
  mail: Mail,
  search: Search,
  users: Users,
  "dollar-sign": DollarSign,
  layout: Layout,
  image: ImageIcon,
  award: Award,
  smartphone: Smartphone,
  monitor: Monitor,
  file: File,
  code: Code,
  terminal: Terminal,
  globe: Globe,
  "shopping-cart": ShoppingCart,
  "shopping-bag": ShoppingBag,
  cpu: Cpu,
  "file-code": FileCode,
  palette: Palette,
  layers: Layers,
  link: LinkIcon,
  server: Server,
  "refresh-cw": RefreshCw,
  wrench: Wrench
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  icon?: string
  children: React.ReactNode
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, icon, children, ...props }, ref) => {
  const IconComponent = icon ? iconMap[icon] : null
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "flex w-full select-none items-start gap-3 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center min-w-[24px] w-6 h-6 mt-0.5">
          {IconComponent && <IconComponent size={20} className="text-primary shrink-0" />}
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-sm font-medium leading-tight">{title}</span>
          {children && (
            <span className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-0.5">{children}</span>
          )}
        </div>
      </a>
    </NavigationMenuLink>
  )
})
ListItem.displayName = "ListItem"

export default MainHeader
