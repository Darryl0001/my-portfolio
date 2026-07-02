import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl h-16 items-center justify-between px-6 relative">
        
        {/* Brand Logo Identity */}
        <Link to="/" className="font-mono text-sm tracking-tighter hover:opacity-70 transition-opacity z-50">
          DEV<span className="text-fg-main font-bold">.DARRY</span>
        </Link>
        
        {/* Actions Suite Group */}
        <div className="flex items-center gap-4 md:gap-8 text-sm font-medium">
          
          {/* Desktop Only Inline Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-fg-main hover:text-lime-accent transition-colors">Featured</Link>
            <Link to="/archive" className="text-fg-muted hover:text-fg-main transition-colors">Archive</Link>
          </nav>

          {/* Always Visible Let's Talk Call-To-Action Button */}
          <a href="#contact" className="bg-lime-accent text-fg-main px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition-all z-50 whitespace-nowrap">
            Let's Talk
          </a>

          {/* Mobile Menu Action Toggle Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-fg-main hover:text-fg-muted transition-colors md:hidden z-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                /* Dynamic "X" Close State Icon Frame */
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                /* Dynamic Hamburger Open State Icon Frame */
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Minimal Mobile Full-Width Menu Overlay Sheet */}
        <div 
          className={`absolute top-16 left-0 w-full bg-white border-b border-border-subtle p-6 transition-all duration-300 transform md:hidden ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col space-y-4 font-mono text-xs font-bold">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-fg-main hover:text-lime-accent transition-colors py-1"
            >
              // FEATURED_PROJECTS
            </Link>
            <Link 
              to="/archive" 
              onClick={() => setIsOpen(false)}
              className="text-fg-muted hover:text-fg-main transition-colors py-1"
            >
              // INDEX_ARCHIVE
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}