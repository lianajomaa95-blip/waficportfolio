import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import makkah from "../assets/makkah-full.jpg";
import mepCoordination from "../assets/MEP Coordination Model.jpeg";
import fullBuilding from "../assets/Full-Building.jpeg";
import entertainment from "../assets/Entertainment.jpeg";
import mepDistribution from "../assets/MEP Services Distribution.jpeg";
import plantRoom from "../assets/Plant & Pump Room.jpeg";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const projects = [
  { img: makkah, tag: "HVAC · Chiller Plant", title: "Chiller Plant 3D", desc: "Coordinated chiller plant and chilled-water pump room — Makkah Entertainment Complex." },
  { img: mepCoordination, tag: "Coordination · Navisworks", title: "MEP Coordination Model", desc: "Clash-free multidiscipline model — HVAC, fire protection, plumbing and electrical." },
  { img: fullBuilding, tag: "BIM · LOD 400", title: "Full-Building MEP Model", desc: "Complete building services model with coordinated plant and distribution." },
  { img: entertainment, tag: "Architecture · MEP", title: "Entertainment Complex", desc: "Large-scale architectural and MEP model with domed atrium." },
  { img: mepDistribution, tag: "Ductwork · Piping", title: "MEP Services Distribution", desc: "Ceiling services distribution network across the building floorplate." },
  { img: plantRoom, tag: "Plant Room", title: "Plant & Pump Room", desc: "Pump and riser room with equipment layout and technical routing." },
];

const featured = [
  "Makkah Entertainment Complex",
  "Shurah Island HW2",
  "CEER Automotive Manufacturing",
  "Saint George Hospital — MEP",
  "Luxury Miami pools",
];

export default function Projects() {
  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Selected work</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Projects</h1>
      <p className="text-slate text-lg max-w-2xl mb-12">
        Coordinated MEP models, plant rooms and documentation — thoughtful
        engineering turned into efficient, reliable spaces.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group relative rounded-2xl overflow-hidden border border-navy-800 bg-navy-900">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-500">{p.tag}</span>
              <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
              <p className="text-slate text-sm mt-1 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                {p.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-slate mb-4">Featured builds</p>
        <div className="flex flex-wrap gap-3">
          {featured.map((f) => (
            <span key={f} className="text-sm px-4 py-2 rounded-full border border-navy-700 text-slate">{f}</span>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition">
          Work with me
        </Link>
      </div>
    </motion.div>
  );
}