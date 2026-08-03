'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/90 backdrop-blur-md'
          : 'border-b border-transparent bg-bg/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white">
            TH
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-text">
              Tiffany Halsell
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-wide text-text-muted">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/THalsell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-text"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/tiffany-halsell/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-text"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="/resume.png"
            download="Tiffany_Halsell_Resume.png"
            className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-accent to-accent-2 px-3.5 py-1.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
          >
            Resume
            <FiDownload size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex md:hidden text-text p-2"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-4 px-3">
            <a
              href="https://github.com/THalsell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-text"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tiffany-halsell/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-text"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="/resume.png"
              download="Tiffany_Halsell_Resume.png"
              className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-accent to-accent-2 px-3 py-1.5 text-sm font-medium text-white"
            >
              Resume
              <FiDownload size={14} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
