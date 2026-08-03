'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { FeaturedProject } from '@/data/projects';
import ProjectGalleryFrame from './ProjectGalleryFrame';

interface StickyProjectPanelProps {
  projects: FeaturedProject[];
  activeIndex: number;
}

export default function StickyProjectPanel({ projects, activeIndex }: StickyProjectPanelProps) {
  const activeProject = projects[activeIndex] as FeaturedProject | undefined;

  return (
    <div className="sticky top-24 h-fit pb-16">
      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.div
            key={activeProject.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ProjectGalleryFrame
              images={activeProject.images}
              chromeLabel={
                activeProject.live?.replace('https://', '').replace(/\/$/, '') ??
                activeProject.title
              }
            />
          </motion.div>
        ) : (
          <motion.div
            key="github-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card px-8 text-center shadow-2xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-elevated text-accent">
              <FiGithub size={22} />
            </span>
            <div>
              <p className="text-lg font-medium text-text">More on GitHub</p>
              <p className="mt-1 text-sm text-text-muted">
                Additional projects and source code for everything above.
              </p>
            </div>
            <a
              href="https://github.com/THalsell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Visit GitHub
              <FiArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
