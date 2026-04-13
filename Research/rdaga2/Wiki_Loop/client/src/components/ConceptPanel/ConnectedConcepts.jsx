import { useRef, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './ConnectedConcepts.module.css';

const RELATION_LABELS = {
  core: 'Core',
  related: 'Related',
  application: 'Application',
  foundation: 'Foundation',
};

export default function ConnectedConcepts({ connections }) {
  const { jumpTo, setPreview, setHighlight, clearHighlight, highlightedNodeId } = useExplorer();
  const gridRef = useRef(null);

  useEffect(() => {
    if (!highlightedNodeId || !gridRef.current) return;
    const card = gridRef.current.querySelector(`[data-node-id="${CSS.escape(highlightedNodeId)}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [highlightedNodeId]);

  if (!connections || connections.length === 0) return null;
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <span className={styles.title}>On the Graph</span>
        <span className={styles.count}>{connections.length} directly connected</span>
      </div>
      <div className={styles.grid} ref={gridRef}>
        {connections.map((conn) => (
          <div
            key={conn.title}
            className={`${styles.card} ${highlightedNodeId === conn.title ? styles.cardHighlighted : ''}`}
            data-node-id={conn.title}
            onMouseEnter={() => setHighlight(conn.title)}
            onMouseLeave={() => clearHighlight()}
          >
            <div className={styles.strength}>
              {[1, 2, 3].map((n) => (
                <div key={n} className={styles.dot} style={{
                  background: n <= conn.strength
                    ? `var(--accent-${conn.relation === 'core' ? 'blue' : conn.relation === 'application' ? 'gold' : conn.relation === 'foundation' ? 'purple' : 'green'})`
                    : '#333',
                }} />
              ))}
            </div>
            <span className={`${styles.rel} ${styles[`rel-${conn.relation}`]}`}>
              {RELATION_LABELS[conn.relation] || conn.relation}
            </span>
            <h4 className={styles.cardTitle}>{conn.title}</h4>
            <p className={styles.cardDesc}>{conn.description}</p>
            <div className={styles.actions}>
              <span onClick={() => jumpTo(conn.title)}>Jump</span>
              <span onClick={() => setPreview({ ...conn, id: conn.title, label: conn.title })}>Preview</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
