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
      <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-3 sm:mb-4">WELCOME</p>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 sm:mb-12">
        MEET WAFIC!
      </h1>

      <div className="md:grid md:grid-cols-[1.7fr_1fr] md:gap-16 md:items-start">
        <div className="text-slate text-[0.9rem] sm:text-base md:text-lg leading-relaxed">
          <div className="float-right w-32 sm:w-40 ml-4 mb-2 md:hidden">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-navy-700 bg-navy-800 shadow-lg shadow-navy-950/40">
              <img src={aboutPhoto} alt="Wafic Abouhosh" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="mb-4">
            Hi — I'm Wafic, a mechanical engineer based in{" "}
            <span className="text-mist">Milan</span>. I design the mechanical,
            plumbing and fire-protection systems that keep buildings running, and
            I care most about one thing: that what I design can actually be built.
          </p>
          <p className="mb-4">
            Most of my work happens in BIM — modeling and coordinating every
            discipline in Revit and Navisworks so everything fits before it ever
            reaches site. I have a soft spot for luxury pools and water features,
            where the engineering has to disappear behind something beautiful.
          </p>
          <p>
            I've worked on projects across Lebanon, Saudi Arabia and Miami, and
            I'm part of{" "}
            <span className="text-mist">WMA Engineering Solutions</span> — a small
            four-person team I build alongside, from first concept to final handover.
          </p>
          <div className="clear-both" />
        </div>

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

      {/* Approach */}
      <div className="mt-14 sm:mt-20">
        <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gold-500 mb-6 sm:mb-8">Approach</p>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            ["Precise by design", "Models built to real construction tolerances — accurate from schematic to as-built."],
            ["Coordinated throughout", "Every discipline resolved together, so nothing clashes when it reaches site."],
            ["Made to be built", "Layouts shaped around installation, access and maintainability from day one."],
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
          View work
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded-full border border-navy-700 text-mist font-medium hover:border-gold-500 transition">
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}