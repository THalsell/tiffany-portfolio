import {
  FiAward,
  FiBriefcase,
  FiCode,
  FiEdit3,
  FiShoppingCart,
  FiTerminal,
  FiTrendingUp,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';

export interface ExperienceCategory {
  label: string;
  icon: IconType;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  icon: IconType;
  current?: boolean;
  summary?: string;
  categories?: ExperienceCategory[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Developer & Digital Operations Specialist',
    org: 'Clay Powersports / Outboard Motor Sales',
    period: 'Aug 2025 — Present',
    icon: FiCode,
    current: true,
    categories: [
      {
        label: 'Development',
        icon: FiCode,
        items: [
          'Build and maintain production websites and headless Shopify storefronts with Next.js, React, and TypeScript',
        ],
      },
      {
        label: 'E-commerce & Integrations',
        icon: FiShoppingCart,
        items: [
          'Develop custom storefront functionality on Shopify Storefront & Admin APIs',
          'Maintain product catalogs, inventory sync, and automation workflows',
        ],
      },
      {
        label: 'SEO & Analytics',
        icon: FiTrendingUp,
        items: [
          'Plan and implement technical SEO — sitemaps, robots.txt, structured metadata, local SEO',
          'Configure Google Analytics 4, Google Ads conversion tracking, and Google Merchant Center',
        ],
      },
      {
        label: 'Marketing & Content',
        icon: FiEdit3,
        items: [
          'Design and optimize landing pages and content to improve conversion and search visibility',
        ],
      },
      {
        label: 'Business Operations',
        icon: FiBriefcase,
        items: [
          'Manage Vercel deployments, domain/DNS configuration, and production releases',
          'Work directly with leadership on digital strategy and technology decisions',
        ],
      },
    ],
  },
  {
    role: 'Full-Stack Web Development Apprenticeship',
    org: 'Banyan Labs',
    period: '2025',
    icon: FiTerminal,
    summary:
      'Built client-facing applications, including a customizable donation widget deployed across multiple websites and admin dashboards, using Next.js, TypeScript, and Tailwind CSS, with payments (Stripe), auth (Clerk), and Supabase.',
  },
  {
    role: 'Full-Stack Web Development Certification',
    org: 'Persevere',
    period: '2023 — 2024',
    icon: FiAward,
    summary:
      'Completed intensive full-stack training covering frontend and backend fundamentals, databases, and API development — the foundation for everything since.',
  },
];
