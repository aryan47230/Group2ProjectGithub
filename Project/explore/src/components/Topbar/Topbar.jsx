import { useState, useRef, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import { searchConcepts } from '../../utils/api';
import styles from './Topbar.module.css';

export default function Topbar() {
  const { trail, trailIndex, toggleTrail, toggleJourney, trailOpen, pickCuriosity, currentConcept } = useExplorer();
  const { jumpTo } = useExplorer();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [scanning, setScanning] = useState(false);
  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleInput(value) {
    setQuery(value);
    setScanning(true);
    setTimeout(() => setScanning(false), 1500);
    clearTimeout(debounceRef.current);
    if (value.trim().length < 2) { setResults([]); setShowResults(false); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await searchConcepts(value);
        setResults(res.slice(0, 6));
        setShowResults(true);
      } catch { setResults([]); }
    }, 300);
  }

  function handleSelect(title) {
    setQuery(title);
    setShowResults(false);
    jumpTo(title);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && query.trim()) {
      setShowResults(false);
      jumpTo(query.trim());
    }
  }

  // BUG-04 fix: clear search bar when concept changes via non-search navigation
  useEffect(() => {
    if (currentConcept) {
      setQuery('');
      setShowResults(false);
    }
  }, [currentConcept?.title]);

  const jumpCount = trailIndex + 1;

  return (
    <div className={styles.topbar}>
      <span className={styles.logo}>WIKI<span>LOOP</span></span>

      <div className={styles.searchArea} ref={searchRef}>
        <div className={`${styles.searchBar} ${scanning ? styles.scanning : ''}`}>
          <span className={styles.searchIcon}>/</span>
          <input
            value={query}
            onChange={(e) => handleInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="explore a concept..."
            className={styles.searchInput}
          />
        </div>
        {showResults && results.length > 0 && (
          <div className={styles.dropdown}>
            {results.map((r) => (
              <div key={r.title} className={styles.dropdownItem} onClick={() => handleSelect(r.title)}>
                <div className={styles.dropdownTitle}>{r.title}</div>
                <div className={styles.dropdownSnippet}>{r.snippet}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.right}>
        {jumpCount > 0 && (
          <div className={styles.jumpCount}>
            <span>{jumpCount}</span>
            <span className={styles.jumpCountLabel}>hops</span>
          </div>
        )}
        {currentConcept && (
          <button className={`${styles.btn} ${styles.btnCuriosity}`} onClick={pickCuriosity} title="Jump to a random unexplored node">
            RANDOM
          </button>
        )}
        <button className={`${styles.btn} ${styles.btnTrail} ${trailOpen ? styles.active : ''}`} onClick={toggleTrail}>
          TRAIL
        </button>
        <button className={`${styles.btn} ${styles.btnJourney}`} onClick={toggleJourney}>
          MAP
        </button>
      </div>
    </div>
  );
}
