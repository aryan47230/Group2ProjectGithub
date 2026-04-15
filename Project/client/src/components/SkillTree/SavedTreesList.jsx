import { useSkillTree } from '../../context/SkillTreeContext';
import styles from './SkillTree.module.css';

export default function SavedTreesList() {
  const { savedTrees, openTree, deleteTree } = useSkillTree();
  if (!savedTrees || savedTrees.length === 0) return null;

  return (
    <section className={styles.savedSection}>
      <h2 className={styles.savedHeading}>Your Trees</h2>
      <ul className={styles.savedList}>
        {savedTrees.map((tree) => {
          const done = tree.completed?.length || 0;
          const total = tree.nodes?.length || 0;
          const pct = total ? Math.round((done / total) * 100) : 0;
          return (
            <li key={tree.topic} className={styles.savedItem}>
              <div className={styles.savedInfo}>
                <span className={styles.savedTopic}>{tree.topic}</span>
                <span className={styles.savedProgress}>{done}/{total} complete</span>
              </div>
              <div className={styles.savedBarTrack}>
                <div className={styles.savedBarFill} style={{ width: `${pct}%` }} />
              </div>
              <div className={styles.savedActions}>
                <button className={styles.savedOpen} onClick={() => openTree(tree)}>Open</button>
                <button className={styles.savedDelete} onClick={() => deleteTree(tree.topic)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
