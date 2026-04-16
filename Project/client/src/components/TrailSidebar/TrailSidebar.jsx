import { useExplorer } from '../../context/ExplorerContext';
import { assignCluster } from '../../utils/clusters';
import styles from './TrailSidebar.module.css';

export default function TrailSidebar() {
  const { trail, trailIndex, trailOpen, toggleTrail, goToIndex } = useExplorer();
  if (!trailOpen) return null;

  const startTime = trail.length > 0 ? trail[0].timestamp : Date.now();
  const elapsedMs = Date.now() - startTime;
  const elapsedMin = Math.max(1, Math.round(elapsedMs / 60000));
  const domains = new Set(trail.map((t) => assignCluster(t.categories || [])));

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.title}>Your Trail</div>
        <div className={styles.close} onClick={toggleTrail}>x</div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}><div className={styles.statVal}>{trail.length}</div><div className={styles.statLabel}>Jumps</div></div>
        <div className={styles.stat}><div className={styles.statVal}>{elapsedMin}m</div><div className={styles.statLabel}>Time</div></div>
        <div className={styles.stat}><div className={styles.statVal}>{domains.size}</div><div className={styles.statLabel}>Domains</div></div>
      </div>
      <div className={styles.trail}>
        {trail.map((entry, i) => {
          const isCurrent = i === trailIndex;
          return (
            <div key={`${entry.title}-${i}`} className={styles.item}>
              <div className={`${styles.dot} ${isCurrent ? styles.dotCurrent : styles.dotVisited}`}>{i + 1}</div>
              <div>
                <h4 className={styles.itemTitle}>{entry.title}</h4>
                <div className={styles.meta}>{isCurrent ? 'Currently exploring' : `${Math.round((Date.now() - entry.timestamp) / 60000)}m ago`}</div>
                {!isCurrent && <div className={styles.back} onClick={() => goToIndex(i)}>Jump here</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
