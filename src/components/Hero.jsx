import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan">Senior QA Engineer • Revenue Guardrail</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            QA Engineer Who Protects Revenue, Not Just Finds Bugs.
          </h1>
          <p className="mt-5 max-w-xl text-slate-300">
            Senior QA Engineer owning end-to-end quality across multi-tenant restaurant SaaS platforms.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
            <span>Name: Mahi Srivastava</span>
            <span>Role: QA Engineer</span>
            <span>Location: Gujarat, India</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow transition hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="/assets/mahi-srivastava-resume.pdf" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/10" download>
              Download Resume
            </a>
            <a href="#contact" className="rounded-full border border-cyan/40 px-5 py-2.5 text-sm font-medium text-cyan transition hover:bg-cyan/10">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <p className="text-sm text-slate-300">Active Focus</p>
          <div className="mt-5 space-y-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Order lifecycle resilience testing</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Peak-hour payment + POS reliability checks</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Risk-weighted release ownership decisions</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
