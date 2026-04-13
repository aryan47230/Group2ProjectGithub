import { ExplorerProvider } from './context/ExplorerContext';
import Topbar from './components/Topbar/Topbar';
import ConceptPanel from './components/ConceptPanel/ConceptPanel';
import KnowledgeGraph from './components/KnowledgeGraph/KnowledgeGraph';
import TrailSidebar from './components/TrailSidebar/TrailSidebar';
import JourneyOverlay from './components/JourneyOverlay/JourneyOverlay';
import ErrorBoundary from './components/ErrorBoundary';
import styles from './App.module.css';

export default function App() {
  return (
    <ExplorerProvider>
      <div className={styles.app}>
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
