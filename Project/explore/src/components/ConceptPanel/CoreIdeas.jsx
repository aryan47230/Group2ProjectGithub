import styles from './CoreIdeas.module.css';

export default function CoreIdeas({ ideas }) {
  if (!ideas || ideas.length === 0) return null;
  return (
    <ul className={styles.list}>
      {ideas.map((idea, i) => (
        <li key={i} className={styles.item}>
          <span className={styles.icon}>{idea.icon || '💡'}</span>
          <div className={styles.text}>
            <strong>{idea.title}</strong>
            <p>{idea.description}</p>
            <span className={styles.explore}>→ Explore on map</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
