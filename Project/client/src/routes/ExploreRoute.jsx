import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExplorerProvider, useExplorer } from '../context/ExplorerContext';
import AppHeader from '../components/AppHeader/AppHeader';
import AuthModal from '../components/Auth/AuthModal';
import Topbar from '../components/Topbar/Topbar';
import ConceptPanel from '../components/ConceptPanel/ConceptPanel';
import KnowledgeGraph from '../components/KnowledgeGraph/KnowledgeGraph';
import TrailSidebar from '../components/TrailSidebar/TrailSidebar';
import JourneyOverlay from '../components/JourneyOverlay/JourneyOverlay';
import ErrorBoundary from '../components/ErrorBoundary';
import styles from './ExploreRoute.module.css';

function AutoJump() {
  const { jumpTo } = useExplorer();
  const [fired, setFired] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (fired) return;
    const q = searchParams.get('q');
    if (q) {
      setFired(true);
      const next = new URLSearchParams(searchParams);
      next.delete('q');
      setSearchParams(next, { replace: true });
      jumpTo(q);
    }
  }, [fired, jumpTo, searchParams, setSearchParams]);

  return null;
}

export default function ExploreRoute() {
  const [authMode, setAuthMode] = useState(null);

  return (
    <ExplorerProvider>
      <div className={styles.app}>
        <AppHeader
          onSignIn={() => setAuthMode('login')}
          onSignUp={() => setAuthMode('register')}
        />
        <Topbar />
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
      {authMode && (
        <AuthModal initialMode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </ExplorerProvider>
  );
}
