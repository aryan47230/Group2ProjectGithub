import { useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './NodeDetailOverlay.module.css';

const TYPE_LABELS = {
  center: 'CURRENT',
  primary: 'DIRECT CONNECTION',
  secondary: 'SUB-LINK',
  trail: 'VISITED',
  dormant: 'PREVIOUS CONNECTION',
};

// Pick the best single description: prefer the longer of extract/description,
// and only show summary if it adds something the longer text doesn't.
function pickBody(node) {
  const a = (node.extract || '').trim();
  const b = (node.description || '').trim();
  let main = '';
  if (a && b) {
    main = a.length >= b.length ? a : b;
    // If the shorter is a strict prefix of the longer, the longer fully contains it.
    // Otherwise we still drop the shorter — readers get one clean block.
  } else {
    main = a || b;
  }
  if (!main) return { main: 'No detailed information available.', extra: null };

  const summary = (node.summary || '').trim();
  const extra = summary && summary !== main && !main.startsWith(summary) ? summary : null;
  return { main, extra };
}

export default function NodeDetailOverlay() {
  const { expandedNode, detailLoading, clearExpanded, jumpTo } = useExplorer();

  // ESC closes the overlay (Report 5 · 3.4).
  useEffect(() => {
    if (!expandedNode && !detailLoading) return;
    const onKey = (e) => { if (e.key === 'Escape') clearExpanded(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expandedNode, detailLoading, clearExpanded]);

  if (!expandedNode && !detailLoading) return null;

  if (detailLoading) {
    return (
      <div className={styles.overlay} onClick={clearExpanded}>
        <div className={styles.card} onClick={(e) => e.stopPropagation()}>
          <div className={styles.loadingWrap}>
            <div className={styles.spinner} />
            <p className={styles.loadingText}>Loading details...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleJump = () => {
    clearExpanded();
    jumpTo(expandedNode.label || expandedNode.id);
  };

  const label = TYPE_LABELS[expandedNode.type] || expandedNode.relation?.toUpperCase() || 'RELATED';
  const { main, extra } = pickBody(expandedNode);
  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(expandedNode.label || expandedNode.id)}`;

  return (
    <div className={styles.overlay} onClick={clearExpanded}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <div className={styles.category}>{label}</div>
          <h2 className={styles.title}>{expandedNode.label || expandedNode.id}</h2>
        </div>

        <div className={styles.body}>
          {expandedNode.image && (
            <div className={styles.imageWrap}>
              <img src={expandedNode.image} alt={expandedNode.label} className={styles.image} />
            </div>
          )}

          <p className={styles.extract}>{main}</p>
          {extra && <p className={styles.summary}>{extra}</p>}
        </div>

        <div className={styles.actions}>
          <button className={styles.jumpBtn} onClick={handleJump}>
            JUMP HERE
          </button>
          <a
            className={styles.closeBtn}
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            OPEN ON WIKIPEDIA ↗
          </a>
          <button className={styles.closeBtn} onClick={clearExpanded}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
