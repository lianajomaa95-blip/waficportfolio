import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const experience = [
  {
    role: "MEP Engineer",
    company: "Smart Aquatics",
    place: "Miami (Remote)",
    date: "2024 — Present",
    now: true,
    desc:
      "Leading the design and development of high-end MEP solutions for luxury residential developments in Miami. Delivering LOD 400 BIM models, transitioning workflows from AutoCAD to Revit, and engineering bespoke aquatic, water-feature, and mechanical systems from concept through execution.",
  },
  {
    role: "Mechanical BIM Engineer",
    company: "FirstFix KSA",
    place: "Beirut",
    date: "2024",
    desc:
      "Delivered advanced BIM coordination and mechanical engineering solutions across major developments in Saudi Arabia. Produced LOD 400/500 MEP models, coordinated HVAC, fire protection, plumbing, and electrical disciplines, prepared construction documentation, and supported system design according to international standards including ASHRAE.",
    projects: [
      "Makkah Entertainment Complex",
      "Shurah Island HW2 Development",
      "CEER Automotive Manufacturing Facility",
    ],
  },
  {
    role: "Application & Estimation Engineer",
    company: "Energy International Corporation",
    place: "Beirut",
    date: "2023 — Present",
    desc:
      "Provide technical engineering support for electromechanical solutions, including product selection, technical submittals, compliance documentation, cost estimation, and coordination with consultants and contractors to deliver optimized project solutions.",
  },
  {
    role: "Site Mechanical Engineer",
    company: "Magma Engineering & Contracting",
    place: "Beirut",
    date: "2022",
    desc:
      "Managed on-site mechanical activities for the Saint George Hospital development, ensuring MEP installations complied with approved drawings, technical specifications, quality requirements, and project schedules.",
  },
  {
    role: "BMS & Maintenance Engineer",
    company: "Central Bank of Lebanon",
    place: "Beirut",
    date: "2022 — 2023",
    desc:
      "Monitored and optimized critical building mechanical and electrical systems through Building Management Systems (BMS), supporting preventive maintenance strategies, operational efficiency, and energy performance improvements.",
  },
  {
    role: "Mechanical Design Engineer",
    company: "Associated Mechanical Engineers",
    place: "Beirut",
    date: "2021 — 2022",
    desc:
      "Designed HVAC and plumbing systems for building projects, developed engineering drawings using AutoCAD and Revit, performed quantity take-offs, prepared cost estimates, and supported project delivery from design to documentation.",
  },
];

const certs = [
  ["Revit Ventilation System Design", "Autodesk", "2024"],
  ["Revit Plumbing System Design", "Autodesk", "2024"],
  ["Revit Fire Protection System Design", "Autodesk", "2022"],
  ["Swimming Pool & Water Features Design", "CCPE", "2021"],
  ["IC3 Digital Literacy Certification", "Certiport", "2021"],
];

export default function Experience() {
  return (
    <motion.div
      {...fade}
      className="max-w-4xl mx-auto px-5 sm:px-6 py-10 md:py-20"
    >
      <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-3 sm:mb-4">
        Professional Journey
      </p>

      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Professional Experience
      </h1>

      <p className="text-slate text-sm sm:text-base md:text-lg max-w-2xl mb-12 sm:mb-16 leading-relaxed">
        A progressive engineering journey combining mechanical design,
        BIM coordination, construction delivery, and technical consultancy
        across international projects in Lebanon, Saudi Arabia, and Miami.
      </p>

      <div className="relative">
        {experience.map((job, i) => (
          <div
            key={i}
            className="relative pl-6 sm:pl-9 pb-10 sm:pb-12 border-l border-navy-700 last:border-l-transparent last:pb-0"
          >
            <span
              className={`absolute -left-[6px] top-1.5 w-3 h-3 rounded-full border-2 ${
                job.now
                  ? "bg-gold-500 border-gold-500 shadow-[0_0_0_4px_rgba(224,178,78,0.15)]"
                  : "bg-navy-950 border-gold-500"
              }`}
            />

            {job.now && (
              <span className="inline-block mb-2 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-gold-500 border border-gold-600/40 rounded-full px-2.5 py-0.5">
                Current Position
              </span>
            )}

            <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1">
              <h3 className="text-base sm:text-xl font-semibold">
                {job.role}
              </h3>

              <span className="font-display text-xs sm:text-sm font-semibold text-slate whitespace-nowrap">
                {job.date}
              </span>
            </div>

            <p className="text-gold-500 font-medium mt-1 text-sm sm:text-base">
              {job.company}
              <span className="text-slate font-normal">
                {" "}
                · {job.place}
              </span>
            </p>

            <p className="text-slate mt-2.5 sm:mt-3 text-sm sm:text-base leading-relaxed">
              {job.desc}
            </p>

            {job.projects && (
              <div className="flex flex-wrap gap-2 mt-3.5">
                {job.projects.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1 rounded-full border border-navy-700 text-slate"
                  >
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 sm:mt-16">
        <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-5 sm:mb-6">
          Academic Background
        </p>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h3 className="text-lg sm:text-xl font-semibold">
            Bachelor of Engineering – Mechanical Engineering
          </h3>

          <p className="text-gold-500 mt-1">
            Beirut Arab University
          </p>

          <p className="font-mono text-xs text-slate mt-1">
            2016 — 2021
          </p>

          <span className="inline-block mt-4 px-4 py-1.5 rounded-full border border-navy-700 font-mono text-sm">
            CGPA <span className="text-gold-500">3.6</span> / 4.0
          </span>
        </div>
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-5 sm:mb-6">
          Professional Certifications
        </p>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 overflow-hidden">
          {certs.map(([name, org, year], i, arr) => (
            <div
              key={name}
              className={`flex justify-between items-center gap-4 px-5 sm:px-6 py-4 ${
                i < arr.length - 1 ? "border-b border-navy-800" : ""
              }`}
            >
              <div>
                <div className="font-medium text-sm sm:text-base">
                  {name}
                </div>

                <div className="font-mono text-xs text-slate mt-0.5">
                  {org}
                </div>
              </div>

              <span className="font-mono text-sm text-gold-500">
                {year}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <Link
          to="/contact"
          className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition"
        >
          Connect for Collaboration
        </Link>
      </div>
    </motion.div>
  );
}