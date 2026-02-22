import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { caseStudies } from '../data/content';

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="section-title">Case Studies</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudies.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="glass rounded-2xl p-5 text-left transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">{item.role}</p>
              <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">Click for detailed QA strategy and impact.</p>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/65 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="glass w-full max-w-2xl rounded-2xl p-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan">{selected.role}</p>
                  <h3 className="mt-2 text-xl font-semibold">{selected.title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="text-slate-300">Close</button>
              </div>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="font-medium text-white">Responsibilities</h4>
                  <ul className="mt-2 space-y-1">
                    {selected.responsibilities.map((task) => (
                      <li key={task}>• {task}</li>
                    ))}
                  </ul>
                </div>
                <p><span className="font-medium text-white">QA Strategy:</span> {selected.strategy}</p>
                <div>
                  <h4 className="font-medium text-white">Impact</h4>
                  <ul className="mt-2 space-y-1">
                    {selected.impact.map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
