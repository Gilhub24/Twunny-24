import { emailProducts } from '../../data/products';

export default function EmailSecurity() {
  return (
    <div className="page">
      <section className="hero hero-sub">
        <h1>Email Security (Mimecast style)</h1>
        <p>Advanced protection against phishing, impersonation, and targeted attacks.</p>
      </section>

      <section className="section">
        <h2>Email Security Plans</h2>
        <div className="grid">
          {emailProducts.map((p) => (
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
