import { useAuth } from '../../context/AuthContext';
import styles from './ImportBanner.module.css';

export default function ImportBanner() {
  const { pendingImport, acceptImport, dismissImport } = useAuth();
  if (!pendingImport) return null;
  const { count } = pendingImport;
  return (
    <div className={styles.banner}>
      <p>You have {count} local tree{count > 1 ? 's' : ''}. Import to your account?</p>
      <div className={styles.actions}>
        <button className={styles.yes} onClick={acceptImport}>Import</button>
        <button className={styles.no} onClick={dismissImport}>No thanks</button>
      </div>
    </div>
  );
}
