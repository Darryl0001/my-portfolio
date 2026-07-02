import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, tags, category }) {
  return (
    <Link
      to={`/archive/${id}`}
      className="group relative flex flex-col justify-between p-6 bg-white border border-border-subtle rounded-xl transition-all duration-300 hover:border-lime-accent hover:lime-glow cursor-pointer overflow-hidden"
    >
      {/* Top-Right Decorative Technical Icon */}
      <div className="absolute top-5 right-5 text-slate-300 transition-all duration-300 group-hover:text-lime-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        
      </div>

      <div>
        {/* Category Label: Replaces the circular layout space with crisp monospace metadata */}
        <div className="font-mono text-[10px] uppercase tracking-widest text-fg-muted/60 mb-3 group-hover:text-lime-accent/80 transition-colors">
          // {category}
        </div>

        {/* System Title */}
        <h3 className="text-xl font-bold text-fg-main tracking-tight mb-3 pr-8 group-hover:text-lime-accent transition-colors">
          {title}
        </h3>

        {/* Engineering Impact Description */}
        <p className="text-sm text-fg-muted leading-relaxed font-normal mb-8">
          {description}
        </p>
      </div>

      {/* Tech Stack Sub-Footer */}
      <div className="pt-4 border-t border-border-subtle/60 font-mono text-[11px] text-fg-muted tracking-wide transition-colors group-hover:border-lime-accent/30">
        {tags.join(' · ')}
      </div>
    </Link>
  );
}