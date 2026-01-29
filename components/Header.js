import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">twunnyfour</Link>
        <span className="slogan">We Keep Secure</span>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/solutions/email">Email Security</Link>
          <Link href="/solutions/endpoint">Endpoint Security</Link>
          <Link href="/solutions/bundles">Bundles</Link>
          <Link href="/resources">Resources</Link>
        </nav>
      </div>
    </header>
  );
}
