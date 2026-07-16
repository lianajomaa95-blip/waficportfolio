import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutPhoto from "../assets/waficab.jpeg";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function About() {
  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">About</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12">
        Precision from concept to construction.
      </h1>

      {/* Photo + Bio */}
      <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-12 md:gap-16 items-start">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800">
            <img src={aboutPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold-500 rounded-2xl -z-10" />
        </div>

        <div className="space-y-5 text-slate text-lg leading-relaxed">
          <p>
            I'm Wafic Abouhosh, a mechanical engineer specializing in MEP design
            and BIM. Based in <span className="text-mist">Milan, Italy</span>, I
            design and coordinate mechanical, plumbing, and fire-protection
            systems for residential, commercial, and luxury projects — turning
            architectural and structural intent into precise, coordinated,
            code-compliant engineering.
          </p>
          <p>
            My work runs from LOD 400/500 Revit modeling and multidiscipline
            clash coordination in Navisworks, to 2D shop and construction
            drawings ready for site — plus specialist swimming-pool and
            water-feature design for high-end developments. Over the past few
            years I've delivered projects across Lebanon, Saudi Arabia, and
            Miami, including the{" "}
            <span className="text-mist">Makkah Entertainment Complex</span>,{" "}
            <span className="text-mist">Shurah Island</span>, and{" "}
            <span className="text-mist">CEER Automotive Manufacturing</span>,
            backed by hands-on site supervision and estimation work that keeps my
            designs grounded in how things actually get built.
          </p>
          <p>
            I'm also part of{" "}
            <span className="text-mist">WMA Engineering Solutions</span>, a
            four-member engineering team delivering MEP design, BIM, contracting,
            and technical consultancy from concept to handover. Working closely as
            a small team lets us stay hands-on and coordinated on every project.
            Whether I'm modeling a plant room or coordinating a full building's
            services, my focus stays the same: precision, clean coordination, and
            buildability — so what's modeled is what gets built.
          </p>
        </div>
      </div>

      {/* Quick facts */}
      <div className="mt-16 rounded-2xl border border-navy-700 bg-navy-900 overflow-hidden max-w-md">
        <div className="px-6 py-4 border-b border-navy-800 font-mono text-xs tracking-[0.18em] uppercase text-slate">
          // Engineer.spec
        </div>
        {[
          ["Discipline", "Mechanical / MEP"],
          ["Focus", "BIM · Design · Water Features"],
          ["Base", "Milan, Italy"],
          ["Languages", "English · Arabic"],
          ["Standards", "ASHRAE · NFPA · UL · NEMA"],
        ].map(([k, v], i, arr) => (
          <div key={k} className={`flex justify-between gap-4 px-6 py-4 text-sm ${i < arr.length - 1 ? "border-b border-navy-800" : ""}`}>
            <span className="font-mono text-xs uppercase tracking-wide text-slate">{k}</span>
            <span className="text-mist text-right font-medium">{v}</span>
          </div>
        ))}
      </div>

      {/* How I work */}
      <div className="mt-20">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-8">How I work</p>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            ["Modeled to the millimetre", "LOD 400/500 Revit models built with real construction tolerances in mind."],
            ["Coordinated across disciplines", "Clash-free routing of mechanical, plumbing, fire and electrical before site."],
            ["Built to be built", "Layouts developed around installation sequence, access, and maintainability."],
          ].map(([title, desc]) => (
            <div key={title} className="p-6 rounded-xl border border-navy-800 bg-navy-900">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-slate">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-wrap gap-4">
        <Link to="/projects" className="px-6 py-3 rounded-full bg-gold-500 text-navy-950 font-medium hover:bg-gold-400 transition">
          See my projects
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded-full border border-navy-700 text-mist font-medium hover:border-gold-500 transition">
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}