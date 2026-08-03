import { FiMonitor, FiShoppingCart, FiTrendingUp, FiSettings } from 'react-icons/fi';
import Reveal from './Reveal';

const items = [
  {
    icon: FiMonitor,
    title: 'Web Development',
    description:
      'Responsive websites and custom interfaces using Next.js, TypeScript, React, and Tailwind CSS.',
  },
  {
    icon: FiShoppingCart,
    title: 'E-commerce & Integrations',
    description:
      'Headless Shopify development, product data synchronization, APIs, shipping workflows, and third-party platforms.',
  },
  {
    icon: FiTrendingUp,
    title: 'SEO & Analytics',
    description:
      'Technical SEO, Google Search Console, GA4, Google Ads tracking, conversion events, sitemaps, structured content, and performance improvements.',
  },
  {
    icon: FiSettings,
    title: 'Digital Operations',
    description:
      'Business process improvements, automation, product management, marketing campaigns, platform troubleshooting, and ongoing site management.',
  },
];

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="grid divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 transition-colors hover:bg-card-hover"
            >
              <Icon size={20} className="text-accent" />
              <h3 className="mt-4 text-sm font-medium text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
