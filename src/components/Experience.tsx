import { experience } from '@/data/experience';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm text-accent">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Where I&apos;ve grown
        </h2>
      </Reveal>

      <div className="relative mt-14 max-w-3xl">
        <div className="absolute left-[13px] top-2 bottom-2 w-px bg-border sm:left-[15px]" />

        <div className="space-y-14">
          {experience.map((entry, i) => (
            <Reveal
              key={entry.role + entry.org}
              delay={i * 0.08}
              className="relative pl-10 sm:pl-12"
            >
              <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-elevated text-accent ring-4 ring-bg sm:h-8 sm:w-8">
                <entry.icon size={14} />
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono text-xs uppercase tracking-wide text-text-muted">
                  {entry.period}
                </p>
                {entry.current && (
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                    Current
                  </span>
                )}
              </div>
              <h3 className="mt-1 text-xl font-medium text-text">{entry.role}</h3>
              <p className="text-text-muted">{entry.org}</p>

              {entry.summary && (
                <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">{entry.summary}</p>
              )}

              {entry.categories && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {entry.categories.map((category) => (
                    <div
                      key={category.label}
                      className="rounded-xl border border-border bg-card p-4 transition-transform hover:-translate-y-1.5"
                    >
                      <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-accent">
                        <category.icon size={13} />
                        {category.label}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {category.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
