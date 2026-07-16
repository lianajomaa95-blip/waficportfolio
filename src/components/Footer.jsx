export default function Footer() {
  return (
    <footer className="border-t border-navy-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-lg border border-navy-700 bg-navy-800 font-display font-bold text-gold-500 text-sm">
            WA
          </span>
          <div className="font-display font-semibold">Wafic Abouhosh</div>
        </div>
        <p className="font-mono text-xs text-slate tracking-wide">
          © {new Date().getFullYear()} Wafic Abouhosh · Milan, Italy
        </p>
      </div>
    </footer>
  );
}