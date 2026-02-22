import { useMemo, useState } from 'react';

const scenarios = {
  'High traffic': {
    severity: 'High',
    focus: 'Checkout latency, queue timeout, kitchen ticket sequencing',
    decision: 'Expand load + soak test, validate fallback rules before go-live'
  },
  'Payment failure': {
    severity: 'Critical',
    focus: 'Idempotency, retry logic, partial authorization edge cases',
    decision: 'Block release until recovery path proves no double-charge risk'
  },
  'POS delay': {
    severity: 'Medium-High',
    focus: 'Order sync lag, modifier integrity, staff reconciliation workflow',
    decision: 'Release with guardrails only if reconciliation dashboard is verified'
  }
};

function RiskSimulator() {
  const [scenario, setScenario] = useState('High traffic');
  const result = useMemo(() => scenarios[scenario], [scenario]);

  return (
    <section className="py-16">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="section-title">Production Risk Simulator</h2>
        <article className="glass mt-6 rounded-2xl p-6">
          <label htmlFor="scenario" className="text-sm text-slate-300">Select scenario</label>
          <select id="scenario" value={scenario} onChange={(e) => setScenario(e.target.value)} className="mt-2 w-full rounded-lg border border-white/15 bg-slate-900/70 p-2 text-sm outline-none md:w-80">
            {Object.keys(scenarios).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p><span className="font-medium text-white">Risk Severity:</span> {result.severity}</p>
            <p><span className="font-medium text-white">Primary QA Focus:</span> {result.focus}</p>
            <p><span className="font-medium text-white">Release Recommendation:</span> {result.decision}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default RiskSimulator;
