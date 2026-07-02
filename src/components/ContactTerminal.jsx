import { useState } from 'react';

export default function ContactTerminal() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, message });
  };

  return (
    <section className="px-6 border-t border-slate-200 pt-16 pb-20">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xs uppercase tracking-widest font-bold text-slate-800">
          03 // Callback Signal
        </h2>
      </div>

      {/* Outside Coordinates Matrix - Clean Responsive Grid-Flex Wrapper */}
      <div className="flex flex-col items-start gap-3 mb-10 font-mono text-xs md:flex-row md:items-center md:gap-6 md:text-sm mt-8 w-full overflow-hidden">
        <a href="mailto:your.email@domain.com" className="flex items-center gap-2 text-slate-900 hover:text-emerald-600 transition-colors font-bold break-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail shrink-0"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          darrylmacarandan01@gmail.com
        </a>
        
        {/* Divider drops away on mobile viewports */}
        <span className="hidden md:inline text-slate-300 select-none">/</span>
        
        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 hover:text-emerald-600 transition-colors font-bold break-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="github-icon shrink-0"
            >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          github.com/Darryl0001
        </a>
      </div>

      {/* Structural Code-Block Container */}
      <div className="w-full border-t border-b border-slate-200 py-8 font-mono text-xs md:text-sm text-slate-900 relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}} />
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl">
          
          {/* Line 01: Code Definition */}
          <div className="flex items-start gap-6 select-none">
            <span className="text-slate-400 text-right w-6 block shrink-0 font-medium">01</span>
            <p className="text-slate-900 font-medium">
              <span className="text-blue-600 font-bold">export</span> <span className="text-blue-600 font-bold">const</span> <span className="text-purple-600 font-bold">messageProtocol</span> = &#123;
            </p>
          </div>

          {/* Line 02: Comments */}
          <div className="flex items-start gap-6 select-none">
            <span className="text-slate-400 text-right w-6 block shrink-0 font-medium">02</span>
            <p className="text-slate-500 italic font-normal">
              &nbsp;&nbsp;// Have a project concept, an open role, or just want to chat logic?
            </p>
          </div>

          {/* Line 03: Comments */}
          <div className="flex items-start gap-6 select-none">
            <span className="text-slate-400 text-right w-6 block shrink-0 font-medium">03</span>
            <p className="text-slate-500 italic font-normal">
              &nbsp;&nbsp;// Populate the parameters below to establish a connection thread.
            </p>
          </div>

          {/* Line 04: Spacer */}
          <div className="flex items-start gap-6 select-none">
            <span className="text-slate-400 text-right w-6 block shrink-0 font-medium">04</span>
            <div className="h-4"></div>
          </div>

          {/* Line 05: Inline Email Input with Blinking Terminal Cursor */}
          <div className="flex items-center gap-6">
            <span className="text-slate-400 text-right w-6 block shrink-0 select-none font-medium">05</span>
            <div className="flex flex-wrap items-center gap-1 w-full relative group">
              <label htmlFor="code-email" className="text-slate-900 font-bold shrink-0 flex items-center">
                &nbsp;&nbsp;senderEmail: <span className="text-amber-600 font-medium">"</span>
              </label>
              
              <div className="relative flex items-center flex-1 min-w-[220px]">
                {!email && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-emerald-600 font-bold pointer-events-none animate-[blink_1s_steps(2)_infinite] select-none">
                    │
                  </span>
                )}
                <input
                  id="code-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@example.com"
                  className={`bg-transparent border-none outline-none text-emerald-600 font-bold tracking-wide placeholder:text-slate-400 p-0 focus:ring-0 text-xs md:text-sm w-full transition-all ${!email ? 'pl-2.5' : 'pl-0'}`}
                />
              </div>

              <span className="text-amber-600 font-bold select-none">",</span>
            </div>
          </div>

          {/* Line 06: Inline Message Input with Blinking Terminal Cursor */}
          <div className="flex items-start gap-6">
            <span className="text-slate-400 text-right w-6 block shrink-0 select-none font-medium pt-0.5">06</span>
            <div className="flex flex-wrap items-center md:items-start gap-1 w-full relative group">
              <label htmlFor="code-message" className="text-slate-900 font-bold shrink-0 pt-0.5 flex items-center">
                &nbsp;&nbsp;message: <span className="text-amber-600 font-medium">"</span>
              </label>
              
              <div className="relative flex items-start flex-1 min-w-[220px] w-full">
                {!message && (
                  <span className="absolute left-0 top-1.5 text-emerald-600 font-bold pointer-events-none animate-[blink_1s_steps(2)_infinite] select-none">
                    │
                  </span>
                )}
                <textarea
                  id="code-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello! I'd love to connect regarding..."
                  className={`w-full bg-transparent border-none outline-none text-emerald-600 font-bold tracking-wide placeholder:text-slate-400 p-0 resize-none focus:ring-0 leading-relaxed text-xs md:text-sm pt-0.5 transition-all ${!message ? 'pl-2.5' : 'pl-0'}`}
                />
              </div>

              <span className="text-amber-600 font-bold select-none pt-0.5">"</span>
            </div>
          </div>

          {/* Line 07: Closing Bracket */}
          <div className="flex items-start gap-6 select-none">
            <span className="text-slate-400 text-right w-6 block shrink-0 font-medium">07</span>
            <p className="text-slate-900 font-bold">&#125;;</p>
          </div>

        </form>

        {/* Action Trigger Row */}
        <div className="mt-8 pl-12 flex items-center justify-between gap-6 text-slate-500 text-[10px]">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-lime-accent text-black text-xs font-bold rounded-full tracking-wider font-mono transition-all duration-300 hover:bg-[#a3e635] hover:border-[#a3e635] hover:text-slate-950 hover:shadow-[0_4px_20px_rgba(163,230,53,0.3)]"
          >
            Send Message →
          </button>
          <span className="hidden sm:inline select-none font-semibold text-slate-400">~ Respons 24 hours</span>
        </div>
      </div>
    </section>
  );
}