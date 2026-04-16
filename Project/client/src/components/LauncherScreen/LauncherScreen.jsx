import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSkillTree } from '../../context/SkillTreeContext';
import Blackhole from './Blackhole';
import styles from './LauncherScreen.module.css';

const STORAGE_KEY = 'wikiloop.launcher.seen';

export default function LauncherScreen() {
  const navigate = useNavigate();
  const { generateTree } = useSkillTree();
  const [phase, setPhase] = useState('idle');
  const [mode, setMode] = useState(null);
  const [topic, setTopic] = useState('');
  const [fadingOut, setFadingOut] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [hidden, setHidden] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });
  const textareaRef = useRef(null);

  useEffect(() => {
    if (phase === 'prompting' && textareaRef.current && !generating) {
      const t = setTimeout(() => textareaRef.current?.focus(), 420);
      return () => clearTimeout(t);
    }
  }, [phase, generating]);

  if (hidden) return null;

  const dismiss = () => {
    setFadingOut(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
    setTimeout(() => setHidden(true), 520);
  };

  const handleHeroClick = () => {
    if (phase === 'idle') setPhase('selecting');
  };

  const handleChildClick = (chosen) => {
    if (phase !== 'selecting') return;
    setMode(chosen);
    setPhase('prompting');
  };

  const handleSubmit = async () => {
    const trimmed = topic.trim();
    if (!trimmed || generating) return;
    setGenerating(true);

    if (mode === 'skilltree') {
      try {
        await generateTree(trimmed);
        dismiss();
      } catch {
        setGenerating(false);
      }
      return;
    }

    // Wiki Hopper: navigate so ExploreRoute mounts and starts loading, but
    // keep the launcher visible until explore signals it is ready.
    const onReady = () => {
      window.removeEventListener('explore:ready', onReady);
      dismiss();
    };
    window.addEventListener('explore:ready', onReady);
    navigate(`/explore?q=${encodeURIComponent(trimmed)}`);
    // Safety fallback if the event never fires.
    setTimeout(() => {
      window.removeEventListener('explore:ready', onReady);
      if (!fadingOut) dismiss();
    }, 15000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isSelecting = phase === 'selecting';
  const isPrompting = phase === 'prompting';

  const modeLabel = mode === 'skilltree' ? 'SKILL TREE MODE' : 'WIKI HOPPER MODE';
  const assistive =
    mode === 'skilltree'
      ? 'Enter a topic or skill to map — e.g. Machine Learning, Music Theory, Photography'
      : 'Enter a concept to explore — e.g. Quantum mechanics, Jazz, Byzantine Empire';
  const loadingLabel =
    mode === 'skilltree' ? 'Growing skill tree' : 'Loading concept';

  return (
    <div
      className={`${styles.launcher} ${fadingOut ? styles.fadeOut : ''}`}
      aria-hidden={fadingOut}
    >
      <div className={styles.backdrop} />

      <svg className={styles.connectors} aria-hidden="true">
        <line
          x1="50%"
          y1="50%"
          x2="calc(50% - 290px)"
          y2="calc(50% + 240px)"
          className={`${styles.connector} ${isSelecting ? styles.connectorVisible : ''}`}
        />
        <line
          x1="50%"
          y1="50%"
          x2="calc(50% + 290px)"
          y2="calc(50% + 240px)"
          className={`${styles.connector} ${isSelecting ? styles.connectorVisible : ''}`}
        />
      </svg>

      <button
        type="button"
        onClick={handleHeroClick}
        className={`${styles.node} ${styles.hero} ${isSelecting ? styles.heroDim : ''} ${isPrompting && !generating ? styles.heroGone : ''} ${generating ? styles.heroGenerating : ''}`}
        disabled={phase !== 'idle' || generating}
        aria-label="Begin"
      >
        <Blackhole intensity={generating ? 1.6 : 1.15} />
        {!generating && <span className={styles.heroLabel}>BRANCHER</span>}
      </button>

      <button
        type="button"
        onClick={() => handleChildClick('skilltree')}
        className={`${styles.node} ${styles.child} ${styles.childSW} ${isSelecting || isPrompting ? styles.childShown : ''} ${isPrompting && mode !== 'skilltree' ? styles.childFaded : ''} ${isPrompting && mode === 'skilltree' ? styles.childChosen : ''} ${generating ? styles.childFaded : ''}`}
        aria-label="Skill Tree mode"
        tabIndex={isSelecting ? 0 : -1}
        disabled={generating}
      >
        <Blackhole intensity={0.95} />
        <span className={styles.childLabel}>
          SKILL
          <br />
          TREE
        </span>
      </button>

      <button
        type="button"
        onClick={() => handleChildClick('wikihopper')}
        className={`${styles.node} ${styles.child} ${styles.childSE} ${isSelecting || isPrompting ? styles.childShown : ''} ${isPrompting && mode !== 'wikihopper' ? styles.childFaded : ''} ${isPrompting && mode === 'wikihopper' ? styles.childChosen : ''} ${generating ? styles.childFaded : ''}`}
        aria-label="Wiki Hopper mode"
        tabIndex={isSelecting ? 0 : -1}
        disabled={generating}
      >
        <Blackhole intensity={0.95} />
        <span className={styles.childLabel}>
          WIKI
          <br />
          HOPPER
        </span>
      </button>

      {!generating && (
        <div className={`${styles.panel} ${isPrompting ? styles.panelShown : ''}`}>
          <div className={styles.panelLabel}>{modeLabel}</div>
          <div className={styles.panelHint}>{assistive}</div>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            rows={2}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a topic..."
          />
          <button
            type="button"
            className={styles.generate}
            onClick={handleSubmit}
            disabled={!topic.trim()}
          >
            <span className={styles.generateShimmer} />
            <span className={styles.generateText}>GENERATE</span>
          </button>
        </div>
      )}

      <div
        className={`${styles.loadingPanel} ${generating ? styles.loadingPanelShown : ''}`}
      >
        <div className={styles.loadingLabel}>{loadingLabel}</div>
        {topic && <div className={styles.loadingTopic}>{topic}</div>}
      </div>
    </div>
  );
}
