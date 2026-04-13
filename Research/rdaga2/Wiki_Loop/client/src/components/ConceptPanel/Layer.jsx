import { useState } from 'react';
import styles from './Layer.module.css';

export default function Layer({ title, hint, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`${styles.layer} ${open ? styles.open : ''}`}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          {hint && <div className={styles.hint}>{hint}</div>}
        </div>
        <span className={styles.arrow}>{open ? '−' : '+'}</span>
      </div>
      {open && <div className={styles.body}>{children}</div>}
    </div>
  );
}
