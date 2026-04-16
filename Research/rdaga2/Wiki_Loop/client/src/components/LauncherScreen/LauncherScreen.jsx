import { useEffect, useRef, useState } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './LauncherScreen.module.css';

export default function LauncherScreen({ launched, onLaunch }) {
  const { jumpTo } = useExplorer();
  const [phase, setPhase] = useState('idle');
  const [mode, setMode] = useState(null);
  const [topic, setTopic] = useState('');
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (launched && !fadingOut) {
      setFadingOut(true);
      const t = setTimeout(() => setHidden(true), 520);
      return () => clearTimeout(t);
    }
  }, [launched, fadingOut]);

  useEffect(() => {
    if (phase === 'prompting' && textareaRef.current) {
      const t = setTimeout(() => textareaRef.current?.focus(), 420);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (hidden) return null;

  const handleHeroClick = () => {
    if (phase === 'idle') setPhase('selecting');
  };

  const handleChildClick = (chosen) => {
    if (phase !== 'selecting') return;
    setMode(chosen);
    setPhase('prompting');
  };

  const handleSubmit = () => {
    const trimmed = topic.trim();
    if (!trimmed) return;
    jumpTo(trimmed);
    onLaunch?.(mode, trimmed);
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
          x2="calc(50% - 120px)"
          y2="calc(50% + 90px)"
          className={`${styles.connector} ${isSelecting ? styles.connectorVisible : ''}`}
        />
        <line
          x1="50%"
          y1="50%"
          x2="calc(50% + 120px)"
          y2="calc(50% + 90px)"
          className={`${styles.connector} ${isSelecting ? styles.connectorVisible : ''}`}
        />
      </svg>

      <button
        type="button"
        onClick={handleHeroClick}
        className={`${styles.node} ${styles.hero} ${isSelecting ? styles.heroDim : ''} ${isPrompting ? styles.heroGone : ''}`}
        disabled={phase !== 'idle'}
        aria-label="Begin"
      >
        <span className={styles.heroLabel}>WIKILOOP</span>
      </button>

      <button
        type="button"
        onClick={() => handleChildClick('skilltree')}
        className={`${styles.node} ${styles.child} ${styles.childSW} ${isSelecting || isPrompting ? styles.childShown : ''} ${isPrompting && mode !== 'skilltree' ? styles.childFaded : ''} ${isPrompting && mode === 'skilltree' ? styles.childChosen : ''}`}
        aria-label="Skill Tree mode"
        tabIndex={isSelecting ? 0 : -1}
      >
        <span className={styles.childLabel}>
          SKILL
          <br />
          TREE
        </span>
      </button>

      <button
        type="button"
        onClick={() => handleChildClick('wikihopper')}
        className={`${styles.node} ${styles.child} ${styles.childSE} ${isSelecting || isPrompting ? styles.childShown : ''} ${isPrompting && mode !== 'wikihopper' ? styles.childFaded : ''} ${isPrompting && mode === 'wikihopper' ? styles.childChosen : ''}`}
        aria-label="Wiki Hopper mode"
        tabIndex={isSelecting ? 0 : -1}
      >
        <span className={styles.childLabel}>
          WIKI
          <br />
          HOPPER
        </span>
      </button>

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
    </div>
  );
}
