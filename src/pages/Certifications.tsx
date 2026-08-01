import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionProps } from "framer-motion";
import certFire from "../assets/revit-fire.webp";
import certPlumbing from "../assets/revit-plumbing.webp";
import certVentilation from "../assets/revit-ventilation.webp";
import certMep from "../assets/revit-mep.webp";
import certIc3 from "../assets/computing-fundementals.webp";

const fade: MotionProps = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const certificates = [
  { img: certMep, title: "Revit MEP — Essentials & Intermediate", issuer: "Areb International Academy", year: "2022" },
  { img: certVentilation, title: "Revit Ventilation System Design", issuer: "Autodesk Authorized Training Center", year: "2022" },
  { img: certPlumbing, title: "Revit Plumbing System Design", issuer: "Autodesk Authorized Training Center", year: "2022" },
  { img: certFire, title: "Revit Fire Fighting System Design", issuer: "Autodesk Authorized Training Center", year: "2022" },
  { img: certIc3, title: "IC3 Digital Literacy Certification", issuer: "Certiport", year: "2021" },
];

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const total = certificates.length;
  const cert = certificates[index];
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <motion.div {...fade} className="max-w-4xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-4">Credentials</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">
        <span className="italic text-gold-500">Certified</span> expertise
      </h1>
      <p className="text-slate text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-14 leading-relaxed">
        Professional certifications in BIM and MEP design software — swipe through
        to view each credential.
      </p>

      {/* Slider */}
      <div className="relative">
        <div className="rounded-2xl border border-navy-700 bg-navy-900 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-white flex items-center justify-center p-3 sm:p-5">
                <img
                  src={cert.img}
                  alt={cert.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="max-h-[50vh] sm:max-h-[55vh] w-auto max-w-full rounded-md object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-5 border-t border-navy-800">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold leading-snug">{cert.title}</h3>
                  <p className="text-slate text-sm mt-1">{cert.issuer}</p>
                </div>
                <span className="font-mono text-sm text-gold-500 whitespace-nowrap">{cert.year}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button onClick={() => go(-1)} aria-label="Previous"
          className="absolute left-2 sm:-left-5 top-[35%] -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-navy-800 border border-navy-700 text-mist hover:border-gold-500 hover:text-gold-500 transition text-xl">
          ‹
        </button>
        <button onClick={() => go(1)} aria-label="Next"
          className="absolute right-2 sm:-right-5 top-[35%] -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-navy-800 border border-navy-700 text-mist hover:border-gold-500 hover:text-gold-500 transition text-xl">
          ›
        </button>
      </div>

      {/* Dots + counter */}
      <div className="flex justify-center gap-2.5 mt-6">
        {certificates.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Certificate ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-gold-500" : "w-2 bg-navy-700 hover:bg-navy-600"}`} />
        ))}
      </div>
      <p className="text-center text-slate text-xs mt-4 font-mono">{index + 1} / {total}</p>

      {/* CTA */}
      <div className="mt-14 sm:mt-20 text-center border-t border-navy-800 pt-14 sm:pt-20">
        <p className="font-mono text-sm sm:text-base tracking-[0.35em] uppercase text-gold-500 font-medium mb-6">Let's Connect</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6 max-w-2xl mx-auto">
          Let's put this expertise to work on your project.
        </h2>
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
          Get in touch
        </Link>
      </div>
    </motion.div>
  );
}