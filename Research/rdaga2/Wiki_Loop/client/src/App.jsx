import { useState } from 'react';
import { ExplorerProvider } from './context/ExplorerContext';
import Topbar from './components/Topbar/Topbar';
import ConceptPanel from './components/ConceptPanel/ConceptPanel';
import KnowledgeGraph from './components/KnowledgeGraph/KnowledgeGraph';
import TrailSidebar from './components/TrailSidebar/TrailSidebar';
import JourneyOverlay from './components/JourneyOverlay/JourneyOverlay';
import LauncherScreen from './components/LauncherScreen/LauncherScreen';
import ErrorBoundary from './components/ErrorBoundary';
import styles from './App.module.css';

export default function App() {
  const [launched, setLaunched] = useState(false);
  const [, setAppMode] = useState(null);

  const handleLaunch = (mode) => {
    setAppMode(mode);
    setLaunched(true);
  };

  return (
    <ExplorerProvider>
      <LauncherScreen launched={launched} onLaunch={handleLaunch} />

      <div className={`${styles.app} ${launched ? styles.appVisible : styles.appHidden}`}>
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
    </ExplorerProvider>
  );
}
