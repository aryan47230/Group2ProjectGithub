import { useState, useEffect, useRef } from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import ImportBanner from '../components/ImportBanner/ImportBanner';
import AuthModal from '../components/Auth/AuthModal';
import PromptView from '../components/SkillTree/PromptView';
import TreeView from '../components/SkillTree/TreeView';
import { useSkillTree } from '../context/SkillTreeContext';
import KeyboardHelp from '../components/KeyboardHelp/KeyboardHelp';

function SkillTreeLoader({ topic }) {
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
        Growing skill tree
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

export default function SkillTreeRoute({ hideExplore = false } = {}) {
  const { currentTopic, currentNodes, generating, generateTree } = useSkillTree();
  const [authMode, setAuthMode] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const autoTopic = params.get('generate');
  const [autoActive, setAutoActive] = useState(Boolean(autoTopic));
  const [autoLabel, setAutoLabel] = useState(autoTopic || '');
  const autoRan = useRef(false);

  useEffect(() => {
    if (autoRan.current) return;
    if (!autoTopic) return;
    autoRan.current = true;
    window.history.replaceState({}, '', '/');
    generateTree(autoTopic)
      .catch(() => {})
      .finally(() => setAutoActive(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showTree = currentTopic && currentNodes.length > 0;
  const showLoader = (autoActive || generating) && !showTree;

  if (showLoader) {
    return <SkillTreeLoader topic={autoLabel} />;
  }

  return (
    <>
      <AppHeader
        onSignIn={() => setAuthMode('login')}
        onSignUp={() => setAuthMode('register')}
      />
      <ImportBanner />
      {showTree ? <TreeView /> : <PromptView hideExplore={hideExplore} />}
      <KeyboardHelp page="skilltree" />
      {authMode && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setAuthMode(null)}
        />
      )}
    </>
  );
}
