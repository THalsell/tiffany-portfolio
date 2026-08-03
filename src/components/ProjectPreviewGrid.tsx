import { FiArrowUpRight } from 'react-icons/fi';
import type { FeaturedProject } from '@/data/projects';
import ProjectGalleryFrame from './ProjectGalleryFrame';
import Reveal from './Reveal';

export default function ProjectPreviewGrid({ projects }: { projects: FeaturedProject[] }) {
  return (
    <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.08}>
          <a
            href={`#${project.slug}`}
            className="group block transition-transform hover:-translate-y-1.5"
          >
            <ProjectGalleryFrame images={project.images} />
            <h3 className="mt-10 flex items-center gap-1.5 text-lg font-medium text-text">
              {project.title}
              <FiArrowUpRight
                size={16}
                className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{project.tagline}</p>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
