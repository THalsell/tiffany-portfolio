import Image from 'next/image';
import type { ProjectImage } from '@/data/projects';

function Frame({ image, priority }: { image?: ProjectImage; priority?: boolean }) {
  if (!image) {
    return (
      <div className="flex h-full min-h-32 items-center justify-center bg-gradient-to-br from-elevated to-card">
        <p className="font-mono text-xs text-text-muted">Coming soon</p>
      </div>
    );
  }
  return (
    <Image
      src={image.src}
      alt={image.label}
      fill
      sizes="(min-width: 1024px) 500px, 90vw"
      className="object-cover object-top"
      priority={priority}
    />
  );
}

export default function ProjectGalleryFrame({
  images,
  chromeLabel,
}: {
  images: ProjectImage[];
  chromeLabel?: string;
}) {
  const [primary, secondary] = images;
  const secondaryIsMobile = secondary?.label.toLowerCase().includes('mobile');

  return (
    <div className="relative">
      <div className="absolute -inset-x-6 -inset-y-4 rounded-3xl bg-gradient-to-r from-accent/5 to-accent-2/5 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border bg-elevated px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          {chromeLabel && (
            <span className="ml-3 truncate font-mono text-[11px] text-text-muted">
              {chromeLabel}
            </span>
          )}
        </div>
        <div className="relative aspect-[1920/943] w-full">
          <Frame image={primary} priority />
        </div>
      </div>

      {secondary && (
        <div
          className={`absolute -bottom-8 -right-5 overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-transform hover:scale-[1.03] sm:-bottom-10 sm:-right-8 ${
            secondaryIsMobile ? 'aspect-[9/16] w-[26%]' : 'aspect-[1920/943] w-[42%]'
          }`}
        >
          <Frame image={secondary} />
        </div>
      )}
    </div>
  );
}
