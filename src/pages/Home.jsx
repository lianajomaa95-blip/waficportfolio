import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import waficPhoto from "../assets/wafic.jpeg";

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
              <img src={waficPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-16 h-16 md:w-28 md:h-28 border-2 border-gold-500 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* ============ ABOUT SUMMARY ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-5">Overview</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-display leading-snug max-w-3xl">
            A mechanical engineer specializing in MEP design and BIM, based in
            Milan — turning architectural intent into precise, coordinated systems,
            from concept modeling to site-ready documentation.
          </p>
          <Link to="/about" className="inline-block mt-7 sm:mt-8 text-gold-500 font-medium hover:text-gold-400 transition">
            More about me →
          </Link>
        </div>
      </section>

      {/* ============ EXPERTISE SUMMARY ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-5">Expertise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">Areas of practice</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              ["MEP System Design", "Mechanical, HVAC, plumbing and fire-protection design to international standards."],
              ["BIM Modeling · LOD 400/500", "Revit MEP models from schematic design through fabrication-ready and as-built."],
              ["Multidiscipline Coordination", "Clash-free coordination in Navisworks across all building services."],
              ["Shop & Construction Drawings", "Coordinated, code-compliant documentation, ready for site."],
              ["Pool & Water Features", "Plumbing, equipment and electrical design for luxury pools and spas."],
              ["Estimation & Application", "Product selection, submittals, BOQ take-off and cost estimation."],
            ].map(([title, desc]) => (
              <div key={title} className="group p-6 rounded-2xl border border-navy-800 bg-navy-900 hover:border-gold-500/50 hover:-translate-y-0.5 transition-all">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate text-sm sm:text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24 text-center">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-500 mb-5">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            Let's build something precise.
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