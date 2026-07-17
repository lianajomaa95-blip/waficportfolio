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
  {
    img: makkah,
    tag: "HVAC Engineering",
    title: "Chiller Plant & Pump Room",
    desc:
      "Comprehensive BIM coordination of the central chiller plant, chilled water pumps, piping networks, and mechanical equipment layouts for a large-scale entertainment development in Makkah.",
  },
  {
    img: mepCoordination,
    tag: "BIM Coordination",
    title: "Integrated MEP Coordination Model",
    desc:
      "Developed a multidisciplinary BIM model integrating HVAC, plumbing, fire protection, and electrical systems while resolving spatial conflicts before construction.",
  },
  {
    img: fullBuilding,
    tag: "Building Services",
    title: "Complete Building MEP Model",
    desc:
      "A fully coordinated building services model covering mechanical, electrical, and plumbing systems from plant rooms through final distribution networks.",
  },
  {
    img: entertainment,
    tag: "Commercial Development",
    title: "Entertainment Complex Development",
    desc:
      "Advanced BIM modeling for a large-scale entertainment facility featuring complex architectural elements and coordinated mechanical systems.",
  },
  {
    img: mepDistribution,
    tag: "MEP Systems",
    title: "Services Distribution Network",
    desc:
      "Optimized routing and coordination of mechanical and building services to improve space utilization, accessibility, and installation efficiency.",
  },
  {
    img: plantRoom,
    tag: "Mechanical Engineering",
    title: "Plant & Equipment Room Design",
    desc:
      "Detailed equipment arrangement, piping layouts, and service routing developed according to engineering standards and project requirements.",
  },
];

const featured = [
  "Makkah Entertainment Complex",
  "Shurah Island HW2 Development",
  "CEER Automotive Manufacturing Facility",
  "Saint George Hospital",
  "Luxury Residential Development – Miami",
];

export default function Projects() {
  return (
    <motion.div
      {...fade}
      className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20"
    >
      <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-3 sm:mb-4">
        Engineering Portfolio
      </p>

      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Engineering Project Portfolio
      </h1>

      <p className="text-slate text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-14 leading-relaxed">
        A collection of BIM and MEP engineering projects demonstrating
        expertise in mechanical systems design, multidisciplinary coordination,
        Revit modeling, clash detection, and construction-ready documentation
        across complex commercial, healthcare, hospitality, industrial, and
        mixed-use developments.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-2xl overflow-hidden border border-navy-800 bg-navy-900"
          >
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
              <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-500">
                {p.tag}
              </span>

              <h3 className="text-lg font-semibold mt-1">
                {p.title}
              </h3>

              <p className="text-slate text-sm mt-1 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
                {p.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 sm:mt-14">
        <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate mb-4">
          Key Project Experience
        </p>

        <div className="flex flex-wrap gap-3">
          {featured.map((f) => (
            <span
              key={f}
              className="text-sm px-4 py-2 rounded-full border border-navy-700 text-slate"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <Link
          to="/contact"
          className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition"
        >
          Discuss Your Project
        </Link>
      </div>
    </motion.div>
  );
}