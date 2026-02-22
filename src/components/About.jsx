import { motion } from 'framer-motion';
import { timeline } from '../data/content';
import { profile } from '../data/profile';

function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)] space-y-8">
        <h2 className="section-title">Systems-First QA Perspective</h2>
        <p className="text-sm text-cyan">{profile.name} • {profile.specialization}</p>
        <p className="max-w-3xl text-slate-300">
          I work as an end-to-end QA owner with a systems mindset: testing how revenue-critical behavior propagates from cart to payment,
          from POS sync to fulfillment. My approach is risk-based, tenant-aware, and grounded in real production consequences.
          I have delivered quality ownership across Restaurant & Food Ordering SaaS, Telehealth, and Enterprise Analytics platforms.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">{item.year}</p>
              <h3 className="mt-2 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
