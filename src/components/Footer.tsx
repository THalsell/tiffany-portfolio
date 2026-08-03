import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-text-muted sm:flex-row sm:justify-between">
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
          <a href="mailto:tiffanyrenee100@gmail.com" className="transition-colors hover:text-text">
            tiffanyrenee100@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
