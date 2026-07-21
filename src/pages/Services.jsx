import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const services = [
  {
    n: "01",
    title: "MEP System Design",
    desc: "Mechanical, HVAC, plumbing and fire-protection systems, engineered from concept to construction — efficient, compliant, and designed to sit seamlessly within the architecture.",
  },
  {
    n: "02",
    title: "BIM Modeling — LOD 400/500",
    desc: "Intelligent Revit models built to fabrication and as-built accuracy, giving every stakeholder a single, reliable source of truth from design through handover.",
  },
  {
    n: "03",
    title: "Multidiscipline Coordination",
    desc: "Every service — mechanical, electrical, plumbing, fire — resolved together in Navisworks, so clashes are caught in the model and never on site.",
  },
  {
    n: "04",
    title: "Shop & Construction Drawings",
    desc: "Clear, coordinated, code-compliant documentation that translates design intent into drawings a site team can build from with confidence.",
  },
  {
    n: "05",
    title: "Pool & Water Feature Engineering",
    desc: "Specialist plumbing, equipment and electrical design for luxury pools, spas and water features — where the engineering disappears behind the experience.",
  },
  {
    n: "06",
    title: "Estimation & Technical Consultancy",
    desc: "Product selection, submittals, BOQ take-off and cost estimation to international standards — grounded in how projects are actually procured and built.",
  },
];

export default function Services() {
  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      {/* Header */}
      <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-gold-500 mb-3 sm:mb-4">What I offer</p>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
        Engineering that carries a project from first idea to finished build.
      </h1>
      <p className="text-slate text-sm sm:text-base md:text-lg max-w-2xl mb-12 sm:mb-16 leading-relaxed">
        I work across the full MEP lifecycle — design, modeling, coordination and
        documentation — with the precision of BIM and the judgment of someone who
        has stood on site.
      </p>

      {/* Service cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {services.map((s) => (
          <div key={s.title} className="group relative p-6 sm:p-7 rounded-2xl border border-navy-800 bg-navy-900 hover:border-gold-500/50 transition overflow-hidden">
            <span className="block font-mono text-gold-500 text-sm mb-4">{s.n}</span>
            <h3 className="text-base sm:text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-slate text-sm sm:text-base leading-relaxed">{s.desc}</p>
            <span className="absolute left-0 top-0 h-0.5 w-0 bg-gold-500 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="mt-16 sm:mt-24">
        <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-gold-500 mb-8 sm:mb-10">How I work</p>
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            ["Understand", "Every project begins with the brief, the architecture and the constraints — so the engineering serves the building, not the other way around."],
            ["Model & coordinate", "Systems take shape in BIM, coordinated across disciplines until everything fits cleanly and clashes are designed out."],
            ["Deliver", "Coordinated drawings, schedules and as-builts, handed over ready for procurement and construction."],
          ].map(([step, desc], i) => (
            <div key={step}>
              <div className="text-gold-500 font-mono text-sm mb-3">0{i + 1}</div>
              <h3 className="text-lg font-semibold mb-2">{step}</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credibility */}
      <div className="mt-16 sm:mt-24 rounded-2xl border border-navy-700 bg-navy-900 p-7 sm:p-10">
        <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Experience behind the work</p>
        <p className="text-lg sm:text-xl md:text-2xl font-display font-semibold leading-snug max-w-3xl">
          Four years designing and delivering MEP and BIM across Lebanon, Saudi
          Arabia and Miami — from residential builds to large-scale developments.
        </p>
        <p className="text-slate mt-4 max-w-3xl leading-relaxed text-sm sm:text-base">
          I've contributed to projects including the{" "}
          <span className="text-mist">Makkah Entertainment Complex</span>,{" "}
          <span className="text-mist">Shurah Island</span> and{" "}
          <span className="text-mist">CEER Automotive Manufacturing</span>, working
          alongside teams at Smart Aquatics, FirstFix KSA and Energy International —
          and I hold a{" "}
          <span className="text-mist">B.E. in Mechanical Engineering</span> from
          Beirut Arab University.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">
          {[
            ["4+", "Years"],
            ["LOD 500", "BIM detail"],
            ["3", "Countries"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-xl sm:text-2xl font-extrabold font-display">{num}</div>
              <div className="font-mono text-[0.6rem] sm:text-xs uppercase tracking-wider text-slate mt-1">{label}</div>
            </div>
          ))}
        </div>

        <Link to="/certifications" className="inline-block mt-8 text-gold-500 font-medium hover:text-gold-400 transition">
          View certifications →
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-16 sm:mt-24 text-center border-t border-navy-800 pt-16 sm:pt-20">
        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-500 mb-5">
          Let's Connect
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-5 max-w-3xl mx-auto">
          Bring me your project — I'll turn it into engineering that's ready to build.
        </h2>
        <p className="text-slate mb-9 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Whether it's a single plant room or a full building's services, I'll help
          you get from concept to a coordinated, buildable design — on time and to standard.
        </p>
        <Link
          to="/contact"
          className="inline-block px-9 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all"
        >
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}