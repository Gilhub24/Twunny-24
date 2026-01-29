import { endpointProducts } from '../../data/products';

export default function EndpointSecurity() {
  return (
    <div className="page">
      <section className="hero hero-sub">
        <h1>Endpoint Security (CrowdStrike style)</h1>
        <p>Next gen EDR, threat hunting, and real time protection.</p>
      </section>

      <section className="section">
        <h2>Endpoint Security Plans</h2>
        <div className="grid">
          {endpointProducts.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p className="price">${p.pricePerUser}/user/month</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
