import styles from './DeepDive.module.css';

export default function DeepDive({ sections, wikiUrl }) {
  if (!sections || sections.length === 0) return null;
  return (
    <div>
      {sections.map((section) => (
        <div key={section.index} className={styles.section}>
          <span className={styles.arrow}>▶</span>
          <strong className={styles.heading}>{section.heading}</strong>
        </div>
      ))}
      {wikiUrl && (
        <div className={styles.source}>
          📖 Source: <a href={wikiUrl} target="_blank" rel="noopener noreferrer">{wikiUrl.replace('https://', '')}</a>
        </div>
      )}
    </div>
  );
}
