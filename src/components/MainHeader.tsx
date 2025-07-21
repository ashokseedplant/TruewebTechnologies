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
              className="h-12 w-auto"
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
                    <ListItem href="/about-us/" title="About Us">
                      Learn about our company and mission
                    </ListItem>
                    <ListItem href="/portfolios/" title="Portfolio">
                      View our successful projects
                    </ListItem>
                    <ListItem href="/seo-casestudy/" title="SEO Case Study">
                      See our SEO success stories
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Expertise */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Expertise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 md:w-[700px] md:grid-cols-3 lg:w-[800px]">
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Digital Marketing</h4>
                      <ListItem href="/digital-marketing/" title="Digital Marketing">
                        Complete digital marketing solutions
                      </ListItem>
                      <ListItem href="/content-marketing/" title="Content Marketing">
                        Engaging content strategies
                      </ListItem>
                      <ListItem href="/email-marketing/" title="Email Marketing">
                        Effective email campaigns
                      </ListItem>
                      <ListItem href="/seo/" title="SEO">
                        Search engine optimization
                      </ListItem>
                      <ListItem href="/smo/" title="SMO">
                        Social media optimization
                      </ListItem>
                      <ListItem href="/ppc/" title="PPC">
                        Pay-per-click advertising
                      </ListItem>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Web Designing</h4>
                      <ListItem href="/web-designing/" title="Web Designing">
                        Creative web design solutions
                      </ListItem>
                      <ListItem href="/graphic-design/" title="Graphic Design">
                        Professional graphic design
                      </ListItem>
                      <ListItem href="/logo-design/" title="Logo Design">
                        Custom logo design
                      </ListItem>
                      <ListItem href="/mobile-website-design/" title="Mobile Website Design">
                        Mobile-friendly designs
                      </ListItem>
                      <ListItem href="/responsive-website-design/" title="Responsive Web Design">
                        Responsive design solutions
                      </ListItem>
                      <ListItem href="/web-page-design/" title="Web Page Design">
                        Custom web page design
                      </ListItem>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Development & More</h4>
                      <ListItem href="/web-development/" title="Web Development">
                        Custom web development
                      </ListItem>
                      <ListItem href="/php-development/" title="PHP Development">
                        PHP web applications
                      </ListItem>
                      <ListItem href="/wordpress-development/" title="WordPress Development">
                        WordPress websites
                      </ListItem>
                      <ListItem href="/magento-development/" title="Magento Development">
                        E-commerce with Magento
                      </ListItem>
                      <ListItem href="/e-commerce-website/" title="E-commerce Website">
                        Online store development
                      </ListItem>
                      <ListItem href="/dot-net-development/" title=".NET Development">
                        Microsoft .NET solutions
                      </ListItem>
                      <ListItem href="/static-website-development/" title="Static Web Development">
                        Fast static websites
                      </ListItem>
                    </div>
                  </ul>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MainHeader
