import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './AuthModal.module.css';

export default function AuthModal({ initialMode = 'login', onClose }) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState(initialMode);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  // Reset confirm when switching modes so a stale value never blocks sign-in.
  useEffect(() => {
    setConfirmPassword('');
  }, [mode]);

  const isRegister = mode === 'register';
  const passwordsMatch = !isRegister || password === confirmPassword;
  const canSubmit = username.trim() && password && passwordsMatch && !submitting;

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (isRegister && !passwordsMatch) {
      setError("Passwords don't match.");
      return;
    }
    setSubmitting(true);
    try {
      if (mode === 'login') await login(username.trim(), password);
      else await register(username.trim(), password);
      onClose();
    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Network error — is the server running?' : err.message);
    } finally {
      setSubmitting(false);
    }
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} data-mode={mode}>
        <div className={styles.modalHeader}>
          <span className={styles.eyebrow}>
            {mode === 'login' ? 'ACCESS' : 'JOIN'} · STG
          </span>
          <div className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tab} ${mode === 'login' ? styles.tabActive : ''}`}
              onClick={() => { setMode('login'); setError(''); }}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`${styles.tab} ${mode === 'register' ? styles.tabActive : ''}`}
              onClick={() => { setMode('register'); setError(''); }}
            >
              Sign Up
            </button>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="auth-username">Username</label>
          <input
            id="auth-username"
            ref={usernameRef}
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            type="password"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister && (
            <>
              <label htmlFor="auth-confirm">Confirm password</label>
              <input
                id="auth-confirm"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          )}
          {error && <p className={styles.error} role="alert">{error}</p>}
          {isRegister && confirmPassword && !passwordsMatch && !error && (
            <p className={styles.error} role="alert">Passwords don't match.</p>
          )}
          <button type="submit" className={styles.submit} disabled={!canSubmit}>
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <button type="button" className={styles.close} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
