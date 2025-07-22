# TrueWeb Technologies Website

A modern recreation of the TrueWeb Technologies website using Next.js, ShadCN UI, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **Component Library**: Using ShadCN UI for consistent design
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Mode Support**: Seamless dark/light mode switching
- **Mega Menu Navigation**: Advanced dropdown menus with icons and descriptions
- **SEO Optimized**: Structured URL paths and metadata for better search engine visibility
- **Redirects System**: Maintains SEO value from old URLs with proper redirects
- **Performance Optimized**: Fast loading and rendering

## Structure

### Components

- **MainHeader**: Navigation bar with mega menu dropdowns
  - Organized sections for About Us, Our Expertise, Other Services, etc.
  - Clean icon-based navigation using Lucide React icons
  
- **Footer**: Comprehensive footer with multiple sections
  - Quick links, services, packages, and resources
  - Office locations with contact information
  - Payment methods
  - Social media links

- **SEO**: Reusable SEO component for metadata management
  - Generates appropriate metadata for all pages
  - Works with Next.js 13 App Router
  - Supports OpenGraph, Twitter Cards, and canonical URLs

### URL Structure

The website uses a hierarchical URL structure that matches the navigation menu organization:

- `/about-us/` - About Us section
  - `/about-us/portfolios` - Portfolio examples
  - `/about-us/seo-casestudy` - SEO case studies

- `/expertise/` - Our Expertise section
  - `/expertise/digital-marketing/` - Digital Marketing services
    - `/expertise/digital-marketing/seo` - SEO services
    - `/expertise/digital-marketing/smo` - Social Media services
    - `/expertise/digital-marketing/ppc` - PPC services
    - etc.
  - `/expertise/web-designing/` - Web Design services
  - `/expertise/web-development/` - Web Development services

- `/services/` - Other Services section
  - `/services/content-writing` - Content Writing
  - `/services/hosting-domain` - Hosting & Domain
  - etc.

- `/packages/` - Our Packages section
  - `/packages/seo-packages` - SEO Packages
  - `/packages/smo-packages` - SMO Packages
  - etc.

### Redirects System

The website includes a comprehensive redirects system in `next.config.js` to ensure that all old URLs (e.g., `/seo`) properly redirect to their new locations (e.g., `/expertise/digital-marketing/seo`). This maintains SEO value and prevents broken links.

### Key UI Elements

- **Mega Menu**: Column-based organization for better readability
  - Digital Marketing, Web Designing, and Development sections
  - Icon-based navigation items with descriptions
  
- **Dropdown Navigation**: ShadCN UI NavigationMenu components
  - Custom ListItem components for consistent styling

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Dark Mode Implementation

The website supports both light and dark modes with theme-aware styling:
- Background colors adjust automatically
- Text colors are optimized for readability in both modes
- UI components from ShadCN handle theming automatically

## Notes

- Payment method images need to be added to `/public/images/payment/`
- Font styling matches the original TrueWeb Technologies website
- Custom styling for navigation menus ensures proper alignment and visibility
