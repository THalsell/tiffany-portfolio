'use client';

import { useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const EMAIL = 'tiffanyrenee100@gmail.com';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-400 flex-col items-center gap-4 px-6 py-10 text-sm text-text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Tiffany Halsell</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/THalsell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-text"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/tiffany-halsell/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-text"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            onClick={handleCopy}
            className="transition-colors hover:text-text"
          >
            {copied ? 'Copied to clipboard' : EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
