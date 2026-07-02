import { Link } from 'react-router-dom';

export default function ProjectsMatrix() {
  const projects = [
    {
      id: 'duggo',
      index: '01 // RE-COMMERCE INFRASTRUCTURE',
      title: 'Duggo Marketplace',
      description: 'A peer-to-peer marketplace platform engineered with custom relational query structures, efficient item state mapping, and highly responsive user interfaces.',
      stack: 'React.js · Tailwind CSS · Node.js · MySQL',
    },
    {
      id: 'attapp',
      index: '02 // COMPUTER VISION & WORKFLOWS',
      title: 'AttApp Pipeline',
      description: 'An automated paper-to-digital attendance sheet tracking system using custom OpenCV image arrays to isolate and detect physical signature structures.',
      stack: 'Python · Flask · OpenCV · SQLAlchemy',
    },
    {
      id: 'loanaxis',
      index: '03 // METRIC & TRANSACTION ENGINES',
      title: 'LoanAxis System',
      description: 'A lightweight financial capital analytics ledger designed to compute distribution, collection, and overhead calculations for lending protocols.',
      stack: 'Express.js · JavaScript · MongoDB · CSS3',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/archive/${project.id}`}
          className="group relative flex flex-col justify-between p-6 bg-white border border-border-subtle rounded-xl transition-all duration-300 hover:border-lime-accent hover:lime-glow cursor-pointer"
        >
          <div>
            {/* Zone 1: Monospace Index Label */}
      

            {/* Zone 2: System Title */}
            <h3 className="text-xl font-bold text-fg-main tracking-tight mb-3">
              {project.title}
            </h3>

            {/* Zone 3: Engineering Impact Description */}
            <p className="text-sm text-fg-muted leading-relaxed font-normal mb-8">
              {project.description}
            </p>
          </div>

          {/* Zone 4: Tech Stack Sub-Footer */}
          <div className="pt-4 border-t border-border-subtle/60 font-mono text-[11px] text-fg-muted tracking-wide">
            {project.stack}
          </div>
        </Link>
      ))}
    </div>
  );
}