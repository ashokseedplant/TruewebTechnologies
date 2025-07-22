/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      // About Us redirects
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
      
      // Digital Marketing redirects
      {
        source: '/digital-marketing',
        destination: '/expertise/digital-marketing',
        permanent: true,
      },
      {
        source: '/content-marketing',
        destination: '/expertise/digital-marketing/content-marketing',
        permanent: true,
      },
      {
        source: '/email-marketing',
        destination: '/expertise/digital-marketing/email-marketing',
        permanent: true,
      },
      {
        source: '/seo',
        destination: '/expertise/digital-marketing/seo',
        permanent: true,
      },
      {
        source: '/smo',
        destination: '/expertise/digital-marketing/smo',
        permanent: true,
      },
      {
        source: '/ppc',
        destination: '/expertise/digital-marketing/ppc',
        permanent: true,
      },
      
      // Web Designing redirects
      {
        source: '/web-designing',
        destination: '/expertise/web-designing',
        permanent: true,
      },
      {
        source: '/graphic-design',
        destination: '/expertise/web-designing/graphic-design',
        permanent: true,
      },
      {
        source: '/logo-design',
        destination: '/expertise/web-designing/logo-design',
        permanent: true,
      },
      {
        source: '/mobile-website-design',
        destination: '/expertise/web-designing/mobile-website-design',
        permanent: true,
      },
      {
        source: '/responsive-website-design',
        destination: '/expertise/web-designing/responsive-website-design',
        permanent: true,
      },
      {
        source: '/web-page-design',
        destination: '/expertise/web-designing/web-page-design',
        permanent: true,
      },
      {
        source: '/ui-ux-design',
        destination: '/expertise/web-designing/ui-ux-design',
        permanent: true,
      },
      {
        source: '/banner-design',
        destination: '/expertise/web-designing/banner-design',
        permanent: true,
      },
      
      // Development redirects
      {
        source: '/web-development',
        destination: '/expertise/web-development',
        permanent: true,
      },
      {
        source: '/php-development',
        destination: '/expertise/web-development/php-development',
        permanent: true,
      },
      {
        source: '/wordpress-development',
        destination: '/expertise/web-development/wordpress-development',
        permanent: true,
      },
      {
        source: '/magento-development',
        destination: '/expertise/web-development/magento-development',
        permanent: true,
      },
      {
        source: '/e-commerce-website',
        destination: '/expertise/web-development/e-commerce-website',
        permanent: true,
      },
      {
        source: '/dot-net-development',
        destination: '/expertise/web-development/dot-net-development',
        permanent: true,
      },
      {
        source: '/static-website-development',
        destination: '/expertise/web-development/static-website-development',
        permanent: true,
      },
      {
        source: '/custom-cms-development',
        destination: '/expertise/web-development/custom-cms-development',
        permanent: true,
      },
      {
        source: '/api-development',
        destination: '/expertise/web-development/api-development',
        permanent: true,
      },
      {
        source: '/mobile-app-development',
        destination: '/expertise/web-development/mobile-app-development',
        permanent: true,
      },
      
      // Other Services redirects
      {
        source: '/other-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/content-writing',
        destination: '/services/content-writing',
        permanent: true,
      },
      {
        source: '/hosting-domain',
        destination: '/services/hosting-domain',
        permanent: true,
      },
      {
        source: '/software-updates',
        destination: '/services/software-updates',
        permanent: true,
      },
      {
        source: '/website-maintenance',
        destination: '/services/website-maintenance',
        permanent: true,
      },
      
      // Packages redirects
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
  },
}

module.exports = nextConfig
