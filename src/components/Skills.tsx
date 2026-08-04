import { featuredProjects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import Reveal from './Reveal';

const aiGroup = skillGroups.find((group) => group.label === 'AI-Assisted Development');
const otherGroups = skillGroups.filter((group) => group !== aiGroup);

const alsoWorkingWith = Array.from(
  new Set(otherGroups.flatMap((group) => group.items))
).filter((item) => !featuredProjects.some((project) => project.stack.includes(item)));

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 mx-auto max-w-7xl 2xl:max-w-400 px-6 py-24">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm text-accent">Technical Skills</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Proven in production, not just listed
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1.5">
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                {project.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-elevated px-3 py-1 text-sm text-text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {aiGroup && (
          <Reveal delay={featuredProjects.length * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1.5">
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                {aiGroup.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {aiGroup.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-elevated px-3 py-1 text-sm text-text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted">
          Also working with
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {alsoWorkingWith.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
