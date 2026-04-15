import { useState, useEffect } from 'react';
import styles from './SkillTree.module.css';

export default function DetailPanel({ node, open, completedNodes, onClose, onToggleComplete }) {
  const [tab, setTab] = useState('overview');

  useEffect(() => {
    if (node) setTab('overview');
  }, [node?.name]);

  if (!node) {
    return <aside className={styles.detailPanel} aria-hidden="true" />;
  }

  const isUnlocked = (!node.requires || node.requires.length === 0) ||
    node.requires.every((r) => completedNodes.has(r));
  const locked = !isUnlocked;
  const done = completedNodes.has(node.name);
  const missing = node.requires?.filter((r) => !completedNodes.has(r)) || [];

  const panelClass = `${styles.detailPanel} ${open ? styles.detailPanelOpen : ''}`;

  return (
    <aside className={panelClass}>
      <div className={styles.detailHeader}>
        <h3 className={styles.detailName}>{node.name}</h3>
        <button className={styles.detailClose} onClick={onClose} aria-label="Close details">
          <span className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.detailLevelRow}>
        <span className={styles.detailLevel}>LVL {node.level}</span>
        {locked && <span className={styles.detailLocked}>LOCKED</span>}
        {done && <span className={styles.detailDone}>COMPLETE</span>}
      </div>

      {!locked && (
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabBtn} ${tab === 'overview' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('overview')}
          >Overview</button>
          <button
            className={`${styles.tabBtn} ${tab === 'learn' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('learn')}
          >Learn</button>
          <button
            className={`${styles.tabBtn} ${tab === 'resources' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('resources')}
          >Resources</button>
        </div>
      )}

      {locked ? (
        <div className={styles.tabPane}>
          {node.requires && node.requires.length > 0 && (
            <div>
              <p className={styles.detailLabel}>Requires</p>
              <ul className={`${styles.list} ${styles.requires}`}>
                {node.requires.map((r) => {
                  const rDone = completedNodes.has(r);
                  return (
                    <li key={r} style={{ color: rDone ? 'hsl(142,55%,55%)' : undefined }}>
                      {rDone ? '✓ ' : ''}{r}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <p className={styles.detailDescription}>
            Complete {missing.join(' and ')} to unlock this skill.
          </p>
        </div>
      ) : (
        <>
          {tab === 'overview' && (
            <div className={styles.tabPane}>
              {node.requires && node.requires.length > 0 && (
                <div>
                  <p className={styles.detailLabel}>Requires</p>
                  <ul className={`${styles.list} ${styles.requires}`}>
                    {node.requires.map((r) => {
                      const rDone = completedNodes.has(r);
                      return (
                        <li key={r} style={{ color: rDone ? 'hsl(142,55%,55%)' : undefined }}>
                          {rDone ? '✓ ' : ''}{r}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <p className={styles.detailLabel}>How to develop</p>
              <p className={styles.detailDescription}>{node.description || 'No description available.'}</p>
              <p className={styles.detailLabel}>Practice tips</p>
              <ul className={`${styles.list} ${styles.tips}`}>
                {(node.tips || []).map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              {node.outcomes && node.outcomes.length > 0 && (
                <div>
                  <p className={styles.detailLabel}>What you'll be able to do</p>
                  <ul className={`${styles.list} ${styles.outcomes}`}>
                    {node.outcomes.map((o, i) => <li key={i}>{o}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}

          {tab === 'learn' && (
            <div className={styles.tabPane}>
              {node.keyConcepts && node.keyConcepts.length > 0 && (
                <div>
                  <p className={styles.detailLabel}>Key concepts</p>
                  <ul className={`${styles.list} ${styles.concepts}`}>
                    {node.keyConcepts.map((c, i) => (
                      <li key={i}>
                        {typeof c === 'object' ? (
                          <><strong>{c.term}</strong> — {c.explanation}</>
                        ) : c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {node.commonMistakes && node.commonMistakes.length > 0 && (
                <div>
                  <p className={styles.detailLabel}>Common mistakes</p>
                  <ul className={`${styles.list} ${styles.mistakes}`}>
                    {node.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}

          {tab === 'resources' && (
            <div className={styles.tabPane}>
              <div>
                <p className={styles.detailLabel}>Resources</p>
                <ul className={`${styles.list} ${styles.resources}`}>
                  {(node.resources || []).map((r, i) => (
                    <li key={i}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                      <span className={styles.resourceType}>[{r.type}]</span>
                      {r.description && <p className={styles.resourceDesc}>{r.description}</p>}
                    </li>
                  ))}
                  <li className={styles.exploreWikiLink}>
                    <a href={`/explore?q=${encodeURIComponent(node.name)}`}>
                      Explore "{node.name}" on Wikipedia
                    </a>
                    <span className={styles.resourceType}>[wiki]</span>
                    <p className={styles.resourceDesc}>Dive deeper with the interactive knowledge graph explorer.</p>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            className={`${styles.completeBtn} ${done ? styles.completeBtnDone : ''}`}
            onClick={() => onToggleComplete(node.name)}
          >
            {done ? 'COMPLETED' : 'MARK COMPLETE'}
          </button>
        </>
      )}
    </aside>
  );
}
