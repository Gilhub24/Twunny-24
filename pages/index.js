import { useState } from 'react';
import Dartboard from '../components/Dartboard';
import { dartboardBundles } from '../data/bundles';

export default function Home() {
  const [selectedBundle, setSelectedBundle] = useState(dartboardBundles[0]);

  return (
    <div className="page">
      <section className="hero">
        <h1>twunnyfour</h1>
        <h2 className="slogan-large">We Keep Secure</h2>
        <p>Explore 20 core cybersecurity capabilities through an interactive dartboard.</p>
      </section>

      <section className="section dartboard-section">
        <div className="dartboard-column">
          <Dartboard onSelect={setSelectedBundle} />
        </div>

        <div className="bundle-details-column">
          <h2>{selectedBundle.title}</h2>
          <p>{selectedBundle.description}</p>
          <p className="bundle-capability">
            Focus area: <strong>{selectedBundle.capability}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
