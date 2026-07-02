import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl h-16 items-center justify-between px-6">
        <Link to="/" className="font-mono text-sm tracking-tighter hover:opacity-70 transition-opacity">
          DEV<span className="text-fg-main font-bold">.DARRY</span>
        </Link>
        
        <nav className="flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="text-fg-main hover:text-lime-accent transition-colors">Featured</Link>
          <Link to="/archive" className="text-fg-muted hover:text-fg-main transition-colors">Archive</Link>
          <a href="#contact" className="bg-lime-accent text-fg-main px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition-all">
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}