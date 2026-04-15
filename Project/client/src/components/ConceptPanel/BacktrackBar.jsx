import { useRef, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './BacktrackBar.module.css';

export default function BacktrackBar() {
  const { trail, trailIndex, goBack, goToIndex } = useExplorer();
  const trailRef = useRef(null);

  // Auto-scroll breadcrumb trail to show current concept
  useEffect(() => {
    if (trailRef.current) {
      trailRef.current.scrollLeft = trailRef.current.scrollWidth;
    }
  }, [trailIndex]);

  if (trail.length === 0) return null;
  const visibleTrail = trail.slice(0, trailIndex + 1);
  return (
    <div className={styles.bar}>
      <button className={`${styles.backBtn} ${trailIndex <= 0 ? styles.disabled : ''}`} onClick={goBack} disabled={trailIndex <= 0}>← Back</button>
      <div className={styles.trail} ref={trailRef}>
        {visibleTrail.map((entry, i) => (
          <span key={`${entry.title}-${i}`} className={styles.crumbWrap}>
            {i > 0 && <span className={styles.sep}>›</span>}
            <span className={`${styles.crumb} ${i === trailIndex ? styles.current : ''}`} onClick={() => i !== trailIndex && goToIndex(i)}>{entry.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
