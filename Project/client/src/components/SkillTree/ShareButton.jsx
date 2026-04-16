import { useState, useRef, useEffect } from 'react';
import styles from './SkillTree.module.css';

export default function ShareButton({ topic, nodes, completedNodes }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function copyLink() {
    const url = `${window.location.origin}/?generate=${encodeURIComponent(topic)}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => { setCopied(false); setOpen(false); }, 1200);
    });
  }

  function exportJSON() {
    const data = {
      topic,
      exportedAt: new Date().toISOString(),
      nodes: nodes.map(n => ({
        ...n,
        completed: completedNodes.has(n.name),
      })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `skill-tree-${topic.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  }

  return (
    <div ref={ref} className={styles.shareWrap}>
      <button className={styles.shareBtn} onClick={() => setOpen(!open)} title="Share / Export">
        ⤤
      </button>
      {open && (
        <div className={styles.shareDropdown}>
          <button className={styles.shareOption} onClick={copyLink}>
            {copied ? '✓ Copied!' : 'Copy Link'}
          </button>
          <button className={styles.shareOption} onClick={exportJSON}>
            Export JSON
          </button>
        </div>
      )}
    </div>
  );
}
