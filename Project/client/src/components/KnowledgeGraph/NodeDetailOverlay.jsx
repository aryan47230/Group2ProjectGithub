import { useExplorer } from '../../context/ExplorerContext';
import styles from './NodeDetailOverlay.module.css';

export default function NodeDetailOverlay() {
  const { expandedNode, detailLoading, clearExpanded, jumpTo } = useExplorer();

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

  return (
    <div className={styles.overlay} onClick={clearExpanded}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <div className={styles.category}>
            {expandedNode.relation?.toUpperCase() || expandedNode.type?.toUpperCase() || 'CONCEPT'}
          </div>
          <h2 className={styles.title}>{expandedNode.label || expandedNode.id}</h2>
        </div>

        <div className={styles.body}>
          {expandedNode.image && (
            <div className={styles.imageWrap}>
              <img src={expandedNode.image} alt={expandedNode.label} className={styles.image} />
            </div>
          )}

          {expandedNode.extract ? (
            <p className={styles.extract}>{expandedNode.extract}</p>
          ) : expandedNode.description ? (
            <p className={styles.extract}>{expandedNode.description}</p>
          ) : (
            <p className={styles.extract}>No detailed information available.</p>
          )}

          {expandedNode.summary && expandedNode.summary !== expandedNode.extract && (
            <p className={styles.summary}>{expandedNode.summary}</p>
          )}
        </div>

        <div className={styles.actions}>
          <button className={styles.jumpBtn} onClick={handleJump}>
            JUMP HERE
          </button>
          <button className={styles.closeBtn} onClick={clearExpanded}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
