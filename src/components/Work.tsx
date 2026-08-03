'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { featuredProjects, additionalProjects } from '@/data/projects';
import ProjectTextBlock from './ProjectTextBlock';
import ProjectPreviewGrid from './ProjectPreviewGrid';
import StickyProjectPanel from './StickyProjectPanel';
import Reveal from './Reveal';

function GithubSentinel({ onActive }: { onActive: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, margin: '-10% 0px -10% 0px' });

  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return <div ref={ref} className="h-px" />;
}

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Projects that make an impact
          </h2>
        </div>
        <a
          href="#case-studies"
          className="hidden items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-text sm:flex"
        >
          View all projects
          <FiArrowUpRight size={15} />
        </a>
      </Reveal>

      <div className="mt-14">
        <ProjectPreviewGrid projects={featuredProjects} />
      </div>

      <div id="case-studies" className="mt-8 scroll-mt-20 lg:grid lg:grid-cols-2 lg:gap-16">
        <div>
          {featuredProjects.map((project, i) => (
            <ProjectTextBlock
              key={project.slug}
              project={project}
              index={i}
              onActive={setActiveIndex}
            />
          ))}
          <GithubSentinel onActive={() => setActiveIndex(featuredProjects.length)} />
        </div>

        <div className="hidden lg:block">
          <StickyProjectPanel projects={featuredProjects} activeIndex={activeIndex} />
        </div>
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
