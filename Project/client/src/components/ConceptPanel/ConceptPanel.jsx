import { useState, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import BacktrackBar from './BacktrackBar';
import HeroCard from './HeroCard';
import Layer from './Layer';
import DeepDive from './DeepDive';
import ConnectedConcepts from './ConnectedConcepts';
import styles from './ConceptPanel.module.css';

export default function ConceptPanel() {
  const { currentConcept, loading, error, enriching, enriched, enrich } = useExplorer();

  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (currentConcept) {
      setGlitch(true);
      const t = setTimeout(() => setGlitch(false), 300);
      return () => clearTimeout(t);
    }
  }, [currentConcept?.title]);

  if (!currentConcept && !loading) {
    return (
      <div className={styles.panel}>
        <div className={styles.empty}>
          <h2>Begin Exploring</h2>
          <p>Search for any concept to start</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.panel}>
        <div className={styles.empty}>
          <div className={styles.spinner} />
          <p>Exploring the knowledge map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.panel}>
        <div className={styles.empty}>
          <p className={styles.error}>Something went wrong: {error}</p>
        </div>
      </div>
    );
  }

  const c = currentConcept;

  return (
    <div className={`${styles.panel} ${glitch ? styles.panelGlitch : ''}`}>
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />
      <div className={styles.staggerIn} key={c.title}>
        <BacktrackBar />
        <HeroCard concept={c} />

        {/* Enrich button — calls Gemini to replace connections with curated picks */}
        <button
          className={`${styles.enrichBtn} ${enriched ? styles.enrichComplete : ''}`}
          onClick={enrich}
          disabled={enriching || enriched}
        >
          {enriching ? (
            <><span className={styles.enrichSpinner} /> Enriching...</>
          ) : enriched ? (
            'AI Enhanced'
          ) : (
            'Enrich with AI'
          )}
        </button>

        {/* Cross-link: generate a skill tree for this concept */}
        <a
          href={`/?generate=${encodeURIComponent(c.title)}`}
          className={styles.enrichBtn}
          style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}
        >
          Generate Skill Tree
        </a>

        {c.sections?.length > 0 && (
          <Layer title="Deep Dive" hint="Full Wikipedia sections">
            <DeepDive sections={c.sections} wikiUrl={c.wikiUrl} />
          </Layer>
        )}

        <ConnectedConcepts connections={c.connections} />
        <div style={{ height: 30 }} />
      </div>
    </div>
  );
}
