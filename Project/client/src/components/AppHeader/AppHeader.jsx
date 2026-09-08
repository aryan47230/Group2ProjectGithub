import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  shouldUseBrowserLlm,
  webgpuSupported,
  writeWebgpuPref,
} from '../../utils/llmSettings';
import styles from './AppHeader.module.css';

export default function AppHeader({ onSignIn, onSignUp }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const isExplore = pathname.startsWith('/explore');
  const isSkillTree = !isExplore;
  const gpu = webgpuSupported();
  const [browserGen, setBrowserGen] = useState(() => shouldUseBrowserLlm());

  function toggleBrowserGen() {
    if (!gpu) return;
    const next = !browserGen;
    writeWebgpuPref(next);
    setBrowserGen(next);
  }

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandTag}>STG</span>
        <span className={styles.brandTitle}>
          Skill Tree <span className={styles.brandItalic}>Generator</span>
        </span>
        <span className={styles.brandChip}>v1</span>
      </div>

      <nav className={styles.tabs} aria-label="Primary">
        <Link
          to="/skill-tree"
          className={`${styles.tab} ${isSkillTree ? styles.tabActive : ''}`}
        >
          Skill Tree
        </Link>
        <Link
          to="/explore"
          className={`${styles.tab} ${isExplore ? styles.tabActive : ''}`}
        >
          Wikihopper
        </Link>
      </nav>

      <div className={styles.auth}>
        <label className={styles.gpuToggle} title={gpu ? 'Run generation on this device when WebGPU is available' : 'WebGPU not available — using the server'}> 
          <input
            type="checkbox"
            checked={browserGen}
            disabled={!gpu}
            onChange={toggleBrowserGen}
          />
          <span>Generate in browser (WebGPU)</span>
        </label>
        {user ? (
          <>
            <span className={styles.greeting}>@{user.username}</span>
            <button className={styles.btnGhost} onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button className={styles.btnGhost} onClick={onSignIn}>Sign In</button>
            <button className={styles.btnPill} onClick={onSignUp}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
}
