import styles from './Timeline.module.css';

export default function Timeline({ events }) {
  if (!events || events.length === 0) return null;
  return (
    <div className={styles.timeline}>
      {events.map((event, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.dot} />
          <div className={styles.year}>{event.year}</div>
          <div className={styles.text}>{event.event}</div>
        </div>
      ))}
    </div>
  );
}
