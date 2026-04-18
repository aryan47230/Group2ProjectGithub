// Drop-in replacement for client/src/components/SkillTree/ShareButton.jsx
// Replaces the current minimal dropdown with a full share modal.
//
// Also add to client/src/utils/api.js:
//   apiShareTree, apiSendTree, apiGetSharedTree  (see api-share-patch.js)
//
// Also handle ?share= URL param in the root App/SkillTreeRoute:
//   const shareId = new URLSearchParams(location.search).get('share');
//   if (shareId) { const tree = await apiGetSharedTree(shareId); /* open read-only */ }

import { useState, useRef, useEffect } from 'react';
import { apiShareTree, apiSendTree } from '../../utils/api';
import styles from './SkillTree.module.css';

export default function ShareButton({ topic, nodes, completedNodes, loggedIn }) {
  const [open, setOpen]           = useState(false);
  const [linkUrl, setLinkUrl]     = useState('');
  const [linkCopied, setLinkCopied] = useState(false);
  const [linkLoading, setLinkLoading] = useState(false);
  const [linkError, setLinkError] = useState('');
  const [sendUser, setSendUser]   = useState('');
  const [sendStatus, setSendStatus] = useState('');
  const [sendError, setSendError] = useState('');
  const [sendLoading, setSendLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function openModal() {
    setLinkUrl('');
    setLinkCopied(false);
    setLinkError('');
    setSendUser('');
    setSendStatus('');
    setSendError('');
    setOpen(true);
  }

  async function generateLink() {
    setLinkError('');
    setLinkLoading(true);
    try {
      const shareId = await apiShareTree(topic);
      setLinkUrl(`${window.location.origin}/?share=${shareId}`);
    } catch (err) {
      setLinkError(err.message);
    } finally {
      setLinkLoading(false);
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(linkUrl).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  }

  async function sendToUser() {
    if (!sendUser.trim()) return;
    setSendError('');
    setSendStatus('');
    setSendLoading(true);
    try {
      await apiSendTree(topic, sendUser.trim());
      setSendStatus(`Sent to ${sendUser.trim()}!`);
      setSendUser('');
    } catch (err) {
      setSendError(err.message);
    } finally {
      setSendLoading(false);
    }
  }

  function exportJSON() {
    const payload = { topic, exportedAt: new Date().toISOString(), nodes: nodes.map(n => ({ ...n, completed: completedNodes.has(n.name) })) };
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    a.download = `skill-tree-${topic.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
  }

  function exportSVG() {
    const svgEl = document.getElementById('graph') || document.querySelector('svg');
    if (!svgEl) return;
    const style = `<style>
      .node-locked{opacity:.35} .edge{stroke:#4c3f7a;stroke-width:1.5}
      .node-emoji{font-size:26px;text-anchor:middle;dominant-baseline:middle}
      .node-label-below{fill:#e0e0e0;font-size:11px;text-anchor:middle;dominant-baseline:hanging}
      .level-badge{fill:#a78bfa;font-size:10px;font-weight:700;text-anchor:middle}
    </style>`;
    const content = svgEl.outerHTML
      .replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" style="background:#0c0e1a" `)
      .replace('>', `>${style}`);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type: 'image/svg+xml' }));
    a.download = `skill-tree-${topic.toLowerCase().replace(/\s+/g, '-')}.svg`;
    a.click();
  }

  return (
    <div ref={ref} className={styles.shareWrap}>
      <button className={styles.shareBtn} onClick={openModal} title="Share / Export">⤤</button>

      {open && (
        <div className={styles.shareModal}>
          <div className={styles.shareModalHeader}>
            <span className={styles.shareModalTitle}>Share &ldquo;{topic}&rdquo;</span>
            <button className={styles.shareModalClose} onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Shareable Link */}
          <div className={styles.shareSection}>
            <div className={styles.shareSectionLabel}>🔗 Shareable Link</div>
            <p className={styles.shareSectionDesc}>Anyone with the link can view this tree.</p>
            {!loggedIn && <p className={styles.shareAuthNote}>Sign in to generate a link.</p>}
            {loggedIn && !linkUrl && (
              <button className={styles.sharePrimaryBtn} onClick={generateLink} disabled={linkLoading}>
                {linkLoading ? 'Generating…' : 'Generate Link'}
              </button>
            )}
            {linkUrl && (
              <div className={styles.shareLinkRow}>
                <input className={styles.shareLinkInput} value={linkUrl} readOnly />
                <button className={styles.sharePrimaryBtn} onClick={copyLink}>
                  {linkCopied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            )}
            {linkError && <p className={styles.shareError}>{linkError}</p>}
          </div>

          {/* Share with User */}
          <div className={styles.shareSection}>
            <div className={styles.shareSectionLabel}>👤 Share with User</div>
            <p className={styles.shareSectionDesc}>Send a copy to another user&rsquo;s account.</p>
            {!loggedIn && <p className={styles.shareAuthNote}>Sign in to send to a user.</p>}
            {loggedIn && (
              <div className={styles.shareInputRow}>
                <input
                  className={styles.shareTextInput}
                  value={sendUser}
                  onChange={e => setSendUser(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendToUser()}
                  placeholder="Enter username"
                />
                <button className={styles.sharePrimaryBtn} onClick={sendToUser} disabled={sendLoading || !sendUser.trim()}>
                  {sendLoading ? '…' : 'Send'}
                </button>
              </div>
            )}
            {sendStatus && <p className={styles.shareSuccess}>{sendStatus}</p>}
            {sendError  && <p className={styles.shareError}>{sendError}</p>}
          </div>

          {/* Export */}
          <div className={styles.shareSection}>
            <div className={styles.shareSectionLabel}>💾 Export</div>
            <p className={styles.shareSectionDesc}>Download this tree to your device.</p>
            <div className={styles.shareExportRow}>
              <button className={styles.shareOutlineBtn} onClick={exportJSON}>Download JSON</button>
              <button className={styles.shareOutlineBtn} onClick={exportSVG}>Download SVG</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
