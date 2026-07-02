import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-subtle bg-white py-8 px-6 font-mono text-[11px] text-fg-muted">
      {/* Changed `items-start` to `items-center` for mobile viewports.
        This forces the stacked columns to align perfectly along the central axis.
      */}
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 w-full">
        
        {/* Left Column: Copyright Identity */}
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <p className="font-sans text-xs text-fg-main font-bold tracking-tight">
            © {currentYear} DARRYL MACARANDAN
          </p>
        </div>

        {/* Right Column: Fast Utilities Matrix */}
        {/* Changed `justify-start` (default) to `justify-center` for mobile layout tracking.
          This centers the inline interactive options together.
        */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 font-bold uppercase tracking-wider w-full sm:w-auto">
          <Link to="/archive" className="hover:text-fg-main transition-colors py-1 sm:py-0">
            Archive
          </Link>
          
          {/* Subtle line divider remains hidden on mobile layouts */}
          <span className="text-slate-200 select-none hidden sm:inline">/</span>
          
          <a 
            href="https://github.com/Darryl0001" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 hover:text-fg-main transition-colors py-1 sm:py-0"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="github-icon shrink-0"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}