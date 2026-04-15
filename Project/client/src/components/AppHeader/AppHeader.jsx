import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './AppHeader.module.css';

export default function AppHeader({ onSignIn, onSignUp }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const isExplore = pathname.startsWith('/explore');

  return (
    <header className={styles.header}>
      <span className={styles.logo}>Skill Tree Generator</span>
      <nav className={styles.tabs}>
        <Link to="/" className={`${styles.tab} ${!isExplore ? styles.tabActive : ''}`}>Skill Tree</Link>
        <Link to="/explore" className={`${styles.tab} ${isExplore ? styles.tabActive : ''}`}>Explore</Link>
      </nav>
      <div className={styles.auth}>
        {user ? (
          <>
            <span className={styles.greeting}>Hi, {user.username}</span>
            <button className={styles.btnGhost} onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button className={styles.btn} onClick={onSignIn}>Sign In</button>
            <button className={`${styles.btn} ${styles.btnOutline}`} onClick={onSignUp}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
}
