import { useExplorer } from '../../context/ExplorerContext';
import styles from './JourneyOverlay.module.css';

function assignCluster(categories = []) {
  const CLUSTER_KEYWORDS = {
    Science: ['physics', 'chemistry', 'biology', 'quantum', 'science', 'experiment', 'atom', 'molecule', 'evolution', 'genetics'],
    Technology: ['technology', 'computing', 'software', 'internet', 'engineering', 'computer', 'algorithm', 'digital', 'electrical'],
    Mathematics: ['mathematics', 'algebra', 'geometry', 'theorem', 'calculus', 'statistics', 'logic', 'number', 'equation'],
    History: ['history', 'war', 'century', 'ancient', 'empire', 'dynasty', 'civilization', 'revolution', 'medieval'],
    Philosophy: ['philosophy', 'ethics', 'logic', 'metaphysics', 'epistemology', 'consciousness', 'ontology', 'moral'],
    Art: ['art', 'music', 'literature', 'film', 'culture', 'painting', 'poetry', 'architecture', 'cinema'],
    Society: ['society', 'politics', 'economics', 'law', 'social', 'government', 'democracy', 'culture', 'religion'],
  };
  const text = categories.join(' ').toLowerCase();
  let best = 'Other';
  let bestScore = 0;
  for (const [cluster, keywords] of Object.entries(CLUSTER_KEYWORDS)) {
    const score = keywords.filter((kw) => text.includes(kw)).length;
    if (score > bestScore) { bestScore = score; best = cluster; }
  }
  return best;
}

export default function JourneyOverlay() {
  const { trail, journeyOpen, toggleJourney } = useExplorer();
  if (!journeyOpen || trail.length === 0) return null;

  const startTime = trail[0].timestamp;
  const elapsedMin = Math.max(1, Math.round((Date.now() - startTime) / 60000));
  const domains = new Set(trail.map((t) => assignCluster(t.categories || [])));

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && toggleJourney()}>
      <div className={styles.card}>
        <div className={styles.top}>
          <h2>Your Journey Map</h2>
          <p>Where curiosity took you today</p>
        </div>
        <div className={styles.graph}>
          {trail.map((entry, i) => {
            const isFirst = i === 0;
            const isLast = i === trail.length - 1;
            const abbrev = entry.title.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();
            return (
              <div key={`${entry.title}-${i}`} className={styles.pathWrap}>
                {i > 0 && <div className={styles.arrow}>→</div>}
                <div className={styles.node}>
                  <div className={`${styles.circle} ${isFirst ? styles.start : isLast ? styles.end : styles.mid}`}>{abbrev}</div>
                  <div className={styles.nodeLabel}>{entry.title}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.statsRow}>
          <div className={styles.stat}><div className={styles.statVal}>{trail.length}</div><div className={styles.statLabel}>Concepts</div></div>
          <div className={styles.stat}><div className={styles.statVal}>{elapsedMin}m</div><div className={styles.statLabel}>Time</div></div>
          <div className={styles.stat}><div className={styles.statVal}>{domains.size}</div><div className={styles.statLabel}>Domains</div></div>
        </div>
        <button className={styles.closeBtn} onClick={toggleJourney}>Close</button>
      </div>
    </div>
  );
}
