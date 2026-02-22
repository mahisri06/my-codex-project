const nodes = ['Cart', 'Payment', 'POS', 'Kitchen', 'Fulfillment', 'Completion'];

function Lifecycle() {
  return (
    <section className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="section-title">Order Lifecycle Under QA Lens</h2>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {nodes.map((node, i) => (
            <div key={node} className="flex items-center gap-2">
              <div className="glass rounded-full px-4 py-2 text-sm">{node}</div>
              {i < nodes.length - 1 && <span className="text-cyan">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lifecycle;
