export default function SystemProfile() {
  return (
    <section className="px-6 border-t border-border-subtle pt-16 pb-8">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-xs uppercase tracking-widest font-bold text-fg-muted">
          02 // System Profile
        </h2>
      </div>

      {/* 2-Column Core Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        
        {/* Left Column: Engineering Philosophy with Note Indentation & Justification */}
        <div className="md:col-span-3 space-y-6 text-base text-fg-muted leading-relaxed font-normal text-justify">
          <p className="indent-8">
            I approach software engineering through the lens of data structures and strict analytical logic. 
            Deepening my understanding of
                core DSA principles has 
            fundamentally shaped my problem-solving capabilities, training me to view applications not just as interfaces, 
            but as optimized systems handling complex data flows.
          </p>
          <p className="">
            I firmly believe in choosing the <span className="bg-lime-accent px-1.5 py-0.5 rounded-md text-fg-main font-medium">right tool for the specific project scope.
            </span>
            Every architectural 
            decision carries 
            inherent trade-offs, 
            and I prioritize making intentional, pragmatic choices to engineer maintainable software while aggressively 
            avoiding the pitfalls of over-engineering.
          </p>
          <p className="">
            This pragmatic mindset dictates my data layer strategies as well. While rigorous <span className="bg-lime-accent px-1.5 py-0.5 rounded-md text-fg-main font-medium">3NF database normalization</span> is 
            always my baseline priority to preserve relational integrity, I maintain the technical flexibility to strategically 
            denormalize structures whenever real-world performance and scalability demands require it.
          </p>
        </div>

        {/* Right Column: Monospace Specs Panel */}
        <div className="md:col-span-2 space-y-6 bg-slate-50/50 border border-border-subtle p-6 rounded-xl font-mono text-xs text-fg-muted">
          
          {/* Block 1: Education */}
          <div>
            <span className="text-fg-main font-bold block mb-1.5">// ACADEMIC FOUNDATION</span>
            <div className="space-y-0.5">
              <p className="text-fg-main font-semibold">BS in Information Technology</p>
              <p>Central Mindanao University</p>
            </div>
          </div>

          {/* Block 2: Competitive Record */}
          <div>
            <span className="text-fg-main font-bold block mb-1.5">// COMPETITIVE LOG</span>
            <div className="space-y-0.5">
              <p className="text-fg-main font-semibold">Hackathons & Tech Contests</p>
            </div>
          </div>

          {/* Block 3: Architectural Guardrails */}
          <div>
            <span className="text-fg-main font-bold block mb-1.5">// SYSTEM PARADIGMS</span>
            <ul className="space-y-1 list-none pl-0">
              <li>• Data-Driven Stack Selection</li>
              <li>• Strict Scope-to-Pattern Matching</li>
              <li>• 3NF Relational Integrity Focus</li>
              <li>• Anti-Over-Engineering Guardrails</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}