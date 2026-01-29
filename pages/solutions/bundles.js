import { dartboardBundles } from '../../data/bundles';

export default function BundlesPage() {
  return (
    <div className="page">
      <section className="hero hero-sub">
        <h1>Security Bundles</h1>
        <p>All 20 bundles represented on the dartboard.</p>
      </section>

      <section className="section">
        <h2>All Bundles</h2>
        <div className="grid">
          {dartboardBundles.map((b) => (
            <div key={b.id} className="card">
              <h3>#{b.id} — {b.title}</h3>
              <p>{b.description}</p>
              <p className="bundle-capability">
                Focus area: <strong>{b.capability}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
