import { useState } from 'react';
import { dartboardBundles } from '../data/bundles';

export default function Dartboard({ onSelect }) {
  const [selected, setSelected] = useState(1);

  const handleSelect = (id) => {
    setSelected(id);
    const bundle = dartboardBundles.find((b) => b.id === id);
    if (bundle && onSelect) onSelect(bundle);
  };

  const segments = [];
  for (let i = 0; i < 20; i++) {
    const number = i + 1;
    const angle = (360 / 20) * i;

    segments.push(
      <button
        key={number}
        className={`dart-segment ${selected === number ? 'active' : ''}`}
        style={{ transform: `rotate(${angle}deg)` }}
        onClick={() => handleSelect(number)}
        type="button"
      >
        <span className="dart-number" style={{ transform: `rotate(${-angle}deg)` }}>
          {number}
        </span>
      </button>
    );
  }

  const selectedAngle = (360 / 20) * (selected - 1);

  return (
    <div className="dartboard-wrapper">
      <div className="dartboard">
        {segments}
        <div className="dart-center" />

        <div className="dart-arrow" style={{ transform: `rotate(${selectedAngle}deg)` }}>
          <div className="dart-arrow-body" />
          <div className="dart-arrow-head" />
        </div>
      </div>
    </div>
  );
}
