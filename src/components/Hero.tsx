import Image from 'next/image';
import Link from 'next/link';
import { FiCode, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import Reveal from './Reveal';
import MouseGlow from './MouseGlow';

const stack = [
  { label: 'Next.js', icon: '/images/icons/nextjs.png' },
  { label: 'TypeScript', icon: '/images/icons/typescript.png' },
  { label: 'Shopify', icon: '/images/icons/shopify.png' },
  { label: 'Tailwind CSS', icon: '/images/icons/tailwind.png' },
  { label: 'Node.js', icon: '/images/icons/nodejs.png' },
  { label: 'Vercel', icon: '/images/icons/vercel-logo.webp' },
];

const stats = [
  { icon: FiCode, value: '3+', label: 'Years Building' },
  { icon: FiTrendingUp, value: '6+', label: 'Platform Integrations' },
  { icon: FiGlobe, value: '3', label: 'Live Products' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-noise absolute inset-0" />
      <div className="bg-grid absolute inset-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="glow absolute -top-32 left-1/4 h-96 w-96 rounded-full" />
      <div className="glow-violet absolute -top-20 right-1/4 h-80 w-80 rounded-full" />
      <div className="glow-cyan absolute top-40 left-[10%] h-64 w-64 rounded-full" />
      <MouseGlow />

      <div className="relative mx-auto max-w-7xl 2xl:max-w-400 px-6 pb-8 pt-24 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_340px] lg:items-center xl:grid-cols-[1fr_380px] 2xl:grid-cols-[1fr_420px]">
          <Reveal>
            <p className="font-mono text-sm text-accent">
              Full-Stack Developer &amp; Digital Operations Specialist
            </p>

            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl">
              Building digital systems that help{' '}
              <span className="text-gradient">businesses grow</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
              I develop modern websites, e-commerce experiences, integrations, automation
              tools, and marketing infrastructure for real businesses.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-lg bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
              >
                View My Work
              </a>
              <Link
                href="/resume"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-card-hover"
              >
                View Resume
              </Link>
            </div>

            <div className="mt-10 flex w-fit max-w-full flex-nowrap items-center gap-3 rounded-2xl border border-border bg-card/30 px-4 py-3 backdrop-blur-xl md:gap-3.5 md:px-5 md:py-3 xl:gap-5 xl:px-6 xl:py-4">
              {stack.map(({ label, icon }) => (
                <span
                  key={label}
                  className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-text-muted md:gap-2 md:text-xs xl:text-sm"
                >
                  <Image
                    src={icon}
                    alt={label}
                    width={28}
                    height={28}
                    className="h-6 w-6 object-contain md:h-7 md:w-7"
                  />
                  <span className="hidden sm:inline">{label}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-85 pb-16 lg:mx-0 xl:max-w-95 xl:pb-20 2xl:max-w-105 2xl:pb-24">
            <div className="relative">
              <div className="glow-ring absolute -inset-10 rounded-full" />
              <svg
                viewBox="-10 -10 220 220"
                className="blob-ring pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2 -z-10"
              >
                <path
                  d="M90,0 C91.18,15.32 64.5,33.67 49.5,49.5 C34.5,65.33 15.91,95.59 0,95 C-15.91,94.41 -29.29,61.79 -45.96,45.96 C-62.63,30.13 -98.82,16.5 -100,0 C-101.18,-16.5 -69.7,-38.86 -53.03,-53.03 C-36.36,-67.2 -15.91,-86.77 0,-85 C15.91,-83.23 27.43,-56.6 42.43,-42.43 C57.43,-28.26 88.82,-15.32 90,0 Z"
                  transform="translate(110 110)"
                  fill="none"
                  stroke="url(#blobGradient)"
                  strokeWidth="1.2"
                />
                <defs>
                  <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8fb4ff" />
                    <stop offset="100%" stopColor="#b39dfb" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="neon-border relative aspect-4/5 overflow-hidden rounded-3xl border bg-elevated shadow-2xl" />

              <div className="absolute -bottom-8 -right-4 w-42.5 rounded-xl border border-border bg-card/95 p-3.5 shadow-2xl backdrop-blur sm:-right-6 xl:-bottom-10 xl:-right-8 xl:w-52.5 xl:rounded-2xl xl:p-5 2xl:-bottom-12 2xl:-right-10 2xl:w-60">
                <div className="space-y-2.5 xl:space-y-3.5">
                  {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex items-center gap-2.5 xl:gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-elevated text-accent xl:h-9 xl:w-9">
                        <Icon size={13} className="xl:hidden" />
                        <Icon size={17} className="hidden xl:block" />
                      </span>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold text-text xl:text-base">{value}</p>
                        <p className="text-[10px] text-text-muted xl:text-xs">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
