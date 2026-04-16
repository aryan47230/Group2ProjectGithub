import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSkillTree } from '../../context/SkillTreeContext';
import SavedTreesList from './SavedTreesList';
import styles from './SkillTree.module.css';

const SUGGESTIONS = [
  { category: 'Creative', topics: ['Guitar', 'Digital Art', 'Photography', 'Creative Writing', 'Music Production'] },
  { category: 'Tech', topics: ['Python', 'Machine Learning', 'Web Development', 'React', 'Data Science'] },
  { category: 'Science', topics: ['Quantum Physics', 'Organic Chemistry', 'Astronomy', 'Neuroscience'] },
  { category: 'Languages', topics: ['Japanese', 'Spanish', 'Mandarin Chinese', 'Sign Language'] },
  { category: 'Life Skills', topics: ['Cooking', 'Public Speaking', 'Personal Finance', 'Chess'] },
  { category: 'Fitness', topics: ['Calisthenics', 'Yoga', 'Rock Climbing', 'Swimming'] },
];

export default function PromptView({ hideExplore = false }) {
  const { generating, generateError, generateTree } = useSkillTree();
  const [topic, setTopic] = useState('');
  const [exploreTopic, setExploreTopic] = useState('');
  const [status, setStatus] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();
  const autoRan = useRef(false);

  const filteredSuggestions = topic.trim()
    ? SUGGESTIONS.map(cat => ({
        ...cat,
        topics: cat.topics.filter(t => t.toLowerCase().includes(topic.toLowerCase())),
      })).filter(cat => cat.topics.length > 0)
    : SUGGESTIONS;

  function selectSuggestion(t) {
    setTopic(t);
    setShowSuggestions(false);
    submitGenerate(t);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function submitGenerate(value) {
    const t = value.trim();
    if (!t) return;
    setStatus('Generating skill tree...');
    try {
      await generateTree(t);
      setStatus('');
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    submitGenerate(topic);
  }

  function handleExplore(e) {
    e.preventDefault();
    const q = exploreTopic.trim();
    if (q) navigate(`/explore?q=${encodeURIComponent(q)}`);
  }

  // Auto-generate from ?generate= param (used when redirected from a skill node)
  useEffect(() => {
    if (autoRan.current) return;
    const params = new URLSearchParams(window.location.search);
    const auto = params.get('generate');
    if (auto) {
      autoRan.current = true;
      window.history.replaceState({}, '', '/');
      setTopic(auto);
      submitGenerate(auto);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shownStatus = generateError && !status ? `Error: ${generateError}` : status;

  return (
    <main className={styles.promptView}>
      <div className={styles.dotGrid} aria-hidden="true" />

      <header className={styles.hero}>
        <span className={styles.eyebrow}>SKILL TREE GENERATOR · v1</span>
        <h1 className={styles.heading}>
          What do you want <span className={styles.headingItalic}>to learn</span>?
        </h1>
        <p className={styles.subtitle}>
          Type anything — a hobby, a language, a field. We'll chart a layered skill tree.
        </p>
      </header>

      <div className={styles.formWrap} ref={suggestionsRef}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <span className={styles.formIcon}>▸</span>
          <input
            className={styles.topicInput}
            type="text"
            placeholder="e.g. cooking, archery, guitar..."
            required
            value={topic}
            onChange={(e) => { setTopic(e.target.value); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
          />
          <button type="submit" className={styles.generateBtn} disabled={generating}>
            {generating ? 'Generating…' : 'Generate'}
          </button>
        </form>
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className={styles.suggestions}>
            {filteredSuggestions.map(cat => (
              <div key={cat.category} className={styles.suggestCat}>
                <div className={styles.suggestCatLabel}>{cat.category}</div>
                <div className={styles.suggestTopics}>
                  {cat.topics.map(t => (
                    <button key={t} className={styles.suggestPill} onClick={() => selectSuggestion(t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.status} aria-live="polite">{shownStatus}</div>

      {!hideExplore && (
        <>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerLabel}>OR USE WIKIHOPPER</span>
            <span className={styles.dividerLine} />
          </div>

          <form className={styles.exploreForm} onSubmit={handleExplore}>
            <input
              className={styles.exploreInput}
              type="text"
              placeholder="e.g. quantum mechanics, stoicism..."
              value={exploreTopic}
              onChange={(e) => setExploreTopic(e.target.value)}
            />
            <button type="submit" className={styles.exploreBtn}>Wikihopper →</button>
          </form>
        </>
      )}

      <SavedTreesList />
    </main>
  );
}
