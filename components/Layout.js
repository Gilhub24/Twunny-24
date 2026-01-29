import Header from './Header';
import Footer from './Footer';
import ChatAssistant from './ChatAssistant';
import ResourcesPanel from './ResourcesPanel';

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <div className="app-main">
        <div className="app-content">{children}</div>
        <ResourcesPanel />
      </div>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
