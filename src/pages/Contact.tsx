import { useState } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const ACCESS_KEY = "8b34f219-e0e9-4255-895f-fba1376708d0";

const fade: MotionProps = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Contact() {
  type Status = "idle" | "sending" | "sent" | "error";

  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message from your portfolio");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const info = [
    ["Email", "wafic1998@gmail.com", "mailto:wafic1998@gmail.com"],
    ["LinkedIn", "in/wabouhosh", "https://www.linkedin.com/in/wabouhosh"],
    ["Instagram", "@wafic_abouhosh", "https://www.instagram.com/wafic_abouhosh"],
    ["Location", "Milan, Italy", null],
  ];

  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-20">
      <p className="font-mono text-[0.6rem] sm:text-xs tracking-[0.22em] uppercase text-gold-500 mb-4">Contact</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">
        Let's <span className="italic text-gold-500">talk.</span>
      </h1>
      <p className="text-slate text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-12 leading-relaxed">
        Whether you have a project in mind or simply want to connect, I'd be glad
        to hear from you — for MEP design, BIM and coordination work, in Milan or
        remotely.
      </p>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 sm:gap-16 items-start">
        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5 order-2 md:order-1">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-slate">Name</label>
            <input id="name" type="text" name="name" required className="mt-2 w-full rounded-xl bg-navy-900 border border-navy-700 px-4 py-3 text-mist outline-none focus:border-gold-500 transition" />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-slate">Email</label>
            <input id="email" type="email" name="email" required className="mt-2 w-full rounded-xl bg-navy-900 border border-navy-700 px-4 py-3 text-mist outline-none focus:border-gold-500 transition" />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-slate">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-xl bg-navy-900 border border-navy-700 px-4 py-3 text-mist outline-none focus:border-gold-500 transition resize-none" />
          </div>
          <button type="submit" disabled={status === "sending"} className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 hover:-translate-y-0.5 transition-all disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && <p className="text-gold-500 font-medium">✓ Message sent — thank you, I'll be in touch soon.</p>}
          {status === "error" && <p className="text-red-400 font-medium">Something went wrong. Please email me directly instead.</p>}
        </form>

        {/* Info */}
        <div className="space-y-3 order-1 md:order-2">
          {info.map(([label, value, href]) => {
            const content = (
              <div className="rounded-xl border border-navy-700 bg-navy-900 px-5 py-4 hover:border-gold-500 transition">
                <div className="font-mono text-xs uppercase tracking-wide text-slate">{label}</div>
                <div className="text-mist font-medium mt-1 break-words">{value}</div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
            ) : (<div key={label}>{content}</div>);
          })}
        </div>
      </div>
    </motion.div>
  );
}