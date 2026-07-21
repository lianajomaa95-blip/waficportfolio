export default function Footer() {
  return (
    <footer className="border-t border-navy-800 mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-lg border border-navy-700 bg-navy-800 font-display font-bold text-gold-500 text-sm">
            WA
          </span>
          <div className="font-display font-semibold">
            Wafic Abouhosh
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wabouhosh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 grid place-items-center rounded-full border border-navy-700 text-slate hover:border-gold-500 hover:text-gold-500 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Instagram */}
          <a
           href="https://www.instagram.com/wafic_abouhosh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 grid place-items-center rounded-full border border-navy-700 text-slate hover:border-gold-500 hover:text-gold-500 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-slate tracking-wide">
          © {new Date().getFullYear()} Wafic Abouhosh · Milan, Italy
        </p>
      </div>
    </footer>
  );
}