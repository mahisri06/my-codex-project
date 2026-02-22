import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { capabilities } from '../data/content';

function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="section-title">Core Expertise</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {capabilities.map((card, index) => (
            <article key={card.title} className="glass rounded-2xl p-5">
              <button className="flex w-full items-center justify-between text-left" onClick={() => setActive(active === index ? -1 : index)}>
                <h3 className="text-lg font-medium">{card.title}</h3>
                <span className="text-cyan">{active === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 space-y-2 overflow-hidden text-sm text-slate-300"
                  >
                    {card.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
