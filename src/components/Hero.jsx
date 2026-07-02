export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-start">
      
      {/* Strategy 2 Name Identity Over-line */}
      <span className="font-mono text-xs uppercase tracking-widest text-fg-muted mb-3 block font-bold">
        DARRYL MACARANDAN
      </span>
      
      {/* High-Contrast Typographic Highlight Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold tracking-tight text-fg-main max-w-3xl mb-8 leading-[1.15]">
        I build <span className="bg-lime-accent px-2 py-0.5 rounded-lg text-fg-main inline-block">high-performance systems</span> and structural software engines.
      </h1>
      
      {/* Brief Context Subtitle */}
      <p className="text-lg md:text-lg text-fg-muted leading-relaxed max-w-2xl mb-12">
        An information technology specialist focused on engineering low-overhead backend architectures, automated software workflows, and pristine user interfaces.
      </p>

      {/* Balanced 2-Column Tech Matrix */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-6 border-t border-border-subtle font-mono text-xs text-fg-muted">
        {/* Column 1 - Left Column Top */}
        <div>
          <span className="text-fg-main font-bold block mb-1">// FRONTEND</span>
          <span className="tracking-wide">React.js · Tailwind CSS · JavaScript · HTML5 · CSS3</span>
        </div>
        
        {/* Column 2 - Right Column Top */}
        <div>
          <span className="text-fg-main font-bold block mb-1">// BACKEND</span>
          <span className="tracking-wide">Node.js · Express.js · PHP · Laravel · Python · Flask</span>
        </div>
        
        {/* Row 2 - Spans Full Width on Desktop for a structural anchor base */}
        <div className="md:col-span-2 pt-2">
          <span className="text-fg-main font-bold block mb-1">// DATABASE</span>
          <span className="tracking-wide">MySQL · MongoDB</span>
        </div>
      </div>
    </section>
  );
}