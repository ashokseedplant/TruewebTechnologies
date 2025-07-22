# TrueWeb Technologies Website

A modern recreation of the TrueWeb Technologies website using Next.js, ShadCN UI, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **Component Library**: Using ShadCN UI for consistent design
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Mode Support**: Seamless dark/light mode switching
- **Mega Menu Navigation**: Advanced dropdown menus with icons and descriptions
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
