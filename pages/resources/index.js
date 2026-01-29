import { useRouter } from 'next/router';
import { newsHeadlines } from '../../data/news';

export default function ResourcesPage() {
  const router = useRouter();
  const { article } = router.query;

  const selected = newsHeadlines.find((n) => n.id === article);

  return (
    <div className="page">
      <h1>Cybersecurity Resources</h1>

      {selected && (
        <div className="card">
          <h2>{selected.title}</h2>
          <p>{selected.content}</p>
        </div>
      )}

      <section className="section">
        <h2>All Headlines</h2>
        <div className="grid">
          {newsHeadlines.map((n) => (
            <div key={n.id} className="card">
              <h3>{n.title}</h3>
              <p>{n.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
