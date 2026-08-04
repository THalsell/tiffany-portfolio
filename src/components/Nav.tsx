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
    <header className="sticky top-4 z-50 mx-auto max-w-7xl 2xl:max-w-400 px-6 print:hidden">
      <div
        className={`flex items-center justify-between rounded-2xl border border-border px-6 py-3 backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? 'bg-card/60 shadow-lg shadow-black/30' : 'bg-card/30 shadow-md shadow-black/10'
        }`}
      >
        <Link href="#top" className="flex items-center gap-4">
          <span className="neon-text-purple shrink-0 pr-[0.12em] text-4xl font-light tracking-[-0.12em]">
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
          <Link
            href="/resume"
            className="flex items-center gap-1.5 rounded-md bg-linear-to-r from-accent to-accent-2 px-3.5 py-1.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
          >
            Resume
            <FiDownload size={14} />
          </Link>
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
        <nav className="md:hidden mt-2 rounded-2xl border border-border bg-card/60 px-6 py-4 backdrop-blur-xl flex flex-col gap-1">
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
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 rounded-md bg-linear-to-r from-accent to-accent-2 px-3 py-1.5 text-sm font-medium text-white"
            >
              Resume
              <FiDownload size={14} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
