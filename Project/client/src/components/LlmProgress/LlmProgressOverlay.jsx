import { useEffect, useState } from 'react';
import { getLlmProgress, subscribeLlmProgress } from '../../utils/llmProgress';
import styles from './LlmProgressOverlay.module.css';

export default function LlmProgressOverlay() {
  const [state, setState] = useState(getLlmProgress);

  useEffect(() => subscribeLlmProgress(setState), []);

  if (state.phase === 'idle') return null;
  const pct = Math.round((state.progress || 0) * 100);

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.card}>
        <div className={styles.label}>
          {state.phase === 'loading' ? 'Browser model' : 'Generating'}
        </div>
        <p className={styles.text}>{state.text || 'Working…'}</p>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.pct}>{pct}%</div>
      </div>
    </div>
  );
}
