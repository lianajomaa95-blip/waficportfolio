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
    <motion.div {...fade} className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-gold-500 mb-3 sm:mb-4">About</p>
      <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-6 sm:mb-12">
        Precision from concept to construction.
      </h1>

      {/* Bio + Photo. Mobile: photo floats right, text wraps. Desktop: two columns. */}
      <div className="md:grid md:grid-cols-[1.7fr_1fr] md:gap-16 md:items-start">
        {/* Text */}
        <div className="text-slate text-[0.9rem] sm:text-base md:text-lg leading-relaxed">
          {/* Floated photo — MOBILE ONLY */}
          <div className="float-right w-32 sm:w-40 ml-4 mb-2 md:hidden">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-navy-700 bg-navy-800 shadow-lg shadow-navy-950/40">
              <img src={aboutPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="mb-4">
            I'm Wafic Abouhosh, a mechanical engineer specializing in MEP design
            and BIM. Based in <span className="text-mist">Milan, Italy</span>, I
            design and coordinate mechanical, plumbing, and fire-protection
            systems for residential, commercial, and luxury projects — turning
            architectural and structural intent into precise, coordinated,
            code-compliant engineering.
          </p>
          <p className="mb-4">
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
          <div className="clear-both" />
        </div>

        {/* Photo column — DESKTOP ONLY */}
        <div className="relative hidden md:block">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800 shadow-xl shadow-navy-950/40 sticky top-24">
            <img src={aboutPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Quick facts */}
      <div className="mt-12 sm:mt-16 rounded-2xl border border-navy-700 bg-navy-900 overflow-hidden max-w-md">
        <div className="px-6 py-4 border-b border-navy-800 font-mono text-xs tracking-[0.18em] uppercase text-slate">
          At a Glance
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
      <div className="mt-14 sm:mt-20">
        <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] uppercase text-gold-500 mb-6 sm:mb-8">How I work</p>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            ["Modeled to the millimetre", "LOD 400/500 Revit models built with real construction tolerances in mind."],
            ["Coordinated across disciplines", "Clash-free routing of mechanical, plumbing, fire and electrical before site."],
            ["Built to be built", "Layouts developed around installation sequence, access, and maintainability."],
          ].map(([title, desc]) => (
            <div key={title} className="p-5 sm:p-6 rounded-xl border border-navy-800 bg-navy-900">
              <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
              <p className="text-slate text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 sm:mt-16 flex flex-wrap gap-3 sm:gap-4">
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