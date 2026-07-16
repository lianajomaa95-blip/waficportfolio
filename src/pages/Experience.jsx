import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const experience = [
  { role: "MEP Engineer", company: "Smart Aquatics", place: "Miami, Florida (Remote)", date: "Oct 2024 — Present", now: true, desc: "Design LOD 400 MEP systems for luxury Miami buildings in Revit & AutoCAD. Lead the AutoCAD-to-Revit transition — building families, BIM parameters and supplier-specific equipment. Produce 2D construction documents for permitting, and design swimming-pool and water-feature plumbing, equipment and electrical.", projects: [] },
  { role: "Mechanical BIM Engineer", company: "FirstFix KSA", place: "Beirut", date: "Jan 2024 — Oct 2024", desc: "Modeled LOD 400 MEP projects in Revit per specifications and IFC. Coordinated multidiscipline works (fire protection, HVAC, plumbing, electrical) in Navisworks & Revit, produced 2D shop drawings and LOD 500 as-builts, and sized fire-protection head & flow (Elite) and HVAC pressure drop (ASHRAE).", projects: ["Makkah Entertainment Complex", "Shurah Island HW2", "CEER Automotive"] },
  { role: "Mechanical Application & Estimation Engineer", company: "Energy International Corporation", place: "Beirut", date: "Jan 2023 — Present", desc: "Select electromechanical products to ASHRAE, AMCA, UL, NFPA, NEMA, ISO, CE, DIN EN and ABMA — defining materials, finishes, motor specs and configurations. Prepare quotes, submittals and data sheets, estimate costs, manage POs, and provide pre-sales technical support on design packages.", projects: [] },
  { role: "Site Mechanical Engineer", company: "Magma Engineering & Contracting", place: "Beirut", date: "Sep 2022 — Dec 2022", desc: "Supervised MEP works on the new Saint George Hospital construction — HVAC, plumbing and electromechanical systems — keeping site deliverables on schedule and true to approved drawings, and running pressure-drop checks for site deviations.", projects: [] },
  { role: "BMS Operator & Maintenance Engineer", company: "Central Bank of Lebanon", place: "Beirut", date: "Jun 2022 — Jan 2023", desc: "Monitored and controlled mechanical & electrical equipment — HVAC, pumps, generators and electrical panels — through the building management system, generating BMS reports for energy optimization and maintenance scheduling.", projects: [] },
  { role: "Mechanical Design Engineer · Intern", company: "Associated Mechanical Engineers", place: "Beirut", date: "Sep 2021 — Feb 2022", desc: "Designed HVAC and plumbing systems to international standards, drafted on AutoCAD & Revit, and estimated project material quantities and budgets.", projects: [] },
];

const certs = [
  ["Revit Ventilation System Design", "Autodesk", "2024"],
  ["Revit Plumbing System Design", "Autodesk", "2024"],
  ["Revit Fire Fighting System Design", "Autodesk", "2022"],
  ["Swimming Pool & Water Features Design", "CCPE", "2021"],
  ["IC3 Digital Literacy", "Certiport", "2021"],
];

export default function Experience() {
  return (
    <motion.div {...fade} className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Track record</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12">Experience</h1>

      <div className="relative">
        {experience.map((job, i) => (
          <div key={i} className="relative pl-8 pb-10 border-l border-navy-700 last:border-l-transparent last:pb-0">
            <span className={`absolute -left-[6px] top-1 w-3 h-3 rounded-full border-2 ${job.now ? "bg-gold-500 border-gold-500" : "bg-navy-950 border-gold-500"}`} />
            <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <span className="font-mono text-xs text-slate whitespace-nowrap">{job.date}</span>
            </div>
            <p className="text-gold-500 font-medium mt-1">
              {job.company} <span className="text-slate font-normal">· {job.place}</span>
            </p>
            <p className="text-slate mt-3 leading-relaxed">{job.desc}</p>
            {job.projects.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {job.projects.map((p) => (
                  <span key={p} className="text-xs px-3 py-1 rounded-full border border-navy-700 text-slate">{p}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-6">Education</p>
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h3 className="text-xl font-semibold">B.E. Mechanical Engineering</h3>
          <p className="text-gold-500 mt-1">Beirut Arab University</p>
          <p className="font-mono text-xs text-slate mt-1">Oct 2016 — Jun 2021</p>
          <span className="inline-block mt-4 px-4 py-1.5 rounded-full border border-navy-700 font-mono text-sm">
            CGPA <span className="text-gold-500">3.6</span> / 4.0
          </span>
        </div>
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-6">Certifications</p>
        <div className="rounded-2xl border border-navy-700 bg-navy-900 overflow-hidden">
          {certs.map(([name, org, year], i, arr) => (
            <div key={name} className={`flex justify-between items-center gap-4 px-6 py-4 ${i < arr.length - 1 ? "border-b border-navy-800" : ""}`}>
              <div>
                <div className="font-medium">{name}</div>
                <div className="font-mono text-xs text-slate mt-0.5">{org}</div>
              </div>
              <span className="font-mono text-sm text-gold-500">{year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition">
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}