import { useState } from "react";
import { motion } from "framer-motion";

const ACCESS_KEY = "8b34f219-e0e9-4255-895f-fba1376708d0";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message from your portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const info = [
    ["Email", "wafic1998@gmail.com", "mailto:wafic1998@gmail.com"],
    ["LinkedIn", "in/wabouhosh", "https://www.linkedin.com/in/wabouhosh"],
    ["Location", "Milan, Italy", null],
  ];

  return (
    <motion.div {...fade} className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Contact</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let's get in touch.</h1>
      <p className="text-slate text-lg max-w-2xl mb-12">
        Available for MEP design, BIM modeling and coordination projects, on-site
        in Milan or remotely. Fill in the form below and I'll respond promptly.
      </p>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-slate">Name</label>
            <input type="text" name="name" required className="mt-2 w-full rounded-xl bg-navy-900 border border-navy-700 px-4 py-3 text-mist outline-none focus:border-gold-500 transition" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-slate">Email</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-xl bg-navy-900 border border-navy-700 px-4 py-3 text-mist outline-none focus:border-gold-500 transition" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-slate">Message</label>
            <textarea name="message" rows="5" required className="mt-2 w-full rounded-xl bg-navy-900 border border-navy-700 px-4 py-3 text-mist outline-none focus:border-gold-500 transition resize-none" />
          </div>

          <button type="submit" disabled={status === "sending"} className="px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && <p className="text-gold-500 font-medium">✓ Message sent — thanks, I'll be in touch soon.</p>}
          {status === "error" && <p className="text-red-400 font-medium">Something went wrong. Please email me directly instead.</p>}
        </form>

        <div className="space-y-3">
          {info.map(([label, value, href]) => {
            const content = (
              <div className="rounded-xl border border-navy-700 bg-navy-900 px-5 py-4 hover:border-gold-500 transition">
                <div className="font-mono text-xs uppercase tracking-wide text-slate">{label}</div>
                <div className="text-mist font-medium mt-1">{value}</div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}