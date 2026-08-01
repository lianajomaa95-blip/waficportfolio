import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import aboutPhoto from "../assets/wifooooo.webp";

const fade: MotionProps = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function About() {
  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-4">Welcome</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8 sm:mb-14">
        Meet <span className="text-gold-500 italic">Wafic.</span>
      </h1>

      <div className="md:grid md:grid-cols-[1.6fr_1fr] md:gap-16 md:items-start">
        {/* Mobile photo */}
        <div className="md:hidden mx-auto w-full max-w-[220px] mb-8">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800 shadow-2xl shadow-navy-950/50">
            <img
              src={aboutPhoto}
              alt="Wafic Abouhosh"
              loading="lazy"
              decoding="async"
              width="400"
              height="500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="text-slate text-[0.92rem] sm:text-base md:text-lg leading-relaxed space-y-4">
          <p>
            Hi — I'm Wafic, a mechanical engineer based in{" "}
            <span className="text-mist">Milan</span>. I design the mechanical,
            plumbing and fire-protection systems that keep buildings running, and
            I care most about one thing: that what I design can actually be built.
          </p>
          <p>
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
        </div>

        {/* Desktop photo */}
        <div className="relative hidden md:block">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-navy-700 bg-navy-800 shadow-2xl shadow-navy-950/50 sticky top-24">
            <img
              src={aboutPhoto}
              alt="Wafic Abouhosh"
              loading="lazy"
              decoding="async"
              width="400"
              height="500"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 border-2 border-gold-500 rounded-2xl -z-10" />
        </div>
      </div>

      {/* Quick facts */}
      <div className="mt-14 sm:mt-16 rounded-2xl border border-navy-700 bg-navy-900 overflow-hidden max-w-md">
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
      <div className="mt-16 sm:mt-20">
        <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-7 sm:mb-8">Approach</p>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            ["Precise by design", "Models built to real construction tolerances — accurate from schematic to as-built."],
            ["Coordinated throughout", "Every discipline resolved together, so nothing clashes when it reaches site."],
            ["Made to be built", "Layouts shaped around installation, access and maintainability from day one."],
          ].map(([title, desc]) => (
            <div key={title} className="p-6 rounded-2xl border border-navy-800 bg-navy-900 hover:border-gold-500/50 hover:-translate-y-0.5 transition-all">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 sm:mt-20 flex flex-wrap gap-3 sm:gap-4">
        <Link to="/projects" className="px-6 py-3 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
          View work
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded-full border border-navy-700 text-mist font-medium hover:border-gold-500 hover:-translate-y-0.5 transition-all">
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}