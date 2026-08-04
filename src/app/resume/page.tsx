'use client';

import Link from 'next/link';
import { FiArrowLeft, FiPrinter } from 'react-icons/fi';

const skills = [
  {
    label: 'Languages & Frameworks',
    items: 'TypeScript, JavaScript, HTML5, CSS3, Next.js, React, Tailwind CSS',
  },
  {
    label: 'E-Commerce & APIs',
    items: 'Shopify, Shopify Storefront API, Shopify Admin API, REST APIs',
  },
  {
    label: 'SEO & Analytics',
    items:
      'Technical & Local SEO, Google Analytics 4, Google Search Console, Google Merchant Center, Google Ads Conversion Tracking',
  },
  {
    label: 'Tools & Deployment',
    items: 'Vercel, Git, GitHub, VS Code, Postman, DNS & Domain Management',
  },
  {
    label: 'AI-Assisted Development',
    items: 'Claude Code, ChatGPT, GitHub Copilot, Prompt Engineering, Workflow Automation',
  },
  {
    label: 'Strategy & Operations',
    items:
      'UX/UI & Conversion Rate Optimization, Content Strategy, Project Planning, Client Consultation, Cross-functional Collaboration',
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] py-10 print:bg-white print:py-0">
      <div className="mx-auto mb-6 flex max-w-[8.5in] items-center justify-between px-6 print:hidden">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-[#2c3e50] transition-opacity hover:opacity-70"
        >
          <FiArrowLeft size={15} />
          Back to site
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-1.5 rounded-lg bg-[#2c3e50] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <FiPrinter size={15} />
          Print / Save as PDF
        </button>
      </div>

      <div className="mx-auto max-w-[8.5in] bg-white text-[#1a1a1a] shadow-xl print:shadow-none">
        {/* Header */}
        <div className="bg-[#2c3e50] px-10 py-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight text-[#d4b98c]">TIFFANY HALSELL</h1>
          <p className="mt-1.5 text-base font-medium">
            Full-Stack Web Developer | E-Commerce | SEO | Digital Marketing
          </p>
          <p className="mt-3 text-sm">
            931-397-0062 &nbsp;·&nbsp; tiffanyrenee100@gmail.com &nbsp;·&nbsp; Tennessee
          </p>
        </div>

        <div className="space-y-4 px-10 py-6 text-[13px] leading-snug">
          {/* Summary */}
          <section>
            <h2 className="text-[13px] font-bold uppercase tracking-wide text-[#2c3e50]">
              Summary
            </h2>
            <p className="mt-1.5 leading-relaxed text-[#333]">
              Full-stack web developer experienced designing, building, and maintaining
              production websites and e-commerce platforms from concept through deployment.
              Skilled in Next.js, React, TypeScript, Shopify, technical SEO, GA4, and Google
              Ads — working directly with business owners to grow online visibility and
              conversions.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-[13px] font-bold uppercase tracking-wide text-[#2c3e50]">
              Work Experience
            </h2>
            <div className="mt-1.5 flex items-baseline justify-between gap-4">
              <p className="font-semibold text-[#1a1a1a]">
                Web Developer &amp; Digital Solutions Specialist — Clay Powersports / Outboard
                Motor Sales
              </p>
              <p className="shrink-0 text-xs font-medium text-[#555]">Aug 2025 – Present</p>
            </div>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[#333]">
              <li>
                Lead design, development, deployment, and maintenance of production websites
                and headless Shopify e-commerce platforms using Next.js, React, TypeScript,
                Tailwind CSS, and Shopify.
              </li>
              <li>
                Develop custom e-commerce functionality via Shopify Storefront and Admin APIs,
                managing product catalogs, collections, and shopping experiences.
              </li>
              <li>
                Implement technical SEO (sitemaps, robots.txt, structured metadata) and manage
                GA4, Google Ads conversion tracking, and Merchant Center.
              </li>
              <li>
                Manage Vercel deployments, DNS/domain configuration, and ongoing production
                releases.
              </li>
              <li>
                Build API integrations and automation workflows supporting inventory sync and
                e-commerce operations.
              </li>
              <li>
                Collaborate directly with business leadership and clients from discovery
                through launch.
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-[13px] font-bold uppercase tracking-wide text-[#2c3e50]">
              Projects
            </h2>

            <div className="mt-1.5">
              <p className="font-semibold text-[#1a1a1a]">
                Precision Handwriting Analysis{' '}
                <span className="font-normal text-[#555]">
                  (Client Project) — Next.js · TypeScript · Tailwind CSS · Vercel
                </span>
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-[#333]">
                <li>
                  Designed, developed, and launched a professional website for a forensic
                  document examiner, from concept through production, in collaboration with
                  the client on branding.
                </li>
                <li>
                  Built SEO-focused regional landing pages for Kentucky and Ohio, with sitemap,
                  robots.txt, and Search Console setup.
                </li>
              </ul>
            </div>

            <div className="mt-2.5">
              <p className="font-semibold text-[#1a1a1a]">
                Dutch Craft Mattress{' '}
                <span className="font-normal text-[#555]">
                  (Company Project) — Next.js · TypeScript · Tailwind CSS · Vercel
                </span>
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-[#333]">
                <li>
                  Redesigned and modernized the company website with a scalable, reusable
                  component architecture.
                </li>
                <li>
                  Improved navigation and responsive layouts, and built new collection and
                  product pages across 8 product lines.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-[13px] font-bold uppercase tracking-wide text-[#2c3e50]">
              Education
            </h2>
            <div className="mt-1.5 flex items-baseline justify-between gap-4">
              <p className="text-[#1a1a1a]">
                <span className="font-semibold">Persevere</span> — Full-Stack Web Development
                Certification
              </p>
              <p className="shrink-0 text-xs font-medium text-[#555]">2023–2024</p>
            </div>
            <div className="mt-1 flex items-baseline justify-between gap-4">
              <p className="text-[#1a1a1a]">
                <span className="font-semibold">Banyan Labs</span> — Full-Stack Web Development
                Apprenticeship
              </p>
              <p className="shrink-0 text-xs font-medium text-[#555]">2025</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[13px] font-bold uppercase tracking-wide text-[#2c3e50]">
              Technical Skills
            </h2>
            <div className="mt-1.5 space-y-1">
              {skills.map((group) => (
                <p key={group.label} className="text-[#333]">
                  <span className="font-semibold text-[#1a1a1a]">{group.label}:</span>{' '}
                  {group.items}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0;
          }
        }
      `}</style>
    </main>
  );
}
