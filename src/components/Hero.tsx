import Image from 'next/image';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { FiCode, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import Reveal from './Reveal';
import MouseGlow from './MouseGlow';

const stack = [
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Shopify', icon: SiShopify },
  { label: 'Tailwind CSS', icon: SiTailwindcss },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Vercel', icon: SiVercel },
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
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="glow absolute -top-32 left-1/4 h-96 w-96 rounded-full" />
      <div className="glow-violet absolute -top-20 right-1/4 h-80 w-80 rounded-full" />
      <div className="glow-cyan absolute top-40 left-[10%] h-64 w-64 rounded-full" />
      <MouseGlow />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_340px] lg:items-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">
              Full-Stack Developer &amp; Digital Operations Specialist
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl">
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
                className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
              >
                View My Work
              </a>
              <a
                href="/resume.png"
                download="Tiffany_Halsell_Resume.png"
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-card-hover"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {stack.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-text-muted"
                >
                  <Icon size={13} />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[280px] lg:mx-0">
            <div className="glow absolute -inset-6 rounded-full opacity-70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl">
              <Image
                src="/images/headshot.jpg"
                alt="Tiffany Halsell"
                fill
                sizes="280px"
                className="object-cover object-[50%_28%]"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -right-6 w-[220px] rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur">
              <div className="space-y-3">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-elevated text-accent">
                      <Icon size={15} />
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-text">{value}</p>
                      <p className="text-[11px] text-text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
