import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectsMatrix from '../components/ProjectsMatrix';
import SystemProfile from '../components/SystemProfile';
import ContactTerminal from '../components/ContactTerminal'; // Import the new block

export default function Home() {
  return (
    <div className="space-y-20 pb-24">
      {/* 5-Second Overhead Branding Layer */}
      <Hero />
      
      {/* Live Systems Registry Section */}
      <section className="px-6 border-t border-border-subtle pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-fg-muted">
              01 // Selected Systems
            </h2>

          </div>
          
          <Link 
            to="/archive" 
            className="font-mono text-xs font-bold text-fg-muted hover:text-lime-accent transition-colors flex items-center gap-1 self-start sm:self-center"
          >
            View Full Archive <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Live 3-Card Typographic Container */}
        <ProjectsMatrix />
      </section>

      {/* Dynamic Structural About Layer */}
      <SystemProfile />

      {/* Interactive Terminal Contact Block */}
      <ContactTerminal />
    </div>
  );
}