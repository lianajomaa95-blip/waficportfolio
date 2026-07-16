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
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-5">
              Mechanical · MEP · BIM Engineer
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Wafic<br />Abouhosh
            </h1>
            <p className="text-lg text-slate max-w-md mb-8">
              I design and coordinate the mechanical systems buildings run on —
              modeled in BIM, coordinated to the millimetre, ready to build.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-6 py-3 rounded-full bg-gold-500 text-navy-950 font-medium hover:bg-gold-400 transition">
                Get in touch
              </Link>
              <Link to="/projects" className="px-6 py-3 rounded-full border border-navy-700 text-mist font-medium hover:border-gold-500 transition">
                View projects
              </Link>
            </div>
          </div>

          <div className="relative max-w-xs mx-auto md:ml-auto md:mr-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800">
              <img src={waficPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* ============ ABOUT SUMMARY ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">01 — About</p>
          <p className="text-xl md:text-2xl font-display leading-snug max-w-3xl">
            Mechanical engineer specializing in MEP design and BIM, based in Milan.
            I turn architectural intent into precise, coordinated, code-compliant
            systems — from LOD 400/500 Revit models to site-ready drawings.
          </p>
          <Link to="/about" className="inline-block mt-8 text-gold-500 font-medium hover:text-gold-400 transition">
            More about me →
          </Link>
        </div>
      </section>

      {/* ============ EXPERTISE SUMMARY ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">02 — Expertise</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">What I do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["MEP System Design", "Mechanical, HVAC, plumbing & fire-protection design to international standards."],
              ["BIM Modeling · LOD 400/500", "Revit MEP models from schematic design to fabrication-ready and as-built."],
              ["Multidiscipline Coordination", "Clash-free coordination in Navisworks across all disciplines."],
              ["Shop & Construction Drawings", "Coordinated, code-compliant 2D drawings ready for site."],
              ["Pool & Water Features", "Plumbing, equipment & electrical design for luxury pools and spas."],
              ["Estimation & Application", "Product selection, submittals, BOQ take-off and cost estimation."],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 rounded-xl border border-navy-800 bg-navy-900 hover:border-gold-500/50 transition">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT STRIP ============ */}
      <section className="border-t border-navy-800">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Let's get in touch.</h2>
          <p className="text-slate text-lg mb-8 max-w-xl mx-auto">
            Open to MEP design, BIM and coordination work — in Milan or remote.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition">
            Get in touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
}