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
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/about-us/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            About TrueWeb
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Leading web development and digital marketing company
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about-us/" title="About Us" icon="info">
                      Learn about our company and mission
                    </ListItem>
                    <ListItem href="/portfolios/" title="Portfolio" icon="briefcase">
                      View our successful projects
                    </ListItem>
                    <ListItem href="/seo-casestudy/" title="SEO Case Study" icon="bar-chart">
                      See our SEO success stories
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Expertise */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Expertise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-6 p-6 md:w-[700px] md:grid-cols-3 lg:w-[800px]">
                    {/* Digital Marketing */}
                    <div>
                      <div className="mb-2">
                        <span className="block text-sm font-semibold text-primary">Digital Marketing</span>
                        <span className="block text-xs text-muted-foreground">Grow your business online</span>
                      </div>
                      <NavigationMenuList className="flex flex-col gap-1">
                        <ListItem href="/digital-marketing/" title="Digital Marketing" icon="megaphone">
                          Complete digital marketing solutions
                        </ListItem>
                        <ListItem href="/content-marketing/" title="Content Marketing" icon="file-text">
                          Engaging content strategies
                        </ListItem>
                        <ListItem href="/email-marketing/" title="Email Marketing" icon="mail">
                          Effective email campaigns
                        </ListItem>
                        <ListItem href="/seo/" title="SEO" icon="search">
                          Search engine optimization
                        </ListItem>
                        <ListItem href="/smo/" title="SMO" icon="users">
                          Social media optimization
                        </ListItem>
                        <ListItem href="/ppc/" title="PPC" icon="dollar-sign">
                          Pay-per-click advertising
                        </ListItem>
                      </NavigationMenuList>
                    </div>
                    {/* Web Designing */}
                    <div>
                      <div className="mb-2">
                        <span className="block text-sm font-semibold text-primary">Web Designing</span>
                        <span className="block text-xs text-muted-foreground">Creative & modern designs</span>
                      </div>
                      <NavigationMenuList className="flex flex-col gap-1">
                        <ListItem href="/web-designing/" title="Web Designing" icon="layout">
                          Creative web design solutions
                        </ListItem>
                        <ListItem href="/graphic-design/" title="Graphic Design" icon="image">
                          Professional graphic design
                        </ListItem>
                        <ListItem href="/logo-design/" title="Logo Design" icon="award">
                          Custom logo design
                        </ListItem>
                        <ListItem href="/mobile-website-design/" title="Mobile Website Design" icon="smartphone">
                          Mobile-friendly designs
                        </ListItem>
                        <ListItem href="/responsive-website-design/" title="Responsive Web Design" icon="monitor">
                          Responsive design solutions
                        </ListItem>
                        <ListItem href="/web-page-design/" title="Web Page Design" icon="file">
                          Custom web page design
                        </ListItem>
                        <ListItem href="/ui-ux-design/" title="UI/UX Design" icon="palette">
                          User interface & experience design
                        </ListItem>
                        <ListItem href="/banner-design/" title="Banner Design" icon="image">
                          Creative banner design
                        </ListItem>
                      </NavigationMenuList>
                    </div>
                    {/* Development & More */}
                    <div>
                      <div className="mb-2">
                        <span className="block text-sm font-semibold text-primary">Development & More</span>
                        <span className="block text-xs text-muted-foreground">Web, eCommerce & more</span>
                      </div>
                      <NavigationMenuList className="flex flex-col gap-1">
                        <ListItem href="/web-development/" title="Web Development" icon="code">
                          Custom web development
                        </ListItem>
                        <ListItem href="/php-development/" title="PHP Development" icon="terminal">
                          PHP web applications
                        </ListItem>
                        <ListItem href="/wordpress-development/" title="WordPress Development" icon="globe">
                          WordPress websites
                        </ListItem>
                        <ListItem href="/magento-development/" title="Magento Development" icon="shopping-cart">
                          E-commerce with Magento
                        </ListItem>
                        <ListItem href="/e-commerce-website/" title="E-commerce Website" icon="shopping-bag">
                          Online store development
                        </ListItem>
                        <ListItem href="/dot-net-development/" title=".NET Development" icon="cpu">
                          Microsoft .NET solutions
                        </ListItem>
                        <ListItem href="/static-website-development/" title="Static Web Development" icon="file-code">
                          Fast static websites
                        </ListItem>
                        <ListItem href="/custom-cms-development/" title="Custom CMS Development" icon="layers">
                          Tailored content management systems
                        </ListItem>
                        <ListItem href="/api-development/" title="API Development" icon="link">
                          API & backend integration
                        </ListItem>
                        <ListItem href="/mobile-app-development/" title="Mobile App Development" icon="smartphone">
                          iOS & Android app solutions
                        </ListItem>
                      </NavigationMenuList>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Other Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/other-services/" title="Other Services">
                      Additional service offerings
                    </ListItem>
                    <ListItem href="/content-writing/" title="Content Writing">
                      Professional content writing
                    </ListItem>
                    <ListItem href="/hosting-domain/" title="Hosting & Domain">
                      Web hosting and domain services
                    </ListItem>
                    <ListItem href="/mobile-app-development/" title="Mobile App Development">
                      iOS and Android apps
                    </ListItem>
                    <ListItem href="/software-updates/" title="Software Updates">
                      Software maintenance and updates
                    </ListItem>
                    <ListItem href="/website-maintenance/" title="Website Maintenance">
                      Ongoing website maintenance
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Package */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Package</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                          href="/our-package/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Service Packages
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive packages tailored for your needs
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/seo-packages/" title="SEO Packages">
                      Search engine optimization packages
                    </ListItem>
                    <ListItem href="/smo-packages/" title="SMO Packages">
                      Social media optimization packages
                    </ListItem>
                    <ListItem href="/ppc-packages/" title="PPC Packages">
                      Pay-per-click advertising packages
                    </ListItem>
                    <ListItem href="/aso-plan/" title="ASO Plan">
                      App store optimization plans
                    </ListItem>
                    <ListItem href="/wordpress-development-2/" title="WordPress Development">
                      WordPress development packages
                    </ListItem>
                    <ListItem href="/e-commerce-development/" title="E-Commerce Development">
                      E-commerce development packages
                    </ListItem>
                  </ul>
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
  Link as LinkIcon
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
  link: LinkIcon
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
    <li className="w-full">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group flex w-full items-start gap-3 rounded-md p-3 select-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <span className="flex items-center justify-center min-w-[24px] w-6 h-6 mt-0.5">
            {IconComponent && <IconComponent size={20} className="text-primary shrink-0" />}
          </span>
          <span className="flex flex-col items-start">
            <span className="text-sm font-medium leading-none">{title}</span>
            <span className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-0.5">{children}</span>
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MainHeader
