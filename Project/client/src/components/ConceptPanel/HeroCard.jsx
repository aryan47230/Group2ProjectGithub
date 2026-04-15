import styles from './HeroCard.module.css';

export default function HeroCard({ concept }) {
  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        {concept.image ? (
          <img src={concept.image} alt={concept.title} className={styles.img} />
        ) : (
          <span className={styles.placeholder}>No image available</span>
        )}
        <div className={styles.imageOverlay} />
        <div className={styles.scanlines} />
        {concept.image && <span className={styles.scanText} key={concept.title}>SCANNING...</span>}
      </div>
      <div className={styles.body}>
        <div className={styles.category}>{concept.categories?.[0] || 'Concept'}</div>
        <h1 className={styles.title}>{concept.title}</h1>
        <p className={styles.summary}>{concept.summary}</p>
        <div className={styles.facts}>
          {(concept.facts || []).map((fact, i) => (
            <div key={i} className={styles.fact}>
              <span className={styles.factLabel}>{fact.label}</span>
              <span className={styles.factValue}>{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
