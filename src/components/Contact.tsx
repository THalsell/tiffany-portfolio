'use client';

import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi';
import Reveal from './Reveal';

const EMAIL = 'tiffanyrenee100@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden">
      <div className="glow absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Have a project, opportunity, or problem worth solving?
          </h2>
          <p className="mt-5 text-lg text-text-muted">
            I&apos;m currently exploring full-stack development, e-commerce, digital
            platform, and technical operations opportunities.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Email Me
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-card-hover"
            >
              {copied ? (
                <>
                  Copied
                  <FiCheck size={15} className="text-accent" />
                </>
              ) : (
                <>
                  Copy Email
                  <FiCopy size={15} />
                </>
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/tiffany-halsell/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-card-hover"
            >
              Connect on LinkedIn
              <FiArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
