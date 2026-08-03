'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { FeaturedProject } from '@/data/projects';
import Reveal from './Reveal';
import ProjectGalleryFrame from './ProjectGalleryFrame';

interface ProjectTextBlockProps {
  project: FeaturedProject;
  index: number;
  onActive?: (index: number) => void;
}

export default function ProjectTextBlock({ project, index, onActive }: ProjectTextBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, margin: '-10% 0px -10% 0px' });

  useEffect(() => {
    if (inView) onActive?.(index);
  }, [inView, index, onActive]);

  return (
    <div
      ref={ref}
      id={project.slug}
      className="scroll-mt-24 border-t border-border py-20 first:border-t-0 first:pt-0"
    >
      <div className="mb-10 lg:hidden">
        <ProjectGalleryFrame
          images={project.images}
          chromeLabel={project.live?.replace('https://', '').replace(/\/$/, '') ?? project.title}
        />
      </div>

      <Reveal>
        <h3 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-2xl text-text-muted">{project.tagline}</p>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 grid grid-cols-3 gap-4 sm:max-w-xl">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-border bg-card px-4 py-3 transition-transform hover:-translate-y-1.5"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
              {metric.label}
            </p>
            <p className="mt-1 text-sm font-medium text-text sm:text-base">{metric.value}</p>
          </div>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">The Problem</p>
          <p className="mt-3 leading-relaxed text-text-muted">{project.problem}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">What I Built</p>
          <ul className="mt-3 space-y-2">
            {project.whatIBuilt.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-elevated px-3 py-1 font-mono text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              View Case Study
              <FiArrowUpRight size={15} />
            </a>
          )}
        </div>
      </Reveal>
    </div>
  );
}
