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
    <section className="mx-auto max-w-7xl 2xl:max-w-400 px-6 pb-24 pt-4">
      <Reveal>
        <div className="grid divide-y divide-border rounded-2xl border border-border bg-card/30 backdrop-blur-xl sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative p-6">
              {i !== 0 && (
                <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border sm:block" />
              )}
              <div className="flex items-center gap-2.5">
                <Icon size={18} className="shrink-0 text-accent" />
                <h3 className="text-sm font-medium text-text">{title}</h3>
              </div>
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
