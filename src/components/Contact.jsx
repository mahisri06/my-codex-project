import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email.includes('@') || form.message.length < 10) {
      setStatus('Please provide a valid name, email, and a clear message.');
      return;
    }

    setStatus('Thanks! Your message has been validated and is ready for backend integration.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)] grid gap-5 md:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h2 className="section-title">Contact</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Email: <a href={`mailto:${profile.email}`} className="text-cyan">{profile.email}</a></p>
            <p>LinkedIn: <a href={profile.linkedin} className="text-cyan">{profile.linkedin.replace('https://', '')}</a></p>
            <p>Phone: {profile.phone}</p>
          </div>
        </article>
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
          <h3 className="text-lg font-medium">Send a Message</h3>
          <div className="mt-4 space-y-3 text-sm">
            <input className="w-full rounded-lg border border-white/15 bg-slate-900/70 p-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="w-full rounded-lg border border-white/15 bg-slate-900/70 p-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea className="h-24 w-full rounded-lg border border-white/15 bg-slate-900/70 p-2" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <motion.button whileTap={{ scale: 0.97 }} className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white" type="submit">
              Submit
            </motion.button>
            {status && <p className="text-xs text-cyan">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
