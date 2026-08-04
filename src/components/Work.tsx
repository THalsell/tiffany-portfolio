import Image from 'next/image';
import { FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi';
import { featuredProjects, additionalProjects } from '@/data/projects';
import Reveal from './Reveal';

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 mx-auto max-w-7xl 2xl:max-w-[1600px] px-6 py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Projects that make an impact
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 space-y-24">
        {featuredProjects.map((project, i) => {
          const [primary, mobile] = project.images;
          return (
            <Reveal
              key={project.slug}
              delay={i * 0.05}
              className="border-t border-border pt-16 first:border-t-0 first:pt-0"
            >
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-text-muted">{project.tagline}</p>
                <p className="mt-3 font-mono text-xs text-text-muted">
                  {project.stack.join(' · ')}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
                    >
                      Visit Live Site
                      <FiArrowUpRight size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-card-hover"
                    >
                      <FiGithub size={15} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              <div className="relative mt-10">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                  <div className="relative aspect-[1920/943] w-full">
                    <Image
                      src={primary.src}
                      alt={primary.label}
                      fill
                      sizes="(min-width: 1024px) 1100px, 90vw"
                      className="object-cover object-top"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {mobile && (
                  <div className="absolute -bottom-6 -right-4 w-[22%] overflow-hidden rounded-xl border border-border bg-card shadow-2xl sm:-bottom-8 sm:-right-6">
                    <div className="relative aspect-[9/16] w-full">
                      <Image
                        src={mobile.src}
                        alt={mobile.label}
                        fill
                        sizes="180px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-16 max-w-2xl space-y-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-accent">
                    The Challenge
                  </p>
                  <p className="mt-3 leading-relaxed text-text-muted">{project.problem}</p>
                </div>

                <div className="border-t border-border pt-10">
                  <p className="font-mono text-xs uppercase tracking-wide text-accent">
                    What I Built
                  </p>
                  <ul className="mt-3 space-y-2">
                    {project.whatIBuilt.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
                      >
                        <FiCheck size={14} className="mt-0.5 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-10">
                  <p className="font-mono text-xs uppercase tracking-wide text-accent">Impact</p>
                  <div className="mt-4 grid grid-cols-3 gap-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-lg font-semibold text-text sm:text-xl">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs text-text-muted">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Additional work */}
      <div className="mt-8 border-t border-border pt-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">Additional Work</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {additionalProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium text-text">{project.title}</h3>
                  <div className="flex shrink-0 items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="text-text-muted transition-colors hover:text-text"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="text-text-muted transition-colors hover:text-text"
                      >
                        <FiArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-elevated px-2.5 py-0.5 font-mono text-[11px] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
