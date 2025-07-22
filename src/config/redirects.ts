/**
 * Redirects configuration for Next.js
 * This file defines redirects from old URLs to new structured URLs
 */

import type { NextConfig } from 'next'

/**
 * Add redirect rules for URL structure changes
 * These redirects will be applied at the server level
 */
export const redirects = async () => {
  return [
    // About section redirects
    {
      source: '/about-us',
      destination: '/about-us/company',
      permanent: true,
    },
    {
      source: '/portfolios',
      destination: '/about-us/portfolios',
      permanent: true,
    },
    {
      source: '/seo-casestudy',
      destination: '/about-us/seo-casestudy',
      permanent: true,
    },

    // Digital Marketing section redirects
    {
      source: '/digital-marketing',
      destination: '/services/digital-marketing',
      permanent: true,
    },
    {
      source: '/content-marketing',
      destination: '/services/digital-marketing/content-marketing',
      permanent: true,
    },
    {
      source: '/email-marketing',
      destination: '/services/digital-marketing/email-marketing',
      permanent: true,
    },
    {
      source: '/seo',
      destination: '/services/digital-marketing/seo',
      permanent: true,
    },
    {
      source: '/smo',
      destination: '/services/digital-marketing/smo',
      permanent: true,
    },
    {
      source: '/ppc',
      destination: '/services/digital-marketing/ppc',
      permanent: true,
    },

    // Web Designing section redirects
    {
      source: '/web-designing',
      destination: '/services/web-designing',
      permanent: true,
    },
    {
      source: '/graphic-design',
      destination: '/services/web-designing/graphic-design',
      permanent: true,
    },
    {
      source: '/logo-design',
      destination: '/services/web-designing/logo-design',
      permanent: true,
    },
    {
      source: '/mobile-website-design',
      destination: '/services/web-designing/mobile-website-design',
      permanent: true,
    },
    {
      source: '/responsive-website-design',
      destination: '/services/web-designing/responsive-website-design',
      permanent: true,
    },
    {
      source: '/web-page-design',
      destination: '/services/web-designing/web-page-design',
      permanent: true,
    },
    {
      source: '/ui-ux-design',
      destination: '/services/web-designing/ui-ux-design',
      permanent: true,
    },
    {
      source: '/banner-design',
      destination: '/services/web-designing/banner-design',
      permanent: true,
    },

    // Development section redirects
    {
      source: '/web-development',
      destination: '/services/development',
      permanent: true,
    },
    {
      source: '/php-development',
      destination: '/services/development/php-development',
      permanent: true,
    },
    {
      source: '/wordpress-development',
      destination: '/services/development/wordpress-development',
      permanent: true,
    },
    {
      source: '/magento-development',
      destination: '/services/development/magento-development',
      permanent: true,
    },
    {
      source: '/e-commerce-website',
      destination: '/services/development/e-commerce-website',
      permanent: true,
    },
    {
      source: '/dot-net-development',
      destination: '/services/development/dot-net-development',
      permanent: true,
    },
    {
      source: '/static-website-development',
      destination: '/services/development/static-website-development',
      permanent: true,
    },
    {
      source: '/custom-cms-development',
      destination: '/services/development/custom-cms-development',
      permanent: true,
    },
    {
      source: '/api-development',
      destination: '/services/development/api-development',
      permanent: true,
    },
    {
      source: '/mobile-app-development',
      destination: '/services/development/mobile-app-development',
      permanent: true,
    },

    // Other Services redirects
    {
      source: '/other-services',
      destination: '/services/other-services',
      permanent: true,
    },
    {
      source: '/content-writing',
      destination: '/services/other-services/content-writing',
      permanent: true,
    },
    {
      source: '/hosting-domain',
      destination: '/services/other-services/hosting-domain',
      permanent: true,
    },
    {
      source: '/software-updates',
      destination: '/services/other-services/software-updates',
      permanent: true,
    },
    {
      source: '/website-maintenance',
      destination: '/services/other-services/website-maintenance',
      permanent: true,
    },

    // Packages redirects
    {
      source: '/our-package',
      destination: '/packages',
      permanent: true,
    },
    {
      source: '/seo-packages',
      destination: '/packages/seo-packages',
      permanent: true,
    },
    {
      source: '/smo-packages',
      destination: '/packages/smo-packages',
      permanent: true,
    },
    {
      source: '/ppc-packages',
      destination: '/packages/ppc-packages',
      permanent: true,
    },
    {
      source: '/aso-plan',
      destination: '/packages/aso-plan',
      permanent: true,
    },
    {
      source: '/wordpress-development-2',
      destination: '/packages/wordpress-development',
      permanent: true,
    },
    {
      source: '/e-commerce-development',
      destination: '/packages/e-commerce-development',
      permanent: true,
    },
  ]
}

/**
 * Configure Next.js with redirects
 * @param config - The existing Next.js config
 * @returns The updated Next.js config with redirects
 */
export function withRedirects(config: NextConfig = {}): NextConfig {
  return {
    ...config,
    async redirects() {
      const rules = await redirects()
      return rules
    },
  }
}
