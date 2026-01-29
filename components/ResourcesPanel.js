import Link from 'next/link';
import { newsHeadlines } from '../data/news';

export default function ResourcesPanel() {
  return (
    <aside className="resources-panel">
      <h3>Security News</h3>
      <ul>
        {newsHeadlines.map((n) => (
          <li key={n.id}>
            <Link href={`/resources?article=${n.id}`}>{n.title}</Link>
          </li>
        ))}
      </ul>

      <Link href="/resources" className="resources-link">
        View all resources
      </Link>
    </aside>
  );
}
