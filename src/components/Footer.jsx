export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-14">

        {/* Top row: stacked on mobile, spread out on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">

          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-lg border border-navy-700 bg-navy-800 font-display font-bold text-gold-500 text-sm">
              WA
            </span>
            <div>
              <div className="font-display font-semibold text-lg text-white leading-none">Wafic Abouhosh</div>
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate mt-1.5">
                Mechanical · MEP · BIM
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/wabouhosh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-11 h-11 grid place-items-center rounded-xl border border-navy-700 text-white hover:border-gold-500 hover:text-gold-500 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/wafic_abouhosh" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-11 h-11 grid place-items-center rounded-xl border border-navy-700 text-white hover:border-gold-500 hover:text-gold-500 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="mailto:wafic1998@gmail.com" aria-label="Email"
              className="w-11 h-11 grid place-items-center rounded-xl border border-navy-700 text-white hover:border-gold-500 hover:text-gold-500 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Location · Email */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mt-8 sm:mt-10">
          <span>Milan, Italy</span>
          <span className="text-navy-700">|</span>
          <a href="mailto:wafic1998@gmail.com" className="hover:text-gold-500 transition break-all">wafic1998@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}