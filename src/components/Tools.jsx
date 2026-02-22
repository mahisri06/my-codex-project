import { tools } from '../data/content';

function Tools() {
  return (
    <section className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="section-title">Tools & Stack</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {tools.map(({ name, icon: Icon }) => (
            <article key={name} className="glass flex items-center gap-3 rounded-xl p-4">
              <Icon className="text-xl text-cyan" />
              <span className="text-sm">{name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
