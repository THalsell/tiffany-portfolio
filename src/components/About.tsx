import Reveal from './Reveal';

const facts = [
  { label: 'Based in', value: 'Tennessee, USA' },
  {
    label: 'Currently',
    value: 'Full-Stack Developer & Digital Operations Specialist at Clay Powersports',
  },
  { label: 'Focus areas', value: 'Next.js · Shopify · SEO · Analytics · Automation' },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 mx-auto max-w-7xl 2xl:max-w-400 px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">About</p>
      </Reveal>

      <Reveal delay={0.05} className="mt-6 max-w-3xl">
        <p className="text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
          More than a developer — I work at the intersection of technology, business, and
          digital operations.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
        <Reveal delay={0.1} className="max-w-2xl space-y-5 leading-relaxed text-text-muted">
          <p>
            My role extends beyond building websites — I solve real operational problems,
            connect platforms, improve customer experiences, support marketing initiatives, and
            manage the systems businesses rely on every day.
          </p>
          <p>
            I&apos;m especially experienced in Next.js, TypeScript, Shopify, API integrations,
            technical SEO, analytics, and translating business needs into practical digital
            solutions.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="grid grid-cols-1 gap-6 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-wide text-text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-text">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
