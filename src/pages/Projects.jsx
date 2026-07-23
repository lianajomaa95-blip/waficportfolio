import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import makkah from "../assets/makkah-full.webp";
import mepCoordination from "../assets/mep-coordination-model.webp";
import fullBuilding from "../assets/full-building.webp";
import entertainment from "../assets/entertainment.webp";
import mepDistribution from "../assets/mep-services-distribution.webp";
import plantRoom from "../assets/plant-and-pump-room.webp";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const projects = [
  { img: makkah, tag: "HVAC · Chiller Plant", title: "Chiller Plant", desc: "Coordinated chiller plant and chilled-water pump room — Makkah Entertainment Complex." },
  { img: mepCoordination, tag: "Coordination", title: "MEP Coordination Model", desc: "A clash-free multidiscipline model bringing HVAC, fire, plumbing and electrical together." },
  { img: fullBuilding, tag: "BIM · LOD 400", title: "Full-Building Services", desc: "A complete building services model, from plant rooms to distribution." },
  { img: entertainment, tag: "Architecture · MEP", title: "Entertainment Complex", desc: "Large-scale architectural and MEP modeling with a domed central atrium." },
  { img: mepDistribution, tag: "Distribution", title: "Services Distribution", desc: "Ceiling services threaded cleanly across the building floorplate." },
  { img: plantRoom, tag: "Plant Room", title: "Plant & Pump Room", desc: "A pump and riser room resolved down to equipment layout and routing." },
];

const featured = [
  "Makkah Entertainment Complex",
  "Shurah Island HW2",
  "CEER Automotive Manufacturing",
  "Saint George Hospital",
  "Luxury Miami Residences",
];

export default function Projects() {
  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      {/* Header */}
      <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-4">Selected work</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">
        <span className="italic text-gold-500">Projects</span> &amp; models
      </h1>
      <p className="text-slate text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-14 leading-relaxed">
        A selection of coordinated models, plant rooms and documentation —
        engineering considered carefully, and resolved before it reaches site.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <article key={p.title} className="group relative rounded-2xl overflow-hidden border border-navy-800 bg-navy-900 hover:border-navy-600 transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-gold-500">{p.tag}</span>
              <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
              <p className="text-slate text-sm mt-1 leading-relaxed md:max-h-0 md:opacity-0 md:overflow-hidden md:transition-all md:duration-300 md:group-hover:max-h-24 md:group-hover:opacity-100">
                {p.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Featured builds */}
      <div className="mt-12 sm:mt-16">
        <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.2em] uppercase text-slate mb-4">Featured builds</p>
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {featured.map((f) => (
            <span key={f} className="text-xs sm:text-sm px-4 py-2 rounded-full border border-navy-700 text-slate">{f}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 sm:mt-20 text-center border-t border-navy-800 pt-16 sm:pt-20">
        <p className="font-mono text-sm sm:text-base tracking-[0.35em] uppercase text-gold-500 font-medium mb-6">Let's Connect</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6 max-w-2xl mx-auto">
          Like what you see? Let's build the next one together.
        </h2>
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
          Start a project
        </Link>
      </div>
    </motion.div>
  );
}