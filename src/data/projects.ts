export interface Metric {
  label: string;
  value: string;
}

export interface ProjectImage {
  label: string;
  src: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  images: ProjectImage[];
  metrics: Metric[];
  problem: string;
  whatIBuilt: string[];
  stack: string[];
  live?: string;
  github?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'outboard-motor-sales',
    title: 'Outboard Motor Sales',
    tagline: 'Headless commerce platform for a multi-brand outboard motor dealership',
    images: [
      { label: 'Desktop', src: '/images/oms-desktop.png' },
      { label: 'Mobile', src: '/images/oms-mobile.jpeg' },
    ],
    metrics: [
      { label: 'Role', value: 'Full-Stack Developer' },
      { label: 'Integrations', value: '6+ Platforms' },
      { label: 'Status', value: 'Live in Production' },
    ],
    problem:
      'Dealers needed a modern, fast e-commerce experience for selling outboard motors nationwide — one that could carry product data, inventory, and marketing across a headless architecture instead of a stock template.',
    whatIBuilt: [
      'Headless Shopify storefront on a Next.js frontend',
      'Product and inventory synchronization across systems',
      'Lizzy integration workflows connecting business platforms',
      'Shipping and product-purchasing logic',
      'Google Analytics 4 and Google Ads conversion tracking',
      'Technical SEO — sitemaps, structured data, Search Console, Merchant Center',
      'Marketing banners, promotions, and seasonal campaigns',
      'Ongoing platform operations and troubleshooting',
    ],
    stack: ['Next.js', 'TypeScript', 'Shopify', 'GraphQL', 'Tailwind CSS', 'GA4', 'Vercel'],
    live: 'https://outboardmotorsales.com/',
    github: 'https://github.com/THalsell/outboard-dealership',
  },
  {
    slug: 'precision-handwriting-analysis',
    title: 'Precision Handwriting Analysis',
    tagline: 'Brand, website, and regional SEO for a certified forensic document examiner',
    images: [
      { label: 'Desktop', src: '/images/precision-desktop.png' },
      { label: 'Mobile', src: '/images/precision-mobile.jpeg' },
    ],
    metrics: [
      { label: 'Role', value: 'Brand → Launch' },
      { label: 'Regions', value: '3 Landing Pages' },
      { label: 'Status', value: 'Live in Production' },
    ],
    problem:
      'A certified forensic document examiner needed a professional web presence to build credibility with attorneys, courts, and private clients — and to be found in search across three separate state markets.',
    whatIBuilt: [
      'Complete branding and website design, in collaboration with the client',
      'Responsive Next.js site built from concept through production',
      'Regional SEO landing pages for Kentucky and Ohio markets',
      'Sitemap and Google Search Console setup',
      'Google Business Profile guidance',
      'End-to-end client communication and project management',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    live: 'https://precisionhandwritinganalysis.com/',
  },
  {
    slug: 'dutch-craft-mattress',
    title: 'Dutch Craft Mattress',
    tagline: 'Modernized marketing site for a family-owned mattress manufacturer',
    images: [
      { label: 'Homepage', src: '/images/dutchcraft-home.png' },
      { label: 'Mobile', src: '/images/dutchcraft-mobile.jpeg' },
    ],
    metrics: [
      { label: 'Role', value: 'Redesign' },
      { label: 'Collections', value: '8 Product Lines' },
      { label: 'Status', value: 'Live in Production' },
    ],
    problem:
      "A 20-year-old mattress manufacturer's site no longer matched the quality of the product — the brand needed a modern redesign that could scale as the product catalog grew.",
    whatIBuilt: [
      'Full redesign and modernization using Next.js and Tailwind CSS',
      'Reusable, scalable component architecture',
      'Responsive product collection pages across 8 mattress lines',
      'Improved navigation and overall user experience',
      'Foundation laid for future e-commerce functionality',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    live: 'https://www.dutchcraft.net/',
    github: 'https://github.com/THalsell/dutch-craft-mattress',
  },
];

export interface AdditionalProject {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
}

export const additionalProjects: AdditionalProject[] = [
  {
    title: 'Camper Sleep',
    description: 'An in-progress Next.js project — not yet launched.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/THalsell/camper-sleep',
  },
];
