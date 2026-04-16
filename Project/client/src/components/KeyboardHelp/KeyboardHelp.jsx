import { useState, useEffect, useCallback } from 'react';
import styles from './KeyboardHelp.module.css';

const EXPLORE_SHORTCUTS = [
  { key: 'Tab', desc: 'Cycle through graph nodes' },
  { key: 'Enter', desc: 'Preview focused node' },
  { key: 'Esc', desc: 'Close preview / overlay' },
  { key: 'Dbl-click', desc: 'Jump to concept' },
  { key: 'Drag', desc: 'Pan the graph' },
  { key: '/', desc: 'Focus search bar' },
  { key: '?', desc: 'Toggle this help' },
];

const SKILLTREE_SHORTCUTS = [
  { key: 'Click', desc: 'View node details' },
  { key: 'Esc', desc: 'Close detail panel' },
  { key: '?', desc: 'Toggle this help' },
];

export default function KeyboardHelp({ page = 'explore' }) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, toggle]);

  const shortcuts = page === 'explore' ? EXPLORE_SHORTCUTS : SKILLTREE_SHORTCUTS;

  return (
    <>
      <button className={styles.trigger} onClick={toggle} title="Keyboard shortcuts">
        ?
      </button>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.card} onClick={(e) => e.stopPropagation()}>
            <div className={styles.title}>Keyboard Shortcuts</div>
            <div className={styles.grid}>
              {shortcuts.map((s) => (
                <div key={s.key} className={styles.row}>
                  <span className={styles.key}>{s.key}</span>
                  <span className={styles.desc}>{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
