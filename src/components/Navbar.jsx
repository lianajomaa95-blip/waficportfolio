import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  
  { to: "/certifications", label: "Certifications" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300 ${
      isActive
        ? "text-mist after:w-full"
        : "text-slate hover:text-mist after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-navy-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram + name */}
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 rounded-lg border border-navy-700 bg-navy-800 font-display font-bold text-gold-500 text-sm">
            WA
          </span>
          <span className="font-display font-semibold tracking-tight">
            Wafic Abouhosh
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`h-0.5 w-6 bg-mist transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-mist transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-mist transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-navy-800 bg-navy-950">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 border-b border-navy-800 text-sm ${
                  isActive ? "text-gold-500" : "text-slate"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}