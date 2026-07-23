import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import waficPhoto from "../assets/wafic.webp";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Home() {
  return (
    <motion.div {...fade}>
      {/* ============ HERO ============ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-8 pb-14 md:pt-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-8 md:gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-4 sm:mb-5">
              Mechanical · MEP · BIM Engineer
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] mb-5 sm:mb-6">
              Mechanical systems,<br />
              <span className="text-gold-500 italic">engineered with precision.</span>
            </h1>
            <p className="text-[0.92rem] sm:text-base md:text-lg text-slate leading-relaxed max-w-md mb-7 sm:mb-8">
              MEP design and BIM for residential, commercial and luxury projects —
              coordinated with care, and built to last.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 rounded-full bg-gold-500 text-navy-950 text-sm sm:text-base font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
                Get in touch
              </Link>
              <Link to="/projects" className="px-6 py-3 rounded-full border border-navy-700 text-mist text-sm sm:text-base font-medium hover:border-gold-500 hover:-translate-y-0.5 transition-all">
                View work
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 relative mx-auto w-full max-w-[240px] sm:max-w-xs md:max-w-none">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800 shadow-2xl shadow-navy-950/50">
              <img
                src={waficPhoto}
                alt="Wafic Abouhosh"
                fetchPriority="high"
                decoding="async"
                width="900"
                height="1125"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-16 h-16 md:w-28 md:h-28 border-2 border-gold-500 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-5">Overview</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-display leading-snug max-w-3xl">
            A mechanical engineer specializing in MEP design and BIM, based in
            Milan — turning architectural intent into precise, coordinated systems,
            from concept modeling to site-ready documentation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/about" className="text-gold-500 font-medium hover:text-gold-400 transition">More about me →</Link>
            <Link to="/services" className="text-slate font-medium hover:text-mist transition">View services →</Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24 text-center">
          <p className="font-mono text-sm sm:text-base tracking-[0.35em] uppercase text-gold-500 font-medium mb-6">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            Let's build something <span className="italic text-gold-500">precise.</span>
          </h2>
          <p className="text-slate text-sm sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Open to MEP design, BIM and coordination work — in Milan or remotely.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
            Get in touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
}