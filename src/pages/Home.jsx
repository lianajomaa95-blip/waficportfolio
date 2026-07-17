import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import waficPhoto from "../assets/wafic.jpeg";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function Home() {
  return (
    <motion.div {...fade}>
      {/* ============ HERO ============ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20">
        <div className="grid grid-cols-[1.4fr_1fr] gap-5 sm:gap-10 md:gap-16 items-center">
          <div>
            <p className="font-mono text-[0.55rem] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase text-gold-500 mb-2.5 sm:mb-5">
              Wafic Abouhosh — Mechanical Engineer
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-[1.08] mb-4 sm:mb-6">
              Mechanical systems,<br />engineered with precision.
            </h1>
            <p className="text-[0.82rem] sm:text-base md:text-lg text-slate leading-relaxed max-w-md mb-4 sm:mb-8">
              MEP design and BIM for residential, commercial and luxury projects —
              coordinated with care, and built to last.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <Link to="/contact" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gold-500 text-navy-950 text-[0.8rem] sm:text-base font-medium hover:bg-gold-400 transition">
                Get in touch
              </Link>
              <Link to="/projects" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-navy-700 text-mist text-[0.8rem] sm:text-base font-medium hover:border-gold-500 transition">
                View work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-lg md:rounded-2xl overflow-hidden border border-navy-700 bg-navy-800 shadow-xl shadow-navy-950/40">
              <img src={waficPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2.5 -right-2.5 md:-bottom-4 md:-right-4 w-12 h-12 md:w-24 md:h-24 border-2 border-gold-500 rounded-lg md:rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* ============ ABOUT SUMMARY ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-4">Overview</p>
          <p className="text-lg sm:text-xl md:text-2xl font-display font-semibold leading-snug max-w-3xl">
            A mechanical engineer specializing in MEP design and BIM, based in
            Milan — turning architectural intent into precise, coordinated systems,
            from concept modeling to site-ready documentation.
          </p>
          <Link to="/about" className="inline-block mt-6 sm:mt-8 text-gold-500 font-medium hover:text-gold-400 transition">
            More about me →
          </Link>
        </div>
      </section>

      {/* ============ EXPERTISE SUMMARY ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-4">Expertise</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10">Areas of practice</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              ["MEP System Design", "Mechanical, HVAC, plumbing and fire-protection design to international standards."],
              ["BIM Modeling · LOD 400/500", "Revit MEP models from schematic design through fabrication-ready and as-built."],
              ["Multidiscipline Coordination", "Clash-free coordination in Navisworks across all building services."],
              ["Shop & Construction Drawings", "Coordinated, code-compliant documentation, ready for site."],
              ["Pool & Water Features", "Plumbing, equipment and electrical design for luxury pools and spas."],
              ["Estimation & Application", "Product selection, submittals, BOQ take-off and cost estimation."],
            ].map(([title, desc]) => (
              <div key={title} className="p-5 sm:p-6 rounded-xl border border-navy-800 bg-navy-900 hover:border-gold-500/50 transition">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT STRIP ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
            Let's discuss your project.
          </h2>
          <p className="text-slate text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Available for MEP design, BIM and coordination work — in Milan or remotely.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition">
            Get in touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
}