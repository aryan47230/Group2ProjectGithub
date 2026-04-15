import { useAuth } from '../../context/AuthContext';
import styles from './ImportBanner.module.css';

export default function ImportBanner() {
  const { pendingImport, acceptImport, dismissImport } = useAuth();
  if (!pendingImport) return null;
  const { count } = pendingImport;
  return (
    <div className={styles.banner} role="status" aria-live="polite">
      <div className={styles.left}>
        <span className={styles.tag}>IMPORT</span>
        <p className={styles.message}>
          {count} local tree{count > 1 ? 's' : ''} found — sync to your account?
        </p>
      </div>
      <div className={styles.actions}>
        <button className={styles.yes} onClick={acceptImport}>Import</button>
        <button className={styles.no} onClick={dismissImport}>Dismiss</button>
      </div>
    </div>
  );
}
