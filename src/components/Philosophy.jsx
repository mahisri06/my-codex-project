import { motion } from 'framer-motion';

const flow = ['Requirement', 'Revenue Impact', 'Risk Areas', 'Peak Load Behavior', 'Edge Cases', 'Release Decision'];

function Philosophy() {
  return (
    <section id="philosophy" className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="section-title">How I Think Before Every Release</h2>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {flow.map((step, i) => (
            <motion.div key={step} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="flex items-center gap-3">
              <div className="glass rounded-xl px-4 py-2 text-sm">{step}</div>
              {i < flow.length - 1 && <span className="text-cyan">➜</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
