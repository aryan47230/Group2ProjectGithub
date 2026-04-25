import { useState, useEffect } from 'react';
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
        background: 'radial-gradient(ellipse at 50% 45%, rgba(255,170,64,0.06) 0%, rgba(0,255,242,0.02) 30%, #000000 65%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        zIndex: 900,
        pointerEvents: 'none',
        fontFamily: "var(--font-display, 'Outfit'), sans-serif",
      }}
    >
      {/* Outer ring */}
      <div style={{ position: 'relative', width: 36, height: 36 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px solid rgba(255,170,64,0.15)',
            animation: 'loaderRing 2s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#ffd27a',
            boxShadow:
              '0 0 14px rgba(255,200,90,0.9), 0 0 32px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)',
            animation: 'branchPulse 1.6s ease-in-out infinite',
          }}
        />
      </div>
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
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.9; }
          50% { transform: translate(-50%,-50%) scale(1.3); opacity: 1; }
        }
        @keyframes loaderRing {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0.8; }
        }
      `}</style>
    </div>
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
        <>
          <AppHeader onSignIn={onSignIn} onSignUp={onSignUp} />
          <Topbar />
        </>
      )}
      {showEmptyState && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 40%, rgba(255,170,64,0.03) 0%, transparent 60%), #000000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            zIndex: 50,
            fontFamily: "var(--font-display, 'Outfit'), sans-serif",
            paddingTop: 120,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#ffd27a',
              boxShadow: '0 0 12px rgba(255,200,90,0.6), 0 0 28px rgba(255,170,64,0.3)',
              opacity: 0.7,
            }}
          />
          <div
            style={{
              color: 'rgba(255,200,90,0.85)',
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              textShadow: '0 0 10px rgba(255,170,64,0.5)',
            }}
          >
            Wiki Hopper
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 14,
              letterSpacing: 1,
              maxWidth: 400,
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Use the search bar above to explore any Wikipedia concept
          </div>
        </div>
      )}
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
