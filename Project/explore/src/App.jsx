import { useState, useEffect } from 'react';
import { ExplorerProvider, useExplorer } from './context/ExplorerContext';
import Topbar from './components/Topbar/Topbar';
import ConceptPanel from './components/ConceptPanel/ConceptPanel';
import KnowledgeGraph from './components/KnowledgeGraph/KnowledgeGraph';
import TrailSidebar from './components/TrailSidebar/TrailSidebar';
import JourneyOverlay from './components/JourneyOverlay/JourneyOverlay';
import ErrorBoundary from './components/ErrorBoundary';
import styles from './App.module.css';

function AutoJump() {
  const { jumpTo } = useExplorer();
  const [fired, setFired] = useState(false);

  useEffect(() => {
    if (fired) return;
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) {
      setFired(true);
      window.history.replaceState({}, '', window.location.pathname);
      jumpTo(q);
    }
  }, [fired, jumpTo]);

  return null;
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/me').then(r => r.json()).then(data => {
      if (data.user) setUser(data.user);
    }).catch(() => {});
  }, []);

  return (
    <ExplorerProvider>
      <div className={styles.app}>
        <Topbar user={user} />
        <div className={styles.main}>
          <div className={styles.leftPanel}><ConceptPanel /></div>
          <div className={styles.rightPanel}>
            <ErrorBoundary>
              <KnowledgeGraph />
            </ErrorBoundary>
            <TrailSidebar />
          </div>
        </div>
      </div>
      <JourneyOverlay />
      <AutoJump />
    </ExplorerProvider>
  );
}
