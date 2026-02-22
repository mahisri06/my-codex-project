import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../data/content';

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(value / 30);
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 35);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

function Metrics() {
  return (
    <section className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)] grid gap-4 md:grid-cols-4">
        {metrics.map((metric, i) => (
          <motion.article key={metric.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5">
            <p className="text-3xl font-semibold text-cyan"><Counter value={metric.value} suffix={metric.suffix} /></p>
            <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Metrics;
