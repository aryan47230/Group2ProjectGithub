import { useEffect, useRef, useState } from 'react';
import { searchConcepts } from '../../utils/api';
import topbarStyles from '../Topbar/Topbar.module.css';

export default function ConceptSuggestions({
  query,
  onSelect,
  containerRef,
  className = '',
  style,
}) {
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef(null);
  const lastPickedRef = useRef(null);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    const q = (query || '').trim();
    if (q.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    if (q === lastPickedRef.current) {
      setResults([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await searchConcepts(q);
        setResults((res || []).slice(0, 6));
        setOpen(true);
      } catch {
        setResults([]);
        setOpen(false);
      }
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  useEffect(() => {
    if (!containerRef?.current) return;
    function onDoc(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [containerRef]);

  if (!open || results.length === 0) return null;
  return (
    <div className={`${topbarStyles.dropdown} ${className}`} style={style}>
      {results.map((r) => (
        <div
          key={r.title}
          className={topbarStyles.dropdownItem}
          onMouseDown={(e) => {
            e.preventDefault();
            lastPickedRef.current = r.title;
            clearTimeout(debounceRef.current);
            setResults([]);
            setOpen(false);
            onSelect(r.title);
          }}
        >
          <div className={topbarStyles.dropdownTitle}>{r.title}</div>
          {r.snippet && (
            <div className={topbarStyles.dropdownSnippet}>{r.snippet}</div>
          )}
        </div>
      ))}
    </div>
  );
}
