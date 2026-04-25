import { useState, useEffect, useRef } from 'react';
import ConceptSuggestions from '../components/ConceptSuggestions/ConceptSuggestions';
import { useSearchParams } from 'react-router-dom';
import { ExplorerProvider, useExplorer } from '../context/ExplorerContext';
import AppHeader from '../components/AppHeader/AppHeader';
import AuthModal from '../components/Auth/AuthModal';
import Topbar from '../components/Topbar/Topbar';
import ConceptPanel from '../components/ConceptPanel/ConceptPanel';
import KnowledgeGraph from '../components/KnowledgeGraph/KnowledgeGraph';
import TrailSidebar from '../components/TrailSidebar/TrailSidebar';
import ErrorBoundary from '../components/ErrorBoundary';
import KeyboardHelp from '../components/KeyboardHelp/KeyboardHelp';
import styles from './ExploreRoute.module.css';
import skillStyles from '../components/SkillTree/SkillTree.module.css';

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

function ExploreLoader({ topic }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        zIndex: 900,
        fontFamily: "var(--font-display, 'Outfit'), sans-serif",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: '#ffd27a',
          boxShadow:
            '0 0 12px rgba(255,200,90,0.9), 0 0 28px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)',
          animation: 'branchPulse 1.6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          color: 'rgba(255,200,90,0.85)',
          fontSize: 11,
          letterSpacing: 4,
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(255,170,64,0.5)',
        }}
      >
        Loading concept
      </div>
      {topic && (
        <div
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 13,
            letterSpacing: 1,
          }}
        >
          {topic}
        </div>
      )}
      <style>{`
        @keyframes branchPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function WikiHopperLanding() {
  const { jumpTo } = useExplorer();
  const [topic, setTopic] = useState('');
  const formWrapRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const t = topic.trim();
    if (!t) return;
    jumpTo(t);
  }

  function handlePick(title) {
    setTopic(title);
    jumpTo(title);
  }

  return (
    <main className={skillStyles.promptView} style={{ minHeight: '100vh' }}>
      <div className={skillStyles.dotGrid} aria-hidden="true" />

      <header className={skillStyles.hero}>
        <span
          className={skillStyles.eyebrow}
          style={{
            color: 'var(--rn-cyan)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            borderColor: 'rgba(0,255,242,0.25)',
            textShadow: '0 0 10px rgba(0,255,242,0.35)',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--rn-cyan)',
              boxShadow: '0 0 8px var(--rn-cyan-glow)',
              display: 'inline-block',
            }}
          />
          WIKI HOPPER
        </span>
        <h1 className={skillStyles.heading}>
          Where do you want{' '}
          <span
            className={skillStyles.headingItalic}
            style={{ color: 'var(--rn-cyan)', textShadow: '0 0 30px rgba(0,255,242,0.25)' }}
          >
            to wander
          </span>
          ?
        </h1>
        <p className={skillStyles.subtitle}>
          Type any concept — a person, a place, an idea. We'll pull the Wikipedia article and show you where to hop next.
        </p>
      </header>

      <div
        ref={formWrapRef}
        style={{ position: 'relative', width: '100%', maxWidth: 620 }}
      >
        <form
          className={skillStyles.form}
          onSubmit={handleSubmit}
          style={{
            maxWidth: 'none',
            width: '100%',
            borderColor: 'rgba(0,255,242,0.18)',
            boxShadow: '0 0 20px rgba(0,255,242,0.05)',
          }}
        >
          <span className={skillStyles.formIcon} style={{ color: 'var(--rn-cyan)' }}>▸</span>
          <input
            className={skillStyles.topicInput}
            type="text"
            placeholder="e.g. black holes, the Renaissance, Euler..."
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            autoFocus
          />
          <button type="submit" className={styles.hopInBtn}>
            HOP IN
          </button>
        </form>
        <ConceptSuggestions
          query={topic}
          onSelect={handlePick}
          containerRef={formWrapRef}
        />
      </div>
    </main>
  );
}

function ExploreShell({ onSignIn, onSignUp, pendingTopic }) {
  const { currentConcept, loading } = useExplorer();
  const ready = Boolean(currentConcept);
  const showLoader = !ready && (loading || Boolean(pendingTopic));
  const showEmptyState = !ready && !loading && !pendingTopic;

  useEffect(() => {
    if (ready) {
      window.dispatchEvent(new CustomEvent('explore:ready'));
    }
  }, [ready]);

  // Lock page scroll while on the Wiki Hopper — the graph is the only viewport
  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  return (
    <>
      {showLoader && <ExploreLoader topic={pendingTopic || '...'} />}
      {(ready || showEmptyState) && (
        <AppHeader onSignIn={onSignIn} onSignUp={onSignUp} />
      )}
      {ready && <Topbar />}
      {showEmptyState && <WikiHopperLanding />}
      <div
        className={styles.app}
        style={{
          visibility: ready ? 'visible' : 'hidden',
          background: '#000000',
        }}
      >
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
      {ready && <KeyboardHelp page="explore" />}
    </>
  );
}

export default function ExploreRoute() {
  const [authMode, setAuthMode] = useState(null);
  const initialQ = new URLSearchParams(window.location.search).get('q') || '';

  return (
    <ExplorerProvider>
      <ExploreShell
        pendingTopic={initialQ}
        onSignIn={() => setAuthMode('login')}
        onSignUp={() => setAuthMode('register')}
      />
      <AutoJump />
      {authMode && (
        <AuthModal initialMode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </ExplorerProvider>
  );
}
