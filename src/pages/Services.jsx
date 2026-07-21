import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const services = [
  { n: "01", title: "MEP System Design", desc: "Mechanical, HVAC, plumbing and fire-protection systems, engineered from concept to construction." },
  { n: "02", title: "BIM Modeling", desc: "Intelligent Revit models to LOD 400/500 — a single source of truth from design through handover." },
  { n: "03", title: "Multidiscipline Coordination", desc: "Every service resolved together in Navisworks, so clashes are caught in the model, never on site." },
  { n: "04", title: "Shop & Construction Drawings", desc: "Coordinated, code-compliant documentation a site team can build from with confidence." },
  { n: "05", title: "Pool & Water Features", desc: "Specialist design for luxury pools and water features, where the engineering disappears behind the experience." },
  { n: "06", title: "Estimation & Consultancy", desc: "Product selection, submittals, BOQ take-off and cost estimation to international standards." },
];

const process = [
  ["Understand", "The brief, the architecture, the constraints — so the engineering serves the building."],
  ["Model & coordinate", "Systems take shape in BIM, coordinated until everything fits and clashes are designed out."],
  ["Deliver", "Coordinated drawings and as-builts, handed over ready for procurement and construction."],
];

export default function Services() {
  return (
    <motion.div {...fade} className="max-w-5xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      {/* Header */}
      <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-4">What I offer</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5 max-w-3xl">
        Engineering, from{" "}
        <span className="italic text-gold-500">first idea to finished build.</span>
      </h1>
      <p className="text-slate text-sm sm:text-base md:text-lg max-w-xl mb-14 sm:mb-20 leading-relaxed">
        The full MEP lifecycle — design, modeling, coordination and documentation —
        with the precision of BIM.
      </p>

      {/* Services — elegant numbered list */}
      <div className="border-t border-navy-800">
        {services.map((s) => (
          <div
            key={s.n}
            className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1.1fr_1.6fr] gap-x-5 sm:gap-x-10 gap-y-1 items-baseline py-7 sm:py-8 border-b border-navy-800 hover:bg-navy-900/40 transition-colors -mx-4 px-4 rounded-lg"
          >
            <span className="font-display text-2xl sm:text-3xl text-navy-600 group-hover:text-gold-500 transition-colors">
              {s.n}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold col-start-2">{s.title}</h3>
            <p className="text-slate text-sm sm:text-base leading-relaxed col-start-2 sm:col-start-3 sm:row-start-1 max-w-md">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="mt-20 sm:mt-28">
        <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-10 sm:mb-12">How I work</p>
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-10">
          {process.map(([step, desc], i) => (
            <div key={step}>
              <div className="text-gold-500 font-mono text-sm mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step}</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credibility */}
      <div className="mt-20 sm:mt-28 max-w-3xl">
        <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-6">Experience behind the work</p>
        <p className="text-xl sm:text-2xl md:text-3xl font-display leading-snug">
          Four years designing and delivering MEP and BIM across{" "}
          <span className="text-mist">Lebanon, Saudi Arabia and Miami</span> — from
          residential builds to large-scale developments.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
          {[["4+", "Years"], ["LOD 500", "BIM detail"], ["3", "Countries"]].map(([num, label]) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-semibold font-display text-mist">{num}</div>
              <div className="font-mono text-[0.6rem] sm:text-xs uppercase tracking-wider text-slate mt-1">{label}</div>
            </div>
          ))}
        </div>
        <Link to="/certifications" className="inline-block mt-10 text-gold-500 font-medium hover:text-gold-400 transition">
          View certifications →
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-24 sm:mt-32 text-center border-t border-navy-800 pt-16 sm:pt-24">
        <p className="font-mono text-sm sm:text-base tracking-[0.35em] uppercase text-gold-500 font-medium mb-6">Let's Connect</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] mb-8 max-w-2xl mx-auto">
          Bring me your project — I'll make it{" "}
          <span className="italic text-gold-500">ready to build.</span>
        </h2>
        <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold text-base sm:text-lg hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}